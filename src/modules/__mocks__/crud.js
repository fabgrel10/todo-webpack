/* eslint-disable consistent-return */
const tasks = [];

const addTask = (description) => {
  const task = {
    description,
    completed: false,
    id: tasks.length,
  };
  if (task.description === '') {
    return false;
  }
  tasks.push(task);
};

const removeTask = (taskId) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
};

const returnAllList = () => tasks;

export { addTask, removeTask, returnAllList };
