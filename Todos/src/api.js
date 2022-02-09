// export function fetchTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
// }

export async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await res.json();
}
