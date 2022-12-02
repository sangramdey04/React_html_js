document.getElementById('btn').addEventListener("onclick",cross);
         
let isStoke = true
 
function cross(){
    
    if(isStoke){
     
    document.querySelector("p").style.textDecoration='line-through';
    }else{
        document.querySelector("p").style.textDecoration='none';
    }
    
    isStoke = !isStoke;

}