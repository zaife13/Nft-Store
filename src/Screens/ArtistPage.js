import coverImg from "../Assets/artistPageCoverImg.png";
import profilePic from "../Assets/artistPageProfileAvatar.png";
import { PiCopy } from "react-icons/pi";
import { PiPlus } from "react-icons/pi";
import { PiDiscordLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";

import data from "../data/Card";
import { useState, useEffect } from "react";

const ArtistPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
    console.log(cardData);
  }, []);
  return (
    <>
      {/* wrapper div start here */}
      <div className="max-w-[1050px] m-auto">
        {/* div for cover img and profile img start here */}
        <div>
          <div className="relative z-0">
            <img
              className="h-[300px]"
              src={coverImg}
              alt="artist's art cover image"
            />
          </div>
          <div className="px-[20px] md:px-[30px] lg:px-[40px] flex justify-center relative z-10 bottom-16 md:justify-start">
            <img
              className="border-2 border-customGray rounded-[20px]"
              src={profilePic}
              alt="artist profile picture"
            />
          </div>
        </div>
        {/* div for cover img and profile img end here */}

        {/* div for informaation starts here */}
        <div className="px-[20px] md:px-[30px] lg:px-[40px] grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-7">
            <h1 className="text-[28px] text-white font-semibold md:text-[38px] lg:text-[51px]">
              Animakid
            </h1>
            <div className="flex flex-col gap-5 md:flex-row lg:hidden">
              <button className="bg-customPurple py-5 px-5 rounded-[20px] flex justify-center items-center gap-3 text-white">
                <PiCopy />
                <p>0xc0E3...B79C</p>
              </button>
              <button className="border-2 border-customPurple py-5 px-5 rounded-[20px] flex justify-center items-center gap-3 text-white">
                <PiPlus />
                <p>Follow</p>
              </button>
            </div>
            <div className="flex gap-5 justify-between">
              <div>
                <p className="text-white font-mono font-bold text-[22px] lg:text-[28px]">
                  250k+
                </p>
                <p className="text-white text-base font-normal lg:text-[22px]">
                  Volume
                </p>
              </div>
              <div>
                <p className="text-white font-mono font-bold text-[22px] lg:text-[28px]">
                  250k+
                </p>
                <p className="text-white text-base font-normal lg:text-[22px]">
                  Volume
                </p>
              </div>
              <div>
                <p className="text-white font-mono font-bold text-[22px] lg:text-[28px]">
                  250k+
                </p>
                <p className="text-white text-base font-normal lg:text-[22px]">
                  Volume
                </p>
              </div>
            </div>

            <div className="space-y-[10px]">
              <p className="text-customGray3 font-spacemono text-base font-normal lg:text-[22px]">
                Bio
              </p>
              <p className="text-white text-base font-normal lg:text-[22px]">
                The internet's friendliest designer kid.
              </p>
            </div>

            <div>
              <p className="mb-[10px] font-spacemono text-customGray3 text-base font-normal lg:text-[22px] ">
                Links
              </p>
              <div className="flex space-x-2 text-gray-400 ">
                <PiDiscordLogo className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] hover:text-customPurple" />
                <PiYoutubeLogo className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] hover:text-customPurple" />
                <PiTwitterLogo className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] hover:text-customPurple" />
                <PiInstagramLogo className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] hover:text-customPurple" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:h-14 lg:justify-end lg:gap-5">
            <button className="bg-customPurple py-5 px-5 rounded-[20px] flex justify-center items-center gap-3 text-white">
              <PiCopy />
              <p>0xc0E3...B79C</p>
            </button>
            <button className="border-2 border-customPurple py-5 px-5 rounded-[20px] flex justify-center items-center gap-3 text-white">
              <PiPlus />
              <p>Follow</p>
            </button>
          </div>
        </div>
        {/* div for informaation end here */}

        <div>
          {/* navbar div start here  */}
          <div className="max-w-[1050px] mt-8 pt-6 border-t-2 border-customGray1 m-auto flex justify-between">
            <div className="w-full flex gap-4 items-center justify-center border-b-2  border-customGray3 pb-2">
              <p className="text-white font-sans text-[22px] font-semibold cursor-pointer">
                NFTs
              </p>
              <p className="hidden md:block py-[5px] px-[10px] rounded-[20px] bg-customGray3 font-mono text-white">
                302
              </p>
            </div>
            <div className="w-full flex gap-4 items-center justify-center pb-2">
              <p className="text-white font-sans text-[22px] font-semibold cursor-pointer">
                Owned
              </p>
              <p className="hidden md:block py-[5px] px-[10px] rounded-[20px] bg-customGray3 font-mono text-white">
                67
              </p>
            </div>
            <div className="w-full flex gap-4  items-center justify-center pb-2">
              <p className="text-white font-sans text-[22px] font-semibold  cursor-pointer">
                Collections
              </p>
              <p className="hidden md:block py-[5px] px-[10px] rounded-[20px] bg-customGray3 font-mono text-white">
                116
              </p>
            </div>
          </div>
          {/* navbar div end here  */}

          {/* the div which act as a bg div for main card div start here */}
          <div className="w-full bg-customGray1">
            <div className="bg-customGray1 max-w-[1050px] m-auto grid gird-cols-1 place-items-center gap-[30px] md:grid-cols-2 lg:grid-cols-3 py-10 px-[30px] md:pt-[60px] md:pb-[80px]">
              {/* Card Start here */}
              {cardData.map((item) => (
                <div className=" bg-customGray cursor-pointer  rounded-[20px] max-w-[330px] max-h-[470px] transition-transform transform-gpu hover:scale-90 duration-300">
                  <div>
                    <img src={item.cardMainImg} alt="" />
                  </div>

                  <div className="py-5 px-5 space-y-[25px] md:px-7">
                    <div className="space-y-[5px]">
                      <h1 className="text-white text-[22px] font-semibold">
                        {item.title}
                      </h1>
                      <div className="flex space-x-3">
                        <img src={item.artistAvatar} alt="" />
                        <p className="text-white font-mono">
                          {item.artistName}
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-[50%]">
                        <p className="text-customGray2 text-[12px]">Price</p>
                        <p className="font-mono text-white">1.63 ETH</p>
                      </div>
                      <div className="w-[50%] flex flex-col items-end">
                        <p className="text-customGray2 text-[12px]">
                          Highest Bid
                        </p>
                        <p className="font-mono text-white">0.33 wETH</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Card End here  */}
            </div>
          </div>
          {/* the div which act as a bg div for main card div end here */}
        </div>
      </div>
      {/* wrapper div end here */}
    </>
  );
};
export default ArtistPage;
