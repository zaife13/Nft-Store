import astraunaut from "../Assets/Astraunaut.png";
import { HiOutlineMail } from "react-icons/hi";
const WeeklyDigest = () => {
  return (
    <>
      <div className="max-w-[1050px] m-auto my-10 rounded-[20px] bg-customGray1 py-10 px-3 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:px-8 lg:py-14 lg:px-14 lg:gap-20">
        <div>
          <img src={astraunaut} alt="" />
        </div>
        <div>
          <h1 className="text-bold font-mono font-bold text-xl mb-5 text-white">
            Join our weekly digest
          </h1>
          <div className="relative flex flex-col space-y-4">
            <p className="font-sans text-gray-400">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <input
              className="py-3 rounded-[20px] px-5 focus:border-transparent focus:outline-none md:max-w-1/2"
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
            />

            <button className="bg-customPurple py-3 rounded-[20px] mb-10 flex justify-center items-center gap-3 text-white">
              <HiOutlineMail className="w-5 h-5" />
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeeklyDigest;
