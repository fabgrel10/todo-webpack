import { nanoid } from 'nanoid';
import setCompleted from './helpers';
import './scss/main.scss';

let todosStorage = [];
if (!localStorage.getItem('todos')) {
  localStorage.setItem('todos', JSON.stringify(todosStorage));
}

const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo-form');
const clearButton = document.getElementById('clear-button');
const clearIcon = document.querySelector('.fa-sync');
const addTodoIcon = document.querySelector('.fa-long-arrow-alt-left');
let todoIcons = [];

const renderTodos = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));

  todoList.innerHTML = todos.map((todo) => {
    if (todo.completed) {
      return `
      <div class="todo-container" id=${todo.id}>

        <i class="far fa-check-square" data-id=${todo.id}></i>
        <li class="todo-item completed-todo">
          ${todo.description}
        </li>
      </div>
      `;
    }
    return `
    <div class="todo-container" id=${todo.id}>

    <i class="far fa-square" data-id=${todo.id}></i>
    <li class="todo-item">
      ${todo.description}
    </li>
  </div>
  `;
  }).join('');

  const faSquareIcons = document.querySelectorAll('.fa-square');
  const faCheckSquareIcons = document.querySelectorAll('.fa-check-square');

  todoIcons = [...faSquareIcons, ...faCheckSquareIcons];

  todoIcons.forEach((todoIcon) => {
    todoIcon.addEventListener('click', (e) => {
      setCompleted(e, todos);
    });
  });
};

const addTodoEvent = (event) => {
  todosStorage = JSON.parse(localStorage.getItem('todos')) || [];
  event.preventDefault();
  const newTodo = {
    description: event.target[0].value,
    completed: false,
    id: nanoid(5),
  };
  todosStorage.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todosStorage));
  event.target[0].value = '';
  renderTodos();
};

const clearAllCompleted = () => {
  window.localStorage.clear();
  todoList.innerHTML = '';
  renderTodos();
};

addTodoInput.addEventListener('submit', (e) => addTodoEvent(e));
addTodoIcon.addEventListener('submit', (e) => addTodoEvent(e));

clearButton.addEventListener('click', clearAllCompleted);
clearIcon.addEventListener('click', clearAllCompleted);

window.onload = renderTodos();
