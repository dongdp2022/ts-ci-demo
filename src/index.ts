export function sum(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

console.log('Hello TS CI Demo, sum(2,3) =', sum(2, 3));

// src/math-copy.ts
export function add(a: number, b: number): number {
  return a + b; // duplicate với sum
}

export function minus(a: number, b: number): number {
  return a - b; // duplicate với sub
}

// export function test_a() {
//   return 100;
// }