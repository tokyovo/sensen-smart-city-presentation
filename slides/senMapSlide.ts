import { SlideContent, SlideType } from '../types';

export const senMapSlide: SlideContent = {
  id: 3,
  type: SlideType.CONTENT,
  title: "Monitoring & Planning",
  subtitle: "SenTAS / SenMAP",
  problem: "Cities need to understand traffic patterns to manage congestion, plan for future infrastructure, and improve road safety. Traditional monitoring methods can be expensive and may not provide real-time data.",
  solution: "SenTAS provides real-time traffic analytics using video to count and classify vehicles. This data helps monitor traffic flow and identify congestion. SenMAP can be used to create detailed maps of road assets for planning and maintenance.",
  stakeholders: ["City Planners", "Traffic Engineers", "Transportation Departments"],
  endUsers: ["Data Analysts", "Traffic Management Center Operators"],
  pricing: "SenCOUNT system: $15,000 per system | System maintenance fee: $2,250 p.a. | Support and upgrades: $1,200 p.a.",
  pricingRange: "SenCOUNT System Pricing"
};
