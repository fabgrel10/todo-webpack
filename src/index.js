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

todoList.innerHTML = todos.map((todo) => `
  <li class="todo-item">
  ${todo.description}
  </li>
`).join('');
