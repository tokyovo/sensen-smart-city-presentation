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
      <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
             <div className="absolute left-0 top-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
        </div>
        
        <div className="z-10 animate-fade-in-up">
            <div className="mb-6 inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                <Building2 size={48} className="text-cyan-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {slide.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-brand-100 font-light mb-8 max-w-3xl mx-auto">
            {slide.subtitle}
            </h2>
            <p className="text-lg text-brand-50/80 max-w-2xl mx-auto leading-relaxed">
            {slide.solution}
            </p>
        </div>
        
        <div className="absolute bottom-8 text-sm text-brand-200/50 uppercase tracking-widest">
            Tap arrows to navigate
        </div>
      </div>
    );
  }

  if (slide.type === SlideType.ECOSYSTEM && slide.diagramLayers) {
      return <EcosystemSlide layers={slide.diagramLayers} />;
  }

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 rounded-xl shadow-xl flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-brand-600 mb-2">
            <Target size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">Product Overview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{slide.title}</h2>
        <h3 className="text-lg text-brand-600 font-semibold">{slide.subtitle}</h3>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">

        {/* Left Column */}
        <div className="flex flex-col gap-5">
            {/* Problem */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-xl border-2 border-red-200">
                <div className="flex items-center gap-2 mb-3 text-red-700">
                    <AlertTriangle size={22} strokeWidth={2.5} />
                    <h4 className="font-bold text-lg">The Problem</h4>
                </div>
                <p className="text-slate-800 leading-relaxed text-sm font-medium">
                    {slide.problem}
                </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border-2 border-emerald-200 flex-grow">
                <div className="flex items-center gap-2 mb-3 text-emerald-700">
                    <CheckCircle2 size={22} strokeWidth={2.5} />
                    <h4 className="font-bold text-lg">The Solution</h4>
                </div>
                <p className="text-slate-800 leading-relaxed text-sm font-medium">
                    {slide.solution}
                </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">

            {/* Stakeholders & Users */}
            <div className="bg-white border-2 border-slate-200 p-5 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-slate-800">
                    <Users size={22} strokeWidth={2.5} />
                    <h4 className="font-bold text-lg">Stakeholders & Users</h4>
                </div>
                <div className="space-y-3">
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Key Stakeholders</span>
                        <div className="flex flex-wrap gap-2">
                            {slide.stakeholders?.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-lg font-semibold border border-slate-200">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase block mb-2">End Users</span>
                         <div className="flex flex-wrap gap-2">
                            {slide.endUsers?.map((u, i) => (
                                <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg font-semibold border border-blue-200">
                                    {u}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 rounded-xl shadow-lg flex-grow">
                <div className="flex items-center gap-2 mb-3 text-brand-300">
                    <DollarSign size={22} strokeWidth={2.5} />
                    <h4 className="font-bold text-lg">Estimated Pricing</h4>
                </div>
                <div className="space-y-2">
                    {slide.pricing?.split('|').map((item, i) => (
                        <div key={i} className="text-sm font-semibold text-white/90 leading-relaxed">
                            • {item.trim()}
                        </div>
                    ))}
                </div>
                <div className="text-xs text-brand-300 font-semibold mt-3 pt-3 border-t border-white/20">
                    {slide.pricingRange}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};