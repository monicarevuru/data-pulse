import { Star } from "lucide-react";
import Google from "@/assets/google.svg";
import { motion } from "framer-motion";

export const RatingSection = () => {
  return (
    <motion.div
      className="w-full bg-white pb-0"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <div className="mx-auto flex flex-col items-center gap-2">
        <p className="text-gray-700 text-sm font-medium">
          Trusted by thousands
        </p>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}>
                <Star
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  strokeWidth={1.5}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <span className="ml-2 text-gray-900 font-semibold text-sm">
              4.9
            </span>
            <img src={Google} className="w-6 text-gray-900 text-lg"></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
