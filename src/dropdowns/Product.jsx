import clickupAI from "../assets/clickupAi.svg";
import clickupArrow from "../assets/clickupArrow.svg";
import taskIcon from "../assets/tasks.svg";
import docIcon from "../assets/Docs.svg";
import goalIcon from "../assets/Goals.svg";
import whiteboardIcon from "../assets/whiteboard.svg";
import dashboardIcon from "../assets/dashboard.svg";
import chatIcon from "../assets/chat.svg";
import featuresIcon from "../assets/features.svg";
import rapidIcon from "../assets/rapid.svg";
import templateIcon from "../assets/template.svg";
import integrationIcon from "../assets/integration.svg";
import clickAppIcon from "../assets/clickApp.svg";
import hierarchyIcon from "../assets/hierarchy.svg";
import automationIcon from "../assets/automations.svg";
import contactIcon from "../assets/contact.svg";


const Product = () => {
  return (
    <div>
     <div className='flex border-t border-b border-gray-300'>
        <div className="w-[55%] border-r border-gray-300">
            <div>PRODUCT</div>
            <div className='flex justify-between relative border border-pink-500 p-4 rounded-xl'>
                <span className="text-pink-400 absolute -top-2 bg-pink-100 py-1 px-2 text-[10px] rounded-full">NEW</span>
             <img src={clickupAI} alt="ai-image" />
             <div className="flex gap-2 ">
                <span className="text-[14px] text-darked font-medium">The only AI solution that&apos;s custom built for you</span>
                <img src={clickupArrow} alt="clickup-arrow" height={5} width={15} />
             </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={taskIcon} className="pt-1 self-start" alt="task-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Tasks</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">Break down any size projects into customizable tasks</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={docIcon}className="pt-1 self-start" alt="doc-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Docs</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Create beautiful docs and connect them to tasks.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={goalIcon} className=" pt-1 self-start" alt="goal-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Goals</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Track work against strategy with measurable targets.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={whiteboardIcon} className="pt-1 self-start" alt="whiteboard-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Whiteboards</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">Bring team ideas to life with visual collaboration.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={dashboardIcon}className="pt-1 self-start" alt="dashboard-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Dashboards</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Visualize progress with real-time reporting.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={chatIcon} className=" pt-1 self-start" alt="goal-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Chat</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Collaborate with your team in real-time.</p>
                    </div>
                </div>
            </div>
            <button className=" w-full py-2 flex gap-3 items-center justify-center rounded-xl bg-[#F8F8FC]">
                <span className="text-darked font-medium text-[14px]">See All Features</span>
                <img src={featuresIcon} alt="fetures-icon" />
            </button>
        </div>
        <div className="w-[45%]">
            <div>PLATFORM</div>
            <div className="flex  gap-8">
                <div className="flex gap-2">
                    <img src={rapidIcon} className="pt-1 self-start" alt="rapid-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">RapidViews DB</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">A new benchmark for speed and stability.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={templateIcon}className="pt-1 self-start" alt="doc-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Templates</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Save time on project prep with a custom template.</p>
                    </div>
                </div>
               
            </div>
            <div className="flex  gap-8">
                <div className="flex gap-2">
                    <img src={integrationIcon} className="pt-1 self-start" alt="integration-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Integrations</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">Connect your favorite apps to your workflow.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={clickAppIcon}className="pt-1 self-start" alt="clickApp-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">ClickApps</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Add even more custom tools to your workflow.</p>
                    </div>
                </div>  
            </div>
            <div className="flex  gap-8">
                <div className="flex gap-2">
                    <img src={hierarchyIcon} className="pt-1 self-start" alt="task-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Hierarchy</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">See the big picture without missing the details.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <img src={automationIcon}className="pt-1 self-start" alt="automation-icon" />
                    <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Automations</span>
                    <p  className="text-[12px]  max-w-[22ch] font-medium text-darked ">Put your routine busywork on autopilot.</p>
                    </div>
                </div>
               
            </div>
        </div>
     </div>
     <div>
        <div className="flex gap-2" >
            <img src={contactIcon} className="pt-1 self-start bg-purple-600 p-2 rounded-xl" alt="contact-icon" />
            <div className="flex flex-col gap-1">
                    <span className="text-darked font-[600] text-[14px]">Contact Us</span>
                    <p className="text-[12px] max-w-[22ch] font-medium text-darked ">A new benchmark for speed and stability.</p>
                    </div>
        </div>
     </div>
    </div>
  )
}

export default Product
