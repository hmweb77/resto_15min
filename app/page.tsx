import Navbar from "./components/section1";
import Hero from "./components/section2";
import BestSellers from "./components/section3";
import MenuPreview from "./components/section4";
import Separator from "./components/section5";
import Gallery from "./components/section6";
import Reviews from "./components/section7";
import Contact from "./components/section8";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] bg-texture" >
      <Navbar />
      <Hero />
      <BestSellers />
      <MenuPreview />
      <Separator />
      <Gallery />
      <Separator />
      <Reviews />
      <Contact />
      <footer className="bg-stone-900 py-6 text-stone-300 text-center text-sm">
        <p>© {new Date().getFullYear()} Momentos Wine & Cheese. All rights reserved.</p>
      </footer>
    </div>
  );
}
