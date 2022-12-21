const authReducer = (state={user:[]},action)=>{
    switch(action.type){
        case "Registration":
            return {
                ...state,
                user: action.user,
            };
            default:
                return state;
    }
}

export default authReducer;