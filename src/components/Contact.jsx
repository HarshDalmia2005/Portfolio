import React, { forwardRef, useState } from 'react'
import connect from './Connect.json'
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react'
import { message } from '../utils/icons'
const Contact = ({ refer }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to server or email
    emailjs.sendForm('Harsh2005', 'template_lbjn7wm', e.target, 'gayOyGPvSIHlfnDhX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
      mobile: ''
    });
  };


  return (
    <div className='flex flex-col md:flex-row sm:mr-auto' ref={refer}>
      <div className="left md:w-1/2 w-full mx-auto">
        <Lottie animationData={connect} width={20} height={10}  />
      </div>
      <div className="right md:w-[40%] w-full md:h-1/2 h-full md:mt-[10%] border border-white rounded-2xl mx-auto">
        <h2 className='font-bold text-white text-4xl md:mt-[5%] text-center'>Let's Connect {message}</h2>
        <form className='space-y-5 flex flex-col h-full p-5 items-center' onSubmit={handleSubmit}>
          <input type="text" placeholder='full name' className='p-2 outline-none w-[75%] rounded-2xl' name='name' value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" id="" placeholder='Email' className='p-2 outline-none w-[75%] rounded-2xl' value={formData.email} onChange={handleChange} required />
          <input type="text" name="mobile" id="" placeholder='mobile number' className='p-2 outline-none w-[75%] rounded-2xl' value={formData.mobile} onChange={handleChange} required />
          <textarea name="message" id="" placeholder='your message here' className='p-2 outline-none w-[75%] rounded-2xl' value={formData.message} onChange={handleChange} required></textarea>
          <button className='bg-yellow-400 p-2 font-bold w-[75%] rounded-2xl outline-none'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default forwardRef(Contact)