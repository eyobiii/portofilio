import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84d45525-c5fd-4058-b60b-83c59de5bf26");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent succesfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert('Email not sent');
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
       <div className="contact-title">
           <h1>Get in touch</h1>
           <img src={theme_pattern} alt="" />
       </div>
       <div className="contact-section">
           <div className="contact-left">
            <h1>Let`s talk</h1>
            <p>I am currently available to take on new projects,so feel free to send me a message about anything that you want me to work on. you can contact anytime.</p>
            <div className="contact-details">
               <div className="contact-detail">
                     <img src={mail_icon} alt="" /><p>eyobbelayneh28@gmail.com</p>
               </div>
               <div className="contact-detail">
                     <img src={call_icon} alt="" /> <p>+251966729004</p>
               </div>
               <div className="contact-detail">
                     <img src={location_icon} alt="" /> <p>Addis ababa, ethiopia</p>
               </div>
           </div>
           </div>
           <form onSubmit={onSubmit} action="" className="contact-right">
               <label htmlFor="">Your name</label>
               <input type="text" placeholder='enter your name' name='name' />
               <label htmlFor="">Your Email</label>
               <input type='email' placeholder='enter your email' name='email' />
               <label htmlFor="">Write Your Message Here</label>
               <textarea name="message " rows="8" placeholder='enter your message'></textarea>
               <button className="contact-submit">Submit now</button>
           </form>
       </div>
           
    </div>
  )
}

export default Contact