import React from 'react'
import "./uploadPic.scss"
import { useNavigate } from 'react-router-dom';
export const UploadPic =({nextStep,handleChange,
  values, prevStep}) => {
   const nevigate=useNavigate()
  const conTinue = e => {
      e.preventDefault();
    //  this.props.nextStep();
      console.log(values)
       nevigate('/')
       
    };
    const previous = e => {
      e.preventDefault();
  
       prevStep()
  
    };
  return (
    <div className='uploadpicDetails'>
      <div className='uploadpicHeader'>
          <p>Commercial Space</p>
    <div className='uploadpicHeader_img'>  
      <img
      alt=""
      className="uploadpicHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
      <img
      alt=""
      className="uploadpicHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="uploadpicHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
     <img
      alt=""
      className="uploadpicHeader_img_clo"
      src="https://static.overlay-tech.com/assets/64220dee-aaba-4867-bea2-ee28ddfe4219.svg"
    />
    </div> 
       </div> 

       <div className='uploadpicformtitle'>
           <p>Please Upload photos</p>
       </div>
       <div className='gridparent'>
         <div className="grid">
            <div className="grid_img"  > 
            
            <p>1</p>
            </div>
            <div className="grid_img"> 
            
             <p>2</p>
             </div>
             <div className="grid_img"> 
           
             <p>3</p>
             </div>
             <div className="grid_img"> 
           
             <p>4</p>
             </div>
             <div className="grid_img"> 
           
             <p>5</p>
             </div>
             <div className="grid_img"> 
            
             <p>6</p>
             </div>
             <div className="grid_img"> 
          
             <p>7</p>
             </div>
             <div className="grid_img"> 
            
             <p>8</p>
             </div>
             <div className="grid_img" >
            
             <p>9</p>
             </div>
        </div>
        <div className='upload-btn' > 
   
   <button   className="upload-btn_btn1"  onClick={previous }>Previous</button>
   <button   className="upload-btn_btn1"  onClick={conTinue }>Upload</button>
   </div>	
   </div>
    </div>
  )
}
