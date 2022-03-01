import React from 'react'
import "./commpricinginfo.scss"
export const CommPricingInfo = ({nextStep,handleChange,
  values, prevStep}) => {
    
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
    <div className='pricingDetails'>
      <div className='pricingHeader'>
          <p>Commercial Space</p>
    <div className='pricingHeader_img'>  
      <img
      alt=""
      className="pricingHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
      <img
      alt=""
      className="pricingHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="pricingHeader_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
     <img
      alt=""
      className="pricingHeader_img_clo"
      src="https://static.overlay-tech.com/assets/3b135a61-9258-4b11-8188-5a277053fa4b.svg"
    />
    </div> 
       </div> 

       <div className='priceformtitle'>
           <p> Pricing  Information</p>
       </div>
       <div className='priceform'>
     
		
       
	 <div className="priceform_price_Basic_input-container">
        <label >Rent per sqft per month   </label>
		<input  type="text"  placeholder=' '  />
		
        		
	 </div>
    <div className="priceform_price_Basic_input-container">
        <label >Security money</label>
		<input  type="text"  placeholder=''  />
		
        		
	</div>
    <div className="priceform_price_Basic_input-container">
        <label >Maintenance charge</label>
		<input  type="password"  />
        		
	</div>
	<div className="priceform_price_Basic_input-container" >
        <label>Electricity Charge</label>		
		<input type="password" required="" placeholder=''/>
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Termination charge</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Other charges</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Estimated total charge per month</label>		
		 <input type="text" required="" placeholder='' /> 
		
	</div>
   <div className='price-btn' > 
   
    <button   className="price-btn_btn1"  onClick={previous }>Previous</button>
    <button   className="price-btn_btn1"  onClick={conTinue }>Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
