import './scss/main.scss';

const todos = [
  {
    description: 'Buy some apples',
    completed: false,
    id: 0,
  },
  {
    description: 'Take the dog for a walk',
    completed: false,
    id: 1,
  },
  {
    description: 'Study JavaScript',
    completed: false,
    id: 2,
  },
];

const todoList = document.getElementById('todo-list');
const addTodoForm = document.getElementById('add-todo-form');

const renderTodos = () => {
  todoList.innerHTML = todos.map((todo) => `
  <div class="todo-item-container">
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

window.onload = () => {
  renderTodos();
};
