import fiveStars from "../assets/five stars.svg";
import reviewsFrom from "../assets/reviews-from.svg";

const Hero = () => {
  return (
    <div className=" flex justify-center  text-center mt-20">
      <div className=" text-white flex flex-col items-center gap-6 ">
        <span className="bg-black text-[13px] font-medium rounded-full px-4 py-1">Discover the all-new Clickup 3.0 &rarr;</span>
        <div className=" hero-text">
            One app to replace them all
        </div>
        <div className="flex flex-col">
        <span className="text-[#24223E] text-[23px] font-bold">Get everyone working in a single platform</span>
        <span className="text-[#24223E] font-medium text-[23px]">designed to manage any type of work.</span>
        </div>
        <button className="hero-button shadow-lg">Get Started. It&apos;s FREE &rarr;</button>
        <div className="flex gap-1 items-center p-1">
            <img src={fiveStars} alt="five-stars" />
            <span className="text-[#7f76b3] text-[14px] font-semibold">based on 10,000+ reviews from </span>
            <img src={reviewsFrom} alt="reviews-from-image" />
        </div>

      </div>
    </div>
  )
}

export default Hero
