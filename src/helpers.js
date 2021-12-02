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

export default setCompleted;