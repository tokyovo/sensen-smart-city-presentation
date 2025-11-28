import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 0,
    type: SlideType.TITLE,
    title: "SenSen Technology Ecosystem",
    subtitle: "Smart City Technology Ecosystem",
    solution: "An integrated platform for smart cities, visually represented by a central data hub connecting various city services and sensing technologies."
  },
  {
    id: 1, // ID 0 for the first slide
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
  },
  {
    id: 2,
    type: SlideType.CONTENT,
    title: "SenFORCE",
    subtitle: "Tackling Illegal Parking & Traffic Offences",
    problem: "Illegal parking and traffic violations (speeding, red lights) create unsafe road conditions and significant revenue loss.",
    stats: {
      value: "27%",
      label: "Increase in Red-light Offences (Victoria 2022-23)",
      chartType: 'bar',
      chartData: [
        { name: 'Previous Year', value: 100 },
        { name: '2022-23', value: 127 },
      ],
      description: "Automated enforcement can reduce serious injury/fatal crashes by up to 44%."
    },
    solution: "Automates detection and enforcement using mobile AI and license plate recognition. Increases efficiency and coverage.",
    stakeholders: ["City Councils", "Transport Authorities", "Police Departments"],
    endUsers: ["Parking Enforcement Officers", "Traffic Enforcement Officers"],
    pricing: "$2,000 - $5,000 per vehicle/month",
    pricingRange: "SaaS Model"
  },
  {
    id: 3,
    type: SlideType.CONTENT,
    title: "SenMAP",
    subtitle: "Solving Inefficient Asset Management",
    problem: "Cities struggle to track vast public assets (signs, lights), leading to decay and rising costs due to poor data.",
    stats: {
      value: "$100B",
      label: "Value of Assets in 'Fair' Condition (Australia)",
      chartType: 'pie',
      chartData: [
        { name: 'Fair Condition', value: 26, fill: '#f59e0b' },
        { name: 'Other', value: 74, fill: '#e5e7eb' },
      ],
      description: "20-26% of local government assets are only in 'fair' condition."
    },
    solution: "Visual, map-based audit of city assets. Creates a historical 'Street View' record to monitor conditions and plan maintenance.",
    stakeholders: ["Public Works", "City Planning", "Finance Depts"],
    endUsers: ["Asset Managers", "Maintenance Coordinators"],
    pricing: "$15k - $50k+ per year",
    pricingRange: "Based on Asset Count"
  },
  {
    id: 4,
    type: SlideType.CONTENT,
    title: "SenSHIELD & SenTrack",
    subtitle: "Combating Vehicle Crime",
    problem: "Vehicle-related crime (theft, cloned plates) is a major public safety challenge. Stolen cars aid other crimes.",
    stats: {
      value: "+40%",
      label: "Theft from Motor Vehicles (Victoria)",
      chartType: 'area',
      chartData: [
        { name: 'Year 1', value: 100 },
        { name: 'Year 2', value: 115 },
        { name: 'Year 3', value: 140 },
      ],
      description: "1,100+ vehicles stolen in Melbourne CBD (2023)."
    },
    solution: "Comprehensive security solution integrating existing cameras to detect stolen vehicles and alert law enforcement in real-time.",
    stakeholders: ["Police", "National Security", "Safety Orgs"],
    endUsers: ["Law Enforcement", "Intelligence Analysts"],
    pricing: "$100k - $500k+ setup",
    pricingRange: "Enterprise Custom"
  },
  {
    id: 5,
    type: SlideType.CONTENT,
    title: "SenPIC",
    subtitle: "Providing Complete Evidence",
    problem: "Single photos are often insufficient for prosecution (e.g., proving intent, context, or permits).",
    stats: {
      value: "2.7M",
      label: "Speeding Fines Issued (2024)",
      chartType: 'bar',
      chartData: [
        { name: 'Mobile Phone', value: 290000 },
        { name: 'Speeding', value: 2700000 },
      ],
      description: "Indisputable evidence is key to reducing appeals."
    },
    solution: "Links multiple cameras to a single event (primary plate + secondary context video) for a defensible evidence package.",
    stakeholders: ["Municipal Courts", "Law Enforcement", "Legal Depts"],
    endUsers: ["Evidence Reviewers", "Parking Administrators"],
    pricing: "+10-20% add-on fee",
    pricingRange: "Add-on to SenFORCE"
  },
  {
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
  }
];