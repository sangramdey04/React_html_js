 var  cont = document.getElementById("sign");
var popup = document.getElementById("popup");

 
//called the button by their id
let button = document.getElementById("btn");
let logOut = document.getElementById("popbtn");


 
button.addEventListener('click',()=>{
 
let Name = document.getElementById("fname").value;
let email = document.getElementById("fmail").value;
let num = document.getElementById("fcont").value;

if(Name==''){
    alert("Please Fill the required field");
    return false;
}
if(email==''){
    alert("Please Fill the required field");
    return false;
}
if(num==''){
    alert("Please Fill the required field");
    return false;
}

    localStorage.setItem('Name',Name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Number',num);

   
 
  cont.style.display='none';
  popup.style.display='flex';


 
});

// logOut.addEventListener('click',()=>{
//     cont.style.display='flex';
//     popup.style.display='none';

//     //for removing elemets from local storage
//     localStorage.removeItem('Name');
//     localStorage.removeItem('Email');
//     localStorage.removeItem('Number');

//     //for clear the form inputs and set it to default
//     document.getElementById("fname").value='';
//     document.getElementById("fmail").value='';
//     document.getElementById("fcont").value='';
 
// });


//prevent refreshing
 
 if(localStorage.getItem('Name')){
    
    cont.style.display='none';
    popup.style.display='flex';
    //  alert("User already Logged In");

     logOut.addEventListener('click',()=>{
           
        
            //for removing elemets from local storage
            localStorage.removeItem('Name');
            localStorage.removeItem('Email');
            localStorage.removeItem('Number');
        
            // //for clear the form inputs and set it to default
            document.getElementById("fname").value='';
            document.getElementById("fmail").value='';
            document.getElementById("fcont").value='';
            cont.style.display='flex';
            popup.style.display='none';
         
        });
    

 }
 else{
    // cont.style.display='flex';
    // popup.style.display='none';
    console.info("This page is not reloded");
 }
 
