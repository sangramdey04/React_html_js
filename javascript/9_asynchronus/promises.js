//1.

// const API = "https://api.publicapis.org/entries"

// const user = fetch(API);
// console.log(user);

// user.then(function(data){
//     console.log(data);
// })


//2.
//2.1
//with the help of promise constructor

const pobj1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5,6];
        resolve(roll_no);
        reject('we got error')

    },3000);

});

// 2.2(another way to call promise)
// with the help of using function directly


const getBio = (indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata) => {
            const bio={
                name:'Sangram',
                age:22 
            }
            resolve(`My roll no is ${indexdata},My name is ${bio.name} and i am ${bio.age} years old`);
            
        },2000,indexdata);
    })
}

//promise consume 

pobj1.then((roll)=>{
    console.log(roll);
    getBio(roll[3]).then((any)=>{
        console.log(any);
    });

})
.catch((error)=>
{
    console.log("Some Error Occured");
})


//using async and await 

// async function getData() {
//     const a = await pobj1;
//     console.log(`The roll no array is :${a}`);
//     const b = await getBio(a[3]);
//     console.log(b);
  
// }

// getData();


