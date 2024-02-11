
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
      <div className="flex items-center justify-center circle">
        <span>Hello World</span>
      </div>
      <div className="content" style={{ backgroundPosition: `-${scrollPosition}px 50%` }}>
      </div>
    </div>
  );
};

export default ParallaxComponent;

