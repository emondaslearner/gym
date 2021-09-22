import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import card1 from '../Image/credit-cards_amex.png'
import card2 from '../Image/credit-cards_mastercard.png'
import card3 from '../Image/credit-cards_visa.png'
import './Payment.css'
import { useState } from 'react';
import {
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JKxuGEHeCT3zsm1ElIngWKC38AecyKTVgMjeeBtPNc8tvoqwvqCeWiMYcYmopX9emEyTOklmLfDFMq9JvaEk6uU00Qm6YQcOZ');

const Wrapper = (props) => (
  <Elements stripe={stripePromise}>
    <Payment {...props}/>
  </Elements>
);

const Payment = (props) => {
  const [err,setError] = useState('');
  
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setError(error.message);
    } else {
      setError('')
      props.setStatus(3)
      props.success()
    }
  };
  return (
      <div className="checkOut">
        <div className="row head">
          <div className="d-flex col-5">
            <input checked type="radio"/>
            <h6>Credit Card</h6>
          </div>
          <div className="col-7 cardImg">
            <img className="img-fluid" src={card1} alt=""/>
            <img className="img-fluid" src={card2} alt=""/>
            <img className="img-fluid" src={card3} alt=""/>
          </div>
        </div>
        <p>Safe money transfer using your bank account.</p>
        <CardElement className="StripeElement"
          options={{
              style: {
              base: {
                  fontSize: '16px',
                  border: '1px solid red',
                  color: '#424770',
                  '::placeholder': {
                  color: '#aab7c4',
                  },
              },
              invalid: {
                  color: '#9e2146',
                  border:'1px solid #ddd'
              },
              },
              border:'1px solid red'
          }}
          />
          <div className="paymentButton">
            <a href="" onClick={handleSubmit} disabled={!stripe} className="btn commonButton" ><span>PAY</span></a>
          </div>
          <p className="error text-center">{err != '' && err}</p>
      </div>
  );
};


export default Wrapper;