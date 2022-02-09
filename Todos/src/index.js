import { fetchTodos } from "./api.js";
import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-text-input');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todo-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false
  });

  containerEl.prepend(todoRowEl);
});

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => {
//     res.json()
//       .then((todos) => {
//         console.log(todos);
//       })
//       .catch((err) => {
//       })
//   })
//   .catch((err) => {
//   })

fetchTodos()
  .then((todos) => {
    for (const t of todos) {
      const todoRowEl = createTodoRow(t);
      containerEl.prepend(todoRowEl);
    }
  })
  .catch((err) => {

  })
