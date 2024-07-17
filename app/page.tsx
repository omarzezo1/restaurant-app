import BlogSection from "@/sections/BlogSection";
import FooterSection from "@/sections/FooterSection";
import HeaderSection from "@/sections/HeaderSection";
import InfoSection from "@/sections/InfoSection";
import OurSpecialMenu from "@/sections/OurSpecialMenu";
import OurTeam from "@/sections/OurTeam";
import ServicesSection from "@/sections/ServicesSection";
import SubSection from "@/sections/SubSection";
import VideoSection from "@/sections/VideoSection";
import Navbar from "@/utils/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <HeaderSection/>
      <InfoSection/>
      <ServicesSection/>
      <OurSpecialMenu/>
      <OurTeam/>
      <VideoSection/>
      <BlogSection/>
      <SubSection/>
      <FooterSection/>
    </main>
  );
}
