"use client";
import { MotionConfig } from "framer-motion";

// Respeta "reducir movimiento" del sistema operativo
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
