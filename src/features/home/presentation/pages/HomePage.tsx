import HeroSection from "../components/HeroSection";
import MessageSection from "../components/MessageSection";
import PhotoGallerySection from "../components/PhotoGallerySection";
import LoveReasonsSection from "../components/LoveReasonsSection";
import TimelineSection from "../components/TimelineSection";
import SecretMessageSection from "../components/SecretMessageSection";
import FooterSection from "../components/FooterSection";    

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white">
      <HeroSection />
      <MessageSection />
      <PhotoGallerySection />
      <LoveReasonsSection />
      <TimelineSection />
      <SecretMessageSection />
      <FooterSection />
    </main>
  );
};

export default HomePage;