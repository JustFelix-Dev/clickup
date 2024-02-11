
import  { useState, useEffect } from 'react';
// import bringTeamsBg from "../assets/bring-teams-bg.png"
// import circleBg from from "../assets/bring-team.png"

const ParallaxComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bring-team-container  border ">
      <div className="flex flex-col gap-4 items-center justify-center circle">
        <span className='bring-teams-text'>Bring teams and work together</span>
        <p className='text-custom-base text-[20px] font-extrabold'>Eliminate app chaos. Consolidate tools and cut costs.</p>
        <div className='w-full text-center '>
        <button className='bring-teams-button shadow-lg hover:scale-95 transition-all'> Get Started</button>
        <p className='text-[#7F76B3] mt-2 font-medium text-[14px]'>Free forever.No credit card required.</p>
        <p className='text-[#7F76B3] font-medium text-[14px]'>Join 2+ million teams today!</p>
        </div>
      </div>
      <div className="content" style={{ backgroundPosition: `-${scrollPosition}px 50%` }}>
      </div>
    </div>
  );
};

export default ParallaxComponent;

