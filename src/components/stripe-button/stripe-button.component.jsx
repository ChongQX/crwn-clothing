import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


//stripe wants payment in cents*
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HfTxCA2UkdqaBq9Zchd0j4Aogos7p14uzBTnVcf8bNC782s4csUzfO5r2ymgCc48daqseMWwTQ7YPTXjk1wXt1K00tcbjYmTm';

    const onToken = token => {
        console.log(token);
        alert('Payment OK');
    }

    return(
        <StripeCheckout
        label='PAY UP!!'
        name='BLACK SHOP Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`PAY $${price} LA`}
        amount={priceForStripe}
        panelLabel='PAY UP'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;