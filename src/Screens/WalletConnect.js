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
         <div className="w-full h-full flex px-0 pt-3">
            <div className="w-1/2">
                <img alt='icon' src={walletconnectbg}></img>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start px-10">
            <p className="text-white 2xl:text-5xl xl:text-5xl font-bold">Connect Wallet</p>
                <p className="text-white 2xl:text-2xl xl:text-2xl font-normal mt-5 w-4/5 tracking-wider">Choose a wallet you want to connect. There are several wallet providers.</p>
               <div className='flex  gap-4 w-3/5 mt-6 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10'>
                        <img alt='icon' src={metamask} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl font-bold text-center mt-2'>Metamask</p>
               </div>
               <div className='flex gap-4 w-3/5 mt-4 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10'>
                        <img alt='icon' src={walletconnect} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl font-bold text-center mt-2'>Wallet Connect</p>
               </div>
               <div className='flex gap-4 w-3/5 mt-4 py-4 pl-10 rounded-2xl border transition-all hover:scale-95 duration-500 cursor-pointer bg-[#3B3B3B] border-[#A259FF]'>
                    <div className='2xl:h-10 2xl:w-10 xl:h-10 xl:w-10'>
                        <img alt='icon' src={coinbase} />
                    </div>
                    <p className='text-white 2xl:text-xl xl:text-xl font-bold text-center mt-2'>Coinbase</p>
               </div>
            </div>  
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default WalletConnect