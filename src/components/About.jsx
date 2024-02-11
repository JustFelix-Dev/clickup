import aboutImage1 from "../assets/about-image-1.png"
import aboutImage2 from "../assets/about-image-2.png"
import fortinetLogo from "../assets/fortinet.svg"
import logitechLogo from "../assets/logitech.svg"
import bookingLogo from "../assets/booking.svg"
import ibmLogo from "../assets/Ibm.svg"
import netflixLogo from "../assets/Netflix.svg"
import shopifyLogo from "../assets/shopify.svg"
import tibcLogo from "../assets/Tibc.svg"
import tMobileLogo from "../assets/T-mobile.svg"
import ParallaxComponent from "./ParallaxComponent"



const About = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center  text-center">
      <div className="border w-full about-header">Save time and get more done</div>
      <span className="text-[#24223E] flex  max-w-[32ch] text-[20px] font-medium text-center">Supercharge productivity. Streamline work by doing it, and seeing it, in one place.</span>
      <div className="flex self-stretch relative text-left pl-12">
        <div>
            <header className="improve-collab">Improve collaboration</header>
            <p className="text-[16px]  max-w-[50ch] font-medium text-custom-base text-left"><span className="font-[800] text-custom-base">Get your teams working together more closely, even if they&apos;re far apart.</span> Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.</p>
             <div className="flex gap-3 my-6">
                <span className="border  border-[#CECEEA] py-[4px] px-[11px] text-[#292D34] rounded-lg">Comments</span>
                <span className="border border-[#CECEEA] py-[4px] px-[11px] text-[#292D34] rounded-lg">Docs</span>
                <span className="border border-[#CECEEA] py-[4px] px-[11px] text-[#292D34] rounded-lg">Whiteboards</span>
                <span className="border border-[#CECEEA] py-[4px] px-[11px] text-[#292D34] rounded-lg">Clips</span>
             </div>
             <div className="text-[40px] opacity-60 text-[#7F76B3] font-extrabold  pt-4">Enhance visibility</div>
             <div className="text-[40px] opacity-60 text-[#7F76B3] font-extrabold pt-4">Automate work</div>
        </div>
         <div>
            <div className="absolute -right-[320px]">
                <img  className="about-image-1" src={aboutImage1}   alt="about-image-one" />
            </div>  
            <img className="absolute top-28 right-[380px]" src={aboutImage2} alt="about-image-two" />
         </div>
      </div>

    </div>
    <div className=" companies-bg  pt-12 mt-[200px] ">
        <div className="font-extrabold text-center my-4 text-[#24223E]">Over 2+ million teams rely on ClickUp to collaborate and get work done. <button className="font-extrabold text-[#24223E] py-[8px] px-[10px] bg-[#F1F1F9] rounded-xl">Join them</button></div>
        <div className="logos flex items-center justify-center mb-52 mt-8 gap-8">
       <div>
        <img src={fortinetLogo} alt="" />
       </div>
       <div>
        <img src={logitechLogo} alt="" />
       </div>
       <div>
        <img src={bookingLogo} alt="" />
       </div>
       <div>
        <img src={ibmLogo} alt="" />
       </div>
       <div>
        <img src={tibcLogo} alt="" />
       </div>
       <div>
        <img src={shopifyLogo} alt="" />
       </div>
       <div>
        <img src={netflixLogo} alt="" />
       </div>
       <div>
        <img src={tMobileLogo} alt="" />
       </div>
        </div>

    </div>

    <ParallaxComponent/>
    </>
  )
}

export default About
