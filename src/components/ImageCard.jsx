import angledArrow from "../assets/angled-arrow.svg";

const ImageCard = ({image,logo,text}) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden relative w-full max-w-[385px] mx-auto">
    <img src={image} alt="image" className="w-full h-auto" />
    <div className="details absolute  left-0 right-0 bottom-0 text-white text-center  flex p-8">
        <div className="text-content flex flex-col gap-4 justify-between">
            <div className="h-[30px]">
        <img src={logo} alt="logo" className="self-start logo "  />
            </div>
        <p className="font-medium text-[20px] text-left">{text}</p>
        <button className="read-story"> <span>Read story</span> <img src={angledArrow} alt="angled-arrow" /></button>
        </div>
    </div>
  </div>
  )
}

export default ImageCard
