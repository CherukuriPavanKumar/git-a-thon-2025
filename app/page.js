import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProbStmts from "../components/ProbStmts";
import Register from "../components/Register";

export default function Home() {
  return (
    <main className="bg-[#0f1214] text-white min-h-screen">
      <Navbar />

      <Hero />

      <div className="px-4 md:px-20 space-y-28 mt-20 pb-20">
        <About />
        <Register />
        <ProbStmts />
      </div>
    </main>
  );
}
