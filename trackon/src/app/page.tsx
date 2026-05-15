import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections (Features, Testimonials, etc.) will go here */}
      </main>
    </div>
  );
}
