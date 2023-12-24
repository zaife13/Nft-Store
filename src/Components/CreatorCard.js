import React from 'react'

const CreatorCard = ({image, name, sales, number}) => {
  return (
    <div className='flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row flex-row 2xl:w-60 xl:w-60 lg:w-60 md:w-[330px] w-full p-5 bg-[#3B3B3B] 2xl:justify-center xl:justify-center lg:justify-center md:justify-start justify-start items-center rounded-[20px] relative transition-all duration-300 hover:scale-95 cursor-pointer ease-out'>
        <img className=' 2xl:w-28 xl:w-28 lg:w-28 md:w-[60px] w-[60px]' src={image}></img>
        <div className='flex flex-col justify-center 2xl:items-center xl:items-center lg:items-center md:items-start items-start'>

       
        <p className='text-white 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-lg font-bold tracking-wider 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-0 mt-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-3 ml-3'>
            {name}
        </p>
        <p className='text-[#858584] tracking-wider 2xl:mt-2 xl:mt-2 lg:mt-2 md:mt-0 mt-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-3 ml-3'>
            Total Sales: <span className='text-white font-mono ml-1'> {sales} ETH</span>
        </p>
        <div className="absolute flex 2xl:w-8 2xl:h-8 xl:w-[30px] xl:h-[30px] lg:h-7 lg:w-7 md:h-7 md:w-7 h-7 w-7 font-mono 2xl:top-5 xl:top-5 lg:top-5 md:top-4 top-4 left-4 rounded-full justify-center items-center bg-[#2B2B2B] text-[#858584]">
            {number}
        </div>
        </div>
    </div>
  )
}

export default CreatorCard