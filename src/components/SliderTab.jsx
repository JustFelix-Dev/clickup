import { useState } from "react";
import DocsIcon from "../assets/DocsTab.svg";
import TimeIcon from "../assets/TimeTab.svg";
import ChatIcon from "../assets/ChatTab.svg";
import whiteboardIcon from "../assets/whiteboardTab.svg";
import projectIcon from "../assets/projectTab.svg";
import dashboardIcon from "../assets/DashboardTab.svg";
import AIIcon from "../assets/AITab.svg";
import formIcon from "../assets/FormTab.svg";
import sprintIcon from "../assets/SprintTab.svg";
import DocsImage from "../assets/docsImage.png";
import TimeImage from "../assets/timeImage.png";
import chatImage from "../assets/chatImage.png";
import whiteboardImage from "../assets/whiteboardImage.png";
import projectImage from "../assets/projectImage.png";
import dashboardImage from "../assets/dashboardImage.png";
import aiImage from "../assets/aiImage.png";
import formsImage from "../assets/formsImage.png";
import sprintImage from "../assets/sprintImage.png";
import clickUpLine from "../assets/clickup-line.png";


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('Projects');

  return (
    <div className="slidetab-container  mt-44 flex flex-col gap-6">
    <div className="slidetabs flex justify-center gap-6 mx-auto">
      <button className={ activeTab === 'Docs' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Docs')}>
        <div>
        <img src={DocsIcon} alt="docs-icon" loading='lazy' /> 
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">Docs</span>
      </button>
      <button className={ activeTab === 'Time' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Time')}>
        <div>
       <img src={TimeIcon} alt="time-icon" loading='lazy' />
        </div>
       <span className="text-[15px] font-medium text-[#7B73AE]">Time Tracking</span>
      </button>
      <button className={ activeTab === 'Chat' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Chat')}>
        <div>
        <img src={ChatIcon} alt="location-icon" loading='lazy' />
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">Chat</span>
      </button>
      <button className={ activeTab === 'WhiteBoard' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('WhiteBoard')}>
        <div>
        <img src={whiteboardIcon} alt="location-icon" loading='lazy' />
        </div>
     <span className="text-[15px] font-medium text-[#7B73AE]">WhiteBoard</span>
      </button>
      <button className={ activeTab === 'Projects' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Projects')}>
        <div>
        <img src={projectIcon} alt="project-icon" loading='lazy' />
        </div>
     <span className="text-[15px] font-medium text-[#7B73AE]">Projects</span>
      </button>
      <button className={ activeTab === 'Dashboard' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Dashboard')}>
        <div>
      <img src={dashboardIcon} alt="dashboard-icon" loading='lazy' />
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">Dashboards</span>
      </button>
      <button className={ activeTab === 'AI' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('AI')}>
        <div>
      <img src={AIIcon} alt="ai-icon" loading='lazy' />
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">AI</span>
      </button>
      <button className={ activeTab === 'Forms' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Forms')}>
        <div>
      <img src={formIcon} alt="ai-icon" loading='lazy' />
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">Forms</span>
      </button>
      <button className={ activeTab === 'Sprints' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Sprints')}>
        <div>
      <img src={sprintIcon} alt="sprint-icon" loading='lazy' />
        </div>
      <span className="text-[15px] font-medium text-[#7B73AE]">Sprints</span>
      </button>
    </div>
      <div className="slidetab-content w-[90%] mx-auto">
       {activeTab === 'Docs' && <div><img src={DocsImage} alt="" /></div>}
       {activeTab === 'Time' && <div><img src={TimeImage} alt="" /></div>}
       {activeTab === 'Chat' && <div><img src={chatImage} alt="" /></div>}
       {activeTab === 'WhiteBoard' && <div><img src={whiteboardImage} alt="" /></div>}
       {activeTab === 'Projects' && <div><img src={projectImage} alt="" /></div>}
       {activeTab === 'Dashboard' && <div><img src={dashboardImage} alt="" /></div>}
       {activeTab === 'AI' && <div><img src={aiImage} alt="" /></div>}
       {activeTab === 'Forms' && <div><img src={formsImage} alt="" /></div>}
       {activeTab === 'Sprints' && <div><img src={sprintImage} alt="" /></div>}
      </div>
      <div>
        <img src={clickUpLine} alt="click-up" />
      </div>
    </div>
  )
}

export default TabComponent
