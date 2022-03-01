import React from "react";
import "./propertyType.scss";
import { useNavigate } from 'react-router';
export const PropertyType = () => {
  let navigate = useNavigate();
  const handle=(value)=>{
    // window.alert("wow")
    navigate('/commercialspace')
  }
  return (
    < >
    <div className='propertyType'>
      <div className='Heading'>
        <p>
          Choose property type
        </p>
       </div>  
     <div>  
        <div className="chooseProperty_group">
            <div className="chooseProperty_group_type"  onClick={()=>{handle("commercialspace")}}> 
            <img
            
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/60951129-63d4-4253-a9cb-871607626385.svg"
            />
            <p>Commercial Space</p>
            </div>
            <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/1cd51dbf-6f28-414d-a066-006ffa3c800a.svg"
            />
             <p>Villa</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/53ac36a1-6f5f-40b8-a9a2-e32e869a9d35.svg"
            />
             <p>Marriage Hall</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/d9075375-6a63-4bb4-9123-399d705813fb.svg"
            />
             <p>Hostel</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/645fc940-2738-4159-ac6f-ff120b091c57.svg"
            />
             <p>Simple Flat</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/9825e477-6016-4963-b33c-438b24c05a3f.svg"
            />
             <p>PG</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/ddab1e7a-2424-488f-8b17-2eafe663d194.svg"
            />
             <p>Dharamsala</p>
             </div>
             <div className="chooseProperty_group_type"> 
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/25034d05-091c-425b-9ff0-0fc58ed189e1.svg"
             />
             <p>Single Room</p>
             </div>
             <div className="chooseProperty_group_type" >
            <img
              alt=""
              className="chooseProperty_group_type_img"
              src="https://static.overlay-tech.com/assets/45d17b80-dca4-4827-8598-44e4bd41717a.svg"
            />
             <p>Apartment</p>
             </div>
        </div>


      {/* <p  id="footer">
         Upload your property in 4 simple steps
        </p>
      

       
           
      <p id="footer_terms">
            By uploading my property i agree to term and
            condition
          </p> */}
          </div>  
</div>
      
       
</>
     
     
  );
};

/*

          <div className="">
           
              <div className="">
                <div className="" />
                <div className="" />
                <div className="" />
                <div className="" />
              </div>
            </div>
          </div>
          <div className="">
            <img
              alt=""
              className=""
             
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              alt=""
              className=""
           
            />
          </div>
          <div className="">
            <img
              alt=""
              className=""
             
            />
          </div>
          <div className="">
            <div className="">
              <img
                alt=""
                className=""
                />
              <p className="">PG</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              alt=""
              className=""
              src=""
            />
          </div>
          <img
            alt=""
            className=""
            src="https://static.overlay-tech.com/assets/aa20574f-6ebc-456b-989d-4fe9ae8c8fb6.png"
          />
          <img
            alt=""
            className=""
            src="https://static.overlay-tech.com/assets/e13f1cad-1c26-4179-8079-f88016b36c36.svg"
          />
        </div>
        <p
          className=""
        >
          Upload your property in 4 semple steps
        </p>
        <div className="">
          <p
            className=""
          >
            By uploading my property i agree to term and
            condition
          </p>
          <div className="" />*/