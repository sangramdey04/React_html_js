const initialState = 5;

const MultNumber = (state=initialState,action)=>{
    switch(action.type){
     case "MULT" : return state*action.payload;
     case "DEVIDE" :return state/action.payload;
     default:return state;
    }

}
export default MultNumber;