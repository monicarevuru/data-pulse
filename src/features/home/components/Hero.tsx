import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { C_HERO } from "../constants/HomeConstants";
import { ArrowUpRight } from "lucide-react";
import { containerVariants, itemVariants } from "../constants/MotionVariants";
import BackgroundGrid from "./BackgroundGrid";
import DashboardSvg from "./DashboardSvg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RatingSection } from "./RatingSection";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  return (
    <section className="relative overflow-hidden pt-24 pb-4" ref={heroRef}>
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
          className="mx-auto max-w-[50rem] text-center pt-8 pb-10 sm:pt-2"
          variants={containerVariants}
          initial="hidden"
          animate={controls}>
          <motion.div variants={itemVariants}>
            <Badge className="rounded-full bg-tertiary-100 text-tertiary-950 ring-1 ring-inset ring-tertiary-400 font-semibold leading-4 text-sm">
              {C_HERO.title}
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-2xl font-bold tracking-tight text-primary-950 sm:text-5xl">
            {C_HERO.shortDescription}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg leading-6 text-primary-500/90">
            {C_HERO.description}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-x-6">
            <Button
              className="group relative cursor-pointer bg-secondary-500 border-secondary-500 py-4 px-8 hover:bg-secondary-600 hover:border-secondary-600 text-primary"
              size="lg">
              <>
                <a href="#demo">{C_HERO.buttons.free_trial.text}</a>
                {/* Static Arrow */}
                <ArrowUpRight className="h-5 w-5 transition-all duration-300" />
              </>
            </Button>
          </motion.div>
        </motion.div>

        <RatingSection></RatingSection>
        <div style={{ perspective: "1200px", zIndex: 10 }}>
          <DashboardSvg controls={controls} ref={heroRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
