import { SlideContent, SlideType } from '../types';

export const ecosystemIntegratedSlide: SlideContent = {
  id: 6,
  type: SlideType.CONTENT,
  title: "SenSen Ecosystem",
  subtitle: "Integrated Smart City Platform",
  problem: "Disconnected, single-purpose solutions create data silos and inefficient operations.",
  stats: {
    value: "∞",
    label: "Unified Data View",
    description: "Addresses the lack of consistent data reporting across city networks."
  },
  solution: "Integrates all functions into a single platform (SenDISA). Fuses 'City Sensing Network' data for unified operations.",
  stakeholders: ["Mayors", "City Managers", "CIOs"],
  endUsers: ["Operations Managers", "Data Analysts"],
  pricing: "$1M - $5M+ Initial",
  pricingRange: "Full Enterprise Implementation"
};
