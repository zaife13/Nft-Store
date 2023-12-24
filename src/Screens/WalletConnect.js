import React from 'react'
import walletconnectbg from '../Assets/walletconnectimage.png'
import Navbar from '../Components/Navbar'
import metamask from '../Assets/Logos/metamask.png'
import coinbase from '../Assets/Logos/coinbase.png'
import walletconnect from '../Assets/Logos/wallet-connect-logo.png'
import Footer from '../Components/Footer'

const WalletConnect = () => {
  return (
    <>
    <Navbar/>
    <div>
         <div className="w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col px-0 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-20">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
                <img alt='icon' src={walletconnectbg}></img>
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4 tracking-wider 2xl:items-start xl:items-start lg:items-start md:items-start items-center 2xl:px-10 xl:px-10 lg:px-10 md:px-6 px-6">
            <p className="text-white 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-4xl font-bold">Connect Wallet</p>
                <p className="text-white 2xl:text-2xl xl:text-2xl font-normal 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-3 mt-5 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-11/12 w-full 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-4 tracking-wider">Choose a wallet you want to connect. There are several wallet providers.</p>
               <div className='flex  gap-4 2xl:w-3/5 xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 mt-6 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10 lg:h-8 lg:w-8 md:h-8 md:w-8 h-8 w-8'>
                        <img alt='icon' src={metamask} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-xl font-bold text-center 2xl:mt-2 xl:mt-2 lg:mt-1 md:mt-1 mt-1'>Metamask</p>
               </div>
               <div className='flex gap-4 2xl:w-3/5 xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 mt-4 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10 lg:h-8 lg:w-8 md:h-8 md:w-8 h-8 w-8'>
                        <img alt='icon' src={walletconnect} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl lg:text-xl md:text-xl text-xl font-bold text-center 2xl:mt-2 xl:mt-2 lg:mt-1 md:mt-1 mt-1'>Wallet Connect</p>
               </div>
               <div className='flex gap-4 2xl:w-3/5 xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 mt-4 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10 lg:h-8 lg:w-8 md:h-8 md:w-8 h-8 w-8'>
                        <img alt='icon' src={coinbase} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl  lg:text-xl md:text-xl text-xl font-bold text-center 2xl:mt-2 xl:mt-2 lg:mt-1 md:mt-1 mt-1'>Coinbase</p>
               </div>
            </div>  
        </div>
    </div>
    <div className="h-10 2xl:hidden xl:hidden lg:hidden md:block block"></div>
    <Footer/>
    </>
  )
}

export default WalletConnect