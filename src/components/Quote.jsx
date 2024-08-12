import Card from 'react-bootstrap/Card';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function Quote({typeStatus2}) {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
  return (
    <Card className='bg-transparent my-5 text-white text-xl' style={{ width: "45rem" }}>
      <Card.Body>
        <motion.div>
          {typeStatus2 && <TypeAnimation
            cursor={false}
            splitter={(str) => str.split(/(?= )/)} 
            className={CURSOR_CLASS_NAME}
            sequence={[
              `I am a 2nd year undergraduate at IIT Kharagpur.Technology excites me and\nmy passion for technology is an unceasing source of inspiration,driving my\ncuriosity and innovation.For the skills I lack,I embrace continuous learning to\ntransform my weaknesses into strengths,bridging any gaps in my expertise.`,
              (el) => el.classList.remove(CURSOR_CLASS_NAME),
              1000,
            ]}
            speed={40}
            style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
            repeat={0}
          />}
        </motion.div>
      </Card.Body>
    </Card>
  );
}

export default Quote;