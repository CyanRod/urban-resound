import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  containerClassName?: string
  delay?: number
}

export const WordsPullUpMultiStyle: React.FC<Props> = ({
  segments,
  containerClassName = '',
  delay = 0,
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const allWords: { word: string; className: string }[] = []
  segments.forEach((seg) => {
    seg.text.split(' ').filter(Boolean).forEach((word) => {
      allWords.push({ word, className: seg.className || '' })
    })
  })

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.22em] ${containerClassName}`}>
      {allWords.map((item, i) => (
        <motion.span
          key={i}
          className={`inline-block ${item.className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.85, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  )
}
