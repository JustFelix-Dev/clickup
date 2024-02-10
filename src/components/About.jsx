import aboutImage1 from "../assets/about-image-1.png"
import aboutImage2 from "../assets/about-image-2.png"


const About = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="border about-header">Save time and get more done</div>
      <span className="text-[#24223E] max-w-[32ch] text-[20px] font-medium text-center">Supercharge productivity. Streamline work by doing it, and seeing it, in one place.</span>
      <div className="flex">
        <div>
            <header className="improve-collab">Improve collaboration</header>
            <p className="text-[16px] max-w-[80ch] font-medium text-custom-base text-left"><span className="font-[800] text-custom-base">Get your teams working together more closely, even if they&apos;re far apart.</span> Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.</p>
             <div>
                <span>Comments</span>
                <span>Docs</span>
                <span>Whiteboards</span>
                <span>Clips</span>
             </div>
             <span>Enhance Visibility</span>
             <span>Automate work</span>
        </div>
         <div>
            <div className=" -mr-[450px]">
                <img src={aboutImage1} alt="about-image-one" />
            </div>
            <img className="-mt-[650px] -ml-[100px]" src={aboutImage2} alt="about-image-two" />
         </div>
      </div>

    </div>
  )
}

export default About
