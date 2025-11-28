import { SlideContent, SlideType } from '../types';

export const senForceSlide: SlideContent = {
  id: 2,
  type: SlideType.CONTENT,
  title: "Compliance & Enforcement",
  subtitle: "SenForce / SenPIC",
  problem: "Cities struggle with illegal parking, which causes traffic congestion, reduces parking availability, and creates safety hazards. Manual enforcement is often inefficient and resource-intensive.",
  solution: "SenForce automates parking enforcement using vehicle-mounted cameras (often incorporating SenPIC) to detect violations automatically. This increases the efficiency and coverage of enforcement, leading to better compliance. The system provides comprehensive evidence reviewed and processed through the SenBOS back-office system.",
  stakeholders: ["City Councils", "Transportation Authorities", "Parking Management Companies"],
  endUsers: ["Parking Enforcement Officers", "Back-office Staff"],
  pricing: "SenForce camera POD: $850/month | Infringement services: $30,000 p.a. + $3.50/ticket | Professional Services: $165/hour or $1,320/day",
  pricingRange: "Subscription + Services"
};
