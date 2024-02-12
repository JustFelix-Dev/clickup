import finistraRepImage from "../assets/finastra-rep.png";
import cnRepImage from "../assets/cartoon-network-rep.png";
import pressedRepImage from "../assets/pressed-rep.png";
import finistraLogo from "../assets/card-logo-1.svg";
import cnLogo from "../assets/card-logo-2.svg";
import pressedLogo from "../assets/card-logo-3.svg";


import ImageCard from "./ImageCard";

const AllTeams = () => {
  return (
    <div className="all-teams mt-20">
        <header>All teams love ClickUp</header>
        <p className="text-[20px] text-center text-darked font-[700]">Teams love how ClickUp helps them get things done efficiently.</p>
        <p className="text-[20px] text-center text-darked ">But don’t take our word for it, hear it directly from them.</p>
         <div className="rep-team flex w-[90%] mx-auto my-20">
            <ImageCard image={finistraRepImage} logo={finistraLogo} text='"With ClickUp we&apos;ve seen a 40% improvement in our total go-to-market efficiency!"' />
            <ImageCard image={cnRepImage} logo={cnLogo} text='"ClickUp is our one source of truth for all the details we need - It helps us work faster."' />
            <ImageCard image={pressedRepImage} logo={pressedLogo} text='"ClickUp has helped us 3x our productivity without having to scale our team."' />
         </div>
    </div>
  )
}

export default AllTeams
