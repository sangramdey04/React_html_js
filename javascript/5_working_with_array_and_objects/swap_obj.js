const obj1={
    
    key1:"value 1",
    key2:"value 2",
   
};

 

const obj2={};
Object.entries(obj1).map(i=>{
    let k =i[0];
   
    let v= i[1];
   
    obj2[v]=k;
   // console.log(k);
})
console.log(obj2);