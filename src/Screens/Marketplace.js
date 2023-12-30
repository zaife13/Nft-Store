import { useState, useEffect } from "react";
import data from "../data/Card";
import { CgSearch } from "react-icons/cg";

const Marketplace = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(data);
    console.log(cardData);
  }, []);

  return (
    <>
      <div>
        {/* div for heading, subheading and searchbar start here */}
        <div className="text-white max-w-[1050px] m-auto py-10 px-5 md:py-[60px] md:px-10 lg:py-20">
          <h1 className="text-[28px] mb-[10px] md:text-[38px] lg:text-[50px]">
            Browse Marketplace
          </h1>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          <div className="py-3 px-5 flex justify-between mt-[30px] border-2 border-customGray1 rounded-[20px]">
            <input className="w-[80%]" type="text" />
            <CgSearch className="w-6 h-6" />
          </div>
        </div>
        {/* div for heading, subheading and searchbar end here */}

        {/* div for inner navbar start here */}
        <div className="max-w-[1050px] mt-8 pt-6 border-t-2 border-customGray1 m-auto flex justify-between">
          <div className="w-full flex gap-4 items-center justify-center border-b-2  border-customGray3 pb-2">
            <p className="text-white font-sans text-[22px] font-semibold cursor-pointer">
              NFTs
            </p>
            <p className="hidden md:block py-[5px] px-[10px] rounded-[20px] bg-customGray3 font-mono text-white">
              302
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
        {/* div for inner navbar end here */}

        <div className="max-w-[1050px] m-auto grid gird-cols-1 place-items-center gap-[30px] md:grid-cols-2 lg:grid-cols-3 py-10 px-[30px] md:pt-[60px] md:pb-[80px]">
          {/* Card Start here */}
          {cardData.map((item) => (
            <div className=" bg-customGray1  rounded-[20px] max-w-[330px] max-h-[470px] transition-transform transform-gpu hover:scale-90 duration-300">
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
                    <p className="text-white font-mono">{item.artistName}</p>
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
          ))}
          {/* Card End here  */}
        </div>
      </div>
    </>
  );
};
export default Marketplace;
