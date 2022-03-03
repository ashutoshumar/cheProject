import React, {useState} from 'react'
import "./commextrainfo.scss"
import { useRef } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
export const CommextraInfo =({nextStep,handleChange,handleChange1,
  values, prevStep}) => {
    const [selected,setSelected]=useState([])
    const [selectedAmenities,setSelectedAmenities]=useState([])
    const [furshing,setFurnshing]=useState('')
    const [floor,setFloor]=useState('')
    const style = {
      control: (base, state) => ({
        ...base,
        border: '1px solid #02A5F5',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid rgb(59,59,59)',
        }
    })
    };
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    const animatedComponents = makeAnimated();
    const ref = useRef();
  const conTinue = e => {
      e.preventDefault();
    //  this.props.nextStep();
    handleChange1('furnishingStatus',furshing)
    handleChange1('floorStatus',floor)
    handleChange1('suitable_for',selected)
    handleChange1('amenities',selectedAmenities)
    console.log(selected)
    console.log(selectedAmenities)
    console.log(floor)
    console.log(furshing)
        nextStep();
     
    };
    const previous = e => {
      e.preventDefault();
  
       prevStep()
  
    };

    const handleChangemulti=(type,options)=>{
      var i=[]
      var j=[]
      if(type==="suitable_for")
     {
      for (const opt of options) {
        i.push(opt.value)
      }
     
      
      setSelected(i)
     }
      else if(type==="amenities")
      {
        for (const opt of options) {
          j.push(opt.value)}

        setSelectedAmenities(j)
      }

   //   handleChange1('suitable_for',selected)
     
     
    }
    const handleChangeSingle=(type,options)=>{
      if(type==='furnishing')
      {
        setFurnshing(options.value)
        
       
      }
      else if(type==='floor')
      {
        setFloor(options.value)
        
      
      }
  //     setSelected(options);
  //  //   handleChange1('suitable_for',selected)
  //     console.log(selected)
     
    }
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
		<input  name="dis_from_road" type="text" onChange={handleChange('dis_from_road')}
              defaultValue={values.dis_from_road}  />
		
        		
	 </div>
    <div className="extrainfoform_Basic_input-container">
        <label >Property Suitable for</label>
		{/* <input   name="dis_from_road" type="text" onChange={handleChange('dis_from_road')}
              defaultValue={values.dis_from_road}  /> */}
              <Select  placeholder="" 
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      styles={style}
      onChange={(e)=>{handleChangemulti("suitable_for",e)}}
    />
            
		
        		
	</div>

  <div className="extrainfoform_Basic_input-container_split" >

        <label>Available From</label>
        <p onClick={()=>{handleChange1('availabilityStatus',"Immediately available")}}> Immediately available</p>		
        <input
        type="text"
        placeholder='Choose date'
        ref={ref}
        onChange={handleChange('availabilityStatus')}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "text")}
      />
		
	</div>
    <div className="extrainfoform_Basic_input-container">
        <label >Furnishing status</label>
        <Select  styles={style}   placeholder="" options={options} onChange={(e)=>{handleChangeSingle('furnishing',e)}} />
        		
	</div>
	<div className="extrainfoform_Basic_input-container" >
        <label>Floor Status</label>		
        <Select  styles={style}   placeholder="" options={options}  onChange={(e)=>{handleChangeSingle('floor',e)}}/>
		
	</div>
    <div className="extrainfoform_Basic_input-container" >
        <label>Amenities</label>		
        <Select 
         styles={style}
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder=""
      isMulti
      options={options}
      onChange={(e)=>{handleChangemulti("amenities",e)}}
    /> 
		
	</div>
    <div className="extrainfoform_Basic_input-container_des" >
        <label>Description</label>		
		 <textarea   name="description" type="text" onChange={handleChange('description')}
              defaultValue={values.description} /> 
		
	</div>
   
   <div className='extrainfo-btn' > 
   
    <button   className="extrainfo-btn_btn1"  onClick={previous }>Previous</button>
    <button   className="extrainfo-btn_btn1"  onClick={conTinue }>Next</button>
    </div>	 
      

       </div>
    </div>
  )
}
