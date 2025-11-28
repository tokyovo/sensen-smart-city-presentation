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
    <div className="h-full w-full overflow-y-auto bg-white rounded-xl scrollbar-thin scrollbar-thumb-brand-200 scrollbar-track-transparent">
      <div className="min-h-full w-full flex flex-col items-center justify-start md:justify-center py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-brand-700 mb-8 text-center">Smart City Technology Ecosystem</h2>
        
        <div className="w-full max-w-6xl flex flex-col gap-4">
          {layers.map((layer, index) => {
            const isTechStack = layer.title === "SENSEN TECHNOLOGY STACK";
            const bgColor = isTechStack ? "bg-brand-50 border-brand-200" : "bg-white border-slate-100";
            const titleColor = isTechStack ? "text-brand-800" : "text-slate-600";
            
            return (
              <React.Fragment key={index}>
                {/* Render Arrow (between layers, but not before first) */}
                {index > 0 && (
                  <div className="flex justify-center -my-2 z-10">
                     <ArrowUp className="text-brand-400" size={24} />
                  </div>
                )}

                {/* Layer Container */}
                <div className={`
                  ${bgColor} border rounded-2xl p-4 shadow-sm transition-all hover:shadow-md
                  flex flex-col items-center justify-center relative w-full
                `}>
                  <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                          <div className={`w-2.5 h-2.5 rounded-full ${isTechStack ? 'bg-brand-500' : 'bg-slate-300'}`}></div>
                          <h3 className={`text-sm font-bold tracking-widest uppercase ${titleColor}`}>
                              {layer.title}
                          </h3>
                      </div>
                      {layer.subtitle && (
                          <span className="text-[10px] md:text-xs text-brand-600 font-medium px-2 py-0.5 bg-brand-100/50 rounded-full border border-brand-100">
                              {layer.subtitle}
                          </span>
                      )}
                  </div>
                  
                  {/* Items Grid */}
                  <div className="flex flex-wrap justify-center gap-4 w-full">
                    {layer.items.map((item, itemIdx) => {
                      const IconComponent = IconMap[item.icon] || Users;
                      
                      return (
                        <div 
                          key={itemIdx} 
                          className="
                            flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 bg-white shadow-sm 
                            w-[140px] md:w-[160px] min-h-[100px]
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-200 group
                          "
                        >
                          <div className="mb-2 p-2 rounded-full bg-slate-50 text-brand-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
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
};