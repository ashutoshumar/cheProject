import React,{useState} from 'react'
import "./uploadPic.scss"
import { CREATE_COMMERCIAL_SPACE_MUTATION } from '../GraphQl/Mutations';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
export const UploadPic =({nextStep,handleChange,
  values, prevStep}) => {
    const [errors,setErrors]=useState({})
  const navigate=useNavigate()
    const [createCommercialSpace, { data,loading,error }] = useMutation(CREATE_COMMERCIAL_SPACE_MUTATION,{
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
          name:values.name,
          city:values.city,
          address:values.fullAddress,
          pin:200,
          distance_from_road:23.7,
          area: 404.5,
          availability:true,
          amenities:values.amenities,
          photos:["hii","how"],
          suitable_for:values.suitable_for,
          coordinate:["108","109"],
          ownerId:"93807242-32d3-4893-8ab3-d06c35898ce7"
      }
  });
  
  const conTinue = e => {
      e.preventDefault();
    //  this.props.nextStep();
      console.log(values)
      createCommercialSpace()
     
       
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
