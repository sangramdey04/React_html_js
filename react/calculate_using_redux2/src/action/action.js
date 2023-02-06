export const incNum = (num)=>{
   return{
    type:"Increment",
    payload:num
   }
    
}
export const decNum = ()=>{
   return{
    type:"Decrement",
   
   }
    
}
export const multNum = (num)=>{
    return{
     type:"MULT",
     payload:num
    }
     
 }
 export const devideNum = (num)=>{
    return{
     type:"DEVIDE",
     payload:num
    
    }
     
 }