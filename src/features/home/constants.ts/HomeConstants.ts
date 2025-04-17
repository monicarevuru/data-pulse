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
      "Priority support",
      "Advanced export options",
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
      "SSO & advanced security",
      "Dedicated account manager",
      "24/7 phone & email support",
    ],
    cta: "Contact sales",
    highlighted: false,
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
      name: "Michael Rodriguez",
      title: "Lead Developer at Stackify",
      imageInitials: "MR",
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
      name: "Emma Williams",
      title: "Client Success Director at DevShop",
      imageInitials: "EW",
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
];

export enum E_LucideFeatureIcons {
  LineChart = "LineChart",
  Users = "Users",
  MessageSquare = "MessageSquare",
  Share2 = "Share2",
  BarChart3 = "BarChart3",
  ShieldCheck = "ShieldCheck",
  MonitorSmartphone = "MonitorSmartphone",
  PencilRuler = "PencilRuler",
}
export const features = [
  {
    name: "Real-time analytics",
    description:
      "Track performance metrics in real-time with intuitive visualizations and customizable dashboards.",
    icon: E_LucideFeatureIcons.LineChart,
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
    name: "Custom reports",
    description:
      "Create beautiful, custom reports that highlight the metrics that matter most to your business.",
    icon: E_LucideFeatureIcons.BarChart3,
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
  {
    name: "White labeling",
    description:
      "Customize the platform with your brand's colors, logos, and domain for a seamless client experience.",
    icon: E_LucideFeatureIcons.PencilRuler,
  },
];

export const C_HERO = {
  title: "New Features Available",
  shortDescription: "Data insights that drive growth",
  description:
    "Powerful analytics and team collaboration for developers. Share insights with clients and make informed decisions faster.",
  buttons: {
    free_trial: {
      text: "Start free trial",
    },
    learn_more: {
      text: "Learn more",
    },
  },
};

export const C_FEATURES = {
  title: "Powerful Features",
  shortDescription:
    "Everything you need to analyze, collaborate, and communicate",
  description:
    "DataPulse combines powerful analytics with team collaboration tools to help you make data-driven decisions and share insights easily.",
};

export const C_TESTIMONIALS = {
  title: "Testimonials",
  shortDescription: "Loved by developers and teams worldwide",
  description:
    "See what our customers have to say about how DataPulse has transformed their data communication.",
};

export const C_PRICING = {
  title: "Pricing",
  shortDescription: "Find a plan that fits your needs",
  description:
    "Choose the right plan for your team's size and requirements. All plans include our core analytics features.",
  buttons: {
    annual: {
      text: "Annual",
    },
    monthly: {
      text: "Monthly",
    },
  },
};
