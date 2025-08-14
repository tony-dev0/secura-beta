import Header from "../sections/header";
import Footer from "../sections/footer";
import EarnWithUs from "../sections/earn-with-us";
import SafetyFeatures from "../sections/safety-features";
import CTA from "../sections/cta";
import HeroSection from "../sections/hero-section";
import HowitWorks from "../sections/how-it-works";
import RideWithUs from "../sections/ride-with-us";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowitWorks />
      <RideWithUs />
      <EarnWithUs />
      <SafetyFeatures />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
