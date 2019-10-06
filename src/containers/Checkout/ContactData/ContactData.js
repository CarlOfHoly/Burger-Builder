import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Carl Smestad",
        address: {
          street: "Trondheimveien 1a",
          zipCode: "7300",
          country: "Norway"
        },
        email: "cs@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
        console.log(this.props.history);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Address"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="Zip Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER NOW
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information:</h4>
        {form}
      </div>
    );
  }
}

export default withRouter(ContactData);
