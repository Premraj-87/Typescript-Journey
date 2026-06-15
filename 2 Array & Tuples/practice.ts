//* Practice Questions
//!Create number array:
//* [10,20,30,40]

// {
//     let num:number[]=[10,20,30,40];
//     num.push(50)
//     console.log(num)
// }

//! 2. Create String array and print all name using loop

// {
//    let names: string[] = ["Prem", "Raj", "Amit", "Anand"];

// // For loop
// // for (let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// for(let name of names){
//     console.log(name);
// }

// }

//! 3. Create Tuple
// //* [id,username]
// {
//     let user:[number,string]=[1,"prem"]
//     console.log(user);
    
// }

//! 4. Create readonly RGB tuple
// {
//     let rgb:readonly[number,number,number]=[255,0,0]
//     console.log(rgb)
// }

//! 5. Create optional tuple
// //* [name,age?]
// {
//     let user1:[string,number?]
//     user1 = ["Prem"]
//     console.log(user1)

// }

//! 6.Create tuple 
// //*[id,name,isAdmin]

// {
//    let user:[number,string,boolean];
//    user =[1,"prem",true]
//    console.log(user)
// }

//! 7.Create array
//* [1,2,3,4,5]

// {
//     let nums:number[]=[1,2,3,4,5]
//     let squared:number[]=nums.map(num=>num*num);

//     console.log(squared);
    
// }


//! 8.Filter even number form
//* [1,2,3,4,5,6,7,8] 
// {
//     let nums:number[]=[1,2,3,4,5,6,7,8]
//     let filtered:number[]=nums.filter(nums=>nums %2 ===0)
//     console.log(filtered);
// }


//! 9.Create tuple with rest operator
// {
//     let score:[string,...number[]]=["score",10,20,30]
//     console.log(score);
    
// }

//! 10. Destruture this tuple

{let user:[string,number]=["prem",31];
const [name,age]=user;
console.log(name);
console.log(age)

}
