import aiPoweredImage from "../assets/Ai-powered.png";
import workWayImage from "../assets/work-way.png";
import customizeImage from "../assets/customize.png";
import playsWellImage from "../assets/plays-well.png";
import searchImage from "../assets/Search.png";
import stayAheadImage from "../assets/stay-ahead.png"
import trustedImage from "../assets/trusted.png";

const TeamLookOut = () => {
  return (
    <div className='team-lookout flex flex-col items-center justify-center'>
        <header className="max-w-[13ch]" >Everything your team is looking for</header>
         <p className="text-darked text-[20px] max-w-[46ch] text-center font-extrabold">ClickUp&apos;s exceptional flexibility can handle any type of work. <span className="font-normal text-[20px]">And we never stop innovating.</span></p>
         <div className="lookouts flex flex-wrap  justify-center gap-8 my-12">
            <img src={aiPoweredImage} alt="" />
            <img src={workWayImage} alt="" />
            <img src={customizeImage} alt="" />
            <img src={playsWellImage} alt="" />
            <img src={searchImage} alt="" />
            <img src={stayAheadImage} alt="" />
            <img src={trustedImage} alt="" />
         </div>
    </div>
  )
}

export default TeamLookOut
