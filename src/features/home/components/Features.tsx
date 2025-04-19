import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FeatureItem } from "./FeatureItem";
import { C_FEATURES } from "../HomeConstants";
import { features } from "../HomeMockData";

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
    <section id="features" className="py-10 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {C_FEATURES.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {C_FEATURES.shortDescription}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {C_FEATURES.description}
          </p>
        </div>
        <div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.dl
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
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
