import { E_LucideFeatureIcons } from "./constants/HomeConstants";

export const features = [
  {
    name: "Custom reports",
    description:
      "Create beautiful, custom reports that highlight the metrics that matter most to your business.",
    icon: E_LucideFeatureIcons.BarChart3,
  },
  {
    name: "Team collaboration",
    description:
      "Seamlessly collaborate with your team on data analysis and decision making in one unified platform.",
    icon: E_LucideFeatureIcons.Users,
  },
  {
    name: "Client communication",
    description:
      "Share insights directly with clients and stakeholders through secure, branded portals.",
    icon: E_LucideFeatureIcons.MessageSquare,
  },
  {
    name: "Export and sharing",
    description:
      "Export data in multiple formats or share interactive dashboards with controlled access.",
    icon: E_LucideFeatureIcons.Share2,
  },
  {
    name: "Enterprise security",
    description:
      "Bank-level encryption and comprehensive permission controls keep your data secure.",
    icon: E_LucideFeatureIcons.ShieldCheck,
  },
  {
    name: "Mobile friendly",
    description:
      "Access your data on any device with our responsive design and dedicated mobile apps.",
    icon: E_LucideFeatureIcons.MonitorSmartphone,
  },
];

export const testimonials = [
  {
    content:
      "DataPulse has transformed how we communicate with clients. Being able to share real-time dashboards with them has increased transparency and trust.",
    author: {
      name: "Sarah Johnson",
      title: "CTO at TechNova",
      imageInitials: "SJ",
    },
  },
  {
    content:
      "The team collaboration features have streamlined our workflow tremendously. We've reduced our meeting time by 30% since everyone can see the data in real-time.",
    author: {
      name: "Areta Franklin",
      title: "Lead Developer at Stackify",
      imageInitials: "AF",
    },
  },
  {
    content:
      "As a product manager, having all our metrics in one place with easy sharing capabilities has been a game changer. I can't imagine going back to our old system.",
    author: {
      name: "Lauren Taylor",
      title: "Product Manager at GrowthMetrics",
      imageInitials: "LT",
    },
  },
  {
    content:
      "The custom reporting features are powerful yet intuitive. We've been able to create exactly what our executives need without any development resources.",
    author: {
      name: "David Chen",
      title: "Data Analyst at Vizion",
      imageInitials: "DC",
    },
  },
  {
    content:
      "Our client satisfaction scores have increased by 40% since implementing DataPulse. The transparency it provides has completely changed our client relationships.",
    author: {
      name: "John Kennedy",
      title: "Client Success Director at DevShop",
      imageInitials: "JK",
    },
  },
  {
    content:
      "The mobile experience is flawless. I can check on critical metrics while traveling and respond to issues immediately rather than waiting to get back to my desk.",
    author: {
      name: "James Peterson",
      title: "Engineering Manager at MobileDev",
      imageInitials: "JP",
    },
  },
  {
    content:
      "Switching to DataPulse was a game-changer for our operations. Our productivity metrics have improved drastically. Now we have one platform for all our KPIs and goals.",
    author: {
      name: "Olivia Brown",
      title: "Head of Operations at NovaSoft",
      imageInitials: "OB",
    },
  },
  {
    content:
      "Our customers are more informed and satisfied now that we can share real-time performance insights with them through DataPulse.",
    author: {
      name: "Sophia Martinez",
      title: "Customer Success Manager at BrightMetrics",
      imageInitials: "SM",
    },
  },
];

export const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: { monthly: "$29", annually: "$290" },
    description:
      "Perfect for small teams just getting started with data analytics.",
    features: [
      "Up to 5 team members",
      "50,000 API calls per month",
      "5 custom dashboards",
      "7-day data history",
      "Basic team chat",
      "Email support",
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: { monthly: "$79", annually: "$790" },
    description: "Ideal for growing teams with advanced analytics needs.",
    features: [
      "Up to 15 team members",
      "500,000 API calls per month",
      "Unlimited dashboards",
      "30-day data history",
      "Team & client chat",
      "Custom branding",
    ],
    cta: "Start with Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: { monthly: "$299", annually: "$2,990" },
    description:
      "For organizations requiring maximum performance and security.",
    features: [
      "Unlimited team members",
      "5,000,000 API calls per month",
      "Unlimited dashboards",
      "Unlimited data history",
      "Advanced team collaboration",
      "White labeling",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "How often is the data updated?",
    answer:
      "Data is updated in real-time, providing you with the most current insights available.",
  },
  {
    question: "Can I customize my dashboards?",
    answer:
      "Absolutely! Our platform allows full customization based on your needs.",
  },
  {
    question: "Is real-time data updating available?",
    answer:
      "Absolutely. The dashboard is built for real-time updates without manual refreshing.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! You can get started for free. Premium plans offer more customization and advanced analytics.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, there are no long-term contracts. You can cancel your subscription anytime from your dashboard.",
  },
];
