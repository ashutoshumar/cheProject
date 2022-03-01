import React from 'react'
import "./commextrainfo.scss"
import { useRef } from "react";
export const CommextraInfo =({nextStep,handleChange,
  values, prevStep}) => {
    const ref = useRef();
  const conTinue = e => {
      e.preventDefault();
    //  this.props.nextStep();
       
        nextStep();
    };
    const previous = e => {
      e.preventDefault();
  
       prevStep()
  
    };
  return (
    <div className='extrainfoDetails'>
      <div className='extrainfoHeader'>
          <p>Commercial Space</p>
    <div className='extrainfoHeader_img'>  
      <img
      alt=""
      className="extrainfoHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
      <img
      alt=""
      className="extrainfoHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="extrainfoHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="extrainfoHeader_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
    </div> 
       </div> 

       <div className='extrainfoformtitle'>
           <p> Extra Property  Information</p>
       </div>
       <div className='extrainfoform'>
     
		
       
	 <div className="extrainfoform_Basic_input-container">
        <label >Distance from road(Km)   </label>
		<input  type="text"  placeholder=' '  />
		
        		
	 </div>
    <div className="extrainfoform_Basic_input-container">
        <label >Property Suitable for</label>
		<input  type="text"  placeholder=''  />
		
        		
	</div>

  <div className="extrainfoform_Basic_input-container_split" >

        <label>Available From</label>
        <p> Immediately available</p>		
        <input
        type="text"
        placeholder='Choose date'
        ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
      />
		
	</div>
    <div className="extrainfoform_Basic_input-container">
        <label >Furnishing status</label>
		<input  type="password"  />
        		
	</div>
	<div className="extrainfoform_Basic_input-container" >
        <label>Floor Status</label>		
		<input type="password" required="" placeholder=''/>
		
	</div>
    <div className="extrainfoform_Basic_input-container" >
        <label>Amenities</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
    <div className="extrainfoform_Basic_input-container_des" >
        <label>Description</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
   
   <div className='extrainfo-btn' > 
   
    <button   className="extrainfo-btn_btn1"  onClick={previous }>Previous</button>
    <button   className="extrainfo-btn_btn1"  onClick={conTinue }>Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
