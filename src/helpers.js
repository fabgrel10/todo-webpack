const setCompleted = (e, todos) => {
  const { id } = e.target.dataset;
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  if (todo.completed) {
    e.target.classList.remove('fa-square');
    e.target.classList.add('fa-check-square');
    e.target.nextElementSibling.classList.add('completed-todo');
  } else {
    e.target.classList.remove('fa-check-square');
    e.target.classList.add('fa-square');
    e.target.nextElementSibling.classList.remove('completed-todo');
  }
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default setCompleted;