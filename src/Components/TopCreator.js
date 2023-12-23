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

    useEffect(() => {
        console.log(creators);
      }, [creators]);
    

  return (
    <>
    <div className='flex flex-row justify-between 2xl:py-20 xl:py-20 2xl:px-36 xl:px-36 '>
        <div className="space-y-2">
          <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl tracking-wider">
            Top Creators
          </h1>
          <h2 className="text-white font-normal 2xl:text-xl xl:text-xl tracking-widest mt-5">
          Checkout Top Rated Creators On The Nft Marketplace
          </h2>
        </div>
        <div className='mt-4 flex gap-4 rounded-2xl transition-all duration-500 ease-out hover:scale-95 cursor-pointer justify-center items-center px-10 h-[60px] bg-[#2B2B2B] border-[2px] border-[#A259FF] w-auto'>
            <SlRocket className='text-purple-500 2xl:h-5 2xl:w-5 xl:h-5 xl:w-5'/>
            <p className='font-bold text-white 2xl:text-lg xl:text-lg tracking-wider'>View Rankings</p>
        </div>
    </div>
    <div className='flex flex-wrap justify-center items-center 2xl:px-32 xl:px-32 gap-5'>
        {creators && creators.length > 1 && creators.map((creator, index)=>(
            <CreatorCard image={creator.image} name={creator.name} sales={creator.sales} number={index + 1} key={index}/>
        ))}
    </div>
    </>
  )
}

export default TopCreator