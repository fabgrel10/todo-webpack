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
const clearButton = document.getElementById('clear-completed');
const clearCompletedIcon = document.querySelector('.fa-sync');
const addTaskIcon = document.querySelector('.fa-level-down-alt');
let taskIcons = [];

const renderTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  tasksContainer.innerHTML = mapTasks(tasks);

  const completeFalse = document.querySelectorAll('.fa-square');
  const completeTrue = document.querySelectorAll('.fa-check-square');
  const removeTaskIcons = document.querySelectorAll('.fa-trash-alt');

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
};

const handleNewTask = (event) => {
  taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
  event.preventDefault();
  const task = {
    description: event.target[0].value,
    completed: false,
    id: nanoid(5),
  };
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  event.target[0].value = '';
  renderTasks();
};

const clearAllCompleted = () => {
  taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
  const render = taskArray.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(render));
  renderTasks();
};

addTask.addEventListener('submit', (e) => handleNewTask(e));
addTaskIcon.addEventListener('submit', (e) => handleNewTask(e));

clearButton.addEventListener('click', clearAllCompleted);
clearCompletedIcon.addEventListener('click', clearAllCompleted);

window.onload = renderTasks();
