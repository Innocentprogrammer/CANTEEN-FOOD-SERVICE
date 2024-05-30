import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {

   const [menu,setMenu]=useState("home");
    
   const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar'>
      <h3>CANTEEN FOOD SERVICE</h3>
        {/* <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link> */}
        <ul className='navbar-menu'>
          <li><Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link></li>
          <li><a href='#explore-menu' onClick={()=>setMenu("menu")}  className={menu==="menu"?"active":""}>menu</a></li>
          <li><a href='#app-download' onClick={()=>setMenu("mobile-app")}   className={menu==="mobile-app"?"active":""}>service</a></li>
          <li><a href='#footer' onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>contact us</a></li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
           <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            
          </div>
              <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar;