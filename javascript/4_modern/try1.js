// let emp ={
//     id:1,
//  //  name: "Rathin Sarkar",
//     age: 26,
// };
// let {name= "sangram dey",age,id} = emp;
// console.log(emp);
// console.log(id);
// console.log(name);
// console.log(age);
// console.log(typeof emp);




//  spread operator

// let a = [1, 2, 3, 4, 5,10];
// let b = [ 6, 7, 8];
// let c = [...a,...b]
// console.log(c);



//destructuring array

//swap 

// const a = ['sd','ds'];
// [a[0],a[1]]=[a[1],a[0]];
// console.log(a);

//----------------------------------------------

// console.log(1 && 'Orange');
// console.log('apple' && 'Orange'||'banana');//orange
// console.log(undefined && false);//undefined
// console.log(false && undefined );//false

// console.log(true ?? null); //true
// console.log('Orange' && 'Apple');
// console.log('' && 'Apple');
// console.log(2=='2');//true
console.log(2!=='2');//true
console.log(2!='2');//false
console.log(2==='2');//false


// console.log((2===3)&&(4>0)||(3==="3")) //false
// console.log((2===3)&&(4>0)||(3!=="3")) //true



// first order



// const foo = function(){
//     console.log("foobar");
//   };
//   foo(); // Invoke it using the variable
  // foobar



  // Higher order function

  //1.

// function outer(){
//     function inner()
//     {
//         console.log("I am In inner")
//     }
//     return inner;
// }

// outer()(); // process 1 to access inner functio from higher order

// let result = outer();   // this is process 2
//  result();

//2.

// function employee(nm,age){
//     this.Name=nm;
//     this.Age = age;

// }
// let employees=
// [
//     new employee("SD",21),
//     new employee("AD",32),
//     new employee("BD",22),
//     new employee("CD",32),
//     new employee("KD",25),
//     new employee("FD",37),
// ];
// console.log(employees)

// function filter(emp,fn){
//     let result=[];
//     for(let i=0;i<emp.length;i++)
//     {
//         if(fn(emp[i]))
//         {
//             result.push(emp[i]);
//         }
//     }
//     return result;
// }

// console.log(filter(employees,function(emp){ return emp.Age==32;}));
// console.log(filter(employees,function(emp){ return emp.Name=="SD";}));



//3.

// function res (a,b,fn){
//     let output = fn(a,b)
//    console.log(output);
//    return () =>{
//         return a*b;
//    }
// }
 

// console.log(res(3,4,function(a,b){
//     return a+b;
    
// }));

// let result= res(3,4,function(a,b){
//     return a+b;
// })
// result;
// console.log(result)
//  console.log(result())


// const x = (a,b)=>a*b;
//  console.log(x(2,3));


// for each loop


//let arr = [1,2,3,4];

//1st method --
// arr.forEach(function(ele){
//   console.log(ele)
// })

//2nd method--
//arr.forEach(ele=>console.log(ele));


// ---------------------------------------------

// function a(){
//   let a = "helllo"
//   return a;

// }

// let b = a();
// console.log(b);