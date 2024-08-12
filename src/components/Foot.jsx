import React from 'react';
import { git, insta, linkedin } from '../utils/icons';

const Foot = ({ handleClick1, handleClick2, handleClick3, handleClick4, handleClick }) => {
  return (
    <div className='w-full bg-black/50 py-5'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row text-white">
          <div className="flex-1 mb-4 sm:mb-0 sm:w-1/3">
            <h5 className='font-bold text-white text-lg'>Contact Us</h5>
            <p>Email: harshdalmia20212081@gmail.com</p>
            <p>Phone: +91 6290104831</p>
            <p>Address: IIT Kharagpur, West Bengal, Pin-721302</p>
          </div>
          <div className="flex-1 mb-4 sm:mb-0 sm:w-1/3">
            <h5 className='font-bold text-lg'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a onClick={handleClick} className="text-white hover:underline hover:cursor-pointer">Home</a></li>
              <li><a onClick={handleClick1} className="text-white hover:underline hover:cursor-pointer">Education</a></li>
              <li><a onClick={handleClick2} className="text-white hover:underline hover:cursor-pointer">Skills</a></li>
              <li><a onClick={handleClick3} className="text-white hover:underline hover:cursor-pointer">Projects</a></li>
            </ul>
          </div>
          <div className="flex-1 mb-4 sm:mb-0 sm:w-1/3">
            <h5 className='font-bold text-lg mb-3'>Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/harsh_dalmia2005?igsh=MXZycHhkM3pkYWhjMQ==" className="text-white/80 hover:text-white">{insta}</a>
              <a href="http://www.linkedin.com/in/harsh-dalmia2005" className="text-white/80 hover:text-white">{linkedin}</a>
              <a href="https://github.com/HarshDalmia2005" className="text-white/80 hover:text-white">{git}</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-white">
          <p className='font-bold'>copyrights © 2024 Harsh Dalmia. All Rights Reserved.</p>
          {/* <p>Designed by Your Name</p> */}
        </div>
      </div>
    </div>
  );
}

export default Foot;
