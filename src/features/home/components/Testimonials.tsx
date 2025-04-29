import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { C_TESTIMONIALS } from "../constants/HomeConstants";
import TestimonialItem from "./TestimonialItem";
import { testimonials } from "../HomeMockData";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (ref.current) {
      const el = ref.current;
      setWidth(el.scrollWidth - el.clientWidth);
    }
  }, []);

  const animateSlider = useCallback((mouseEnterOrLeave: boolean, newDuration: number) => {
    controls.start({
      x: mouseEnterOrLeave ? -width : [0, -width],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: newDuration,
      },
    });
  }, [controls, width]);

  useEffect(() => {
    animateSlider(false, 20);
  }, [animateSlider, controls, width]);
  

  const handleMouseEnter = () => {
    animateSlider(true, 50)
  };

  const handleMouseLeave = () => {
    animateSlider(true, 20)
  };

  return (
    <section id="testimonials" className="py-16 bg-[#f4f5fb] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[50rem] text-center">
          <Badge className="rounded-full bg-tertiary-100 ring ring-inset ring-tertiary-400 text-tertiary-950 font-semibold leading-4 text-sm">
            {C_TESTIMONIALS.title}
          </Badge>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            {C_TESTIMONIALS.shortDescription}
          </p>
          <p className="mt-4 text-lg leading-6 text-primary-500/90">
            {C_TESTIMONIALS.description}
          </p>
        </div>

        {/* Sliding Container */}
        <motion.div
          ref={ref}
          className="mt-12 flex space-x-6"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="max-w-[100%] md:max-w-[50%] lg:max-w-[30%] flex-shrink-0">
              <TestimonialItem testimonial={testimonial} isInView={true} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
