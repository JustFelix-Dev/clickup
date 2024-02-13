import contactIcon from "../assets/contact.svg";
import softwareIcon from "../assets/software.svg";
import marketingIcon from "../assets/marketingsvg.svg";
import itIcon from "../assets/IT.svg";
import engineeringIcon from "../assets/engineeringsvg.svg";
import designIcon from "../assets/design.svg";
import operationsIcon from "../assets/operations.svg";
import projectIcon from "../assets/project.svg";
import remoteIcon from "../assets/remote.svg";
import crmIcon from "../assets/crm.svg";
import enterpriseIcon from "../assets/enterprise.svg";
import startupIcon from "../assets/startup.svg";
import nonProfitIcon from "../assets/non-profit.svg";
import seeAllIcon from "../assets/seeAll.svg";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="flex border-t border-b  border-gray-300">
      <div className="w-[55%] border-r flex flex-col gap-10 pb-12 pt-8 pl-4 pr-2 pb-4 border-gray-300">
            <div className="text-[15px] font-extrabold text-darked">TEAM</div>
            <div className="flex flex-col gap-16 pl-4 pr-2">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={softwareIcon} className="pt-1 self-start" alt="software-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Software Development</span>
                    <p className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Manage product roadmap from ideation to release.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={marketingIcon}className="pt-1 self-start" alt="marketing-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Marketing</span>
                    <p  className="text-[14px]  max-w-[22ch] font-medium text-gray-500 ">Collaborate on campaigns,clients,content, and more.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={itIcon} className=" pt-1 self-start" alt="it-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">IT and PMO</span>
                    <p  className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Consolidate tools and unlock visibility across teams.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={engineeringIcon} className="pt-1 self-start" alt="whiteboard-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Engineering</span>
                    <p className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Organize roadmaps,sprints,backlogs, and more.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={designIcon}className="pt-1 self-start" alt="design-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Design</span>
                    <p  className="text-[14px]  max-w-[22ch] font-medium text-gray-500 ">Streamline design workflows,files, and feedback.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={operationsIcon} className=" pt-1 self-start" alt="operations-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Operations</span>
                    <p  className="text-[14px]  max-w-[22ch] font-medium text-gray-500 ">Streamline workflows to increase business efficiency.</p>
                    </div>
                </div>
            </div>
            </div>
            <button className=" w-full py-2 flex gap-3 items-center justify-center rounded-xl bg-pink-100">
                <span className="text-gray-700 font-medium text-[16px]">See All</span>
                <img src={seeAllIcon} alt="fetures-icon" />
            </button>
        </div>
        <div className="border-r border-gray-300 pt-8 pl-4 pr-4 pb-4">
        <div className="text-[15px] font-extrabold text-darked">USE CASE</div>
            <div className="flex  flex-col gap-10 pt-10">
                <div className="flex gap-2">
                    <img src={projectIcon} className="pt-1 self-start" alt="project-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Project Management</span>
                    <p className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Manage and track projects of any type and size.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={remoteIcon}className="pt-1 self-start" alt="remote-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Remote Work</span>
                    <p  className="text-[14px]  max-w-[22ch] font-medium text-gray-500 ">Stay on the same page even if you&apos;re not in the room.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={crmIcon} className=" pt-1 self-start" alt="it-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">CRM</span>
                    <p  className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">All your clients and all their info in one place.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-8 pl-4 pr-2 pb-4">
        <div className="text-[15px] font-extrabold text-darked">TYPE</div>
            <div className="flex  flex-col gap-10 pt-10">
                <div className="flex gap-2">
                    <img src={enterpriseIcon} className="pt-1 self-start" alt="project-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Enterprise</span>
                    <p className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Align your organization toward company-wide goals.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={startupIcon} className="pt-1 self-start" alt="remote-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Startup</span>
                    <p  className="text-[14px]  max-w-[22ch] font-medium text-gray-500 ">Iterate quickly with a system that scales as you grow.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={nonProfitIcon} className=" pt-1 self-start" alt="it-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-gray-700 font-[600] text-[16px]">Non-Profit</span>
                    <p  className="text-[14px] max-w-[22ch] font-medium text-gray-500 ">Save time working, spend more-time saving the world.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="px-8 py-6">
        <div className="flex gap-2" >
            <img src={contactIcon} className="pt-1 self-start bg-purple-600 p-2 rounded-xl" alt="contact-icon" />
            <div className="flex flex-col gap-1">
            <span className="text-darked font-[600] text-[16px]">Contact Us</span>
            <p className="text-[14px] max-w-[22ch] font-medium text-darked ">A new benchmark for speed and stability.</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Solutions
