import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-amber-200">
      <Header />
      <div className="mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Footer />
      
    </main>

    </>
  );
}