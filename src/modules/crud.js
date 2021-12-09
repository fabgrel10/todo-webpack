import { nanoid } from 'nanoid';

const addTask = (event, tasks) => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  event.preventDefault();
  const task = {
    description: event.target[0].value,
    completed: false,
    id: nanoid(5),
  };
  if (task.description === '') {
    return;
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  event.target[0].value = '';
};

const editTask = (e, tasks) => {
  const taskId = e.target.parentNode.parentNode.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].description = e.target.value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const removeTask = (e, tasks) => {
  const taskId = e.target.parentNode.parentNode.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
  e.target.parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { addTask, editTask, removeTask };
