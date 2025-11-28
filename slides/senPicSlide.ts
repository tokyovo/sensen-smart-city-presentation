import { SlideContent, SlideType } from '../types';

export const senPicSlide: SlideContent = {
  id: 5,
  type: SlideType.CONTENT,
  title: "Intelligence & Analytics",
  subtitle: "SenBOS / SenSight",
  problem: "Cities and organizations collect vast amounts of data but often struggle to make sense of it and use it to make better decisions.",
  solution: "SenBOS provides a central back-office system that integrates with other Sensen products, allowing users to manage data, review violations, and configure the system. SenSight is likely a product that provides advanced analytics and insights from the data collected.",
  stakeholders: ["City Managers", "Department Heads", "Data Analysts"],
  endUsers: ["Parking Enforcement Staff", "City Planners"],
  pricing: "Solution Build + Set up: $50,000 | Software license for SenBOS: Tiered pricing from $6 to $10 per ticket, or a monthly fee from $4,166 to $50,000 | Hosting: +$4,500 p/mth (3TB)",
  pricingRange: "Custom Implementation"
};
