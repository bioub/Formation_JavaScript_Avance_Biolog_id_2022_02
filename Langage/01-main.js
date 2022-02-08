import { hello } from "./01-hello.js";

const names = ["Romain", "Grégoire"];

for (const n of names) {
  console.log(hello(n));
}
