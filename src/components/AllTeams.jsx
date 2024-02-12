import finistraRepImage from "../assets/finastra-rep.png";
import cnRepImage from "../assets/cartoon-network-rep.png";
import pressedRepImage from "../assets/pressed-rep.png";
import ImageCard from "./ImageCard";

const AllTeams = () => {
  return (
    <div className="all-teams mt-20">
        <header>All teams love ClickUp</header>
        <p className="text-[20px] text-center text-darked font-[700]">Teams love how ClickUp helps them get things done efficiently.</p>
        <p className="text-[20px] text-center text-darked ">But don’t take our word for it, hear it directly from them.</p>
         <div className="rep-team flex ">
            <ImageCard image={finistraRepImage} />
            <ImageCard image={cnRepImage} />
            <ImageCard image={pressedRepImage} />
         </div>
    </div>
  )
}

export default AllTeams
