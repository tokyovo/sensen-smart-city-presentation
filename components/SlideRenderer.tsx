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
    <div className="h-full bg-white p-8 md:p-12 rounded-xl shadow-xl flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="border-b border-slate-100 pb-6 mb-6">
        <div className="flex items-center gap-3 text-brand-600 mb-2">
            <Target size={24} />
            <span className="text-sm font-bold uppercase tracking-wider">Product Overview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{slide.title}</h2>
        <h3 className="text-xl text-slate-500 font-medium">{slide.subtitle}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        
        {/* Left Column: Problem & Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-3 text-red-700">
                    <AlertTriangle size={20} />
                    <h4 className="font-semibold">The Problem</h4>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                    {slide.problem}
                </p>
            </div>

            {slide.stats && (
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-2 text-slate-700">
                        <TrendingUp size={20} />
                        <h4 className="font-semibold">Impact Stats</h4>
                    </div>
                    <div className="text-4xl font-bold text-brand-600 mb-1">{slide.stats.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
                        {slide.stats.label}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{slide.stats.description}</p>
                    {/* Chart Area */}
                    <div className="mt-auto">
                        <SlideChart data={slide.stats} />
                    </div>
                </div>
            )}
        </div>

        {/* Right Column: Solution & Details */}
        <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="bg-brand-50 p-8 rounded-xl border border-brand-100 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-200/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-center gap-2 mb-4 text-brand-800 relative z-10">
                    <CheckCircle2 size={24} />
                    <h4 className="text-xl font-bold">The Solution</h4>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed relative z-10">
                    {slide.solution}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-slate-800">
                        <Users size={20} />
                        <h4 className="font-semibold">Stakeholders & Users</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Key Stakeholders</span>
                            <div className="flex flex-wrap gap-2">
                                {slide.stakeholders?.map((s, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">End Users</span>
                             <div className="flex flex-wrap gap-2">
                                {slide.endUsers?.map((u, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                                        {u}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center relative overflow-hidden">
                     <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-500 rounded-full blur-2xl opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
                    <div className="flex items-center gap-2 mb-2 text-brand-400 relative z-10">
                        <DollarSign size={20} />
                        <h4 className="font-semibold">Estimated Pricing</h4>
                    </div>
                    <div className="text-2xl font-bold mb-1 relative z-10">{slide.pricing}</div>
                    <div className="text-sm text-slate-400 relative z-10">{slide.pricingRange}</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};