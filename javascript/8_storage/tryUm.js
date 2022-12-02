let  cont = document.getElementById("container");
let button = document.getElementById("btn");
button.addEventListener('click',()=>{
 
let Name = document.getElementById("fname").value;
let email = document.getElementById("fmail").value;
let num = document.getElementById("fcont").value;


    localStorage.setItem('Name',Name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Number',num);

  popup.style.display='flex';
});

 