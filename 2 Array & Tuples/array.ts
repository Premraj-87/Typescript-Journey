// {
//   let nums: number[] = [1, 2, 3];
//   nums.push(4);
//   nums.push(10);
//   console.log(nums);
// }

// {
//   let names: string[] = ["Prem", "Raj", "Amit"];
//   console.log(names);
// }
// {
//     let flags:boolean[]=[true,false,true]
//     console.log(flags);
// }

// //* Mixed Array
//  {let data:(string | number)[]=[1,"Prem",20];
//  console.log(data)
//  }

//  {
//     let data: Array<string | number> = [1, "Hello"];
//     console.log(data)
//  }
// {

//     let names:Array<string>=["Prem","Raj"];
//     console.log(names)
// }

// //* Generic Array with Union
// {

//     let data:Array<string | number> =[
//        "prem",21,"Raj"
//     ]
//     console.log(data)
// }

//* 3. Tuples 
// {
//     let user: [number, string, boolean];
//     user = [1, "Prem", true];
//     console.log(user[0]); // Prem
// console.log(user[1]); // 21
// }
// {
//     type Employee = [
//     string,
//     number?,
//     boolean?
// ];

// let emp: Employee = [
//     "Prem",
//     50000,
//     true
// ];

// console.log(emp)
// }

// {
//     let user: [string, ...number[]];

// user = ["Prem", 1, 2, 3, 4];
// console.log(user)
// }

//* Destructuring tuple
{
 let user: [string, number] =
    ["Prem", 21];

const [name, age] = user;

console.log(name);
console.log(age);   
}