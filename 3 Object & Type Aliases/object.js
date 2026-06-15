"use strict";
//* JavaScript
// const person = {
//     name:"Prem",
//     age:20
// }
// console.log(person)
//* TypeScript
// {
//     let person:{
//         name:string;
//         age:number;
//     };
//     person={
//         name:"Prem",
//         age:20
//     }
//     console.log(person)
// }
//* Practice 1
// {
// let user:{
//     name:string;
//     age:number;
// };
// user ={
//     name:"Rahul",
//     age:25
// }
// console.log(user)
// }
//* 2. Nested Obejcts 
// {
//     let user:{
//         name:string;
//         address:{
//             city:string;
//             pincode:number;
//         };
//     };
//     user={
//         name:"Prem",
//         address:{
//             city:"Bhagalpur",
//             pincode:812001
//         }
//     };
//     console.log(user)
// }
//* Practice 2
// {
//     let student:{
//         name:string;
//         age:number;
//         address:{
//             city:string;
//             state:string;
//         };
//     };
// }
//* 3. Type Alias 
// {
//   type User={
//     name:string;
//     age:number;
//   };
//   let user1: User ={
//     name:"Prem",
//     age:20
//   };
//   let user2: User ={
//     name:"Rahul",
//     age:25
//   }
//   console.log(user1,user2)
// }
//* Real World Example 
// {
//     type Product ={
//         title:string;
//         price:number
//     };
//     const product:Product={
//         title:"Mouse",
//         price:500
//     }
//     console.log(product);
// }
//* Readonly Properties
//  {
//     type User ={
//         readonly id:number;
//         name:string;
//     }
//     const user:User ={
//         id:1,
//         name:"Prem"
//     }
//     console.log(user)
//  }
//* Practice 5 
{
    const stall = {
        id: 1,
        title: "Rain is good",
        author: "Prem"
    };
    console.log(stall);
}
