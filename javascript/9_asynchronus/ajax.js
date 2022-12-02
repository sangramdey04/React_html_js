let fetchbtn = document.getElementById("fetchbtn");

fetchbtn.addEventListener('click',clickHandler)

function clickHandler(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','sd.txt',true); // true for asynchronous
    xhr.onprogress=function(){
        console.log("progressing..");
    }
    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("some error occured");
        }
    }

    //for send request

    xhr.send();
}