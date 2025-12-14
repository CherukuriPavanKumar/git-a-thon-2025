import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ComSpons from "../components/ComSpons";
import ProbStmts from "../components/ProbStmts";
import Register from "../components/Register";
import Footer from "@/components/Footer";
import DarkVeil from "@/components/background.jsx";

export default function Home() {
  return (
    <main className="text-white min-h-screen">
      <Navbar />
      {/* <DarkVeil /> */}

      <Hero />

      <div className="px-4 md:px-20 space-y-28 mt-20 pb-20">
        <About />
        <ComSpons />
        <Register />
        {/* <ProbStmts /> */}
      </div>
      <Footer />
    </main>
  );
}
