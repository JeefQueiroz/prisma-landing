import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
};

export default App;
