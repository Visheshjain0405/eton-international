import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import VisionMission from "@/components/about/VisionMission";
import GlobalOutlook from "@/components/about/GlobalOutlook";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Eteon International | Our Story & Global Vision",
  description: "Discover Eteon International's journey, our commitment to quality, and our mission to simplify global trade. Learn about our leadership and core values.",
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden bg-white font-body selection:bg-accent selection:text-white">
      <AboutHero />
      <CompanyProfile />
      <VisionMission />
      <GlobalOutlook />
      <AboutCTA />
    </div>
  );
}
