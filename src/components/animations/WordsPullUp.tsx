import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  showAsterisk?: boolean
}

export const WordsPullUp: React.FC<Props> = ({
  text,
  className = '',
  delay = 0,
  showAsterisk = false,
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const words = text.split(' ').filter(Boolean)

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.22em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="relative inline-block"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.85, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          {showAsterisk && i === words.length - 1 && (
            <sup
              className="absolute"
              style={{ top: '0.65em', right: '-0.3em', fontSize: '0.31em' }}
            >
              *
            </sup>
          )}
        </motion.span>
      ))}
    </span>
  )
}
