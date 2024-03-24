import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks ";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const DynamicHero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <Loader/>
});
const DynamicModel = dynamic(() => import("@/components/Model"), {
  ssr: false,
  loading: () => <Loader/>
});
const DynamicHighlights = dynamic(() => import("@/components/Highlights"), {
  ssr: false,
  loading: () => <Loader/>
});
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <DynamicHero />
      <DynamicHighlights />
      <DynamicModel />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
