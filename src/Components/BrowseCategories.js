import artImg from "../Assets/artblurImg.jpg";
import collectionImg from "../Assets/collectibleblurImg.jpg";
import musicImg from "../Assets/musicblurImg.jpg";
import photographyImg from "../Assets/photographyblurImg.jpg";
import sportImg from "../Assets/sportblurImg.jpg";
import utilityImg from "../Assets/utilityblurImg.jpg";
import videoImg from "../Assets/videoblurImg.jpg";
import virtualWorldImg from "../Assets/virtualblurImg.jpg";

//Importing Icons
import { PiPaintBrush } from "react-icons/pi";
import { PiMusicNotes } from "react-icons/pi";
import { PiCamera } from "react-icons/pi";
import { PiVideoCamera } from "react-icons/pi";
import { PiMagicWandLight } from "react-icons/pi";
import { PiBasketball } from "react-icons/pi";
import { PiPlanet } from "react-icons/pi";
import { PiSwatches } from "react-icons/pi";

const BrowseCategories = () => {
  let data = [
    {
      title: "Art",
      logo: (
        <PiPaintBrush className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: artImg,
    },
    {
      title: "Collectibles",
      logo: (
        <PiSwatches className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: collectionImg,
    },
    {
      title: "Music",
      logo: (
        <PiMusicNotes className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: musicImg,
    },
    {
      title: "Photography",
      logo: (
        <PiCamera className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: photographyImg,
    },
    {
      title: "Video",
      logo: (
        <PiVideoCamera className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: videoImg,
    },
    {
      title: "Utility",
      logo: (
        <PiMagicWandLight className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: utilityImg,
    },
    {
      title: "Sport",
      logo: (
        <PiBasketball className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: sportImg,
    },
    {
      title: "Virtual Worlds",
      logo: (
        <PiPlanet className="absolute inset-0 m-auto w-[100px] h-[100px] text-white" />
      ),
      img: virtualWorldImg,
    },
  ];
  return (
    <>
      <div className="bg-customGray max-w-[1050px] m-auto  py-10 px-5 gap-0 md:gap-7  md:py-20 lg:py-20 lg:px-10">
        <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[26px] tracking-wider">
          Browse Categories
        </h1>

        {/* main div for cards to be rendered start here */}
        <div className="gap-5 mt-10 grid grid-cols-2 place-items-center md:grid-cols-4 md:gap-7">
          {data.map((item) => (
            <div className="max-w-60 max-h-80 mb-5 relative transition-transform transform-gpu hover:scale-90 duration-300">
              <div className="w-full h-3/4  relative">
                <img
                  className="w-full h-full rounded-t-3xl "
                  src={item.img}
                  alt=""
                />
                {item.logo}
              </div>
              <div className="w-full h-1/4 py-5 px-5 lg:px-7 font-semibold text-white bg-customGray1 rounded-b-3xl">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        {/* main div for cards to be rendered end here */}
      </div>
    </>
  );
};
export default BrowseCategories;
