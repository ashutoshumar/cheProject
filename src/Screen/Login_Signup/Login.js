import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
{
   users{
    id
    name
  }
}
`;
export const Login = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const handle=()=>{
    console.log(data)
  }
  return (
    <div class="box">
	<form>
		<span className="text-center">LOGIN</span>
	<div className="input-container">
        <label >Email</label>
		<input  type="mail" id='mail' placeholder=''/>
		
        		
	</div>
	<div className="input-container" >
        <label>Password</label>		
		<input type="password" required="" placeholder=''/>
		
	</div>
		<button type="button" onClick={handle} className="btn">Login</button>
     
   <div className='input-container1'>
     <div className='input-container2'>
           <input type="checkbox"/>
           <label for="rememberMe">Remember Me</label>
           </div>
           <Link className='' to="/">Forgot Password?</Link>
   </div>       
  
   </form>

   {/* <div className='input-containerSignup' > */}
    <Link className='input-containerSignup' to="/signup">Don't have an accout? <span >Create One</span></Link>
   {/* </div>	 */}
</div>
  )
}
