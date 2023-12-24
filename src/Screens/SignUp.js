import Navbar from "../Components/Navbar";
import signup from "../Assets/signupimage.jpg";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Footer from "../Components/Footer";

const SignUp = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col px-0 2xl:pt-3 xl:pt-3 lg:pt-3 md:pt-20">
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
          <img alt='icon' src={signup}></img>
        </div>
        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full flex flex-col 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4 justify-center 2xl:items-start xl:items-start lg:items-start md:items-start items-center 2xl:px-10 xl:px-10 lg:px-10 md:px-6 px-6">
          <p className="text-white 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-4xl tracking-wider font-bold">
            Create Account
          </p>
          <p className="text-white 2xl:text-2xl xl:text-2xl font-normal 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-3 mt-5 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-11/12 w-full 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-4 tracking-wider">
            Welcome! Enter Your Details And Start Creating, Collecting And
            Selling Nfts.
          </p>
          <div className="flex bg-white 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-4/5 w-11/12 rounded-3xl px-4 py-2.5 mt-10">
            <AiOutlineUser className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              placeholder="Username"
              className="ml-4 outline-none placeholder:text-gray-500/90"
            ></input>
          </div>
          <div className="flex bg-white 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-4/5 w-11/12 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineMail className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              placeholder="Email"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex bg-white 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-4/5 w-11/12 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineLock className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              type="password"
              placeholder="Password"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex bg-white 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-4/5 w-11/12 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineLock className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex cursor-pointer justify-center items-center bg-[#A259FF] 2xl:w-3/5 xl:w-3/4 lg:w-3/4 md:w-4/5 w-11/12 rounded-3xl px-4 py-2.5 mt-9 hover:scale-95 ease-out transition-all duration-500">
            <p className="text-white font-bold">Create Account</p>
          </div>
        </div>
      </div>
      <div className="h-10 2xl:hidden xl:hidden lg:hidden md:block block"></div>
      <Footer />
    </>
  );
};

export default SignUp;
