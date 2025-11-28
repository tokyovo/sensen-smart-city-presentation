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
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-[1400px] aspect-video max-h-[90vh] flex flex-col gap-4">
        
        {/* Main Presentation Window */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden relative">

            {/* Slide Content */}
            <div className="absolute inset-0 p-2 md:p-4 bg-slate-100">
                <SlideRenderer slide={SLIDES[currentSlideIndex]} />
            </div>
        </div>

        {/* Bottom Bar: Progress & Thumbnails */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center relative">

            {/* Left Side Info - Absolute positioned */}
            <div className="absolute left-4 flex items-center gap-3">
                 <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                    <MonitorPlay size={20} />
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-slate-800">SenSen Ecosystem</h3>
                    <p className="text-xs text-slate-500">Slide {currentSlideIndex + 1} of {totalSlides}</p>
                 </div>
            </div>

            {/* Navigation & Pagination - Centered */}
            <div className="flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className={`p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-300 ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentSlideIndex
                                ? 'w-8 bg-brand-600'
                                : 'w-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className={`p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-300 ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Right Side - Fullscreen Button */}
            <div className="absolute right-4">
                <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-brand-100 hover:bg-brand-200 text-brand-700 hover:text-brand-900 transition-all duration-300 hover:scale-110"
                    title="Toggle Fullscreen (F)"
                >
                    <Maximize2 size={20} />
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default App;