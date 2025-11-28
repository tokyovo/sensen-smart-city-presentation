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
}

// Map string icon names to components
const IconMap: Record<string, React.ElementType> = {
  Landmark, Users, Shield, Store, Activity,
  Gavel, Search, Database, LayoutDashboard,
  FileCheck, Map, ShieldCheck, BrainCircuit,
  ParkingCircle, Bus, Siren, Stethoscope, Anchor, ShoppingBag,
  Cpu, Video, Car, Bot, Smartphone, Satellite
};

export const EcosystemSlide: React.FC<EcosystemSlideProps> = ({ layers }) => {
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