import FocusAreas from "./components/home/FocusAreas";
import Hero from "./components/home/Hero";
import ImpactSnapshot from "./components/home/ImpactSnapshot";
import LatestNews from "./components/home/LatestNews";
import MissionBar from "./components/home/MissionBar";
import PartnersBand from "./components/home/PartnersBand";
import FooterCta from "./components/home/FooterCta";
import SiteFooter from "./components/home/SiteFooter";
import SiteHeader from "./components/home/SiteHeader";
import WhyZomujo from "./components/home/WhyZomujo";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <Hero />
      <main className="container py-12 pt-16">
        <MissionBar />
        <FocusAreas />
        <ImpactSnapshot />
        <WhyZomujo />
        <LatestNews />
        <PartnersBand />
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  );
}
