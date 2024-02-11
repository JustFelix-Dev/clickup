import TabComponent from "./TabComponent"

const Tab = () => {
  return (
    <div className="tab-container mt-64 flex flex-col gap-4 items-center justify-center">
          <header>Perfect fit for every team</header>
          <div className="text-center">
            <p className="text-darked font-extrabold text-[20px] ">Get started fast with out-of-the-box solutions.</p>
            <p className="text-darked text-[20px] ">Easily customize ClickUp as team needs grow!</p>
          </div>
          <div>
            <TabComponent/>
          </div>
    </div>
  )
}

export default Tab
