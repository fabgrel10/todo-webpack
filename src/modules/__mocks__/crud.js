const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      console.log(store);
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const addTask = (newTask, tasks) => {
  const task = {
    description: newTask,
    completed: false,
    id: 1,
  };
  if (task.description === '') {
    return;
  }
  tasks.push(task);
  localStorageMock.setItem('tasks', tasks);
  newTask = '';
};

const editTask = (e, tasks) => {
  const taskId = e.target.parentNode.parentNode.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].description = e.target.value;
  localStorageMock.setItem('tasks', JSON.stringify(tasks));
};

const removeTask = (e, tasks) => {
  const taskId = e.target.parentNode.parentNode.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks.splice(taskIndex, 1);
  e.target.parentNode.parentNode.remove();
  localStorageMock.setItem('tasks', JSON.stringify(tasks));
};

export {
  addTask, editTask, removeTask, localStorageMock,
};