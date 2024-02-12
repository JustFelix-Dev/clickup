import { Link } from "react-router-dom";
import ClickUp from "../assets/Clickup.svg";
import freeTrainingIcon from "../assets/free-training.svg";
import privacyIcon from "../assets/privacy.svg";
import uptimeIcon from "../assets/up-time.svg";
import appleStore from "../assets/apple-store.png";
import  googlePlay from "../assets/google-store.png";
import footerClickUpLogo from "../assets/footer-clickup.svg";
import linkedInIcon from "../assets/linked-in.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center relative mt-32">
        <div className="header flex items-center gap] justify-evenly w-[95%] absolute bg-white -top-[70px] py-10">
            <img src={ClickUp} alt="" className="absolute top-0 left-0" />
            <div className="flex flex-col gap-2">
                <span className="text-[48px] text-[#333] font-extrabold">One app to replace them all.</span>
                <p className="text-[14px] text-custom-based">All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>
            </div>
            <button className="footer-button border bg-[#7B6AEE] font-extrabold text-white py-[16px] px-[32px] rounded-lg">Free Forever</button>
        </div>
        <div className="footer-content flex flex-col items-center justify-center w-full pt-40">
            <div className="flex w-full justify-center gap-14 pb-10">
                <div className="flex gap-4 items-center">
                    <img src={freeTrainingIcon} alt="training-icon" />
                    <p className="text-white"><a className="text-white hover:underline font-[700]" href="#">Free training</a> & 24-hours support</p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={privacyIcon} alt="privacy-icon" />
                    <p className="text-white">Serious about <a className="text-white font-[700] hover:underline" href="#">security & privacy</a></p>
                </div>
                <div className="flex gap-4 items-center">
                    <img src={uptimeIcon} alt="uptime-icon" />
                    <p className="text-white"><a className="text-white font-[700] hover:underline" href="#">Highest levels of uptime</a> the last 12 months</p>
                </div>
            </div>
            <main className=" w-[85%] flex justify-between border-b border-t border-gray-100 border-opacity-40 py-10 px-6">
                <ul>
                    <header>CLICKUP</header>
                    <Link to="#">Download</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Product Roadmap</Link>
                    <Link to="#">Press</Link>
                    <Link to="#">Clients</Link>
                    <Link to="#">Brand</Link>
                    <Link to="#">Community</Link>
                    <Link to="#">Affliates & Referrals</Link>
                    <Link to="#">Reviews</Link>
                    <Link to="#">Status</Link>
                </ul>
                <ul>
                    <header>RESOURCES</header>
                    <Link to="#">Help Docs</Link>
                    <Link to="#">On-Demand Demo</Link>
                    <Link to="#">Webinars</Link>
                    <Link to="#">Contact Us</Link>
                    <Link to="#">Templates</Link>
                    <Link to="#">Import</Link>
                    <Link to="#">API</Link>
                    <Link to="#">Consultants</Link>
                    <Link to="#">Partners</Link>
                    <Link to="#">ClickUp University</Link>
                    <Link to="#">Events</Link>
                </ul>
                <ul>
                    <header>FEATURES</header>
                    <Link to="#">Gantt Chart</Link>
                    <Link to="#">Dashboards</Link>
                    <Link to="#">Native Time Tracking</Link>
                    <Link to="#">Mind Maps</Link>
                    <Link to="#">Automations</Link>
                    <Link to="#">Notepad</Link>
                    <Link to="#">Integrations</Link>
                    <Link to="#">Email</Link>
                    <Link to="#">To-Do List</Link>
                    <Link to="#">Kanban Board</Link>
                    <Link to="#">Sprints</Link>
                </ul>
                <ul>
                <header>COMPARE</header>
                <Link to="#">vs Monday</Link>
                <Link to="#">vs Asana</Link>
                <Link to="#">vs Jira</Link>
                <Link to="#">vs Trello</Link>
                <Link to="#">vs Airtable</Link>
                <Link to="#">vs Notion</Link>
                <Link to="#">vs Basecamp</Link>
                <Link to="#">vs Wrike</Link>
                <Link to="#">vs MS Project</Link>
                <Link to="#">vs Todoist</Link>
                <Link to="#">vs Smartsheet</Link>
                </ul>
                <ul>
                    <header>LEARN</header>
                    <div className="flex flex-col justify-between h-full">
                 <li className="flex flex-col">
                    <Link to='#'>Blog</Link>
                    <Link to='#'>Software Team Hub</Link>
                    <Link to='#'>Agency Hub</Link>
                    <Link to='#'>Newsletter</Link>
                    <Link to='#'>Podcast</Link>
                 </li>
                 <div className="stores flex flex-col gap-2">
                    <a href="https://apps.apple.com/us/app/clickup-manage-teams-tasks/id1535098836">
                        <img src={appleStore} alt="apple-store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=co.mangotechnologies.clickup">
                        <img src={googlePlay} alt="google-play" />
                    </a>
                 </div>
                    </div>
                </ul>
            </main>
            <div className="flex justify-between mt-6 mb-10 items-center  w-[90%]">
                <div>
                    <img src={footerClickUpLogo} alt="footer-logo" />
                    <div className=" flex gap-4">
                        <a className=" text-white border-r border-white pr-2 py-1 text-[12px]">&copy; 2024 ClickUp</a>
                        <a className=" text-white border-r border-white pr-2 py-1 text-[12px]" href="#">Security</a>
                        <a className=" text-white border-r border-white pr-2 py-1 text-[12px]" href="#">Your Privacy</a>
                        <a className="text-white text-[12px] pr-2 py-1 " href="#">Terms</a>
                    </div>
                </div>
                <div className="flex gap-4 social-links">
                 <a href="#"><img src={linkedInIcon} alt="linkedin-icon"/></a>
                 <a href="#"><img src={facebookIcon} alt="facebook-icon"/></a>
                 <a href="#"><img src={instagramIcon} alt="instagram-icon"/></a>
                 <a href="#"><img src={twitterIcon} alt="twitter-icon"/></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
