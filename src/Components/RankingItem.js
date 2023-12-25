import React from 'react'
import avatar from '../Assets/Avatars/avatar_1.png'

const RankingItem = ({image, name, number, change, nftsold, volume}) => {
  return (
    <div className='w-[1050px] bg-[#3B3B3B] h-[84px] rounded-[20px] flex px-5 items-center cursor-pointer'>
           <div className="flex 2xl:w-8 2xl:h-8 xl:w-[30px] xl:h-[30px] lg:h-7 lg:w-7 md:h-7 md:w-7 h-7 w-7 font-mono rounded-full justify-center items-center bg-[#2B2B2B] text-[#858584]">
            {number}
            </div>
            <div className='flex ml-4 w-[430px] items-center hover:scale-95 transition-all duration-500 ease-out'>
                <img className=' h-[60px] w-[60px]' src={image}></img>
                <p className='text-[22px] font-semibold text-white ml-4 '>{name}r</p>
            </div>
            <p className={`font-mono w-[180px] ${change > 0 ? 'text-[#00AC4F]' : 'text-red-500'}`}>{change > 0 ? `+${change}` : change} %</p>
            <p className='font-mono w-[180px] text-[#FFFFFF]'>{nftsold}</p>
            <p className='font-mono w-[180px] text-[#FFFFFF]'>{volume} ETH</p>
    </div>
  )
}

export default RankingItem