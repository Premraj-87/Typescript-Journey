"use strict";
function greet(name = "Guest") {
    console.log(name);
}
greet("ok");
function power(num, exponent = 2) {
    return num ** exponent;
}
console.log(power(5));
