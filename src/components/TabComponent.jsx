import { useState } from "react";
import pmoIcon from "../assets/PMO.svg"
import marketingIcon from "../assets/Marketing.svg"
import productIcon from "../assets/Product.svg"
import engineeringIcon from "../assets/Engineering.svg"
import agenciesIcon from "../assets/Agencies.svg"
import TabContent from "./TabContent";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('PMO');

  return (
    <div className="tab-container">
    <div className="tabs flex w-[80%] gap-4 mx-auto">
      <button className={ activeTab === 'PMO' ? 'tab active':'tab'} onClick={() => setActiveTab('PMO')}>
       <img src={pmoIcon} alt="pmo-icon" loading='lazy' /> <span>PMO</span>
      </button>
      <button className={ activeTab === 'Marketing' ? 'tab active':'tab'} onClick={() => setActiveTab('Marketing')}>
       <img src={marketingIcon} alt="pmo-icon" loading='lazy' />
       <span>Marketing</span>
      </button>
      <button className={ activeTab === 'Product' ? 'tab active':'tab'} onClick={() => setActiveTab('Product')}>
      <img src={productIcon} alt="location-icon" loading='lazy' />  <span>Product</span>
      </button>
      <button className={ activeTab === 'Engineering' ? 'tab active':'tab'} onClick={() => setActiveTab('Engineering')}>
      <img src={engineeringIcon} alt="location-icon" loading='lazy' /><span>Engineering</span>
      </button>
      <button className={ activeTab === 'Agencies' ? 'tab active':'tab'} onClick={() => setActiveTab('Agencies')}>
      <img src={agenciesIcon} alt="location-icon" loading='lazy' /><span>Agencies</span>
      </button>
      <button className={ activeTab === 'Teams' ? 'tab active':'tab'}>
      <span>See all teams</span>
      </button>
    </div>
      <div className="tab-content">
      {activeTab === 'PMO' && <TabContent/>}
      {activeTab === 'Marketing' && <TabContent/> }
      {activeTab === 'Product' && <TabContent/> }
      {activeTab === 'Engineering' && <TabContent/> }
      {activeTab === 'Agencies' && <TabContent/> }
      </div>
    </div>
  )
}

export default TabComponent
