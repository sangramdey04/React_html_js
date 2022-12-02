function print(){
    const n=document.getElementById("num").value;
    let arr=[]

    for(let i=1;i<=n;i++)
    {
        arr.push(i)
    }
  
    arr.map((ele=>console.log(ele,121)))
    console.log(arr,121);

     
    //     document.getElementById("result").innerHTML="The output is:"+[...new Array(parseInt(n))].map((a, i) => i+1).join(" ");
        document.getElementById("result").innerHTML=`The output is: ${arr}`
    
   
}