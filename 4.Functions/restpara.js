"use strict";
// function sum(...nums:number[]){
// }
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));
