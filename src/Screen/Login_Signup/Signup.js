import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { CREATE_USER_MUTATION } from '../../GraphQl/Mutations';
import { useMutation } from "@apollo/client";
export const Signup = () => {
    const [errors,setErrors]=useState({})
    const [name,setname]=useState("");
    const  [email,setemail]=useState("")
    const [Password,setPassword]=useState("")
    const [ConfirmPassword,setConfirmPassword]=useState("")
     const [phone,setphone]=useState("");
     let navigate = useNavigate();
     const [createUser, { data,loading,error }] = useMutation(CREATE_USER_MUTATION,{
         update(proxy,result)
         {


             console.log(result)
             navigate('/')
           
            
         },
         onError(err){
          setErrors(err.graphQLErrors)
           console.log(err)
           navigate('/error'
               )
        //   if (err)  return <span>Unable to Sign In</span>
         }
          ,
         variables:
         {
             name:name,
             email:email,
             phone:phone
         }
     });
  
    const onSubmit = (e)=>{
      e.preventDefault();
     console.log(name + email +phone)
      createUser()
  
   
  

    }
   
  return (
    <div class="box">
	  <form  onSubmit={onSubmit}>   
		<span className="text-center">Register</span>
       
	<div className="input-container">
        <label >Name</label>
		<input  type="text"  placeholder=' ' value={name} onChange={e=>setname(e.target.value)}/>
		
        		
	</div>
    <div className="input-container">
        <label >Email</label>
		<input  type="text"  placeholder='' value={email} onChange={e=>setemail(e.target.value)}/>
		
        		
	</div>
    <div className="input-container">
        <label >Password</label>
		<input  type="password"  placeholder='' value={Password} onChange={e=>setPassword(e.target.value)}/>
		
        		
	</div>
	<div className="input-container" >
        <label>Confirm Password</label>		
		<input type="password" required="" placeholder='' value={ConfirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
		
	</div>
    <div className="input-container" >
        <label>Phone Number</label>		
		 <input type="text" required="" placeholder=''  onChange={e=>setphone(e.target.value)}/> 
		
	</div>
	
   <div className='input-containerSignupp' > 
    <Link  to="/login">Already an User? <span >Login</span></Link>
    <button type="submit"  className="btnn">Register</button>
    </div>	 
       </form> 

</div>
  )
}
