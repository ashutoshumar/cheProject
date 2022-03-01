import React from 'react'
import "./basicdetails.scss"
export const BasicDetails = () => {
  return (
   
   <div className='basicDetails'>
      <div className='Header'>
          <p>Commercial Space</p>
    <div className='Header_img'>  
      <img
      alt=""
      className="Header_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="Header_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
     <img
      alt=""
      className="Header_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
     <img
      alt=""
      className="Header_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
    </div> 
       </div> 

       <div className='formtitle'>
           <p>  Basic Information</p>
       </div>
       <div className='form'>
     
		
       
	 <div className="form_Comm_Basic_input-container">
        <label >Owner Name</label>
		<input  type="text"  placeholder=' '  />
		
        		
	 </div>
    <div className="form_Comm_Basic_input-container">
        <label >Owner Email</label>
		<input  type="text"  placeholder=''  />
		
        		
	</div>
    <div className="form_Comm_Basic_input-container">
        <label >Owner Number</label>
		<input  type="password"  />
        		
	</div>
	<div className="form_Comm_Basic_input-container" >
        <label>Property Name</label>		
		<input type="password" required="" placeholder=''/>
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property City</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property fullAddress</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property PinCode</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
   <div className='comm-btn' > 
   
    <button   className="comm-btn_btn1">Previous</button>
    <button   className="comm-btn_btn1">Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
