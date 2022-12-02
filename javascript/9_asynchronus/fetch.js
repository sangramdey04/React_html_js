// let p = fetch("http://universities.hipolabs.com/search?country=India")
let p = fetch("https://dog.ceo/api/breeds/image/random")

p.then((value1)=>{
    if (value1.ok===false){
        // reject('something wrong')
        throw new Error(`Something wrong`);
    }
    console.log(value1);
    return value1.json();
})
.then((value2)=>{
    console.log(value2);
})
.catch(function(error){
    // alert(error)
    console.log(error)
})