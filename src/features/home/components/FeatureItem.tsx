import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const iconContainerVariants = {
  hidden: { scale: 0.6, opacity: 0, borderRadius: "30%" },
  visible: {
    scale: 1,
    opacity: 1,
    borderRadius: "20%",
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.6,
    },
  },
};

const iconVariants = {
  animate: {
    scale: [0.9, 1.1, 0.9],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface FeatureItemProps {
  name: string;
  description: string;
  icon: keyof typeof LucideIcons;
  index: number;
}

export const FeatureItem = ({ name, description, icon, index }: FeatureItemProps) => {
  const IconComponent = LucideIcons[icon] as React.ElementType;


  return (
    <motion.div className="relative pl-16 feature-item" variants={itemVariants}>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <motion.div
          className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
          variants={iconContainerVariants}
        >
          <motion.div animate="animate" variants={iconVariants}>
            {IconComponent && <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />}
          </motion.div>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
        >
          {name}
        </motion.span>
      </dt>
      <motion.dd
        className="mt-2 text-base leading-7 text-gray-600"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
      >
        {description}
      </motion.dd>
    </motion.div>
  );
};
