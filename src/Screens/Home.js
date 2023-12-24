import BrowseCategories from "../Components/BrowseCategories";
import DiscoverMoreNfts from "../Components/DiscoverMoreNfts";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import HowItWorks from "../Components/HowItWorks";
import Navbar from "../Components/Navbar";
import TopCreator from "../Components/TopCreator";
import TrendingCollections from "../Components/TrendingCollections";
import WeeklyDigest from "../Components/WeeklyDigest";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrendingCollections />
      <TopCreator/>
      <BrowseCategories />
      <DiscoverMoreNfts />
      <HowItWorks />
      <WeeklyDigest />
      <Footer />
    </>
  );
};

export default Home;
