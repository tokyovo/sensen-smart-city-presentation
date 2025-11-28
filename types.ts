export enum SlideType {
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  ECOSYSTEM = 'ECOSYSTEM',
}

export interface StatData {
  value: string | number;
  label: string;
  chartData?: any[];
  chartType?: 'bar' | 'pie' | 'area';
  description?: string;
}

export interface EcosystemItem {
  icon: string;
  label: string;
  sublabel: string;
}

export interface EcosystemLayer {
  title: string;
  subtitle?: string;
  items: EcosystemItem[];
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  problem?: string;
  stats?: StatData;
  solution?: string;
  stakeholders?: string[];
  endUsers?: string[];
  pricing?: string;
  pricingRange?: string; // For visual bar
  diagramLayers?: EcosystemLayer[];
}