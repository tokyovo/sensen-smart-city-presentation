import React from 'react';
import { EcosystemLayer } from '../types';
import { 
  ArrowUp,
  Landmark, 
  Users, 
  Shield, 
  Store, 
  Activity,
  Gavel,
  Search,
  Database,
  LayoutDashboard,
  FileCheck,
  Map,
  ShieldCheck,
  BrainCircuit,
  ParkingCircle, 
  Bus, 
  Siren, 
  Stethoscope, 
  Anchor, 
  ShoppingBag,
  Cpu, 
  Video, 
  Car, 
  Bot, 
  Smartphone, 
  Satellite
} from 'lucide-react';

interface EcosystemSlideProps {
  layers: EcosystemLayer[];
  theme: 'terminal' | 'light';
}

// Map string icon names to components
const IconMap: Record<string, React.ElementType> = {
  Landmark, Users, Shield, Store, Activity,
  Gavel, Search, Database, LayoutDashboard,
  FileCheck, Map, ShieldCheck, BrainCircuit,
  ParkingCircle, Bus, Siren, Stethoscope, Anchor, ShoppingBag,
  Cpu, Video, Car, Bot, Smartphone, Satellite
};

export const EcosystemSlide: React.FC<EcosystemSlideProps> = ({ layers, theme }) => {
  if (theme === 'light') {
    return (
      <div className="h-full w-full overflow-y-auto bg-white rounded-xl scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
        <div className="min-h-full w-full flex flex-col items-center justify-start md:justify-center py-12 px-4 md:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Smart City Technology Ecosystem
          </h2>

          <div className="w-full max-w-6xl flex flex-col gap-4">
            {layers.map((layer, index) => {
              const isTechStack = layer.title === "SENSEN TECHNOLOGY STACK";
              const bgColor = isTechStack ? "bg-blue-50 border-blue-300" : "bg-slate-50 border-slate-200";
              const titleColor = isTechStack ? "text-blue-700" : "text-slate-600";

              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="flex justify-center -my-2 z-10">
                      <ArrowUp className="text-blue-500" size={24} />
                    </div>
                  )}

                  <div className={`${bgColor} border-2 rounded-2xl p-4 transition-all hover:shadow-md flex flex-col items-center justify-center relative w-full`}>
                    <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${isTechStack ? 'bg-blue-600' : 'bg-slate-400'}`}></div>
                        <h3 className={`text-sm font-bold tracking-widest uppercase ${titleColor}`}>
                          {layer.title}
                        </h3>
                      </div>
                      {layer.subtitle && (
                        <span className="text-xs text-blue-600 font-medium px-2 py-0.5 bg-blue-100 rounded-full border border-blue-200">
                          {layer.subtitle}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 w-full">
                      {layer.items.map((item, itemIdx) => {
                        const IconComponent = IconMap[item.icon] || Users;

                        return (
                          <div
                            key={itemIdx}
                            className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-200 bg-white shadow-sm w-[140px] md:w-[160px] min-h-[100px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 group"
                          >
                            <div className="mb-2 p-2 rounded-full bg-slate-50 text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                              <IconComponent size={24} />
                            </div>
                            <h4 className="text-xs font-bold text-slate-800 leading-tight mb-1.5">
                              {item.label}
                            </h4>
                            <p className="text-[10px] text-slate-500 leading-tight">
                              {item.sublabel}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Terminal theme
  return (
    <div className="h-full w-full overflow-y-auto bg-terminal-surface border-2 border-terminal-border scrollbar-thin scrollbar-thumb-terminal-text scrollbar-track-transparent">
      <div className="min-h-full w-full flex flex-col items-center justify-start md:justify-center py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-brand-yellow mb-8 text-center uppercase tracking-widest border-b-2 border-brand-blue pb-2">
          &#62; Smart City Technology Ecosystem
        </h2>

        <div className="w-full max-w-6xl flex flex-col gap-3">
          {layers.map((layer, index) => {
            const isTechStack = layer.title === "SENSEN TECHNOLOGY STACK";
            const bgColor = isTechStack ? "bg-terminal-bg border-brand-yellow" : "bg-terminal-surface border-terminal-border";
            const titleColor = isTechStack ? "text-brand-yellow" : "text-brand-blue";

            return (
              <React.Fragment key={index}>
                {/* Render Arrow (between layers, but not before first) */}
                {index > 0 && (
                  <div className="flex justify-center -my-1 z-10">
                     <ArrowUp className="text-brand-green" size={20} />
                  </div>
                )}

                {/* Layer Container */}
                <div className={`
                  ${bgColor} border-2 p-3 transition-all hover:border-brand-blue
                  flex flex-col items-center justify-center relative w-full
                `}>
                  <div className="flex flex-col md:flex-row items-center gap-2 mb-3">
                      <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${isTechStack ? 'bg-brand-yellow' : 'bg-brand-blue'}`}></div>
                          <h3 className={`text-xs font-bold tracking-widest uppercase ${titleColor}`}>
                              [ {layer.title} ]
                          </h3>
                      </div>
                      {layer.subtitle && (
                          <span className="text-[10px] md:text-xs text-brand-green font-medium px-2 py-0.5 bg-terminal-bg border border-brand-green">
                              {layer.subtitle}
                          </span>
                      )}
                  </div>

                  {/* Items Grid */}
                  <div className="flex flex-wrap justify-center gap-3 w-full">
                    {layer.items.map((item, itemIdx) => {
                      const IconComponent = IconMap[item.icon] || Users;

                      return (
                        <div
                          key={itemIdx}
                          className="
                            flex flex-col items-center text-center p-3 border-2 border-terminal-border bg-terminal-bg
                            w-[130px] md:w-[150px] min-h-[90px]
                            transition-all duration-200 hover:border-brand-yellow group
                          "
                        >
                          <div className="mb-2 p-2 bg-terminal-surface border border-brand-blue text-brand-blue group-hover:border-brand-yellow group-hover:text-brand-yellow transition-colors">
                            <IconComponent size={20} />
                          </div>
                          <h4 className="text-xs font-bold text-brand-light leading-tight mb-1.5 uppercase">
                            {item.label}
                          </h4>
                          <p className="text-[10px] text-brand-green leading-tight">
                            &#62; {item.sublabel}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};