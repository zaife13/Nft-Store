import { PiEye } from "react-icons/pi";
import card1Img from "../Assets/Distant Galaxy Image Placeholder.png";
import card1Avatar from "../Assets/Distant Galaxy Avatar Placeholder.png";

import card2Img from "../Assets/Life On Earth Image Placeholder.png";
import card2Avatar from "../Assets/Life On Earth Avatar Placeholder.png";

import card3Img from "../Assets/AstroFiction Image Placeholder.png";
import card3Avatar from "../Assets/AstroFiction Avatar Placeholder.png";

const DiscoverMoreNfts = () => {
  return (
    <>
      <div className="bg-customGray max-w-[1050px] space-y-10 m-auto py-10 px-5 lg:space-y-16 lg:py-20 lg:px-10">
        {/* div for heading and button start here */}
        <div className="flex bg-customGray">
          <div className="space-y-[10px] w-[70%]">
            <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[26px] tracking-wider">
              Discover More NFTs
            </h1>
            <p className="text-white">Explore new trending NFTs</p>
          </div>
          <div className="hidden md:w-[50%] md:flex items-end justify-end">
            <button className="border-2 border-customPurple py-3 px-10 rounded-[20px] flex justify-center items-center gap-3 text-white">
              <PiEye className="text-customPurple" />
              <p>See All</p>
            </button>
          </div>
        </div>
        {/* div for heading and button end here */}
        <div className="grid place-items-center grid-cols-1 gap-5 md:gap=[30px] md:grid-cols-2 lg:grid-cols-3">
          {/* first card start here */}
          <div className=" bg-customGray1 rounded-[20px] max-w-[330px] max-h-[470px] transition-transform transform-gpu hover:scale-90 duration-300">
            <div>
              <img src={card1Img} alt="" />
            </div>

            <div className="py-5 px-5 space-y-[25px] md:px-7">
              <div className="space-y-[5px]">
                <h1 className="text-white text-[22px] font-semibold">
                  Distant Galaxy
                </h1>
                <div className="flex space-x-3">
                  <img src={card1Avatar} alt="" />
                  <p className="text-white font-mono">Moon Dancer</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-[50%]">
                  <p className="text-customGray2 text-[12px]">Price</p>
                  <p className="font-mono text-white">1.63 ETH</p>
                </div>
                <div className="w-[50%] flex flex-col items-end">
                  <p className="text-customGray2 text-[12px]">Highest Bid</p>
                  <p className="font-mono text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
          {/* first card end here */}

          {/* second card start here */}
          <div className="bg-customGray1 rounded-[20px] max-w-[330px] max-h-[470px] transition-transform transform-gpu hover:scale-90 duration-300">
            <div>
              <img src={card2Img} alt="" />
            </div>

            <div className="py-5 px-5 space-y-[25px] md:px-7">
              <div className="space-y-[5px]">
                <h1 className="text-white text-[22px] font-semibold">
                  Life On Edena
                </h1>
                <div className="flex space-x-3">
                  <img src={card2Avatar} alt="" />
                  <p className="text-white font-mono">NebulaKid</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-[50%]">
                  <p className="text-customGray2 text-[12px]">Price</p>
                  <p className="font-mono text-white">1.63 ETH</p>
                </div>
                <div className="w-[50%] flex flex-col items-end">
                  <p className="text-customGray2 text-[12px]">Highest Bid</p>
                  <p className="font-mono text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
          {/* second card end here */}

          {/* third card start here */}
          <div className="bg-customGray1 rounded-[20px] max-w-[330px] max-h-[470px] md:hidden lg:block transition-transform transform-gpu hover:scale-90 duration-300">
            <div>
              <img src={card3Img} alt="" />
            </div>

            <div className="py-5 px-5 space-y-[25px] md:px-7">
              <div className="space-y-[5px]">
                <h1 className="text-white text-[22px] font-semibold">
                  AstroFiction
                </h1>
                <div className="flex space-x-3">
                  <img src={card3Avatar} alt="" />
                  <p className="text-white font-mono">Spaceone</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-[50%]">
                  <p className="text-customGray2 text-[12px]">Price</p>
                  <p className="font-mono text-white">1.63 ETH</p>
                </div>
                <div className="w-[50%] flex flex-col items-end">
                  <p className="text-customGray2 text-[12px]">Highest Bid</p>
                  <p className="font-mono text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
          {/* third card end here */}
        </div>
        <button className="border-2 border-customPurple py-3 px-10 rounded-[20px] flex justify-center items-center gap-3 text-white w-full m-auto md:hidden">
          <PiEye className="text-customPurple" />
          <p>See All</p>
        </button>
      </div>
    </>
  );
};
export default DiscoverMoreNfts;
