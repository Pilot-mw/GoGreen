"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

interface StatsCounterProps {
  stats: StatItem[];
}

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </div>
          <p className="text-gray-700 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
