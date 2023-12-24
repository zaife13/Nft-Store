import { AiOutlineShop, AiOutlineUser} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { RiHome7Fill, RiWallet2Fill, RiLoginBoxFill } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () =>{

    const navigate = useNavigate()

    const dropdownRef = useRef()


    const menus = [
        { name: "Home", link: "/", icon: RiHome7Fill },
        { name: "Marketplace", link: "/marketplace", icon: GiShop },
        { name: "Ranking", link: "/ranking", icon: FaRankingStar },
        { name: "Connect a wallet", link: "/connectwallet", icon: RiWallet2Fill },
        { name: "SignUp", link: "/Signup", icon: RiLoginBoxFill },
      ];

    const [open, setOpen] = useState(false)

    return(
        <>
        <div className="w-full 2xl:flex xl:flex lg:flex md:hidden hidden justify-between 2xl:p-6 xl:p-5 lg:p-5 md:p-4 p-3 bg-[#2B2B2B]">
            <div className="flex 2xl:ml-10 xl:ml-10 lg:ml-8 2xl:mt-3 xl:mt-3 lg:mt-3">
                <AiOutlineShop className="2xl:h-10 2xl:w-10 xl:h-9 xl:w-9 lg:h-8 lg:w-8 md:h-7 md:w-7 h-7 w-7 text-[#A259FF]"></AiOutlineShop>
                <p className="font-mono text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold 2xl:mt-1 xl:mt-1 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-3 ml-3">NFT Marketplace</p>
            </div>
            <div className="2xl:gap-7 xl:gap-5 lg:gap-5 2xl:mr-10 xl:mr-10 lg:mr-8 flex">
                <div className="text-white hover:scale-95 font-bold ease-out transition-all duration-300 cursor-pointer p-3 xl:mt-3">
                    <p className="2xl:text-base xl:text-base lg:text-base tracking-wide">Marketplace</p>
                </div>
                <div className="text-white hover:scale-95 font-bold ease-out transition-all duration-300 cursor-pointer p-3 xl:mt-3">
                    <p className="2xl:text-base xl:text-base lg:text-base tracking-wide">Ranking</p>
                </div>
                <div onClick={()=>{navigate('/connectwallet')}} className="text-white hover:scale-95 font-bold ease-out transition-all duration-300 cursor-pointer p-3 xl:mt-3">
                    <p className="2xl:text-base xl:text-base lg:text-base tracking-wide">Connect a wallet</p>
                </div>
                <div onClick={()=>{navigate('/signup')}} className="flex gap-3 justify-center items-center px-7 text-white hover:scale-95 font-bold ease-out transition-all duration-300 cursor-pointer bg-[#A259FF] rounded-3xl">
                    <AiOutlineUser className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 lg:h-6 lg:w-6 text-white"/>
                    <p className="2xl:text-base xl:text-base lg:text-base tracking-wide">Sign Up</p>
                </div>
            </div>
        </div>
       <div ref={dropdownRef} className={`block 2xl:hidden xl:hidden lg:hidden md:p-5 p-4 ${open? 'h-60' : 'h-12'} absolute top-0 w-full z-30`}>
        <div className={`bg-[#2B2B2B]  shadow-lg min-w-screen ${open ? "md:h-[280px] h-[280px]" : "h-12"} duration-700 ease-in-out text-gray-100 px-4 z-10 flex flex-col`}>
            <div className="flex flex-row py-2 justify-between">
            <div className="flex gap-3">
                <AiOutlineShop className="2xl:h-10 2xl:w-10 xl:h-9 xl:w-9 lg:h-8 lg:w-8 md:h-7 md:w-7 h-6 w-6 text-[#A259FF]"></AiOutlineShop>
                <p className="font-mono text-white md:text-lg text-base font-bold md:ml-3 ml-1">NFT Marketplace</p>
            </div>
            <div>
            {!open ? 
                <div className="flex justify-end" onClick={()=>{setOpen(true)}}>
                    <BiMenu className='md:h-6 md:w-6 h-5 w-5 md:mt-[2px] mt-1 mr-1 text-white'></BiMenu>
                </div>:
                <div className="flex justify-end" onClick={()=>{setOpen(false)}}>
                <BiMenuAltRight className='md:h-6 md:w-6 h-5 w-5 md:mt-[2px] mt-1 mr-1 text-white'></BiMenuAltRight>
            </div>
             
         }
         </div>
            </div>
            <div className="mt-2 flex flex-col gap-2 relative">
                {menus.map((menu, i)=>(
                    <Link
                    to={menu.link}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-3"
                    } group flex items-center text-xs  gap-3.5 font-semibold p-2 hover:bg-blue-950 rounded-lg ${open ? 'visible' : 'invisible'}`}
                  >
                    <div className="text-[#A259FF]">{React.createElement(menu?.icon, { size: "14" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 1}00ms`,
                      }}
                      className={` whitespace-pre duration-100 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))}
            </div>
           
            </div>
       </div>
     </>
    )
}

export default Navbar;