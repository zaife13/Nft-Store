import shroomieAvatar from "../Assets/Avatars/Shroomie Avatar.png";
import { PiEyeLight } from "react-icons/pi";
import { useState, useEffect } from "react";

const NftHighlight = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 24,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevState) => {
        const { hours, minutes, seconds } = prevState;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
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
      <div className="max-w-[1050px] m-auto  h-[650px] bg-nftImg bg-center bg-cover relative flex items-end">
        <div className="flex flex-col z-[2] w-full mx-[30px] md:flex-row pb-[60px] md:mx-[70px] lg:mx-[100px]">
          <div className=" w-full md:w-1/2 space-y-[30px]">
            <button className="flex space-x-3 bg-customGray1 px-5 py-[10px] rounded-[20px]">
              <img className="w-6 h-6" src={shroomieAvatar} alt="Avatar" />
              <p className="text-white">Shroomie</p>
            </button>
            <h1 className="text-white text-[38px] font-bold">
              Magic Mashrooms
            </h1>

            {/* timer div for mobile device start here */}
            <div className=" w-full md:w-1/2 flex items-end justify-center md:hidden">
              <div className="p-[30px] max-w-[295px]  rounded-[20px] bg-opacity-50 backdrop-filter backdrop-blur-lg bg-customGray">
                <div>
                  <p className="font-mono text-white">Auction ends in:</p>
                </div>
                <div className="flex space-x-[10px]">
                  <div className="flex flex-col text-white">
                    <p className="text-[38px] font-bold">{hours}</p>
                    <p className="text-[12px] font-mono">Hours</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-[28px] font-bold">:</p>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-[38px] font-bold">{minutes}</p>
                    <p className="text-[12px] font-mono">Minutes</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-[28px] font-bold">:</p>
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-[38px] font-bold">{seconds}</p>
                    <p className="text-[12px] font-mono">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            {/* timer div for mobile device end here */}
            <button className="flex items-center justify-center gap-3 py-5 px-12 bg-white rounded-[20px] w-full md:w-1/2">
              <PiEyeLight className="text-customPurple" />
              <p className="font-bold">See NFT</p>
            </button>
          </div>

          {/* timer div for desktop and tablet devices start here */}
          <div className="hidden  w-full md:w-1/2 md:flex items-end justify-end">
            <div className="p-[30px] max-w-[295px]  rounded-[20px] bg-opacity-50 backdrop-filter backdrop-blur-lg bg-customGray">
              <div>
                <p className="font-mono text-white">Auction ends in:</p>
              </div>
              <div className="flex space-x-[10px]">
                <div className="flex flex-col text-white items-center">
                  <p className="text-[38px] font-bold">{hours}</p>
                  <p className="text-[12px] font-mono">Hours</p>
                </div>
                <div className="pt-3">
                  <p className="text-[28px] font-bold text-white">:</p>
                </div>
                <div className="flex flex-col text-white items-center">
                  <p className="text-[38px] font-bold">{minutes}</p>
                  <p className="text-[12px] font-mono">Minutes</p>
                </div>
                <div className="pt-3">
                  <p className="text-[28px] font-bold text-white">:</p>
                </div>
                <div className="flex flex-col text-white items-center">
                  <p className="text-[38px] font-bold">{seconds}</p>
                  <p className="text-[12px] font-mono">Seconds</p>
                </div>
              </div>
            </div>
          </div>
          {/* timer div for desktop and tablet devices end here */}
        </div>
        <div className="bg-gradient-to-t from-purple-600 to-transparent h-full w-full absolute inset-0 z-[1]"></div>
        {/* div that act as a gradient bg start here */}

        {/* div that act as a gradient bg end here */}
      </div>
    </>
  );
};
export default NftHighlight;
