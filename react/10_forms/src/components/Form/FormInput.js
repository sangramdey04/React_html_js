import React   from 'react';
import "../FormStyle/FormInputStyle.css";
import {useForm} from "react-hook-form" ;
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string().required("Your First Name Is required") ,
  lastName: yup.string().required("Your Last Name Is required") ,
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4,"Password must be atleast 4 characters").max(15,"Password can be maximum of 15 Characters").required("Password is required"),
  conpswrd: yup.string().oneOf([yup.ref("password")],"Password didn't match"),
  Date: yup.string().required(),
 
})


export default function FormInput() {
   

  const {register,handleSubmit,formState:{errors},reset} = useForm({
    resolver:yupResolver(schema),
    
  })

 
  // console.log(errors);
  // const {register,handleSubmit,formState:{errors}} = useForm();
 


 

  //defune a state that will contain a form errors track

  //2. define a method that will assign errors for the different fields in component

  // const [formErrors, setFormErrors] = useState({})


const formData =(data)=>{
  // data.preventDefault();
  console.log(data);
  reset();
  
}

  return (
    <>
    <div className="container">
    <div className="signup"><center><h3>Sign up</h3></center> </div>
    <br />
  
   <form className="row g-3 forminput" onSubmit={handleSubmit( formData)}  >
   <div className="col-md-6">
    <label htmlFor="fname" className="form-label">First Name</label>
    <input type="text"name="firstName" className="form-control" id="fname"  autoComplete='off' placeholder="Enter Your First Name"  {...register("firstName")}  />
    {errors.firstName && (<small className='text-danger'>*{errors.firstName.message}</small>)}
    {/* <p><small className='text-danger'>{errors.firstName.message}</small></p> */}
 
  </div>
  {/* ------------------------------ */}
  <div className="col-md-6">
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text"name="lastName" className="form-control" id="lname" autoComplete='off'placeholder="Enter Your Last Name"  {...register("lastName" )} />
    {errors.lastName && (<small className='text-danger'>*{errors.lastName.message}</small>)}
  </div>
{/* ------------------------------ */}
  <div className="col-md-12">
    <label htmlFor="email" className="form-label">Email </label>
    <input type="email"name="email" className="form-control" id="email" autoComplete='off'placeholder="Enter Your Email" {...register("email" )}   />
    {errors.email && (<small className='text-danger'>*{errors.email.message}</small>)}
  </div>
{/* ------------------------------ */}
  <div className="col-12">
    <label htmlFor="pswd" className="form-label">Password</label>
    <input type="password"name="password" className="form-control" id="pswd" autoComplete='off' placeholder="Enter Your Password" {...register("password" )} />
    {errors.password && (<small className='text-danger'>*{errors.password.message}</small>)}
  </div>
{/* ------------------------------ */}
  <div className="col-12">
    <label htmlFor="cpswd" className="form-label"> Confirm Password</label>
    <input type="password"name="conpswrd" className="form-control" id="cpswd" autoComplete='off' placeholder="Confirm Your Password " {...register("conpswrd")}  />
    {errors.conpswrd && (<small className='text-danger'>*{errors.conpswrd.message}</small>)}
  </div>
{/* ------------------------------ */}
  <div className="col-12">
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date"name="date" className="form-control" id="dob" autoComplete='off' {...register("Date")}  />
    {errors.Date && (<small className='text-danger'>*{errors.Date.message}</small>)}
  </div>
  {/* ------------------------------ */}
  <button>Sign Up</button>
   </form>
  
   </div>
    </>
  
  )
}
