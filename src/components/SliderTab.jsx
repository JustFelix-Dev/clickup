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


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('Project');

  return (
    <div className="slidetab-container flex flex-col gap-6">
    <div className="slidetabs flex w-[80%] gap-4 mx-auto">
      <button className={ activeTab === 'Docs' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Docs')}>
        <div>
        <img src={DocsIcon} alt="docs-icon" loading='lazy' /> 
        </div>
      <span>Docs</span>
      </button>
      <button className={ activeTab === 'Time' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Time')}>
        <div>
       <img src={TimeIcon} alt="time-icon" loading='lazy' />
        </div>
       <span>Time Tracking</span>
      </button>
      <button className={ activeTab === 'Chat' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Chat')}>
        <div>
        <img src={ChatIcon} alt="location-icon" loading='lazy' />
        </div>
      <span>Chat</span>
      </button>
      <button className={ activeTab === 'WhiteBoard' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('WhiteBoard')}>
        <div>
        <img src={whiteboardIcon} alt="location-icon" loading='lazy' />
        </div>
     <span>WhiteBoard</span>
      </button>
      <button className={ activeTab === 'Projects' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Projects')}>
        <div>
        <img src={projectIcon} alt="project-icon" loading='lazy' />
        </div>
     <span>Projects</span>
      </button>
      <button className={ activeTab === 'Dashboard' ? 'slidetab active':'slidetab'}>
        <div>
      <img src={dashboardIcon} alt="dashboard-icon" loading='lazy' />
        </div>
      <span>Dashboards</span>
      </button>
      <button className={ activeTab === 'AI' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('AI')}>
        <div>
      <img src={AIIcon} alt="ai-icon" loading='lazy' />
        </div>
      <span>AI</span>
      </button>
      <button className={ activeTab === 'Forms' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Forms')}>
        <div>
      <img src={formIcon} alt="ai-icon" loading='lazy' />
        </div>
      <span>Forms</span>
      </button>
      <button className={ activeTab === 'Sprints' ? 'slidetab active':'slidetab'} onClick={() => setActiveTab('Sprints')}>
        <div>
      <img src={sprintIcon} alt="sprint-icon" loading='lazy' />
        </div>
      <span>Sprints</span>
      </button>
    </div>
      <div className="slidetab-content">
      {/* {activeTab === 'PMO' && <TabContent content={contentArray[0]} />}
      {activeTab === 'Marketing' && <TabContent content={contentArray[1]}/> }
      {activeTab === 'Product' && <TabContent content={contentArray[2]}/> }
      {activeTab === 'Engineering' && <TabContent content={contentArray[3]}/> }
      {activeTab === 'Agencies' && <TabContent content={contentArray[4]}/> } */}
      </div>
    </div>
  )
}

export default TabComponent
