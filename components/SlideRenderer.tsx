import React from 'react';
import { SlideContent, SlideType } from '../types';
import { SlideChart } from './charts/SlideCharts';
import { EcosystemSlide } from './EcosystemSlide';
import { 
  Building2, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  TrendingUp,
  Target
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideContent;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  if (slide.type === SlideType.TITLE) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-terminal-surface border-2 border-terminal-text shadow-2xl relative overflow-hidden">

        {/* ASCII art border decoration */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-terminal-border pointer-events-none"></div>

        <div className="z-10 space-y-8">
            <div className="mb-6 inline-block p-4 border-2 border-brand-yellow bg-terminal-bg">
                <Building2 size={48} className="text-brand-yellow" />
            </div>

            <div className="space-y-4">
                <div className="text-brand-blue text-sm tracking-widest">┌─────────────────────────────┐</div>
                <h1 className="text-4xl md:text-6xl font-bold text-brand-yellow tracking-tight uppercase">
                    {slide.title}
                </h1>
                <div className="text-brand-blue text-sm tracking-widest">└─────────────────────────────┘</div>
            </div>

            <h2 className="text-xl md:text-2xl text-brand-blue font-semibold max-w-3xl mx-auto uppercase tracking-wide">
                &#62; {slide.subtitle}
            </h2>

            <p className="text-base text-brand-green max-w-2xl mx-auto leading-relaxed font-mono">
                {slide.solution}
            </p>
        </div>

        <div className="absolute bottom-8 text-xs text-terminal-border uppercase tracking-widest">
            [ Use arrow keys to navigate ]
        </div>
      </div>
    );
  }

  if (slide.type === SlideType.ECOSYSTEM && slide.diagramLayers) {
      return <EcosystemSlide layers={slide.diagramLayers} />;
  }

  return (
    <div className="h-full bg-terminal-surface border-2 border-terminal-border p-6 md:p-8 shadow-xl flex flex-col overflow-y-auto">
      {/* Header - Terminal style */}
      <div className="mb-6 border-b-2 border-brand-blue pb-4">
        <div className="flex items-center gap-2 text-brand-blue mb-2">
            <Target size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">[ PRODUCT_OVERVIEW ]</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-yellow mb-1 uppercase tracking-wide">{slide.title}</h2>
        <h3 className="text-base text-brand-blue font-semibold">&#62; {slide.subtitle}</h3>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-grow">

        {/* Left Column */}
        <div className="flex flex-col gap-4">
            {/* Problem */}
            <div className="bg-terminal-bg p-4 border-2 border-terminal-error">
                <div className="flex items-center gap-2 mb-3 text-terminal-error">
                    <AlertTriangle size={20} strokeWidth={2.5} />
                    <h4 className="font-bold text-base uppercase tracking-wide">[ ERROR: PROBLEM ]</h4>
                </div>
                <p className="text-brand-light leading-relaxed text-sm">
                    {slide.problem}
                </p>
            </div>

            {/* Solution */}
            <div className="bg-terminal-bg p-4 border-2 border-brand-green flex-grow">
                <div className="flex items-center gap-2 mb-3 text-brand-green">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                    <h4 className="font-bold text-base uppercase tracking-wide">[ SUCCESS: SOLUTION ]</h4>
                </div>
                <p className="text-brand-light leading-relaxed text-sm">
                    {slide.solution}
                </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">

            {/* Stakeholders & Users */}
            <div className="bg-terminal-bg border-2 border-brand-blue p-4">
                <div className="flex items-center gap-2 mb-4 text-brand-blue">
                    <Users size={20} strokeWidth={2.5} />
                    <h4 className="font-bold text-base uppercase tracking-wide">[ USERS ]</h4>
                </div>
                <div className="space-y-3">
                    <div>
                        <span className="text-xs font-bold text-brand-yellow uppercase block mb-2">&#62; STAKEHOLDERS:</span>
                        <div className="flex flex-wrap gap-2">
                            {slide.stakeholders?.map((s, i) => (
                                <span key={i} className="px-2 py-1 bg-terminal-surface border border-brand-blue text-brand-blue text-xs font-semibold">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-brand-yellow uppercase block mb-2">&#62; END_USERS:</span>
                         <div className="flex flex-wrap gap-2">
                            {slide.endUsers?.map((u, i) => (
                                <span key={i} className="px-2 py-1 bg-terminal-surface border border-brand-green text-brand-green text-xs font-semibold">
                                    {u}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="bg-terminal-bg border-2 border-brand-yellow text-brand-yellow p-4 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                    <DollarSign size={20} strokeWidth={2.5} />
                    <h4 className="font-bold text-base uppercase tracking-wide">[ PRICING ]</h4>
                </div>
                <div className="space-y-1.5">
                    {slide.pricing?.split('|').map((item, i) => (
                        <div key={i} className="text-xs font-semibold leading-relaxed">
                            &#62; {item.trim()}
                        </div>
                    ))}
                </div>
                <div className="text-xs text-brand-light font-semibold mt-3 pt-3 border-t border-terminal-border">
                    MODE: {slide.pricingRange}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};