export const register = (user)=>{
    console.log(2,user);
    return {
        type:"Registration",
        user:{...user.data,userData:user.config.data}
    }
}

export const login = (user)=>{
    console.log(2,user);
    return {
        type:"Login",
        user:{...user.data,userData:user.config.data}
    }
}