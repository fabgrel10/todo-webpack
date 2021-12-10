import { mapTasks, setCompleted } from './helpers/helpers';
import { addTask, editTask, removeTask } from './modules/crud';
import './scss/main.scss';

let allTasksArray = [];

if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify(allTasksArray));
}

const tasksContainer = document.getElementById('render-tasks');
const addNewTask = document.getElementById('add-task-form');
const clearAllIcon = document.querySelector('.fa-sync');
const clearCompletedButton = document.getElementById('clear-completed');
const addTaskIcon = document.querySelector('.fa-level-down-alt');
let taskIcons = [];

const renderTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  tasksContainer.innerHTML = mapTasks(tasks);

  const completeFalse = document.querySelectorAll('.fa-square');
  const completeTrue = document.querySelectorAll('.fa-check-square');
  const removeTaskIcons = document.querySelectorAll('.fa-trash-alt');
  const taskDescriptions = document.querySelectorAll('.task-description');

  taskIcons = [...completeFalse, ...completeTrue];

  taskIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const { id } = e.target.dataset;
      const completed = setCompleted(id, tasks);
      if (completed) {
        e.target.classList.remove('fa-square');
        e.target.classList.add('fa-check-square');
        e.target.nextElementSibling.classList.add('task-completed');
      } else {
        e.target.classList.remove('fa-check-square');
        e.target.classList.add('fa-square');
        e.target.nextElementSibling.classList.remove('task-completed');
      }
    });
  });

  removeTaskIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      removeTask(e, tasks);
    });
  });

  taskDescriptions.forEach((description) => {
    description.addEventListener('change', (e) => {
      editTask(e, tasks);
    });
  });
};

const handleNewTask = (event) => {
  allTasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  addTask(event, allTasksArray);
  renderTasks();
};

const clearCompleted = () => {
  allTasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  const render = allTasksArray.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(render));
  renderTasks();
};

const clearAll = () => {
  allTasksArray = [];
  localStorage.setItem('tasks', JSON.stringify(allTasksArray));
  renderTasks();
};

addNewTask.addEventListener('submit', (e) => handleNewTask(e));
addTaskIcon.addEventListener('submit', (e) => handleNewTask(e));

clearAllIcon.addEventListener('click', clearAll);
clearCompletedButton.addEventListener('click', clearCompleted);

window.onload = renderTasks();
