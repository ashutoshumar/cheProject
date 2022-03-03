import React from 'react'
import "./basicdetails.scss"
import { useNavigate } from 'react-router-dom';
export const BasicDetails = ({header,nextStep,handleChange,
  values, prevStep}) => {
    const navigate=useNavigate()
  const conTinue = e => {
      e.preventDefault();
    //  this.props.nextStep();
       
        nextStep();
    };
    const previous = e => {
      e.preventDefault();
    //  this.props.nextStep();
       navigate('/upload')
  
    };
  return (
   
   <div className='basicDetails'>
      <div className='Header'>
          <p>{header}</p>
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
		<input name="name" type="text" onChange={handleChange('name')}
              defaultValue={values.name}  />
		
        		
	 </div>
    <div className="form_Comm_Basic_input-container">
        <label >Owner Email</label>
		<input  name="email" type="text" onChange={handleChange('email')}
              defaultValue={values.email}  />
		
        		
	</div>
    <div className="form_Comm_Basic_input-container">
        <label >Owner Number</label>
		<input  name="phone" type="text" onChange={handleChange('phone')}
              defaultValue={values.phone}  />
        		
	</div>
	<div className="form_Comm_Basic_input-container" >
        <label>Property Name</label>		
		<input  name=" property_name" type="text" onChange={handleChange('property_name')}
              defaultValue={values.property_name}/>
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property City</label>		
		 <input  name="city" type="text" onChange={handleChange('city')}
              defaultValue={values.city}/> 
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property fullAddress</label>		
		 <input  name="fullAddress" type="text" onChange={handleChange('fullAddress')}
              defaultValue={values.fullAddress} /> 
		
	</div>
    <div className="form_Comm_Basic_input-container" >
        <label>Property PinCode</label>		
		 <input  name="pinCode" type="text" onChange={handleChange('pinCode')}
              defaultValue={values.pinCode} /> 
		
	</div>
   <div className='comm-btn' > 
   
    <button   className="comm-btn_btn1"  onClick={previous }>Previous</button>
    <button   className="comm-btn_btn1"  onClick={conTinue }>Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
