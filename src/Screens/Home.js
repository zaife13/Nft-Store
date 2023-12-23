import BrowseCategories from "../Components/BrowseCategories";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import TopCreator from "../Components/TopCreator";
import TrendingCollections from "../Components/TrendingCollections";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrendingCollections />
      <TopCreator/>
      <BrowseCategories />
      <Footer />
    </>
  );
};

export default Home;
