import { useEffect, useState } from "react";

type Counts = {
  apiCalls: number;
  responseTime: number;
  errorRate: number;
  uptime: number;
};

export function useAnimatedCounters(inView: boolean) {
  const [counts, setCounts] = useState<Counts>({
    apiCalls: 0,
    responseTime: 0,
    errorRate: 0,
    uptime: 0,
  });

  useEffect(() => {
    if (!inView) return;

    const targets = {
      apiCalls: 2400000,
      responseTime: 126,
      errorRate: 0.12,
      uptime: 99.98,
    };

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        apiCalls: Math.floor(targets.apiCalls * progress),
        responseTime: Math.floor(targets.responseTime * progress),
        errorRate: parseFloat((targets.errorRate * progress).toFixed(2)),
        uptime: parseFloat((targets.uptime * progress).toFixed(2)),
      });

      if (frame === totalFrames) clearInterval(counter);
    }, frameDuration);

    return () => clearInterval(counter);
  }, [inView]);

  return counts;
}
