// let data :unknown ="Hello"
// if(typeof data=== "string"){
//     console.log(data.toUpperCase())
// }

// function square(num: number): number {
//   return num * num;
// }
// console.log(square(5))

// function greet(name:string):void{
//     console.log(`Hello ${name}`)
// }
// greet("Prem Raj Anand");

function throwError(msg: string): never {
  throw new Error(msg);
}

function processData(data: string) {
  if (!data) {
    throwError("Data is missing!");
  }
  console.log("Processing:", data);
}

processData(""); 
// Output: Uncaught Error: Data is missing!
