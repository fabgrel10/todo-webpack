/* eslint-disable consistent-return */
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

const editTask = (e, tasks) => {
  const taskId = e.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].description = e.target.value;
};

const removeTask = (taskId) => {
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  tasks.splice(taskIndex, 1);
};

const localStorage = () => tasks;

export {
  addTask, editTask, removeTask, localStorage,
};
