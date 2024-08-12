import React, { forwardRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = ({ refer }) => {
    return (
        <div className='sm:w-full w-[80%] mt-36 px-4 md:px-10 mx-auto' ref={refer}>
            <p className='text-white font-bold text-3xl md:text-5xl text-center mb-10'>Education</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="MARCH 2021"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">Indian Certificate of Secondary Education (ICSE)</h3>
                    <h4 className='text-center'>Agrasain Boys' School</h4>
                    <p className='font-bold text-center'>98.8%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="JANUARY 2023"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">Joint Entrance Examination Mains (JEE Mains)</h3>
                    <h4 className='text-center'>99.51 %ile</h4>
                    <p className='font-extrabold text-center'>AIR 5735 (Among 12 lakh students)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="MARCH 2023"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">Indian School Certificate (ISC)</h3>
                    <h4 className='text-center'>Agrasain Boys' School</h4>
                    <p className='font-extrabold text-center'>93.75%</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="MAY 2023"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">West Bengal Joint Entrance Examination (WBJEE)</h3>
                    <p className='font-extrabold text-center'>AIR 489 (Among 1.2 lakh students)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="JUNE 2023"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">Joint Entrance Examination Advanced (JEE Advanced)</h3>
                    <p className='font-extrabold text-center'>AIR 4859 (Among 2 lakh students)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'blue', color: '#fff' }}
                    className="vertical-timeline-element--education text-white"
                    date="JULY 2024"
                    iconStyle={{ background: 'blue', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title text-center font-bold">Indian Institute Of Technology, Kharagpur</h3>
                    <p className='font-extrabold text-center'>CGPA 8.92</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default forwardRef(Education);
