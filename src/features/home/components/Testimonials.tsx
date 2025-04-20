import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { C_TESTIMONIALS } from "../constants/HomeConstants";
import TestimonialItem from "./TestimonialItem";
import { testimonials } from "../HomeMockData";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const el = ref.current as HTMLElement;
      setWidth(el.scrollWidth - el.clientWidth);
    }
  }, []);

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
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="max-w-[30%] flex-shrink-0">
              <TestimonialItem testimonial={testimonial} isInView={true} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
