/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoRow(todo) {
  const todoRowEl = document.createElement('div');

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  todoRowEl.append(spanEl);

  return todoRowEl;
}
