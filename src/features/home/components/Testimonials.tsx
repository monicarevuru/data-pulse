import { useRef } from "react";
import { useInView } from "framer-motion";
import { C_TESTIMONIALS, testimonials } from "../constants.ts/HomeConstants";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="testimonials" className="py-10 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {C_TESTIMONIALS.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {C_TESTIMONIALS.shortDescription}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          {C_TESTIMONIALS.description}
          </p>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              testimonial={testimonial}
              index={index}
              isInView={isInView}></TestimonialItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
