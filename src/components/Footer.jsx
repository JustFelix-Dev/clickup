import ClickUp from "../assets/Clickup.svg";
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={ClickUp} alt="" />
            <div className="flex flex-col gap-4">
                <span>One app to replace them all.</span>
                <p>All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>
            </div>
            <button className="bg-[#7B6AEE] font-extrabold py-[18px] px-[32px] rounded-lg">Free Forever</button>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer
