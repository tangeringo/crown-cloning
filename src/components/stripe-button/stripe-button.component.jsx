import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.style.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableApiKey = 'pk_test_51KEX2rKDqxO1AAP3V4yuAGW0ZVqmNiAgK0VDAjTTNRN3kCMRI9bZGi2iTwXUhePayYSd5EmxBTdCXMNR0EPDHmoY00yERUY7vb'

    const onToken = token => {
        console.log(token)
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            className="button"
            label="Pay Now"
            name="Crown-Cloning"
            billingAddress
            shippingAdress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now $"
            token={onToken}
            stripeKey={publishableApiKey}
        />
    )
}

export default StripeCheckoutButton;