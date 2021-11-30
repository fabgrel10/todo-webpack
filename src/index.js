import './scss/main.scss';

const todos = [
  {
    description: 'Wash the dishes',
    completed: false,
    id: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    id: 1,
  },
];

const todoList = document.getElementById('todo-list');
const addTodoForm = document.getElementById('add-todo-form');
const clearButton = document.getElementById('clear-button');

const renderTodos = () => {
  todoList.innerHTML = todos.map((todo) => `
  <div class="todo-item-container">
    <i class="far fa-square"></i>
    <li class="todo-item">
      ${todo.description}
    </li>
  </div>
  `).join('');
};

const addTodoEvent = (event) => {
  event.preventDefault();
  const newTodo = {
    description: event.target[0].value,
    completed: false,
    id: todos.length,
  };
  todos.push(newTodo);
  event.target[0].value = '';
  renderTodos();
};

addTodoForm.addEventListener('submit', (e) => addTodoEvent(e));

clearButton.addEventListener('click', () => {
  todos.splice(0, todos.length);
  renderTodos();
});

window.onload = () => {
  renderTodos();
};
