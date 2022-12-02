
//shallow copy-address copy 

// let a={
//     name:"lalit",
//     age:9
// }
// let b=a;
// a.age=101;
// console.log(a);
// console.log(b);


//value copy(deep copy)

// let a={
//         name:"lalit",
//         age:9
//     }
//     let b=Object.assign({},a);
//     a.age=101;
//     console.log(a);
//     console.log(b);

//spread operaator
// let a={
//         name:"lalit",
//         age:9
//     }
//     let b={...a};
//     a.age=101;
//     console.log(a);
//     console.log(b);


var length = 10;
function fn() {
  console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
  }
};



 