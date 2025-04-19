import { useRef } from "react";
import { Button } from "@/common/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { C_HERO } from "../constants/HomeConstants";
import { MoveRight } from "lucide-react";
import { containerVariants, itemVariants } from "../constants/MotionVariants";
import BackgroundGrid from "./BackgroundGrid";
import DashboardSvg from "./DashboardSvg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  return (
    <section className="relative overflow-hidden pt-20 pb-4" ref={heroRef}>
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <BackgroundGrid />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center pt-6 pb-10 sm:pt-2 sm:pb-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}>
          <motion.div variants={itemVariants}>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
              {C_HERO.title}
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {C_HERO.shortDescription}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg leading-6 text-gray-600">
            {C_HERO.description}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <a href="#demo">{C_HERO.buttons.free_trial.text}</a>
            </Button>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 group flex items-center gap-1">
              {C_HERO.buttons.learn_more.text}
              <MoveRight className="w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <div style={{ perspective: "1200px", zIndex: 10 }}>
          <DashboardSvg controls={controls} ref={heroRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
