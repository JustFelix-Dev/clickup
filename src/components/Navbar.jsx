import { useState } from "react"
import clickUpLogo from "../assets/clickup-logo.svg"
import dropDownIcon from "../assets/dropdown-icon.svg"

const Navbar = () => {
    const [ navbar,setNavbar] = useState(false);

    const dynamicNav =()=>{
        if(window.scrollY > 150){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    
    window.addEventListener('scroll', dynamicNav)

    const navClass=(navbar)=>{
        if(navbar){
            return `z-50 sticky top-0 shadow-lg bg-white h-[100px] px-[16px] flex justify-between items-center bg-white transition-all`
        }else{
            return ` h-[100px] px-[16px] flex justify-between items-center bg-white  transition-all` 
        }
    }

  return (
       <nav className={navClass(navbar)}>
         <div className=" flex items-center gap-6">
            <a href="#">
            <img src={clickUpLogo} alt="clickup-logo" />
            </a>
            <ul className="flex  items-center gap-8">
             <li className=" text-[15px] flex items-center gap-2 text-gray-700 font-bold text-darked"><span>Product</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             <li className="text-[15px] flex items-center gap-2 text-gray-700 font-bold "><span>Solutions</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             <li className="text-[15px] flex  items-center gap-2 text-gray-700 font-bold"><span>Learn</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             <li className="text-[15px] font-bold text-gray-700"> <a href="https://clickup.com/pricing"></a>Pricing</li>
             <li className="text-[15px] font-bold text-gray-700"><a href="https://clickup.com/plans/enterprise"></a> Enterprise</li>
            </ul>
         </div>
         <div className="flex items-center gap-6">
            <ul>
         <li className="text-[15px]  font-bold text-gray-700"><a href="https://clickup.com/plans/enterprise"></a> Contact Sales</li>
            </ul>
            <div className="flex items-center gap-4 ">
            <button className="bg-[#7B68EE] font-bold text-[14px] py-[12px] px-[24px] text-white rounded-[9px] shadow-xl">Sign Up</button>
            <button className="bg-[#E9EBF0] font-bold text-[14px] py-[12px] px-[24px] text-darked rounded-[9px] shadow-xl">Log in</button>
            </div>
         </div>
       </nav>
  )
}

export default Navbar
