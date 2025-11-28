import React, { useState, useEffect } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, MonitorPlay } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen bg-terminal-bg flex items-center justify-center p-4 md:p-8 font-mono">
      <div className="w-full max-w-[1400px] aspect-video max-h-[90vh] flex flex-col gap-3">

        {/* Main Presentation Window */}
        <div className="flex-1 bg-terminal-surface border-2 border-terminal-border shadow-2xl overflow-hidden relative">

            {/* Slide Content */}
            <div className="absolute inset-0 p-2 md:p-4 bg-terminal-bg">
                <SlideRenderer slide={SLIDES[currentSlideIndex]} />
            </div>
        </div>

        {/* Bottom Bar: Terminal-style control panel */}
        <div className="bg-terminal-surface border-2 border-terminal-border shadow-lg p-3 flex items-center justify-center relative">

            {/* Left Side Info - Terminal style */}
            <div className="absolute left-4 flex items-center gap-3">
                 <div className="px-2 py-1 bg-terminal-bg border border-brand-yellow text-brand-yellow">
                    <MonitorPlay size={18} />
                 </div>
                 <div>
                    <h3 className="text-xs font-bold text-brand-yellow uppercase tracking-wider">[ SenSen Ecosystem ]</h3>
                    <p className="text-xs text-brand-blue">&#62; Slide {currentSlideIndex + 1}/{totalSlides}</p>
                 </div>
            </div>

            {/* Navigation & Pagination - Centered */}
            <div className="flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className={`px-3 py-1 border-2 bg-terminal-bg text-brand-blue transition-all duration-200 ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed border-terminal-border' : 'border-brand-blue hover:bg-brand-blue hover:text-terminal-bg'}`}
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`h-2 transition-all duration-300 ${
                                idx === currentSlideIndex
                                ? 'w-8 bg-brand-yellow'
                                : 'w-2 bg-terminal-border hover:bg-brand-blue'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className={`px-3 py-1 border-2 bg-terminal-bg text-brand-blue transition-all duration-200 ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed border-terminal-border' : 'border-brand-blue hover:bg-brand-blue hover:text-terminal-bg'}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Right Side - Fullscreen Button */}
            <div className="absolute right-4">
                <button
                    onClick={toggleFullscreen}
                    className="px-3 py-1 border-2 border-brand-green bg-terminal-bg text-brand-green hover:bg-brand-green hover:text-terminal-bg transition-all duration-200 uppercase text-xs font-bold"
                    title="Toggle Fullscreen (F)"
                >
                    <Maximize2 size={18} />
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default App;