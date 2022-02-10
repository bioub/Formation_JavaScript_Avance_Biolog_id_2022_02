// export function fetchTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
// }

export async function fetchTodos() {
  const res = await fetch('http://localhost:3000/todos');
  return await res.json();
}

// Exercice
// Créer une fonction postTodo qui prend en paramètre une todo
// au format {title: 'ABC', completed: false}
// Cette fonction doit appeler via fetch (voir la doc sur MDN)
// l'url http://localhost:3000/todos en POST
// et ajouter l'entête de requete Content-type: application/json
// et le body doit être la todo en JSON

// Appeler cette fonction au submit du formulaire
