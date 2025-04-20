import {
  AnimationControls,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { dashboardVariants } from "../constants/MotionVariants";
import { useAnimatedCounters } from "../hooks/useAnimatedCounters";
import { forwardRef, RefObject, useEffect, useRef } from "react";

interface DashboardSvgProps {
  controls: AnimationControls;
}

const DashboardSvg = forwardRef<HTMLDivElement | null, DashboardSvgProps>(
  (props, heroRef) => {
    const { controls } = props;
    const svgRef = useRef<SVGSVGElement>(null);
    const inView = useInView(heroRef as RefObject<Element | null>, {
      once: false,
      amount: 0.3,
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { scrollYProgress } = useScroll();
    const rotateX = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

    const counts = useAnimatedCounters(inView);
    const handleMouseMove = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX; // normalize between -1 and 1
      const offsetY = (clientY - centerY) / centerY;

      mouseX.set(offsetX * 30); // max 30px movement
      mouseY.set(offsetY * 30);
    };

    useEffect(() => {
      controls.start("visible");
    }, [inView, controls]);

    return (
      <motion.div
        className={`flow-root border-transparent rounded-xl lg:mx-4 sm:scale-90`}
        style={{
          rotateX: rotateX,
          x: mouseX,
          y: mouseY,
        }}
        variants={dashboardVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        onMouseMove={handleMouseMove}>
        <div className="relative rounded-xl bg-gray-900/15 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-xl shadow-gray-500">
          <div className="rounded-md bg-white ring-1 ring-gray-900/5 overflow-hidden">
            <motion.svg
              ref={svgRef}
              width="100%"
              height="100%"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid meet">
              <rect width="1000" height="600" fill="#F7F9FC" />
              <g transform="translate(40, 40)">
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
                  fill="#100f57">
                  Data Pulse Analytics
                </text>
                <circle
                  cx="850"
                  cy="30"
                  r="20"
                  stroke="#8fabff"
                  fill="#b9cdff"
                />
                <text
                  x="850"
                  y="35"
                  fontSize="14"
                  fontWeight="600"
                  fill="#1513c0"
                  textAnchor="middle">
                  JD
                </text>

                {/* Stats row */}
                <g transform="translate(0, 80)">
                  {[0, 1, 2, 3].map((i) => (
                    <g key={i} transform={`translate(${i * 228}, 0)`}>
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
                    stroke="#637aff"
                    fill="#d8e5ff"
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
                    fill="#100f57"
                    textAnchor="middle">
                    Reply to messages
                  </text>
                </g>
              </g>
            </motion.svg>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default DashboardSvg;
