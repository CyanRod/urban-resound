import React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'

interface Props {
  char: string
  progress: MotionValue<number>
  index: number
  total: number
}

export const AnimatedChar: React.FC<Props> = ({ char, progress, index, total }) => {
  const cp = index / total
  const opacity = useTransform(
    progress,
    [Math.max(0, cp - 0.1), Math.min(1, cp + 0.05)],
    [0.15, 1]
  )
  return <motion.span style={{ opacity }}>{char === ' ' ? ' ' : char}</motion.span>
}
