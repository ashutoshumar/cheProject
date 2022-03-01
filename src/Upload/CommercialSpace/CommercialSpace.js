
import React ,{Component} from 'react'
import { BasicDetails } from '../BasicDetails';
import { CommPricingInfo } from './CommPricingInfo';
import { CommextraInfo } from './CommextraInfo';
import { UploadPic } from '../UploadPic';
import { PropertyType } from '../PropertyType';
export default class CommercialSpace extends Component {

    state = {
        step: 1,       
        name: '',
        email: '',
        phone:'',
        property_name:"",
        city: '',
        pinCode:'',
        fullAddress:'',
        rent_per_Squarefoot:'',
        security_money:'',
        maintenance_charge:'',
        electric_charge:'',
        termination_charge:'',
        other_charges:"",
        est_tot_charge_per_month:'',
        dis_from_road:'',
        furnishingStatus:'',
        availabilityStatus:'',
        suitable_for:'',
        floorStatus:'',
        amenities:'',
        description:'',
        pic_url:''
      };

        // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
render() {
    const { step } = this.state;
    const {  property_name,  name, email,phone, pinCode, city, fullAddress,  rent_per_Squarefoot,security_money,maintenance_charge, electric_charge,termination_charge, other_charges,est_tot_charge_per_month, dis_from_road, preferredTenants,numbersOfBathRoom,furnishingStatus, availabilityStatus, floorStatus, amenities, suitable_for,description,pic_url} = this.state;
    const values = {  property_name,  name, email,phone, pinCode, city, fullAddress,  rent_per_Squarefoot,security_money,maintenance_charge, electric_charge,termination_charge, other_charges,est_tot_charge_per_month, dis_from_road, preferredTenants,numbersOfBathRoom,furnishingStatus, availabilityStatus, floorStatus, amenities, suitable_for,description,pic_url};

    switch (step) {
        
        case 1:
          return (
            <BasicDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              
            />
          );
        
       case 2:
         return(
           <div>
             
              <CommPricingInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}/>
           </div>
          
           
         )
         case 3:
          return(
            <div>
             
              <CommextraInfo
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
              />
            </div>
           
            
          )
          case 4:
            return(
              <div>
               
                <UploadPic
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                />
              </div>
             
              
            )
             
              
            
        default:
          (console.log('This is a multi-step form built with React.'+values.propertyType+'hii'))
    }
}
}
