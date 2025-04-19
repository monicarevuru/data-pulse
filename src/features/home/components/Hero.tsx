import { useEffect, useRef } from "react";
import { Button } from "@/common/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { C_HERO } from "../constants/HomeConstants";
import { MoveRight } from "lucide-react";
import { containerVariants, itemVariants, dashboardVariants } from "../constants/MotionVariants";
import { useAnimatedCounters } from "../hooks/useAnimatedCounters";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();
  const inView = useInView(heroRef, { once: false, amount: 0.3 });
  const counts = useAnimatedCounters(inView);

  useEffect(() => {
      controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="relative overflow-hidden py-10 sm:py-20" ref={heroRef}>
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <svg
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
        </svg>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center pt-8 pb-12 sm:pt-4 sm:pb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}>
          <motion.div variants={itemVariants}>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
              {C_HERO.title}
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {C_HERO.shortDescription}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600">
            {C_HERO.description}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <a href="#demo">{C_HERO.buttons.free_trial.text}</a>
            </Button>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 group flex items-center gap-1">
              {C_HERO.buttons.learn_more.text}
              <MoveRight className="w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-4 flow-root lg:mx-4"
          variants={dashboardVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}>
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-white shadow-xl ring-1 ring-gray-900/5 overflow-hidden">
              <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid meet">
                <rect width="1000" height="600" fill="#F7F9FC" />
                <g transform="translate(50, 50)">
                  {/* Dashboard header */}
                  <rect
                    width="900"
                    height="60"
                    rx="4"
                    fill="#FFFFFF"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                  <text
                    x="20"
                    y="35"
                    fontSize="18"
                    fontWeight="600"
                    fill="#1E40AF">
                    DataPulse Analytics
                  </text>
                  <circle cx="850" cy="30" r="20" fill="#E6F0FF" />
                  <text
                    x="850"
                    y="35"
                    fontSize="14"
                    fontWeight="600"
                    fill="#3B82F6"
                    textAnchor="middle">
                    JD
                  </text>

                  {/* Stats row */}
                  <g transform="translate(0, 80)">
                    {[0, 1, 2, 3].map((i) => (
                      <g key={i} transform={`translate(${i * 225}, 0)`}>
                        <rect
                          width="215"
                          height="100"
                          rx="4"
                          fill="#FFFFFF"
                          stroke="#E5E7EB"
                          strokeWidth="1"
                        />
                        <text x="20" y="30" fontSize="14" fill="#64748B">
                          {
                            [
                              "API Calls",
                              "Response Time",
                              "Error Rate",
                              "Uptime",
                            ][i]
                          }
                        </text>
                        <text
                          x="20"
                          y="60"
                          fontSize="24"
                          fontWeight="600"
                          fill="#111827">
                          {i === 0
                            ? counts.apiCalls.toLocaleString()
                            : i === 1
                            ? counts.responseTime.toString() + "ms"
                            : i === 2
                            ? counts.errorRate.toString() + "%"
                            : counts.uptime.toString() + "%"}
                        </text>
                        <text x="20" y="80" fontSize="12" fill="#64748B">
                          <tspan
                            fill={
                              ["#16A34A", "#16A34A", "#16A34A", "#16A34A"][i]
                            }>
                            ▲{" "}
                          </tspan>
                          {["8%", "12%", "3%", "0.2%"][i]} vs last week
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Main chart */}
                  <g transform="translate(0, 200)">
                    <rect
                      width="600"
                      height="300"
                      rx="4"
                      fill="#FFFFFF"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <text
                      x="20"
                      y="30"
                      fontSize="16"
                      fontWeight="500"
                      fill="#111827">
                      Performance Metrics
                    </text>

                    {/* Chart grid */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="50"
                        y1={70 + i * 50}
                        x2="550"
                        y2={70 + i * 50}
                        stroke="#F3F4F6"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Chart data - animated with CSS instead of anime.js */}
                    <motion.polyline
                      className="chart-line"
                      points="50,220 100,180 150,190 200,150 250,140 300,120 350,140 400,100 450,90 500,70 550,90"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.polyline
                      className="chart-line"
                      points="50,240 100,250 150,230 200,240 250,210 300,220 350,200 400,210 450,190 500,200 550,180"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: 1 }}
                    />

                    {/* X-axis labels */}
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <text
                        key={i}
                        x={50 + i * 83}
                        y="280"
                        fontSize="12"
                        fill="#64748B"
                        textAnchor="middle">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </text>
                    ))}
                  </g>

                  {/* Side panels */}
                  <g transform="translate(620, 200)">
                    <rect
                      width="280"
                      height="140"
                      rx="4"
                      fill="#FFFFFF"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <text
                      x="20"
                      y="30"
                      fontSize="14"
                      fontWeight="500"
                      fill="#111827">
                      Team Activity
                    </text>

                    {[0, 1, 2].map((i) => (
                      <g key={i} transform={`translate(20, ${50 + i * 30})`}>
                        <motion.circle
                          cx="10"
                          cy="10"
                          r="10"
                          fill={["#BFDBFE", "#C7D2FE", "#A5B4FC"][i]}
                          initial={{ scale: 0.8, opacity: 0.7 }}
                          animate={{
                            scale: [0.8, 1.1, 0.8],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                        <text x="30" y="14" fontSize="12" fill="#4B5563">
                          {
                            [
                              "API update deployed",
                              "Documentation updated",
                              "Client meeting scheduled",
                            ][i]
                          }
                        </text>
                      </g>
                    ))}
                  </g>

                  <g transform="translate(620, 360)">
                    <rect
                      width="280"
                      height="140"
                      rx="4"
                      fill="#FFFFFF"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <text
                      x="20"
                      y="30"
                      fontSize="14"
                      fontWeight="500"
                      fill="#111827">
                      Client Messages
                    </text>

                    <rect
                      x="20"
                      y="50"
                      width="240"
                      height="30"
                      rx="4"
                      fill="#F3F4F6"
                    />
                    <text x="30" y="70" fontSize="12" fill="#6B7280">
                      Latest feedback from Sarah J.
                    </text>

                    <motion.rect
                      x="20"
                      y="90"
                      width="240"
                      height="30"
                      rx="15"
                      fill="#EFF6FF"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [0.98, 1, 0.98],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse", // Changed from "mirror" to "reverse"
                      }}
                    />
                    <text
                      x="140"
                      y="110"
                      fontSize="12"
                      fill="#3B82F6"
                      textAnchor="middle">
                      Reply to messages
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
