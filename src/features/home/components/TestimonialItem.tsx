import { Card, CardContent } from "@/common/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialItemProps } from "../types/Hero.types";

const TestimonialItem = ({
  testimonial,
  index,
  isInView,
}: {
  testimonial: TestimonialItemProps;
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      key={`testimonial-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.3 }}>
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-grow">
            <Quote className="w-6 h-6 text-primary/40 mb-4" />
            <p className="text-gray-700">{testimonial.content}</p>
          </div>
          <div className="mt-6 flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback className="bg-primary/10 text-primary">
                {testimonial.author.imageInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm text-gray-900">
                {testimonial.author.name}
              </p>
              <p className="text-sm text-gray-500">
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
