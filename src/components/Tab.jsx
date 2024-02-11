import TabComponent from "./TabComponent"

const Tab = () => {
  return (
    <div className="tab-container flex flex-col gap-4 items-center justify-center">
          <header>Perfect fit for every team</header>
          <div>
            <p>Get started fast with out-of-the-box solutions.</p>
            <p>Easily customize ClickUp as team needs grow!</p>
          </div>
          <div>
            <TabComponent/>
          </div>
    </div>
  )
}

export default Tab
