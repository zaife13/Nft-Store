import { AiOutlineShop, AiOutlineUser} from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{

    const navigate = useNavigate()

    return(
        <div className="w-full flex justify-between 2xl:p-6 xl:p-5 bg-[#2B2B2B]">
            <div className="flex 2xl:ml-10 xl:ml-10 2xl:mt-3 xl:mt-3">
                <AiOutlineShop className="2xl:h-10 2xl:w-10 xl:h-9 xl:w-9 text-[#A259FF]"></AiOutlineShop>
                <p className="font-mono text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold 2xl:mt-1 xl:mt-1 2xl:ml-4 xl:ml-4">NFT Marketplace</p>
            </div>
            <div className="flex 2xl:gap-7 xl:gap-5 2xl:mr-10 xl:mr-10 ">
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
                    <AiOutlineUser className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 text-white"/>
                    <p className="2xl:text-base xl:text-base lg:text-base tracking-wide">Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;