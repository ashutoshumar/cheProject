import React, { Component } from 'react'
import { BasicDetails } from '../BasicDetails';
export default class Marriagehall extends Component {
    state = {
        step: 1,       
        name: '',
        email: '',
        phone:'',
        property_name:"",
        city: '',
        pinCode:'',
        fullAddress:'',
       starting_price_veg_per_plate:'',
       maximum_price_veg_per_plate:'',
       starting_price_nonveg_per_plate:'',
       maximum_price_nonveg_per_plate:'',
       starting_price_rental_per_day:'',
       maximum_price_rental_per_day:'',
       advance_deposite:'',
       cancellation_charge:'',
       starting_decoration_charge:'',
       maximum_decoration_charge:'',
        other_charges:"",
        est_tot_charge_per_month:'',
      hall_area:'',
      maximum_capacity:'',
       hall_situated_in:'',
        suitable_for:[],
       no_of_acrooms:'',
       no_of_non_acrooms:'',
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
  handleChange1 = (input,value)  => {
    this.setState({ [input]: value });
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
    const {  property_name,  name, email,phone, pinCode, city, fullAddress,  starting_price_veg_per_plate,  maximum_price_veg_per_plate, starting_price_nonveg_per_plate,maximum_price_nonveg_per_plate, starting_price_rental_per_day, maximum_price_rental_per_day,  advance_deposite, cancellation_charge, starting_decoration_charge,  maximum_decoration_charge, other_charges,est_tot_charge_per_month,  hall_area,   maximum_capacity, hall_situated_in, no_of_acrooms, no_of_non_acrooms, amenities, suitable_for,description,pic_url} = this.state;
    const values = {  property_name,  name, email,phone, pinCode, city, fullAddress,  starting_price_veg_per_plate,  maximum_price_veg_per_plate, starting_price_nonveg_per_plate,maximum_price_nonveg_per_plate, starting_price_rental_per_day, maximum_price_rental_per_day,  advance_deposite, cancellation_charge, starting_decoration_charge,  maximum_decoration_charge, other_charges,est_tot_charge_per_month, hall_area,   maximum_capacity, hall_situated_in, no_of_acrooms, no_of_non_acrooms, amenities, suitable_for,description,pic_url};

    switch (step) {
        
        case 1:
          return (
            <BasicDetails
              header="Marriage Hall"
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              
            />
          );
      
              
            
        default:
          (console.log('This is a multi-step form built with React.'+values.propertyType+'hii'))
    }
  }
}
