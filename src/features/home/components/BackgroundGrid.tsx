import { motion } from "framer-motion";

const BackgroundGrid = () => {
  return (
    <motion.svg
      className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <motion.path
          className="bg-pattern-rect"
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>
      <rect
        className="bg-pattern-rect"
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
      />
    </motion.svg>
  );
};

export default BackgroundGrid;
