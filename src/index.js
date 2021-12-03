import { nanoid } from 'nanoid';
import { mapTasks, setCompleted } from './helpers';
import { editTask, removeTask } from './editNRemove';
import './scss/main.scss';

let taskArray = [];
if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

const tasksContainer = document.getElementById('render-tasks');
const addTask = document.getElementById('add-task-form');
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
      setCompleted(e, tasks);
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
  taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
  event.preventDefault();
  const task = {
    description: event.target[0].value,
    completed: false,
    id: nanoid(5),
  };
  if (task.description === '') {
    return;
  }
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  event.target[0].value = '';
  renderTasks();
};

const clearCompleted = () => {
  taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
  const render = taskArray.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(render));
  renderTasks();
};

const clearAll = () => {
  taskArray = [];
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  renderTasks();
};

addTask.addEventListener('submit', (e) => handleNewTask(e));
addTaskIcon.addEventListener('submit', (e) => handleNewTask(e));

clearAllIcon.addEventListener('click', clearAll);
clearCompletedButton.addEventListener('click', clearCompleted);

window.onload = renderTasks();
