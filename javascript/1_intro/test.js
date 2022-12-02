
// Arrays 

// let names =[1,2,45,32];
// let names2=new Array(1,2,33,4)
// console.log(names2)
// console.log(typeof names2);


// names2.push(44)
// console.log(names2)


// Objects

// let n ={
//     name:"Sangram Dey",
//     Time:"10:45",
//     salary:50000,
 
// }
// // n.salary=2200
// console.log(n)
// console.log(typeof (n));


// let n1 = 233;
// console.log(typeof n1)

//  a=3;
//  b=4
//  result=a+b;

// console.log(`The addition of ${a} and ${b} is ${result}`)
//  console.log(typeof result)



// let add =(n1,n2)=>n1+n2
// res=add(4,5)
// console.log(`The output is ${res}`)





let arr=[1,2,3,4,5,6]
// arr.forEach(element=> {
//     console.log(element)
// });

// console.log(typeof arr)
// arr.forEach(function(i){
//     console.log(i)
// })





// let n ={
//         name:"Sangram Dey",
//         Time:"10:45",
//         salary:50000,
     
//     }
//    for (const k in n) {
//      console.log(`${k} is ${n[k]}`)
//    }
   
// let a = "Developer ajit"
// console.log(a.substr(4))

// let a = [1,2,3,4]
// for(let i =0;i<a.length;i++){
//     console.log(i)
// }
// a.b='hii'
// for(let i of a)
// {
//     console.log(i)
// }
// console.log(a.map(x=>x*3))



// var length = 10;
// function fn() {
//   console.log(this.length);
// }
 
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//   }
// };
// obj.method(fn);


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), i*2000);
// }

 
 
// for (var i = 0; i < 10; i++) {
//     console.log("inside for"+i);
//   setTimeout(() => console.log(b[i],i),i* 1000);
// }
// console.log(i);

 

//escape character

// let a = 10;
// console.log(`the number is \${a}`);


// what will be the output ?
// console.log(0.1 + 0.2 == 0.3) // false



//splice will add an eliment without  replacing the index value
// let a = [1,23,4,]
// a.splice(1,0,5);    //index =1 , 0 = how many element removed ,5 = target value we want toinput
// console.log(a);
//output [1,5,23,4]

// //but  this will replace the target  index value

// let b = [1,23,4,]
//  b[1]=10;
// console.log(b);

//output [1,10,4]

// console.log(0.3==0.3);//true
// console.log(0.3000000000004 ==0.3);//false

console.log(1+"1");//11