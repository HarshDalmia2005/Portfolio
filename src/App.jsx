import { useRef, useEffect } from 'react';
import bg from './assets/bg.jpg';
import { motion, useInView, useAnimation } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Education from './components/Education';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Foot from './components/Foot';

function App() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scroll = useRef(null);

  const handleClick1 = () => {
    scrollRef1.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick2 = () => {
    scrollRef2.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick3 = () => {
    scrollRef3.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick4 = () => {
    scrollRef4.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClick = () => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className='min-h-screen min-w-max bg-black bg-cover bg-center bg-no-repeat relative'
      style={{ backgroundImage: `url(${bg})`, position: 'relative' }}
    >
      <Header
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
        refer={scroll}
      />
      <motion.div>
        <Intro />
      </motion.div>
      <Education refer={scrollRef1} />
      <Skill refer={scrollRef2} />
      <Project refer={scrollRef3} />
      <Contact refer={scrollRef4} />
      <Foot
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
        handleClick={handleClick}
      />
      <button
        id='backToTop'
        className='fixed bottom-4 right-4 p-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-110'
        style={{ display: 'none' }}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
