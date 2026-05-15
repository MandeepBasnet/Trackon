import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections like Features, Testimonials, etc. will go here */}
      </main>
    </div>
  );
}

export default App;
