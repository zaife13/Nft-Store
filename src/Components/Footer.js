import { AiOutlineShop } from "react-icons/ai";
import { PiDiscordLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="bg-customGray1 max-w-[1050px] m-auto py-10 px-8 space-y-7 flex flex-col lg:flex-row lg:justify-around lg:space-y-0 lg:gap-4">
        {/* first part start here */}
        <div className="space-y-5">
          <div className=" flex space-x-3 items-center">
            <AiOutlineShop className="w-[32px] h-[32px] text-customPurple" />
            <h1 className="font-bold text-xl font-mono text-white">
              NFT Marketplace
            </h1>
          </div>
          <p className="font-sans text-gray-400">
            NFT marketplace UI created with React for nft entushiats.
          </p>
          <div className="mt-[20px]">
            <p className="mb-[15px] font-sans text-gray-400">
              Join our community
            </p>
            <div className="flex space-x-2 text-gray-400">
              <PiDiscordLogo className="w-[32px] h-[32px]" />
              <PiYoutubeLogo className="w-[32px] h-[32px]" />
              <PiTwitterLogo className="w-[32px] h-[32px]" />
              <PiInstagramLogo className="w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
        {/* first part end here */}

        {/* second part start here */}
        <div className="space-y-5">
          <h1 className="font-bold text-xl font-mono text-white">Explore</h1>
          <p className="font-sans text-gray-400">Marketplace</p>
          <p className="font-sans text-gray-400">Rankings</p>
          <p className="font-sans text-gray-400">Connect a wallet</p>
        </div>
        {/* second part end here */}

        {/* third part start here */}
        <div>
          <h1 className="text-bold font-mono font-bold text-xl mb-5 text-white">
            Join our weekly digest
          </h1>
          <div className="relative flex flex-col space-y-4">
            <p className="font-sans text-gray-400">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <input
              className="py-3 rounded-[20px] px-5 focus:border-transparent focus:outline-none md:max-w-1/2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
            />
            <button className="hidden md:bg-customPurple md:py-3 md:px-5 md:rounded-[20px] md:flex md:justify-center md:items-center md:gap-3 md:text-white md:absolute md:right-0 md:top-6">
              <HiOutlineMail className="w-5 h-5" />
              <p>Subscribe</p>
            </button>
            <button className="bg-customPurple py-3 rounded-[20px] mb-10 flex justify-center items-center gap-3 text-white md:hidden lg:hidden xl:hidden">
              <HiOutlineMail className="w-5 h-5" />
              <p>Subscribe</p>
            </button>
          </div>
        </div>
        {/* third part end here */}
      </div>
    </>
  );
};
export default Footer;
