import { useEffect, useRef, useState } from "react"
import clickUpLogo from "../assets/clickup-logo.svg"
import dropDownIcon from "../assets/dropdown-icon.svg"
import Product from "../dropdowns/Product";
import Solutions from "../dropdowns/Solutions";

const Navbar = () => {
    const [ navbar,setNavbar] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showLearnDropdown, setShowLearnDropdown] = useState(false);
    const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setShowProductDropdown(false);
            setShowLearnDropdown(false);
            setShowSolutionDropdown(false);
          }
        };
    
        window.addEventListener('click', handleClickOutside);
        return () => {
        window.removeEventListener('click', handleClickOutside);
        };
      }, []);

      const handleProductClick = () => {
        setShowProductDropdown(!showProductDropdown);
        setShowLearnDropdown(false);
        setShowSolutionDropdown(false);
      };
    
      const handleLearnClick = () => {
        setShowProductDropdown(false);
        setShowLearnDropdown(!showLearnDropdown);
        setShowSolutionDropdown(false);
      };
    
      const handleSolutionClick = () => {
        setShowProductDropdown(false);
        setShowLearnDropdown(false);
        setShowSolutionDropdown(!showSolutionDropdown);
      };

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
            return `relative z-50 sticky top-0 shadow-lg bg-white h-[100px] px-[16px] flex justify-between items-center bg-white transition-all`
        }else{
            return ` relative h-[100px] px-[16px] flex justify-between items-center bg-white  transition-all` 
        }
    }

  return (
       <nav ref={navbarRef} className={navClass(navbar)}>
         <div className=" flex items-center gap-6">
            <a href="#">
            <img src={clickUpLogo} alt="clickup-logo" />
            </a>
            <ul className="flex  items-center gap-8">
             <li onClick={handleProductClick} className=" text-[15px] flex items-center gap-2 text-gray-700 font-bold"><span>Product</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             {showProductDropdown && (
                 <div className="absolute top-[100px] left-0 w-full bg-white">
                    <Product/>
                 </div>
                )}
             <li onClick={handleSolutionClick} className="text-[15px] flex items-center gap-2 text-gray-700 font-bold "><span>Solutions</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             {showSolutionDropdown && (
                 <div className="absolute top-[100px] left-0 w-full bg-white">
                  <Solutions/>
                 </div>
                )}
             <li onClick={handleLearnClick} className="text-[15px] flex  items-center gap-2 text-gray-700 font-bold"><span>Learn</span> <img src={dropDownIcon} alt="dropdown-icon" /> </li>
             {showLearnDropdown && (
                 <div className="absolute top-[100px] left-0 w-full bg-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio consectetur veritatis sunt fugit, voluptas hic. Consectetur quos eum omnis. Asperiores quo quas consequuntur ipsa, deserunt quae error necessitatibus repellendus fugiat quidem non impedit sunt expedita doloremque tempore illum quia cupiditate. Ipsam at repudiandae inventore voluptatum voluptate non, rem deserunt pariatur id corporis, hic enim laborum, atque amet quas. Rem tempore nihil dolore doloribus temporibus totam sed vitae. Incidunt odit nulla laboriosam. Adipisci quibusdam nesciunt, aspernatur nulla, quos voluptate recusandae provident consectetur aliquid natus incidunt quidem ipsa fugiat placeat labore ipsam, neque voluptatum! Expedita, eaque? Sequi distinctio fugiat dolor modi nemo!
                 </div>
                )}
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
