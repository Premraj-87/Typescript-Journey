function greet(name: string = "Guest") {
  console.log(name);
}

greet("ok");

function power(num: number, exponent: number = 2) {
  return num ** exponent;
}
console.log(power(5));