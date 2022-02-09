const obj = {
  a: 'a',
  b: 'b',
};

const handler = {
  mapping: {
    c: 'a',
    d: 'b',
  },
  get(target, prop, receiver) {
    const oldProp = this.mapping[prop];
    return target[oldProp];
  },
  has(target, prop) {
    return this.mapping[prop] !== undefined;
  },
  ownKeys() {
    return Object.keys(this.mapping); // ['c', 'd']
  },
  getOwnPropertyDescriptor(target, prop) {
    console.log(prop)
    const oldProp = this.mapping[prop];
    const value = target[oldProp];
    return value ? {
      value, // value: value
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
}

const proxy = new Proxy(obj, handler);

console.log(proxy.c); // a
console.log(proxy.d); // b

console.log(JSON.stringify(proxy)); // {"c": "a", "d": "b"}
