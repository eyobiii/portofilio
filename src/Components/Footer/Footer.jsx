import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
       
       <div className="footer-top">
         
         <div className="footer-top-left">
             
           <div className="footer-logo">
           <h1>EYobi</h1>
           <img src={theme_pattern} alt="" />
           </div>
            <p>I`am a frontend developer from, ethiopia with 2+ years of experiancce in companies like INSA,NGT and intertechhub </p>

         </div>
           <div className="footer-top-right">
               <div className="footer-email-input">
                   <img src={user_icon} alt="" />
                   <input type="email" placeholder='enter your email' />
               </div>
               <div className="footer-subscribe">subscribe</div>
           </div>

       </div>
       <hr />
       <div className="footer-bottom">
          <p className='footer-bottom-left'>©eyobii2025 Eyob Belayneh. All rights</p>
          <div className="footer-bottom-right">
               <p>Terms of service</p>
               <p>Privacy policy</p>
               <p>connect with me </p>
                
          </div>
       </div>
           
    </div>
  )
}

export default Footer