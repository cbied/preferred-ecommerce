import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { StripeContainer, FormContainer } from './stripe-checkout.styles'

const StripeCheckout = () => {
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 10000 })
    }).then(res => res.json())
    
    console.log(response)

  };

  return (
    <StripeContainer>
        <FormContainer onSubmit={handleSubmit}>
            <CardElement/>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}
            disabled={ !stripe || !elements }>Pay now</Button>
        </FormContainer>
    </StripeContainer>
  );
}

export default StripeCheckout;