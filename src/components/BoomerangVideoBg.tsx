import React, { useEffect, useRef } from 'react'

interface Props {
  src: string
  style?: React.CSSProperties
  className?: string
}

const BoomerangVideoBg: React.FC<Props> = ({ src, style, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const offCanvasRef = useRef<HTMLCanvasElement>(null)
  const displayRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<ImageBitmap[]>([])
  const rafRef = useRef<number>(0)
  const idxRef = useRef(0)
  const dirRef = useRef<1 | -1>(1)

  useEffect(() => {
    const video = videoRef.current
    const off = offCanvasRef.current
    const display = displayRef.current
    if (!video || !off || !display) return

    const offCtx = off.getContext('2d')
    const dCtx = display.getContext('2d')
    if (!offCtx || !dCtx) return

    const CAP_W = 960
    const CAP_H = 540
    off.width = CAP_W
    off.height = CAP_H

    const syncSize = () => {
      display.width = display.offsetWidth || window.innerWidth
      display.height = display.offsetHeight || window.innerHeight
    }
    syncSize()

    const ro = new ResizeObserver(syncSize)
    ro.observe(display)

    const capture = async () => {
      try {
        await video.play()
      } catch {
        // autoplay may be blocked on first try — still proceed to seek-based capture
      }
      video.pause()

      const dur = video.duration
      if (!dur || isNaN(dur)) return

      const fps = 20
      const total = Math.min(Math.floor(dur * fps), 200)
      const frames: ImageBitmap[] = []

      for (let i = 0; i < total; i++) {
        video.currentTime = (i / fps)
        await new Promise<void>((resolve) => {
          const handler = () => {
            video.removeEventListener('seeked', handler)
            resolve()
          }
          video.addEventListener('seeked', handler)
        })
        offCtx.drawImage(video, 0, 0, CAP_W, CAP_H)
        try {
          const bmp = await createImageBitmap(off)
          frames.push(bmp)
        } catch {
          // fallback: skip frame
        }
      }

      if (!frames.length) return
      framesRef.current = frames
      play()
    }

    const FRAME_MS = 1000 / 24
    let lastT = 0

    const play = () => {
      const frames = framesRef.current
      const tick = (t: number) => {
        rafRef.current = requestAnimationFrame(tick)
        if (t - lastT < FRAME_MS) return
        lastT = t

        const f = frames[idxRef.current]
        if (f) {
          const { width: dw, height: dh } = display

          // cover-fit
          const scale = Math.max(dw / CAP_W, dh / CAP_H)
          const sw = CAP_W * scale
          const sh = CAP_H * scale
          const sx = (dw - sw) / 2
          const sy = (dh - sh) / 2

          dCtx.drawImage(f, sx, sy, sw, sh)
        }

        idxRef.current += dirRef.current
        if (idxRef.current >= frames.length - 1) {
          idxRef.current = frames.length - 1
          dirRef.current = -1
        } else if (idxRef.current <= 0) {
          idxRef.current = 0
          dirRef.current = 1
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const onMeta = () => capture()
    video.addEventListener('loadedmetadata', onMeta, { once: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      framesRef.current.forEach((f) => f.close())
      framesRef.current = []
    }
  }, [src])

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        style={{ display: 'none' }}
      />
      <canvas ref={offCanvasRef} style={{ display: 'none' }} />
      <canvas
        ref={displayRef}
        className={className}
        style={{ display: 'block', width: '100%', height: '100%', ...style }}
      />
    </>
  )
}

export default BoomerangVideoBg
