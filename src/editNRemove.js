const editTask = () => {
};

const removeTask = (e, tasks) => {
  const taskId = e.target.parentNode.parentNode.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
  e.target.parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { editTask, removeTask };