import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks ";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const DynamicHero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <p></p>
});
const DynamicModel = dynamic(() => import("@/components/Model"), {
  ssr: false,
  loading: () => <p></p>
});
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <DynamicHero />
      <Highlights />
      <DynamicModel />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
