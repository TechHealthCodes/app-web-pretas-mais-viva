
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTopics from "@/components/home/FeaturedTopics";
import FeaturedContent from "@/components/home/FeaturedContent";
import CommunitySection from "@/components/home/CommunitySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTopics />
      <FeaturedContent />
      <CommunitySection />
      <TestimonialSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
