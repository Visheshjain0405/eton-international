import ImageSlider from "@/components/home/ImageSlider";
import ProductCategories from "@/components/home/ProductCategories";
import ExportProcess from "@/components/home/ExportProcess";
import GlobalReach from "@/components/home/GlobalReach";
import BusinessInquiry from "@/components/home/BusinessInquiry";

export const metadata = {
  title: "Eteon International | Global Export & Import Solutions",
  description: "Leading global trade partner specializing in premium industrial packaging, agro textiles, and agricultural products. Connecting India to the worldwide market.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <ImageSlider />

      {/* Content Sections */}
      <ProductCategories />
      <ExportProcess />
      <GlobalReach />
      <BusinessInquiry />
    </div>
  );
}
