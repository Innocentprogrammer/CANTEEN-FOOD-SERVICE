import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
    const navigate=useNavigate();
   const {getTotalCartAmount}=useContext(StoreContext);
     
  return (
    <form className='place-order'>
        <div className="place-order-left">
           <p className='title'>Delivery Information</p>
           <div className="multi-fields">
              <input type="text" placeholder='First name' required/>
              <input type="text" placeholder='Last name'required/>
           </div>
           <input type="email" placeholder='Email address'required/>
           <input type="text" placeholder='Phone no.' maxLength={10} required/>
           <select style={{marginBottom:'12px'}}>
                <option value='inital'>Select Address for Delivey</option>
                <option value='MCA311'>MCA311</option>
                <option value='MCA310'>MCA310</option>
                <option value='310'>310</option>
                <option value='309'>309</option>
                <option value='308'>308</option>
                <option value='Bhostel'>Boyes Hostel</option>
                <option value='Ghostel'>Girl Hostel</option>
                <option value='Guhostel'>Guest Hostel</option>
                <option value='Fhostel'>Faculty Hostel</option>
                <option value='FRhostel'>Faculty Residence</option>
           </select>
           <p style={{marginBottom:'12px'}}>------OR------</p>
           <input type='text' placeholder='Provide Time Slots for Takeaway'/>
           {/* <input type="text" placeholder='Street' /> */}
           {/* <div className="multi-fields">
              <input type="text" placeholder="Zip code"/>
              <input type="text" placeholder='Country'/>
           </div>
           <input type="text" placeholder='Phone'/> */}
        </div>
        <div className="place-order-right">
        <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{getTotalCartAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                    </div>        
                </div>
                <Link to='/payment'><button type='submit' onClick={()=>navigate('/payment')}>PROCEED TO PAYMENT</button></Link> 
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder