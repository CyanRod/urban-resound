import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { AnimatedChar } from './AnimatedChar'

interface Props {
  text: string
  className?: string
}

export const AnimatedText: React.FC<Props> = ({ text, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })
  const chars = text.split('')

  return (
    <div ref={ref} className={className}>
      {chars.map((char, i) => (
        <AnimatedChar key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </div>
  )
}
