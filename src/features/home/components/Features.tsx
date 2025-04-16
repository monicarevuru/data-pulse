import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  BarChart3, 
  LineChart, 
  MessageSquare, 
  Share2, 
  Users, 
  ShieldCheck,
  MonitorSmartphone,
  PencilRuler
} from "lucide-react";

const features = [
  {
    name: "Real-time analytics",
    description: "Track performance metrics in real-time with intuitive visualizations and customizable dashboards.",
    icon: LineChart,
  },
  {
    name: "Team collaboration",
    description: "Seamlessly collaborate with your team on data analysis and decision making in one unified platform.",
    icon: Users,
  },
  {
    name: "Client communication",
    description: "Share insights directly with clients and stakeholders through secure, branded portals.",
    icon: MessageSquare,
  },
  {
    name: "Export and sharing",
    description: "Export data in multiple formats or share interactive dashboards with controlled access.",
    icon: Share2,
  },
  {
    name: "Custom reports",
    description: "Create beautiful, custom reports that highlight the metrics that matter most to your business.",
    icon: BarChart3,
  },
  {
    name: "Enterprise security",
    description: "Bank-level encryption and comprehensive permission controls keep your data secure.",
    icon: ShieldCheck,
  },
  {
    name: "Mobile friendly",
    description: "Access your data on any device with our responsive design and dedicated mobile apps.",
    icon: MonitorSmartphone,
  },
  {
    name: "White labeling",
    description: "Customize the platform with your brand's colors, logos, and domain for a seamless client experience.",
    icon: PencilRuler,
  }
];

const Features = () => {
  const ref = useRef(null);
  const featureSectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  // Animation variants for feature items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  // Icon animations
  const iconContainerVariants = {
    hidden: { scale: 0.6, opacity: 0, borderRadius: "30%" },
    visible: {
      scale: 1,
      opacity: 1,
      borderRadius: "20%",
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.6
      }
    }
  };
  
  const iconVariants = {
    animate: {
      scale: [0.9, 1.1, 0.9],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <section id="features" className="py-24 sm:py-32 bg-white" ref={featureSectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to analyze, collaborate, and communicate
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            DataPulse combines powerful analytics with team collaboration tools to help you make data-driven decisions and share insights easily.
          </p>
        </div>
        <div 
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <motion.dl 
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative pl-16 feature-item"
                variants={itemVariants}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <motion.div 
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
                    variants={iconContainerVariants}
                  >
                    <motion.div
                      animate="animate"
                      variants={iconVariants}
                    >
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  >
                    {feature.name}
                  </motion.span>
                </dt>
                <motion.dd 
                  className="mt-2 text-base leading-7 text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                >
                  {feature.description}
                </motion.dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

export default Features;