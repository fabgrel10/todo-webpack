const tasks = [
  {
    description: 'Task 1',
    completed: false,
    id: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    id: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    id: 3,
  },
];

const mapTasks = (t) => t.map((task) => {
  if (task.completed) {
    return `
      <div class="task-container" id=${task.id}>
        <i class="far fa-check-square" data-id=${task.id}></i>
        <li class="task-item task-completed">
          <input type="text" class="task-description" value="${task.description}">
        </li>
        <button id="delete-icon-button">
          <i class="fas fa-trash-alt" id="delete-task-icon" data-id=${task.id}></i>
        </button>
      </div>
      `;
  }
  return `
    <div class="task-container" id=${task.id}>
      <i class="far fa-square" data-id=${task.id}></i>
      <li class="task-item">
        <input type="text" class="task-description" value="${task.description}">
      </li>
      <button id="delete-icon-button">
        <i class="fas fa-trash-alt" id="delete-task-icon" data-id=${task.id}></i>
      </button>
    </div>
  `;
}).join('');

const setCompleted = (e) => {
  const { id } = e.id;
  const task = tasks.find((task) => task.id === id);
  if (e.completed) {
    return 'task-completed';
  } else {
    return;
  }
};

const clearAllCompleted = () => {
  const completedTasks = tasks.filter((task) => task.completed);
  return completedTasks
};


const localStorage = () => tasks;

export { mapTasks, setCompleted, localStorage, clearAllCompleted };