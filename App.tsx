import React, { useState, useEffect } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, Maximize2, MonitorPlay, Palette } from 'lucide-react';

type Theme = 'terminal' | 'light';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [theme, setTheme] = useState<Theme>('terminal');
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

  const toggleTheme = () => {
    setTheme(prev => prev === 'terminal' ? 'light' : 'terminal');
  };

  // Update body class based on theme
  useEffect(() => {
    const body = document.getElementById('app-body');
    if (body) {
      if (theme === 'terminal') {
        body.className = 'bg-terminal-bg text-terminal-text font-mono antialiased overflow-hidden';
      } else {
        body.className = 'bg-slate-50 text-slate-800 font-sans antialiased overflow-hidden';
      }
    }
  }, [theme]);

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
    <div className={`min-h-screen flex items-center justify-center p-4 md:p-8 ${theme === 'terminal' ? 'font-mono' : 'font-sans'}`}>
      <div className="w-full max-w-[1400px] aspect-video max-h-[90vh] flex flex-col gap-3">

        {/* Main Presentation Window */}
        <div className={`flex-1 shadow-2xl overflow-hidden relative ${
          theme === 'terminal'
            ? 'bg-terminal-surface border-2 border-terminal-border'
            : 'bg-white rounded-xl border border-slate-200'
        }`}>

            {/* Slide Content */}
            <div className={`absolute inset-0 p-2 md:p-4 ${theme === 'terminal' ? 'bg-terminal-bg' : 'bg-slate-50'}`}>
                <SlideRenderer slide={SLIDES[currentSlideIndex]} theme={theme} />
            </div>
        </div>

        {/* Bottom Bar: Control panel */}
        <div className={`shadow-lg p-3 flex items-center justify-center relative ${
          theme === 'terminal'
            ? 'bg-terminal-surface border-2 border-terminal-border'
            : 'bg-white rounded-xl border border-slate-200'
        }`}>

            {/* Left Side Info */}
            <div className="absolute left-4 flex items-center gap-3">
                 <div className={`px-2 py-1 ${
                   theme === 'terminal'
                     ? 'bg-terminal-bg border border-brand-yellow text-brand-yellow'
                     : 'bg-blue-50 border border-blue-500 text-blue-600'
                 }`}>
                    <MonitorPlay size={18} />
                 </div>
                 <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${
                      theme === 'terminal' ? 'text-brand-yellow' : 'text-blue-600'
                    }`}>
                      {theme === 'terminal' ? '[ SenSen Ecosystem ]' : 'SenSen Ecosystem'}
                    </h3>
                    <p className={`text-xs ${theme === 'terminal' ? 'text-brand-blue' : 'text-slate-500'}`}>
                      {theme === 'terminal' ? '>' : ''} Slide {currentSlideIndex + 1}/{totalSlides}
                    </p>
                 </div>
            </div>

            {/* Navigation & Pagination - Centered */}
            <div className="flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className={`px-3 py-1 border-2 transition-all duration-200 ${
                      theme === 'terminal'
                        ? `bg-terminal-bg text-brand-blue ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed border-terminal-border' : 'border-brand-blue hover:bg-brand-blue hover:text-terminal-bg'}`
                        : `bg-white text-blue-600 rounded-lg ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed border-slate-200' : 'border-blue-500 hover:bg-blue-600 hover:text-white'}`
                    }`}
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
                                theme === 'terminal'
                                  ? (idx === currentSlideIndex ? 'w-8 bg-brand-yellow' : 'w-2 bg-terminal-border hover:bg-brand-blue')
                                  : (idx === currentSlideIndex ? 'w-8 bg-blue-600 rounded-full' : 'w-2 bg-slate-300 hover:bg-blue-400 rounded-full')
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className={`px-3 py-1 border-2 transition-all duration-200 ${
                      theme === 'terminal'
                        ? `bg-terminal-bg text-brand-blue ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed border-terminal-border' : 'border-brand-blue hover:bg-brand-blue hover:text-terminal-bg'}`
                        : `bg-white text-blue-600 rounded-lg ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed border-slate-200' : 'border-blue-500 hover:bg-blue-600 hover:text-white'}`
                    }`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Right Side - Buttons */}
            <div className="absolute right-4 flex items-center gap-2">
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`px-3 py-1 border-2 transition-all duration-200 uppercase text-xs font-bold ${
                      theme === 'terminal'
                        ? 'border-brand-yellow bg-terminal-bg text-brand-yellow hover:bg-brand-yellow hover:text-terminal-bg'
                        : 'border-purple-500 bg-white text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white'
                    }`}
                    title="Toggle Theme (T)"
                >
                    <Palette size={18} />
                </button>

                {/* Fullscreen Button */}
                <button
                    onClick={toggleFullscreen}
                    className={`px-3 py-1 border-2 transition-all duration-200 uppercase text-xs font-bold ${
                      theme === 'terminal'
                        ? 'border-brand-green bg-terminal-bg text-brand-green hover:bg-brand-green hover:text-terminal-bg'
                        : 'border-blue-500 bg-white text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white'
                    }`}
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