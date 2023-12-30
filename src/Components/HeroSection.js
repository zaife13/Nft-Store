import { IoRocketOutline } from "react-icons/io5";

import nftCardPic from "../Assets/heroanimationtransparentbck-2.gif";
const HeroSection = () => {
  return (
    <>
      <div className="bg-customGray max-w-[1280px] m-auto grid grid-cols-1 py-10 px-5 gap-0 md:gap-7  md:grid-cols-2  md:py-20 lg:px-20">
        <div className="text-white flex flex-col justify-center">
          <h1 className="self-stretch uppercase font-semibold text-[28px] md:text-[38px] lg:text-[67px] ">
            Discover digital art & Collect NFTs
          </h1>
          <h2 className="text-base mt-3 mb-10 md:mb-5 lg:mb-8 lg:text-xl lg:mt-5">
            NFT marketplace UI created with React and Tailwind CSS. Collect, buy
            and sell art from more than 20k NFT artists.
          </h2>
          {/* div for button and information for md and above screens start here */}
          <div className="hidden md:flex flex-col mx-5 my-10">
            <button className="bg-customPurple mx-7 py-3 rounded-[20px] mb-10 flex justify-center items-center gap-3 text-white">
              <IoRocketOutline />
              <p>Get Started</p>
            </button>
            <div className="flex justify-around">
              <div className="text-center">
                <p>240k+</p>
                <p>Total Sale</p>
              </div>
              <div className="text-center">
                <p>100k+</p>
                <p>Auctions</p>
              </div>
              <div className="text-center">
                <p>24k+</p>
                <p>Artists</p>
              </div>
            </div>
          </div>
          {/* div for button and information for md and above screens end here */}
        </div>
        <div>
          <img src={nftCardPic} alt="nft" />
        </div>

        {/* div for button and information for Small screens start here */}
        <div className="text-white flex flex-col justify-center mx-5 my-10 md:hidden">
          <button className="bg-customPurple mx-7 py-3 rounded-[20px] mb-10 flex justify-center items-center gap-3 text-white">
            <IoRocketOutline />
            <p>Get Started</p>
          </button>
          <div className="flex justify-around">
            <div className="text-center">
              <p>240k+</p>
              <p>Total Sale</p>
            </div>
            <div className="text-center">
              <p>100k+</p>
              <p>Auctions</p>
            </div>
            <div className="text-center">
              <p>24k+</p>
              <p>Artists</p>
            </div>
          </div>
        </div>
        {/* div for button and information Small screens end here */}
      </div>
    </>
  );
};
export default HeroSection;
