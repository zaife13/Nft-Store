import animal1 from "../Assets/Primary Animal Photo Placeholder.png";
import animal2 from "../Assets/Secondary Animal Photo Placeholder.png";
import animal3 from "../Assets/Third Animal Photo Placeholder.png";
import animalAvatar from "../Assets/Animal 1 Avatar.png";

import mushroom1 from "../Assets/Primary Mushroom Photo Placeholder.png";
import mushroom2 from "../Assets/Secondary Mushroom Photo Placeholder.png";
import mushroom3 from "../Assets/Third Mushroom Photo Placeholder.png";
import mushroomAvatar from "../Assets/Mushroom Avatar Placeholder.png";

import machine1 from "../Assets/Primary Machine Photo Placeholder.png";
import machine2 from "../Assets/Secondary Machine Photo Placeholder.png";
import machine3 from "../Assets/Third Machine Photo Placeholder.png";
import machineAvatar from "../Assets/Machine Avatar Placeholder.png";

const TrendingCollections = () => {
  return (
    <>
      <div className="bg-customGray max-w-[1050px] space-y-10 m-auto py-10 px-5 lg:space-y-16 lg:py-20 lg:px-10">
        <div className="space-y-2">
          <h1 className="text-white font-semibold text-2xl">
            Trending Collections
          </h1>
          <h2 className="text-white font-light text-xl">
            Checkout our weekly updated trending collection.
          </h2>
        </div>
        <div className="flex space-x-5 justify-center">
          {/* 1st card div start here */}
          <div className="space-y-4 max-w-[330px] max-h-[525px]">
            <div className="transition-transform transform-gpu hover:scale-90 duration-300">
              <img className="h-80 w-full" src={animal1} alt="" />
            </div>
            {/* div for three image boxes start here */}
            <div className="flex justify-between">
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={animal2} alt="" />
              </div>
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={animal3} alt="" />
              </div>
              <div className="w-24 h-24 bg-customPurple rounded-[20px] flex items-center justify-center transition-transform transform-gpu hover:scale-90 duration-300">
                <p className="font-mono text-white font-medium text-lg">
                  1025+
                </p>
              </div>
            </div>
            {/* div for three image boxes end here */}

            {/* div for profile and name start here */}
            <div className="space-y-[10px]">
              <h1 className="text-white text-[22px] font-semibold">
                DSGN Animals
              </h1>
              <div className="flex space-x-3">
                <img
                  className="transition-transform transform-gpu hover:scale-90 duration-300"
                  src={animalAvatar}
                  alt=""
                />
                <p className="text-white">MrFox</p>
              </div>
            </div>
            {/* div for profile and name end here */}
          </div>
          {/* 1st card div end here */}

          {/* 2nd card div start here */}
          <div className="space-y-4 max-w-[330px] max-h-[525px] hidden md:block">
            <div className="transition-transform transform-gpu hover:scale-90 duration-300">
              <img className="h-80 w-full" src={mushroom1} alt="" />
            </div>
            {/* div for three image boxes start here */}
            <div className="flex justify-between">
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={mushroom2} alt="" />
              </div>
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={mushroom3} alt="" />
              </div>
              <div className="w-24 h-24 bg-customPurple rounded-[20px] flex items-center justify-center transition-transform transform-gpu hover:scale-90 duration-300">
                <p className="font-mono text-white font-medium text-lg">
                  1025+
                </p>
              </div>
            </div>
            {/* div for three image boxes end here */}

            {/* div for profile and name start here */}
            <div className="space-y-[10px]">
              <h1 className="text-white text-[22px] font-semibold">
                Magic Mushrooms
              </h1>
              <div className="flex space-x-3">
                <img
                  className="transition-transform transform-gpu hover:scale-90 duration-300"
                  src={mushroomAvatar}
                  alt=""
                />
                <p className="text-white">Shroomie</p>
              </div>
            </div>
            {/* div for profile and name end here */}
          </div>
          {/* 2nd card div end here */}

          {/* 3rd card div start here */}
          <div className="space-y-4 max-w-[330px] max-h-[525px] hidden lg:block">
            <div className="transition-transform transform-gpu hover:scale-90 duration-300">
              <img className="h-80 w-full" src={machine1} alt="" />
            </div>
            {/* div for three image boxes start here */}
            <div className="flex justify-between">
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={machine2} alt="" />
              </div>
              <div className="w-24 h-24 transition-transform transform-gpu hover:scale-90 duration-300">
                <img src={machine3} alt="" />
              </div>
              <div className="w-24 h-24 bg-customPurple rounded-[20px] flex items-center justify-center transition-transform transform-gpu hover:scale-90 duration-300">
                <p className="font-mono text-white font-medium text-lg">
                  1025+
                </p>
              </div>
            </div>
            {/* div for three image boxes end here */}

            {/* div for profile and name start here */}
            <div className="space-y-[10px]">
              <h1 className="text-white text-[22px] font-semibold">
                Disco Machines
              </h1>
              <div className="flex space-x-3">
                <img
                  className="transition-transform transform-gpu hover:scale-90 duration-300"
                  src={machineAvatar}
                  alt=""
                />
                <p className="text-white">BeKind2Robots</p>
              </div>
            </div>
            {/* div for profile and name end here */}
          </div>
          {/* 3rd card div end here */}
        </div>
      </div>
    </>
  );
};
export default TrendingCollections;
