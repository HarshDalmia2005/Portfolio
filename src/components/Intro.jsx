import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import myimg from '../assets/HD.jpeg';
import Quote from './Quote';
import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";

const Intro = () => {
    const [typeStatus, setTypeStatus] = useState(false);
    const [typeStatus2, setTypeStatus2] = useState(false);
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    return (
        <div className='flex flex-col lg:flex-row w-full px-4 py-10 gap-10'>
            <div className="info flex flex-col items-center lg:items-start lg:ml-10 pt-10 space-y-5 w-full lg:w-1/2">
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        `Hello, I'm HARSH DALMIA`,
                        (el) => el.classList.remove(CURSOR_CLASS_NAME),
                        1000,
                        () => { setTypeStatus(true); }
                    ]}
                    className={CURSOR_CLASS_NAME}
                    wrapper='span'
                    speed={40}
                    style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}
                    repeat={0}
                />
                <span className='text-yellow-400 font-extrabold text-3xl lg:text-4xl'>
                    <i>
                        {typeStatus && <TypeAnimation
                            sequence={[
                                `Student at IIT Kharagpur.`,
                                1000,
                                `Competetive Programmer.`,
                                1000,
                                `Web Developer.`,
                                1000,
                                () => { setTypeStatus2(true); },
                            ]}
                            wrapper="span"
                            speed={40}
                            style={{ whiteSpace: 'pre-line', fontSize: '3rem', display: 'inline-block' }}
                            repeat={Infinity}
                        />}
                    </i>
                </span>
                <Quote typeStatus2={typeStatus2} />
            </div>

            <div className="img w-full lg:w-1/2 flex justify-center items-center">
                <HoverCard scaleFactor={0.5} className='hov bg-transparent'>
                    <img src={myimg} alt="Profile" className='rounded-full w-60 lg:w-80 shadow-lg bg-transparent' />
                </HoverCard>
            </div>
        </div>
    );
}

export default Intro;
