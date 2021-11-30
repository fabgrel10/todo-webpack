import { nanoid } from 'nanoid';
import setCompleted from './helpers/statusUpdates';
import './scss/main.scss';

const todos = [
  // {
  //   description: 'Wash the dishes',
  //   completed: false,
  //   id: 0,
  // },
  // {
  //   description: 'Complete To Do list project',
  //   completed: false,
  //   id: 1,
  // },
];

const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo-form');
const clearButton = document.getElementById('clear-button');
const clearIcon = document.querySelector('.fa-sync');
const addTodoIcon = document.querySelector('.fa-long-arrow-alt-left');

const renderTodos = () => {
  todoList.innerHTML = todos.map((todo) => `
  <div class="todo-container" id=${todo.id}>
    <i class="far fa-square" data-id=${todo.id}></i>
    <li class="todo-item">
      ${todo.description}
    </li>
  </div>
  `).join('');

  const todoIcons = document.querySelectorAll('.fa-square');

  todoIcons.forEach((todoIcon) => {
    todoIcon.addEventListener('click', (e) => {
      setCompleted(e, todos);
    });
  });
};

const addTodoEvent = (event) => {
  event.preventDefault();
  const newTodo = {
    description: event.target[0].value,
    completed: false,
    id: nanoid(5),
  };
  todos.push(newTodo);
  event.target[0].value = '';
  renderTodos();
};

const clearAllCompleted = () => {
  todos.splice(0, todos.length);
  renderTodos();
};

addTodoInput.addEventListener('submit', (e) => addTodoEvent(e));
addTodoIcon.addEventListener('submit', (e) => addTodoEvent(e));

clearButton.addEventListener('click', clearAllCompleted);
clearIcon.addEventListener('click', clearAllCompleted);

window.onload = () => {
  renderTodos();
};
