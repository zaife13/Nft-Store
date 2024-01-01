import walletIcon from "../Assets/SetupWalletIcon.png";
import collectionIcon from "../Assets/CreateCollectionIcon.png";
import earningIcon from "../Assets/StartEarningIcon.png";

const HowItWorks = () => {
  const data = [
    {
      title: "Setup Your wallet",
      para: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      img: walletIcon,
    },
    {
      title: "Create Collection",
      para: "Upload your work and setup your collection. Add a description, social links, floor price and many more.",
      img: collectionIcon,
    },
    {
      title: "Start Earning",
      para: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      img: earningIcon,
    },
  ];
  return (
    <>
      <div className="bg-customGray max-w-[1050px] space-y-10 m-auto py-10 px-5 lg:space-y-16 lg:py-20 lg:px-10">
        <div className="space-y-2">
          <h1 className="text-white font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-[26px] tracking-wider">
            How It Works
          </h1>
          <h2 className="text-white font-light text-xl">
            Find out how to get started
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          {data.map((item) => (
            <div className=" bg-customGray1 rounded-[20px] pt-5 pb-5 pl-5 pr-5 md:pt-3 md:pb-7 w-full md:max-w-[270px] flex justify-between md:flex-col">
              <div>
                <img src={item.img} alt="wallet icon" />
              </div>
              <div className="text-white gap-3 flex flex-col items-start justify-center md:items-center">
                <h1 className="text-base font-semibold md:text-[22px]">
                  {item.title}
                </h1>
                <p className="text-xs md:text-center">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HowItWorks;
