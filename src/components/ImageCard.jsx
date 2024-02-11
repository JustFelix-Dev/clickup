
const ImageCard = ({image}) => {
  return (
    <div className="border border-red-600 rounded-xl shadow-md overflow-hidden relative w-full max-w-[385px] h-[500px] mx-auto">
    <img src={image} alt="image" className="w-full h-auto" />
    <div className="details absolute  left-0 right-0 bottom-0 text-white text-center  flex items-center justify-center">
      hello
    </div>
  </div>
  
  )
}

export default ImageCard
