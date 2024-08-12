import React, { forwardRef } from 'react';
import html from '../assets/HTML5.png';
import css from '../assets/CSS3.png';
import js from '../assets/JavaScript.png';
import java from '../assets/Java.png';
import DB from '../assets/MongoDB.png';
import mongoose from '../assets/Mongoose.js.png';
import node from '../assets/Node.js.png';
import opencv from '../assets/OpenCV.png';
import r from '../assets/React.png';
import rbt from '../assets/React Bootstrap.png';
import vjs from '../assets/Vite.js.png';
import Tcss from '../assets/Tailwind CSS.png';
import HoverCard from '@darenft/react-3d-hover-card';
import anaconda from '../assets/Anaconda.png';
import py from '../assets/Python.png';
import fb from '../assets/Firebase.png';
import arduino from '../assets/Arduino.png';
import github from '../assets/GitHub.png';
import '@darenft/react-3d-hover-card/dist/style.css';

const Skill = ({ refer }) => {
    return (
        <div className=' mt-32 px-4 sm:px-10' ref={refer}>
            <h1 className='text-white text-3xl sm:text-5xl text-center font-bold'>Skills</h1>
            <div className='w-full  mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 mx-auto'>
                {[
                    { src: html, label: 'HTML' },
                    { src: css, label: 'CSS' },
                    { src: js, label: 'JavaScript' },
                    { src: java, label: 'Java' },
                    { src: DB, label: 'MongoDB' },
                    { src: mongoose, label: 'Mongoose' },
                    { src: node, label: 'Node JS' },
                    { src: opencv, label: 'OpenCV' },
                    { src: r, label: 'React JS' },
                    { src: rbt, label: 'React Bootstrap' },
                    { src: vjs, label: 'Vite JS' },
                    { src: Tcss, label: 'Tailwind CSS' },
                    { src: anaconda, label: 'Anaconda' },
                    { src: py, label: 'Python' },
                    { src: fb, label: 'Firebase' },
                    { src: arduino, label: 'Arduino' },
                    { src: github, label: 'GitHub' }
                ].map(({ src, label }, idx) => (

                    label == 'GitHub' ? <HoverCard key={idx} scaleFactor={0.5} className='hov bg-transparent'>
                        <img src={src} alt={label} className='w-16 sm:w-20 border border-white rounded-full p-1 invert mx-auto' />
                        {/* <p className='text-white ml-2 sm:ml-4 mt-2 text-sm sm:text-base mx-auto'>{label}</p> */}
                    </HoverCard> : <HoverCard key={idx} scaleFactor={0.5} className='hov bg-transparent text-center'>
                        <img src={src} alt={label} className='w-16 sm:w-20 border border-white rounded-full p-1 mx-auto' />
                        {/* <p className='text-white ml-2 sm:ml-4 mt-2 text-sm sm:text-base mx-auto'>{label}</p> */}
                    </HoverCard>
                ))}
            </div>
        </div>
    );
};

export default forwardRef(Skill);
