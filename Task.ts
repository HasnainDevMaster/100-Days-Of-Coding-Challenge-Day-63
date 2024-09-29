// 100 Days Of Coding Challenge!

/* Day-63 Task:
Learn about TypeScript types by using the following guide and coding along with the examples provided in it:

Multiple Types in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-63/TS-Types/README.md */

//-----------------------------------------------------------------------------------------------------------------

/* 

* TypeScript Types

* Built-in Types:
TypeScript extends JavaScript’s built-in types (numbers, strings, booleans, null, undefined, and objects)
by introducing additional types like 'any', 'unknown', 'never', 'enum', and 'tuple'.
These new types provide a more versatile and robust type system for developers.*/

// Example:

// Boolean type
let isDone: boolean = false;

// Number type
let count: number = 42;

// String type
let personName: string = "Asharib";

// Tuple type: an array with fixed types and length
let tuple: [number, string] = [1, "TypeScript"];

// Enum type: a way to define a set of named constants
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green;

//-------------------------------------------------------------------------------------------------------------------

/* 

* Type Annotations:
Type annotations in TypeScript are used to explicitly specify the type of variables, functions,
or other entities in your code. This helps the TypeScript compiler understand and enforce the intended types,
making your code more robust and maintainable. Annotations are added using a colon (:) followed by the desired type.*/

// Example:

// Function with type annotations for parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Variable with type annotation
let age: number = 25;

console.log(greet("Daniel")); // Output: Hello, Daniel!
console.log("Age:", age); // Output: Age: 25

//------------------------------------------------------------------------------------------------------------------------

/*

* Dynamic Type Determination:
TypeScript can infer types dynamically based on variable declarations. While this reduces the need for explicit type annotations,
relying solely on dynamic type inference is not recommended. Explicit type annotations help maintain code clarity and prevent unintended issues.*/

// Example:

// TypeScript infers the type as string
let message = "Hello, world!";

// TypeScript infers the type as number
let total = 100;

console.log(message); // Output: Hello, world!
console.log("Total:", total); // Output: Total: 100

//--------------------------------------------------------------------------------------------------------------------------

/* 

* Any Type:
The any type allows a variable to hold any type of value, effectively disabling type checking for that variable.
While useful in certain scenarios, overusing the any type can lead to loss of type safety, reduced code reliability, maintenance challenges,
and interference with tooling. It’s generally advised to avoid using any whenever possible to maintain the benefits of TypeScript’s type system.*/

// Example:

// Variable with 'any' type can hold any value
let myVariable: any = 42;
myVariable = "Hello, TypeScript";
myVariable = true;

console.log(myVariable); // Output: true
