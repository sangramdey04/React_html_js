const initialState = 0;

const countNumber = (state=initialState,action)=>{
    switch(action.type){
     case "Increment" : return state+action.payload;
     case "Decrement" :return state-1;
     default:return state;
    }

}
export default countNumber;