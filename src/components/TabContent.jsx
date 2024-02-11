import checkmark from "../assets/checkmark.svg";
import pmoHeadshot from "../assets/pmo-headshot.png";
import fiveStars from "../assets/five stars.svg";
import detailIcon1 from "../assets/detail-icon1.svg";
import detailIcon2 from "../assets/detail-icon2.svg";
import detailIcon3 from "../assets/detail-icon3.svg";
import detailIcon4 from "../assets/detail-icon4.svg";
import badgeIcon from "../assets/badge.svg";


const TabContent = () => {
  return (
    <div className="tab-content flex mx-auto border border-[#CECEEA] rounded-lg overflow-hidden">
        <div className="text p-10 flex flex-col gap-4">
           <div className="text-darked font-extrabold text-[20px]">Deliver projects on time, every time</div>
           <p className="text-darked max-w-[40ch] font-medium text-[16px]">Get teams running more efficiently with a complete project management solution.</p>
           <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-darked font-medium text-[16px]"><img src={checkmark} alt="checkmark-icon" /> <span>Reduce delivery time with custom templates</span></li>
            <li className="flex items-center gap-2 text-darked font-medium text-[16px]"><img src={checkmark} alt="checkmark-icon" /> <span>Reduce delivery time with custom templates</span></li>
            <li className="flex items-center gap-2 text-darked font-medium text-[16px]"><img src={checkmark} alt="checkmark-icon" /> <span>Reduce delivery time with custom templates</span></li>
           </ul>
           <div className="flex gap-6 items-center m-4">
            <div className="self-center">
            <img src={pmoHeadshot} height={'120px'} width={'120px'} alt="headshot-image" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <img src={fiveStars} alt="five-stars" />
                    <img src={fiveStars} alt="firm-icon" />
                </div>
                <p className="max-w-[45ch]"><span className="font-[700] text-[16px] text-darked">&quot;ClickUp brings all of our teams together into one place</span> so that they can stay on track, collaborate and communicate &quot;</p>
            </div>
           </div>
        </div>
        <div className="solution flex flex-col gap-8 py-4 px-8">
            <div className="">
              <ul className="flex flex-col gap-4 bg-white border border-[#CECEEA] rounded-xl">
                <li className="flex items-center gap-4 border-b border-[#CECEEA] p-2"><img className="bg-[#F8F8FC] p-2 rounded-full" src={detailIcon1} alt="detail-icon"/><span className="text-darked text-[16px] font-medium">Flexible workflow for every team</span></li>
                <li className="flex items-center gap-4  border-b border-[#CECEEA] p-2"><img className="bg-[#F8F8FC] p-2 rounded-full" src={detailIcon2} alt="detail-icon"/><span className="text-darked text-[16px] font-medium">Tasks, docs, spreadsheets, and more</span></li>
                <li className="flex items-center gap-4  border-b border-[#CECEEA] p-2"><img className="bg-[#F8F8FC] p-2 rounded-full" src={detailIcon3} alt="detail-icon"/><span className="text-darked text-[16px] font-medium">Resource and workload optimization</span></li>
                <li className="flex items-center gap-4  border-b border-[#CECEEA] p-2"><img className="bg-[#F8F8FC] p-2 rounded-full" src={detailIcon4} alt="detail-icon"/><span className="text-darked text-[16px] font-medium">Dashboards and insights</span></li>
              </ul>
            </div>
            <div className="border relative w-full">
                <img className="absolute right-4 -top-8" src={badgeIcon} alt="badge" />
                <button className="solution-button">Use this Solution &rarr;</button>
            </div>

        </div>
      
    </div>
  )
}

export default TabContent
