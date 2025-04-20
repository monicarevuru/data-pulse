import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FeatureItem } from "./FeatureItem";
import { C_FEATURES } from "../constants/HomeConstants";
import { features } from "../HomeMockData";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Features = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="features" className="pt-20 pb-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[50rem] text-center">
          <Badge className="rounded-full bg-tertiary-100 ring ring-inset ring-tertiary-400 text-tertiary-950 font-semibold leading-4 text-sm">
            {C_FEATURES.title}
          </Badge>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            {C_FEATURES.shortDescription}
          </p>
          <p className="mt-4 text-lg leading-6 text-primary-500/90">
            {C_FEATURES.description}
          </p>
        </div>
        <div ref={ref} className="mx-auto mt-8">
          <motion.dl
            className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 justify-around items-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}>
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.name}
                {...feature}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
