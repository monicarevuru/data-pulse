import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { FeatureItemProps } from "../Home.types";
import {
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
  const [flipped, setFlipped] = useState(false);

  const IconComponent = LucideIcons[
    icon as keyof typeof LucideIcons
  ] as React.ElementType;

  return (
    <div
      className="relative w-64 h-40 cursor-pointer [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}>
      <motion.div
        key={`feature-${index}`}
        className={`relative w-full h-full rounded-lg bg-background border border-primary-50 shadow-lg shadow-secondary-300 [transform-style:preserve-3d] ${
          flipped
            ? "shadow-2xl shadow-secondary-400/50"
            : "shadow-lg shadow-secondary-300/50"
        }
`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 rounded-lg [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary p-6"
            variants={iconContainerVariants}>
            <motion.div animate="animate" variants={iconVariants}>
              {IconComponent && (
                <IconComponent
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          </motion.div>
          <motion.span
            className="text-lg font-semibold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {name}
          </motion.span>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 rounded-lg px-6 text-center text-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {description || "More information coming soon."}
        </div>
      </motion.div>
    </div>
  );
};
