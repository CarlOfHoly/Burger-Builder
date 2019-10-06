import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    }
  }

  orderHandler = () => {

  }

  render() {
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information:</h4>
        <form>
          <input className={classes.Input} type='text' name='name' placeholder='Your name' />
          <input className={classes.Input} type='text' name='email' placeholder='Your email' />
          <input className={classes.Input} type='text' name='street' placeholder='Address' />
          <input className={classes.Input} type='text' name='zipcode' placeholder='Zip Code' />
          <Button btnType='Success' clicked={this.orderHandler}>ORDER NOW</Button>
        </form>

      </div>
    )
  }
}

export default ContactData;