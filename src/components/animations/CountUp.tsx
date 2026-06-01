import React, { useRef, useEffect, useState } from 'react'
import { animate, useInView } from 'framer-motion'

interface Props {
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  thousands?: boolean
  className?: string
}

const CountUp: React.FC<Props> = ({
  to,
  duration = 1.4,
  delay = 0,
  prefix = '',
  suffix = '',
  thousands = false,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      const controls = animate(0, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => setCount(Math.round(v)),
      })
      return () => controls.stop()
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [inView, to, duration, delay])

  const display = thousands && count >= 1000
    ? count.toLocaleString('de-DE')
    : count.toString()

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default CountUp
