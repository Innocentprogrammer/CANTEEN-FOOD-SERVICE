import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        {/* <p>For better Experience Download<br />Canteen Food Services</p> */}
        <div className="app-download-platforms">
            {/* <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" /> */}
            <div className='canteen'>
              <img src={assets.play_store} alt="" />
              <p>About this canteen website</p>
            </div>
            <div className='feedback'>
              <img src={assets.app_store} alt="" />
              <p>About this feedback website</p>
            </div>
        </div>
    </div>
  )
}

export default AppDownload