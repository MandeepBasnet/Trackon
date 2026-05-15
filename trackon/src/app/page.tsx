import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

export default function Home() {
  return (
    <div className="app relative isolate">
      {/* Page-level color blobs — sit behind everything via mesh-gradient z-index: -1 */}
      <div className="mesh-gradient" aria-hidden="true">
        <div className="blob blob-cyan" />
        <div className="blob blob-blue" />
      </div>
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections (Features, Testimonials, etc.) will go here */}
      </main>
    </div>
  );
}
