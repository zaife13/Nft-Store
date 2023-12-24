import walletIcon from "../Assets/SetupWalletIcon.png";

const HowItWorks = () => {
  const data = [
    {
      title: "Setup Your wallet",
      para: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      title: "Create Collection",
      para: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
  ];
  return (
    <>
      <div className="bg-customGray max-w-[1050px] space-y-10 m-auto py-10 px-5 lg:space-y-16 lg:py-20 lg:px-10">
        <div className="space-y-2">
          <h1 className="text-white font-semibold text-2xl">How It Works</h1>
          <h2 className="text-white font-light text-xl">
            Find out how to get started
          </h2>
        </div>

        <div className="border-2 border-red-500 flex md:flex-col">
          {data.map((item) => (
            <div className="border-2 border-yellow-500 w-full md:max-w-[270px] flex justify-between md:flex-col">
              <div>
                <img src={walletIcon} alt="wallet icon" />
              </div>
              <div className="text-white flex flex-col items-start justify-center md:items-center">
                <h1>{item.title}</h1>
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
