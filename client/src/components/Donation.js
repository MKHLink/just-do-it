import { QUERY_DONATE } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import React,{useEffect} from 'react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function Donation(){

    const [getCheckout, { data }] = useLazyQuery(QUERY_DONATE);
  
    function submitDonate(){
        getCheckout();
    }
    
    useEffect(() => {
        if (data) {
            console.log(data);
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.donate.session });
              });
        }
      }, [data]);

  return (
    <main>
        <h2>Donate to Devs</h2>
        <p>The donations go to help out with the further development of the website
            <br/>
            Thank you for taking the time to veiw our website!
            <br/>
            If you would like to fund the development of the website, please press the button below
        </p>
        <button onClick={submitDonate}>Donate</button>
    </main>
  );
}

export default Donation;