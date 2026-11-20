"use client";
import { motion } from "framer-motion";

// Flotación suave y continua
export default function Float({ children, amp = 10, duration = 6, delay = 0, className = "" }: { children: React.ReactNode; amp?: number; duration?: number; delay?: number; className?: string }) {
  return (
    <motion.div className={className} animate={{ y: [0, -amp, 0] }} transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  );
}
