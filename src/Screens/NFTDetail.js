import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import nftdetail from '../Assets/nft_detail.jpg'
import avatar from '../Assets/Avatars/avatar_9.png'
import { SlGlobe } from "react-icons/sl";
import Footer from '../Components/Footer';
import { FaArrowRight } from "react-icons/fa";
import artistData from '../data/Artist';

const NFTDetail = () => {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        setCardData(artistData);
      }, []);

      const [timeRemaining, setTimeRemaining] = useState({
        hours: 20,
        minutes: 35,
        seconds: 56,
      });
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeRemaining((prevState) => {
            const {hours, minutes, seconds } = prevState;
    
            if (hours === 0 && minutes === 0 && seconds === 0) {
              clearInterval(timer);
              return {hours: 0, minutes: 0, seconds: 0 };
            }
    
            let updatedSeconds = seconds - 1;
            let updatedMinutes = minutes;
            let updatedHours = hours;
    
            if (updatedSeconds < 0) {
              updatedMinutes -= 1;
              updatedSeconds = 59;
            }
            if (updatedMinutes < 0) {
              updatedHours -= 1;
              updatedMinutes = 59;
            }
            if (updatedHours < 0) {
              updatedHours = 23;
            }
    
            return {
              hours: updatedHours,
              minutes: updatedMinutes,
              seconds: updatedSeconds,
            };
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const { hours, minutes, seconds } = timeRemaining;

  return (
    <>
    <Navbar/>
    <div >
        <img alt='bg' className=' object-cover h-[572px] w-full' src={nftdetail}></img>
    </div>
    <div className='flex flex-row ml-20 mt-10 mb-10'>
        <div className='w-3/4 flex flex-col'>
            <p className='2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl text-3xl font-bold text-white tracking-wide'>The Orbitians</p>
            <p className='text-[#858584] text-[22px] mt-4 tracking-widest'>Minted On Sep 30, 2022</p>
            <p className='text-[#858584] text-[22px] mt-10 font-bold tracking-wide font-mono'>Created By</p>
            <div className='flex items-center mt-4'>
                <img alt='avatar' src={avatar} className='h-6 w-6'></img>
                <p className='text-[24px] ml-2 text-white font-bold tracking-wide' >Orbitian</p>
            </div>
            <p className='text-[#858584] text-[22px] mt-10 font-bold tracking-wide font-mono'>Description</p>
            <p className='text-white text-[22px] tracking-wider w-3/4 mt-4'>The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, </p>
            <p className='text-white text-[22px] tracking-wider w-3/4 mt-7'>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. </p>
            <p className='text-white text-[22px] tracking-wider w-3/4 mt-7'>They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
            <p className='text-[#858584] text-[22px] mt-10 font-bold tracking-wide font-mono'>Details</p>
            <div className='flex items-center mt-4'>
                <SlGlobe className='h-7 w-7 text-[#858584]'/>
                <p className='text-[22px] ml-4 text-white tracking-wider'>View on Etherscan</p>
            </div>
            <div className='flex items-center mt-4'>
                <SlGlobe className='h-7 w-7 text-[#858584]'/>
                <p className='text-[22px] ml-4 text-white tracking-wider'>View Original</p>
            </div>
            <p className='text-[#858584] text-[22px] mt-10 font-bold tracking-wide font-mono'>Tags</p>
            <div className='flex items-center mt-4 gap-3'>
                <div className='flex items-center justify-center px-8 font-semibold tracking-wider uppercase text-white bg-[#3B3B3B] rounded-3xl h-[46px]'>
                    <p>animation</p>
                </div>
                <div className='flex items-center justify-center px-8 font-semibold tracking-wider uppercase text-white bg-[#3B3B3B] rounded-3xl h-[46px]'>
                    <p>illustration</p>
                </div>
                <div className='flex items-center justify-center px-8 font-semibold tracking-wider uppercase text-white bg-[#3B3B3B] rounded-3xl h-[46px]'>
                    <p>moon</p>
                </div>
                <div className='flex items-center justify-center px-8 font-semibold tracking-wider uppercase text-white bg-[#3B3B3B] rounded-3xl h-[46px]'>
                    <p>space</p>
                </div>
            </div>
        </div>
        <div className='w-[340px] mr-20'>
            <div className='flex flex-col justify-start p-[30px] w-full bg-[#3B3B3B] rounded-[20px]'>
                <p className='font-mono text-xs tracking-wider text-white'>Auction ends in:</p>
                <div className='flex mt-1 gap-3 '>
                <div>
                    <p className='font-bold text-[38px] text-white font-mono tracnking-wider'>{hours}</p>
                    <p className='text-xs tracking-wider font-mono text-white'>Hours</p>
                </div>
                <p className='font-bold text-[34px] text-white font-sans'>:</p>
                <div>
                    <p className='font-bold text-[38px] text-white font-mono tracnking-wider'>{minutes}</p>
                    <p className='text-xs tracking-wider font-mono text-white'>Minutes</p>
                </div>
                <p className='font-bold text-[34px] text-white font-sans'>:</p>
                <div>
                    <p className='font-bold text-[38px] text-white font-mono tracnking-wider'>{seconds}</p>
                    <p className='text-xs tracking-wider font-mono text-white'>Seconds</p>
                </div>
                </div>
                <div className='h-[60px] w-full bg-[#A259FF] rounded-[20px] px-12 flex justify-center items-center font-bold text-base mt-8 text-white transition-all duration-300 hover:scale-95 cursor-pointer'>
                    Place Bid
                </div>
                 </div>
                
        </div>
    </div>
    <div className='pt-20 pb-8 px-20 flex flex-col'>
    <div className='flex flex-row justify-between items-center'>
        <div className="space-y-2">
          <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[26px] tracking-wider">
            More From This Artist
          </h1>
        </div>
        <div className='mt-4 2xl:flex xl:flex lg:flex md:flex hidden gap-4 rounded-2xl transition-all duration-500 ease-out hover:scale-95 cursor-pointer justify-center items-center px-10 h-[60px] bg-[#2B2B2B] border-[2px] border-[#A259FF] w-auto'>
            <FaArrowRight className='text-purple-500 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5'/>
            <p className='font-bold text-white 2xl:text-base xl:text-base tracking-wider'>Go To Artist Page</p>
        </div>
    </div>
    <div className="max-w-[1050px] m-auto grid gird-cols-1 place-items-center gap-[30px] md:grid-cols-2 lg:grid-cols-3 py-10 px-[30px] md:pt-[60px] md:pb-[80px]">
          {/* Card Start here */}
          {cardData.map((item) => (
            <div className=" bg-customGray1  rounded-[20px] max-w-[330px] max-h-[470px] transition-all cursor-pointer hover:scale-95 duration-500 ease-out">
              <div>
                <img src={item.cardMainImg} alt="" />
              </div>

              <div className="py-5 px-5 space-y-[25px] md:px-7">
                <div className="space-y-[5px]">
                  <h1 className="text-white text-[22px] font-semibold">
                    {item.title}
                  </h1>
                  <div className="flex space-x-3">
                    <img src={item.artistAvatar} className='h-6 w-6' alt="" />
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
    <Footer/>
    </>
  )
}

export default NFTDetail