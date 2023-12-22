import BrowseCategories from "../Components/BrowseCategories";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import TrendingCollections from "../Components/TrendingCollections";

const Home = () => {
  return (
    <>
      <h1 className="border-2 border-red-500">Hello</h1>
      <HeroSection />
      <TrendingCollections />
      <BrowseCategories />
      <Footer />
    </>
  );
};

export default Home;
