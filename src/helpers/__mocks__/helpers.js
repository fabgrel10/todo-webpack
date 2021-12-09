const mapTasks = (tasks) => tasks.map((task) => {
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

export default mapTasks;