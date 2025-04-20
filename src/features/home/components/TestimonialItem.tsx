import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialItemProps } from "../Home.types";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialItem = ({
  testimonial,
  isInView,
}: {
  testimonial: TestimonialItemProps;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.3 }}>
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 bg-primary border border-transparent shadow-lg py-2">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-grow">
            <Quote className="w-6 h-6 text-transparent mb-4 fill-secondary-400" />
            <p className="text-gray-700">{testimonial.content}</p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Avatar className="">
              <AvatarFallback className="bg-tertiary-200 shadow-all border border-tertiary-200 text-tertoary-800 p-2 text-base rounded-full">
                {testimonial.author.imageInitials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-medium text-base text-primary-950">
                {testimonial.author.name}
              </p>
              <p className="text-xs text-primary-500">
                {testimonial.author.title}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialItem;
