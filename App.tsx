import React, { useState, useEffect } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, MonitorPlay } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

            {/* Overlay Controls (Hover) */}
            <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-4">
                <button 
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className={`pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-black/20 text-slate-400 hover:text-white backdrop-blur-sm transition-all duration-300 ${currentSlideIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <ChevronLeft size={32} />
                </button>
                <button 
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className={`pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-black/20 text-slate-400 hover:text-white backdrop-blur-sm transition-all duration-300 ${currentSlideIndex === totalSlides - 1 ? 'opacity-0' : 'opacity-100'}`}
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>

        {/* Bottom Bar: Progress & Thumbnails */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-6 justify-between">
            
            <div className="flex items-center gap-3">
                 <div className="p-2 bg-brand-100 text-brand-700 rounded-lg">
                    <MonitorPlay size={20} />
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-slate-800">SenSen Ecosystem</h3>
                    <p className="text-xs text-slate-500">Slide {currentSlideIndex + 1} of {totalSlides}</p>
                 </div>
            </div>

            {/* Pagination Dots */}
            <div className="hidden md:flex items-center gap-2">
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

            {/* Simple Next Button for Mobile */}
            <div className="md:hidden">
                 <button 
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium disabled:opacity-50"
                 >
                    Next
                 </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default App;