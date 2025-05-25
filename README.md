# 📘 TypeScript Mastery Project

This project is a structured learning path through key TypeScript concepts. Each folder (`task_0` to `task_5`) contains TypeScript code illustrating foundational topics — from basic types to advanced features like namespaces, ambient declarations, and nominal typing.

---

## 📁 Folder Structure

```
.
├── task_0
├── task_1
├── task_2
├── task_3
├── task_4
└── task_5
```

---

## 📚 Concepts Covered

### Basic Types

* Learn TypeScript’s primitive types: `string`, `number`, `boolean`, arrays, and union types.
* Understand type annotations and how they help prevent runtime errors.

```ts
let name: string = "Yusuf";
let age: number = 30;
let tags: string[] = ["typescript", "frontend"];
```

---

### `task_1`: Interfaces, Classes & Functions

* Create and use interfaces to define object shapes.
* Build classes with constructors, methods, and access modifiers (`public`, `private`, etc).
* Type your functions using parameter and return types.

```ts
interface Student {
  name: string;
  level: number;
}

class StudentClass implements Student {
  constructor(public name: string, public level: number) {}
}
```

---

### DOM Manipulation

* Select and interact with HTML elements using TypeScript.
* Add event listeners with full type safety.

```ts
const button = document.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", () => alert("Clicked!"));
```

---

### Generics

* Create functions and classes that work with any data type while maintaining type safety.
* Reuse logic without losing flexibility.

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

### Namespaces & Declaration Merging

* Organize your code using `namespace`.
* Learn how to merge interface declarations (declaration merging).

```ts
namespace Utils {
  export function greet(name: string): string {
    return `Hello, ${name}`;
  }
}
```

```ts
interface Box {
  width: number;
}
interface Box {
  height: number;
}
```

---

### Advanced Topics

#### ✅ Ambient Namespaces

* Describe external libraries using `declare` and `namespace`.

```ts
declare namespace $ {
  function ajax(url: string): void;
}
```

#### Nominal Typing

* Enforce stricter type checks using branding.

```ts
type USD = { _brand: "USD"; amount: number };
type EUR = { _brand: "EUR"; amount: number };
```

---

## How to Run

1. Clone the repository
2. Install TypeScript if you haven’t already:

```bash
npm install -g typescript
```

3. Compile any task file:

```bash
tsc task_3/main.ts
```

4. Open the generated `.js` file in a browser or run it using Node.js.

---

## Final Note

This repository is a step-by-step guide to mastering core TypeScript concepts. Each folder is isolated and builds on your understanding. Feel free to explore and experiment with the code to deepen your learning.
