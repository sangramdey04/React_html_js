import { register,login } from "./actions/FormAction";
import axios from "axios";

export function postUser(param){
    return async function(dispatch){
        let user;
        await axios.post("https://reqres.in/api/register",param)
        .then((res)=>{
            user =res.data;
            // user =res.status;
            console.log(res,10)
            console.log(user,11);
            dispatch(register(res))
            console.log("Successful");
        }).catch((e)=>{
            console.log(e.message);
        })
        return user;
    };

    
}

export function loginUser(param){
    let user;
    return async function(dispatch){
        await axios.post("https://reqres.in/api/login",param).then((res)=>{
            console.log(27,res);
          user = res.data;
            dispatch(login(res))
        })
        return user;
    }
}