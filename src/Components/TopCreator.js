import React, { useEffect, useState } from 'react'
import { SlRocket } from "react-icons/sl";
import CreatorCard from './CreatorCard';
import data from '../data/Creators'

const TopCreator = () => {

    const [creators, setCreators] = useState([])

    useEffect(() => {
       setCreators(data)
       console.log(creators)
    }, [])
    

  return (
    <>
    <div className='2xl:max-w-[1100px] xl:max-w-[1100px] lg:max-w-[1100px] md:max-w-[750px] max-w-[450px]  space-y-10 m-auto py-10 px-6 lg:space-y-16 lg:py-20 lg:px-10'>
    <div className='flex flex-row justify-between'>
        <div className="space-y-2">
          <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[26px] tracking-wider">
            Top Creators
          </h1>
          <h2 className="text-white font-normal 2xl:text-xl xl:text-xl lg:text-lg md:text-base text-base 2xl:tracking-widest xl:tracking-widest lg:tracking-widest md:tracking-wider tracking-wider mt-5">
          Checkout Top Rated Creators On The NFT Marketplace
          </h2>
        </div>
        <div className='mt-4 2xl:flex xl:flex lg:flex md:flex hidden gap-4 rounded-2xl transition-all duration-500 ease-out hover:scale-95 cursor-pointer justify-center items-center px-10 h-[60px] bg-[#2B2B2B] border-[2px] border-[#A259FF] w-auto'>
            <SlRocket className='text-purple-500 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5'/>
            <p className='font-bold text-white 2xl:text-lg xl:text-lg tracking-wider'>View Rankings</p>
        </div>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-5'>
        {creators && creators.length > 1 && creators.map((creator, index)=>(
            <CreatorCard image={creator.image} name={creator.name} sales={creator.sales} number={index + 1} key={index}/>
        ))}
    </div>
    <div className='mt-4 2xl:hidden xl:hidden lg:hidden md:hidden flex gap-4 rounded-2xl transition-all duration-500 ease-out hover:scale-95 cursor-pointer justify-center items-center px-10 h-[60px] bg-[#2B2B2B] border-[2px] border-[#A259FF] w-auto'>
            <SlRocket className='text-purple-500 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5'/>
            <p className='font-bold text-white 2xl:text-lg xl:text-lg lg:text-base md:text-base text-base tracking-wider'>View Rankings</p>
        </div>
    </div>
    </>
  )
}

export default TopCreator