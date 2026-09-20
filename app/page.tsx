import HeroSlider from "../components/HeroSlider";
import TrustSection from "../components/TrustSection";
import ProductsSection from "../components/ProductsSection";
import Features from "../components/Features";
import StatsSection from "../components/StatsSection";
import ClientsSection from "../components/ClientsSection";
import HomeFaqSection from "../components/HomeFaqSection";


export default function Home() {
  return (
    <div>
      <HeroSlider />
      <TrustSection />
      <ProductsSection />
      <Features />
      <StatsSection />
      <ClientsSection />
      <HomeFaqSection />
    </div>
  );
}
