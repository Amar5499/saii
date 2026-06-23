import HeroSection from "../components/HeroSection";
import MessageSection from "../components/MessageSection";
import PhotoGallerySection from "../components/PhotoGallerySection";
import LatestPhotoSection from "../components/LatestPhotoSection";
import LoveReasonsSection from "../components/LoveReasonsSection";
import TimelineSection from "../components/TimelineSection";
import SecretMessageSection from "../components/SecretMessageSection";
import FooterSection from "../components/FooterSection";    
import GeneralSection from "../components/GeneralSection";    
import MusicPlayer from "../components/MusicPlayer";


const HomePage = () => {
  return (
    <main className="bg-[#f8f5ee]">
        <MusicPlayer />

      <HeroSection />
      <MessageSection />
      <LoveReasonsSection />
            <PhotoGallerySection />
      <LatestPhotoSection />
      <TimelineSection />
            <GeneralSection />
      <SecretMessageSection />
      <FooterSection />
      <div
  style={{
    height: "200px",
  }}
>
</div>
    </main>
  );
};

export default HomePage;