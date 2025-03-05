import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import ContactSection from "../Components/ContactSession";
import HeaderSection from "../Components/HeaderSection";
import ProductCarousel from "../Components/ProductCarousel";
import StrengthPoint from "../Components/StrengthPoint";

const Index = () => {
  return (
    <>
      <Banner />
      <StrengthPoint />
      <HeaderSection />
      <AboutSection />
      <ProductCarousel />
      <ContactSection />
    </>
  );
};

export default Index;
