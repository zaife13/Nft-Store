import React from 'react'

const CreatorCard = ({image, name, sales, number}) => {
  return (
    <div className='flex flex-col w-60 p-5 bg-[#3B3B3B] justify-center items-center rounded-[20px] relative transition-all duration-300 hover:scale-95 cursor-pointer ease-out'>
        <img className=' w-28' src={image}></img>
        <p className='text-white 2xl:text-xl xl:text-xl font-bold tracking-wider 2xl:mt-4 xl:mt-4'>
            {name}
        </p>
        <p className='text-[#858584] tracking-wider 2xl:mt-2 xl:mt-2'>
            Total Sales: <span className='text-white font-mono ml-1'> {sales} ETH</span>
        </p>
        <div className="absolute flex 2xl:w-8 xl:w-[30px] font-mono xl:h-[30px] top-5 left-4 rounded-full justify-center items-center bg-[#2B2B2B] text-[#858584]">
            {number}
        </div>
    </div>
  )
}

export default CreatorCard