import React, { useContext, useState } from 'react'
import './PaymentForm.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const AdvancePaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {getTotalCartAmount}=useContext(StoreContext);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic here to handle form submission (e.g., sending data to backend)
      setIsSubmitted(true);
    };
  
    return (
      <div>
        {isSubmitted ? (
          // <p>Payment of Rs{amount} via {paymentMethod} is successfully submitted!</p>
          
          <p>
            <h2>Order Id: #63f26dfed0fcccfba95ae0a5</h2> <br/>
          <b>Date:</b>Sat,May 04,2024 at 08:10:15 AM <br/>
          <b>Name:</b>Mratyunjay Saxena <br/>
          <b>Address:</b>MCA310 <br/>
          <b>Status:</b>Payed <br/>
          <b>Amount:</b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+2}<br/>
          <b>Payment Id:</b>1RL74060PE52607TW<br/>
          <b>Payment Method:</b>{paymentMethod}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='form'>
            <label className="amount">Amount</label>
            <input
              type="text"
              id="amount"
              // value={amount}
              value={getTotalCartAmount()===0?0:getTotalCartAmount()+2}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
  
            <label className="paymentMethod">Payment Method</label>
            <select style={{marginTop:'15px'}}
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="" className='option'>Select Payment Method</option>
              <option value="UPI ID">UPI ID: mohtashim220ali@oksbi</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              {/* <option value="PayPal">PayPal</option> */}
            </select>
              <p style={{marginTop:'15px'}}>--------OR------</p>
              <img alt='QRCode' src={assets.qrscan} style={{width:'200px', height:'200px'}}/>
              <h4>Scan & Pay Method</h4>
            <button type="submit" className='button'>Submit</button>
          </form>
        )}
      </div>
    );
  };
  
  export default AdvancePaymentForm;