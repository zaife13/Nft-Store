import Navbar from "../Components/Navbar";
import signup from "../Assets/signupimage.jpg";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import Footer from "../Components/Footer";

const SignUp = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full h-full flex px-0 pt-3">
        <div className="w-1/2">
          <img src={signup}></img>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start px-10">
          <p className="text-white 2xl:text-5xl xl:text-5xl font-bold">
            Create Account
          </p>
          <p className="text-white 2xl:text-2xl xl:text-2xl font-normal mt-5 w-4/5 tracking-wider">
            Welcome! Enter Your Details And Start Creating, Collecting And
            Selling Nfts.
          </p>
          <div className="flex bg-white w-3/5 rounded-3xl px-4 py-2.5 mt-10">
            <AiOutlineUser className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              placeholder="Username"
              className="ml-4 outline-none placeholder:text-gray-500/90"
            ></input>
          </div>
          <div className="flex bg-white w-3/5 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineMail className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              placeholder="Email"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex bg-white w-3/5 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineLock className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              type="password"
              placeholder="Password"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex bg-white w-3/5 rounded-3xl px-4 py-2.5 mt-4">
            <AiOutlineLock className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 text-gray-400/70" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="ml-4 outline-none placeholder:text-gray-500"
            ></input>
          </div>
          <div className="flex cursor-pointer justify-center items-center bg-[#A259FF] w-3/5 rounded-3xl px-4 py-2.5 mt-9 hover:scale-95 ease-out transition-all duration-500">
            <p className="text-white font-bold">Create Account</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
