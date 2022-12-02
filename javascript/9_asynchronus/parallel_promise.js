const p1 = new Promise((resolve,reject)=>{
   let sms = "I am p1"
   resolve(sms);
})
const p2 = new Promise((resolve,reject)=>{
     let sms2 = "i am p2"
     resolve(sms2);
   //  reject(new Error('error in p2'))
})

//1.all(if received any error then it will stop there)



// Promise.all([p1,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error.message))

//2.allSettled(print resolve and reject both the values doesn't affect the code /output)

// Promise.allSettled([p1,p2])
// .then(result=>console.log(result))

//3.race

// Promise.race([p1,p2])
// .then(result=>console.log(result))
// .catch(error=>console.log(error.message))

//4.any ( This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.)

// Promise.any([p1,p2])
// .then(result=>console.log(result))
 
