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
		<input   name=" rent_per_Squarefoot" type="text" onChange={handleChange('rent_per_Squarefoot')}
              defaultValue={values.rent_per_Squarefoot}  />
		
        		
	 </div>
    <div className="priceform_price_Basic_input-container">
        <label >Security money</label>
		<input   name="security_money" type="text" onChange={handleChange('security_money')}
              defaultValue={values.security_money}  />
		
        		
	</div>
    <div className="priceform_price_Basic_input-container">
        <label >Maintenance charge</label>
		<input   name="maintenance_charge" type="text" onChange={handleChange('maintenance_charge')}
              defaultValue={values.maintenance_charge} />
        		
	</div>
	<div className="priceform_price_Basic_input-container" >
        <label>Electricity Charge</label>		
		<input  name="electric_charge" type="text" onChange={handleChange('electric_charge')}
              defaultValue={values.electric_charge}/>
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Termination charge</label>		
		 <input  name="termination_charge" type="text" onChange={handleChange('termination_charge')}
              defaultValue={values.termination_charge} /> 
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Other charges</label>		
		 <input  name="other_charges" type="text" onChange={handleChange('other_charges')}
              defaultValue={values.other_charges} /> 
		
	</div>
    <div className="priceform_price_Basic_input-container" >
        <label>Estimated total charge per month</label>		
		 <input  name="est_tot_charge_per_month" type="text" onChange={handleChange('est_tot_charge_per_month')}
              defaultValue={values.est_tot_charge_per_month} /> 
		
	</div>
   <div className='price-btn' > 
   
    <button   className="price-btn_btn1"  onClick={previous }>Previous</button>
    <button   className="price-btn_btn1"  onClick={conTinue }>Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
