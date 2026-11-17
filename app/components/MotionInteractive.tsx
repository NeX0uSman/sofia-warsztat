"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const pressTransition = { type: "spring", stiffness: 460, damping: 30 } as const;

export function MotionButton(props: HTMLMotionProps<"button">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      {...props}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={pressTransition}
    />
  );
}

export function MotionLink(props: HTMLMotionProps<"a">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      {...props}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={pressTransition}
    />
  );
}
