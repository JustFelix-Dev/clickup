import awardUsability from "../assets/award-usability.png";

const Award = () => {
  return (
    <>
    <div className="award-container flex flex-col gap-8 items-center pt-16">
      <p className="text-darked font-extrabold">95% of users increased their productivity after switching to ClickUp. <button className="bg-[#F1F1F9] rounded-lg py-2 px-4 ml-2 font-[700] text-[14px]">Join them</button></p>
      <div className="awards">
        <img src={awardUsability} alt=""/>
      </div>
    </div>
    
    </>
  )
}

export default Award
