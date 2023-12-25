import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import RankingItem from '../Components/RankingItem'
import Rankingdata from '../data/Rankings'

const Rankings = () => {

    const [tab, setTab] = useState('today')
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Rankingdata)
     }, [])

  return (
    <>
    <Navbar/>
    <div className='2xl:max-w-6xl xl:max-w-6xl lg:max-w-7xl flex flex-col '>
        <div className='flex flex-col gap-4 py-20 px-20'>
            <p className='2xl:text-[51px] xl:text-[51px] tracking-wide font-bold text-white'>Top Creators</p>
            <p className=' 2xl:text-2xl xl:text-2xl font-normal tracking-wider text-white'>Check out top ranking NFT artists on the NFT Marketplace.</p>
        </div>
        <div className='w-full flex px-20'>
            <div onClick={()=>{setTab('today')}} className={`flex h-16 px-7 justify-center items-center cursor-pointer ${tab === 'today' ? 'text-white' : 'text-[#858584]'} w-full ${tab === 'today' ? 'border-b-2' : 'border-0'} border-[#858584]`}>
                <p className='font-bold 2xl:text-2xl xl:text-2xl'>Today</p>
            </div>
            <div onClick={()=>{setTab('week')}} className={`flex h-16 px-7 justify-center items-center cursor-pointer ${tab === 'week' ? 'text-white' : 'text-[#858584]'} w-full ${tab === 'week' ? 'border-b-2' : 'border-0'} border-[#858584]`}>
                <p className='font-bold 2xl:text-2xl xl:text-2xl'>This Week</p>
            </div>
            <div onClick={()=>{setTab('month')}} className={`flex h-16 px-7 justify-center items-center cursor-pointer ${tab === 'month' ? 'text-white' : 'text-[#858584]'} w-full ${tab === 'month' ? 'border-b-2' : 'border-0'} border-[#858584]`}>
                <p className='font-bold 2xl:text-2xl xl:text-2xl'>This Month</p>
            </div>
            <div onClick={()=>{setTab('all')}} className={`flex h-16 px-7 justify-center items-center cursor-pointer ${tab === 'all' ? 'text-white' : 'text-[#858584]'} w-full ${tab === 'all' ? 'border-b-2' : 'border-0'} border-[#858584]`}>
                <p className='font-bold 2xl:text-2xl xl:text-2xl'>All Time</p>
            </div>
        </div>
        <div className=' flex ml-20 rounded-[20px] border border-[#3B3B3B] h-12 w-[1050px] mt-10 items-center px-5'>
            <p className='font-mono w-[50px] text-[#858584]'>⌗</p>
            <p className='font-mono w-[430px] text-[#858584]'>Artist</p>
            <p className='font-mono w-[180px] text-[#858584]'>Change</p>
            <p className='font-mono w-[180px] text-[#858584]'>NFT Sold</p>
            <p className='font-mono w-[180px] text-[#858584]'>Volume</p>
        </div>
        <div className='flex w-full flex-col mx-20 gap-6 mt-5'>
            {data && data.map((item, index)=>(
                <RankingItem key={index} image={item.image} name={item.name} number={index + 1} volume={item.volume} nftsold={item.nftsold} change={item.change}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Rankings