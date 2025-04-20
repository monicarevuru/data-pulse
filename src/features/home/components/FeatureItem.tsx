import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureItemProps } from "../Home.types";
import {
  itemVariants,
  iconContainerVariants,
  iconVariants,
} from "../constants/MotionVariants";

export const FeatureItem = ({
  name,
  description,
  icon,
  index,
  isInView,
}: FeatureItemProps) => {
  const IconComponent = LucideIcons[
    icon as keyof typeof LucideIcons
  ] as React.ElementType;

  return (
    <motion.div
      key={`feature-${index}`}
      className="relative p-4 feature-item rounded-2xl bg-white flex flex-col items-center justify-start"
      variants={itemVariants}>
      <div className="flex justify-start items-center flex-col gap-2 text-base font-semibold leading-7 text-gray-900 lg:h-40">
        <motion.div
          className="flex items-center justify-center bg-primary p-5 border-2 border-secondary-600/50 !rounded-full"
          variants={iconContainerVariants}>
          <motion.div animate="animate" variants={iconVariants}>
            {IconComponent && (
              <IconComponent
                className="h-8 w-8 text-secondary-500"
                aria-hidden="true"
              />
            )}
          </motion.div>
        </motion.div>
        <motion.span
          className="font-semibold text-secondary-950"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          {name}
        </motion.span>
        <motion.dd
          className="text-center mt-2 text-base font-normal text-primary-600"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          {description}
        </motion.dd>
      </div>
    </motion.div>
  );
};
