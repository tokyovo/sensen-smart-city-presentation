import { SlideContent, SlideType } from '../types';

export const ecosystemSlide: SlideContent = {
  id: 1,
  type: SlideType.ECOSYSTEM,
  title: "Smart City Technology Ecosystem",
  subtitle: "End-to-end Integrated Solution",
  solution: "A complete hierarchical view of the Smart City ecosystem.",
  diagramLayers: [
    {
      title: "STAKEHOLDERS & COMMUNITY",
      items: [
        { icon: "Landmark", label: "City councils & transport", sublabel: "Policy, planning, funding" },
        { icon: "Users", label: "Community & citizens", sublabel: "Safety & quality of life" },
        { icon: "Shield", label: "Police & law enforcement", sublabel: "Operations & Investigations" },
        { icon: "Store", label: "Business & retail owners", sublabel: "Optimization & insights" },
        { icon: "Activity", label: "Health & aged care", sublabel: "Wellbeing & response" }
      ]
    },
    {
      title: "CITY OPERATIONS PORTALS",
      items: [
        { icon: "Gavel", label: "Enforcement Adjudication", sublabel: "Case review, workflow, audit" },
        { icon: "Search", label: "Intelligence & Investigation", sublabel: "Search, link, triage" },
        { icon: "Database", label: "Open Data Integration", sublabel: "APIs & data exchange" },
        { icon: "LayoutDashboard", label: "Dashboards & Reporting", sublabel: "Analytics & decision support" }
      ]
    },
    {
      title: "SENSEN TECHNOLOGY STACK",
      subtitle: "AI • Data Science • Cloud/On-prem • Enterprise",
      items: [
        { icon: "FileCheck", label: "Compliance & Enforcement", sublabel: "SenForce / SenPIC" },
        { icon: "Map", label: "Monitoring & Planning", sublabel: "SenTAS / SenMAP" },
        { icon: "ShieldCheck", label: "Investigation & Security", sublabel: "SenShield / SenBlue / SenTrack" },
        { icon: "BrainCircuit", label: "Intelligence & Analytics", sublabel: "SenSight / SenBOS" }
      ]
    },
    {
      title: "CITY OPERATIONS & SERVICES",
      items: [
        { icon: "ParkingCircle", label: "Curbside & Parking", sublabel: "Zoning, permits, turnover" },
        { icon: "Bus", label: "Transport & Traffic", sublabel: "Flow, signals, road conditioning & asset" },
        { icon: "Siren", label: "Public Safety", sublabel: "Incidents & alerts" },
        { icon: "Stethoscope", label: "Health Care", sublabel: "Community wellbeing" },
        { icon: "Anchor", label: "Critical Infrastructure", sublabel: "Air / Sea Ports" },
        { icon: "ShoppingBag", label: "Business & Retail", sublabel: "Footfall & customer analysis" }
      ]
    },
    {
      title: "CITY SENSING NETWORK",
      items: [
        { icon: "Cpu", label: "IoT & Embedded", sublabel: "Sensors, edge compute" },
        { icon: "Video", label: "CCTV Network", sublabel: "Fixed & PTZ cameras" },
        { icon: "Car", label: "Vehicular", sublabel: "Mobile fleets, LPR" },
        { icon: "Bot", label: "Autonomous", sublabel: "Robots & Drones" },
        { icon: "Smartphone", label: "Mobile & Wearable", sublabel: "Phones, body-worn" },
        { icon: "Satellite", label: "Satellite Imagery", sublabel: "Aerial images" }
      ]
    }
  ]
};
