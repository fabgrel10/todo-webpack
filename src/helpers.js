const mapTasks = (tasks) => tasks.map((task) => {
  if (task.completed) {
    return `
      <div class="task-container" id=${task.id}>
        <i class="far fa-check-square" data-id=${task.id}></i>
        <li class="task-item task-completed">
          ${task.description}
        </li>
        <i class="fas fa-trash-alt" id="delete-task-icon" data-id=${task.id}></i>
      </div>
      `;
  }
  return `
    <div class="task-container" id=${task.id}>
      <i class="far fa-square" data-id=${task.id}></i>
      <li class="task-item">
        ${task.description}
      </li>
      <button id="delete-icon-button">
        <i class="fas fa-trash-alt" id="delete-task-icon"></i>
      </button>
    </div>
  `;
}).join('');

const setCompleted = (e, tasks) => {
  const { id } = e.target.dataset;
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  if (task.completed) {
    e.target.classList.remove('fa-square');
    e.target.classList.add('fa-check-square');
    e.target.nextElementSibling.classList.add('task-completed');
  } else {
    e.target.classList.remove('fa-check-square');
    e.target.classList.add('fa-square');
    e.target.nextElementSibling.classList.remove('task-completed');
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { mapTasks, setCompleted };