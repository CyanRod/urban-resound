import React from 'react'

const WARM = '#C8914A'
const WL = 36

// Wave path generator
function mkWave(x1: number, y: number, x2: number, amp: number): string {
  let d = `M ${x1},${y}`
  let x = x1
  let up = true
  while (x + WL / 2 <= x2) {
    d += ` Q ${x + WL / 4},${y + (up ? -amp : amp)} ${x + WL / 2},${y}`
    x += WL / 2
    up = !up
  }
  return d
}

// Wave positions and styles
const YS   = [106, 120, 134]   // y centres
const AMPS = [6,   11,  6]     // amplitudes
const SWS  = [1.1, 2,   1.1]  // stroke widths
const CY1  = 88,  CY2 = 148   // strict clip band — waves never leave this zone

// ── Speaker ──────────────────────────────────────────────────────────
const Speaker = ({ x, y }: { x: number; y: number }) => (
  <g>
    <rect x={x - 8} y={y - 11} width={11} height={22} rx={2} fill={WARM} opacity={0.85} />
    <path d={`M ${x+3},${y-11} L ${x+20},${y-23} L ${x+20},${y+23} L ${x+3},${y+11} Z`}
      fill={WARM} opacity={0.6} />
    <path d={`M ${x+24},${y-13} Q ${x+33},${y} ${x+24},${y+13}`}
      fill="none" stroke={WARM} strokeWidth={1.5} opacity={0.4} />
    <path d={`M ${x+31},${y-20} Q ${x+44},${y} ${x+31},${y+20}`}
      fill="none" stroke={WARM} strokeWidth={1.2} opacity={0.22} />
  </g>
)

// ── Stressed person (red, frown) ──────────────────────────────────────
const StressedPerson = ({ x, y }: { x: number; y: number }) => (
  <g opacity={0.85}>
    <circle cx={x} cy={y-24} r={13} fill="none" stroke="rgba(230,80,80,0.9)" strokeWidth={1.8} />
    {/* frown — control point above endpoints */}
    <path d={`M ${x-5},${y-19} Q ${x},${y-24} ${x+5},${y-19}`}
      fill="none" stroke="rgba(230,80,80,0.9)" strokeWidth={1.5} />
    {/* tense eyes */}
    <line x1={x-4} y1={y-27} x2={x-2} y2={y-25} stroke="rgba(230,80,80,0.8)" strokeWidth={1.3} strokeLinecap="round" />
    <line x1={x+2} y1={y-27} x2={x+4} y2={y-25} stroke="rgba(230,80,80,0.8)" strokeWidth={1.3} strokeLinecap="round" />
    {/* stress squiggles above head */}
    <path d={`M ${x-6},${y-40} L ${x-4},${y-37} L ${x-2},${y-40} L ${x},${y-37}`}
      fill="none" stroke="rgba(230,80,80,0.5)" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
    <path d={`M ${x+2},${y-40} L ${x+4},${y-37} L ${x+6},${y-40}`}
      fill="none" stroke="rgba(230,80,80,0.4)" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    {/* body */}
    <path d={`M ${x},${y-11} L ${x},${y+12}`} stroke="rgba(230,80,80,0.55)" strokeWidth={1.8} />
    <path d={`M ${x-11},${y} L ${x},${y+3} L ${x+11},${y}`} fill="none" stroke="rgba(230,80,80,0.55)" strokeWidth={1.8} />
    <path d={`M ${x},${y+12} L ${x-8},${y+29}`} stroke="rgba(230,80,80,0.55)" strokeWidth={1.8} />
    <path d={`M ${x},${y+12} L ${x+8},${y+29}`} stroke="rgba(230,80,80,0.55)" strokeWidth={1.8} />
  </g>
)

// ── Peaceful person (amber, smile) ────────────────────────────────────
const PeacefulPerson = ({ x, y }: { x: number; y: number }) => (
  <g opacity={0.9}>
    <circle cx={x} cy={y-24} r={13} fill="none" stroke={WARM} strokeWidth={1.8} opacity={0.9} />
    {/* smile — control point below endpoints */}
    <path d={`M ${x-5},${y-22} Q ${x},${y-17} ${x+5},${y-22}`}
      fill="none" stroke={WARM} strokeWidth={1.5} opacity={0.9} />
    {/* relaxed dot eyes */}
    <circle cx={x-4} cy={y-27} r={1.5} fill={WARM} opacity={0.85} />
    <circle cx={x+4} cy={y-27} r={1.5} fill={WARM} opacity={0.85} />
    {/* calm arc above head */}
    <path d={`M ${x-5},${y-39} Q ${x},${y-43} ${x+5},${y-39}`}
      fill="none" stroke={`${WARM}55`} strokeWidth={1.2} strokeLinecap="round" />
    {/* body */}
    <path d={`M ${x},${y-11} L ${x},${y+12}`} stroke={WARM} strokeWidth={1.8} opacity={0.65} />
    <path d={`M ${x-11},${y} L ${x},${y+3} L ${x+11},${y}`} fill="none" stroke={WARM} strokeWidth={1.8} opacity={0.65} />
    <path d={`M ${x},${y+12} L ${x-8},${y+29}`} stroke={WARM} strokeWidth={1.8} opacity={0.65} />
    <path d={`M ${x},${y+12} L ${x+8},${y+29}`} stroke={WARM} strokeWidth={1.8} opacity={0.65} />
  </g>
)

// ─────────────────────────────────────────────────────────────────────
// Shared label row component
// ─────────────────────────────────────────────────────────────────────
const LabelRow = ({ items }: { items: { text: string; color: string }[] }) => (
  <div
    className="flex items-center justify-around px-3 py-3"
    style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
  >
    {items.map((item, i) => (
      <span
        key={i}
        className="text-center"
        style={{
          fontSize: 10,
          fontFamily: 'DM Sans,sans-serif',
          color: item.color,
          lineHeight: 1.3,
          maxWidth: '30%',
        }}
      >
        {item.text}
      </span>
    ))}
  </div>
)

// ═══════════════════════════════════════════════════════════════════
// DIAGRAM 1 — Sound through a common wall  (PROBLEM)
// ═══════════════════════════════════════════════════════════════════
export const SoundThroughWall: React.FC = () => {
  const lX1 = 58,  lX2 = 192
  const rX1 = 226, rX2 = 456

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Badge */}
      <div className="px-4 pt-3 pb-2">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full"
          style={{ background: 'rgba(220,55,55,0.15)', color: 'rgba(220,80,80,0.95)' }}
        >
          ✕&nbsp;&nbsp;SIN PANEL
        </span>
      </div>

      {/* Visual SVG — strict overflow:hidden, no text elements inside */}
      <div className="overflow-hidden flex-1">
        <svg viewBox="0 0 520 190" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Waves are clipped to a tight band — they can never leave it */}
            <clipPath id="twl-l">
              <rect x={lX1} y={CY1} width={lX2 - lX1} height={CY2 - CY1} />
            </clipPath>
            <clipPath id="twl-r">
              <rect x={rX1} y={CY1} width={rX2 - rX1} height={CY2 - CY1} />
            </clipPath>
          </defs>

          <style>{`
            @keyframes twl {
              0%   { transform: translateX(0px) }
              100% { transform: translateX(${WL}px) }
            }
          `}</style>

          {/* Background */}
          <rect width={520} height={190} fill="#0a0a0a" />

          {/* Right danger zone — red tint */}
          <rect x={226} width={294} height={190} fill="rgba(220,55,55,0.06)" />
          <line x1={226} y1={0} x2={226} y2={190} stroke="rgba(220,55,55,0.13)" strokeWidth={1} />

          {/* Left waves — inside strict clip */}
          <g clipPath="url(#twl-l)">
            <g style={{ animation: 'twl 0.85s linear infinite' }}>
              {YS.map((y, i) => (
                <path key={i}
                  d={mkWave(lX1 - WL * 2, y, lX2 + WL * 2, AMPS[i])}
                  fill="none" stroke={WARM} strokeWidth={SWS[i]} opacity={0.9} />
              ))}
            </g>
          </g>

          {/* Wall */}
          <rect x={194} y={12} width={28} height={166} rx={3} fill="#1c1c1c" />
          <rect x={194} y={12} width={28} height={166} rx={3}
            fill="none" stroke="#363636" strokeWidth={1} />
          {[38, 65, 92, 119, 146, 164].map(ty => (
            <line key={ty} x1={194} y1={ty} x2={222} y2={ty}
              stroke="#2a2a2a" strokeWidth={0.8} />
          ))}

          {/* Right waves — same amplitude (passes through) */}
          <g clipPath="url(#twl-r)">
            <g style={{ animation: 'twl 0.85s linear infinite' }}>
              {YS.map((y, i) => (
                <path key={i}
                  d={mkWave(rX1 - WL * 2, y, rX2 + WL * 2, AMPS[i])}
                  fill="none" stroke="rgba(220,80,80,0.85)" strokeWidth={SWS[i]} opacity={0.75} />
              ))}
            </g>
          </g>

          <Speaker x={22} y={120} />
          <StressedPerson x={480} y={140} />
        </svg>
      </div>

      {/* Label row — HTML below SVG, zero overlap risk */}
      <LabelRow items={[
        { text: 'Fuente de ruido',            color: '#484848' },
        { text: 'Pared común',                color: '#383838' },
        { text: 'El sonido lo atraviesa todo', color: 'rgba(220,80,80,0.6)' },
      ]} />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// DIAGRAM 2 — Sound absorbed by the panel  (SOLUTION)
// ═══════════════════════════════════════════════════════════════════
export const SoundAbsorbedByPanel: React.FC = () => {
  const lX1 = 58,  lX2 = 192
  const rX1 = 246, rX2 = 456

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: '#0a0a0a', border: `1px solid rgba(200,145,74,0.2)` }}
    >
      {/* Badge */}
      <div className="px-4 pt-3 pb-2">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full"
          style={{ background: 'rgba(200,145,74,0.15)', color: `${WARM}f0` }}
        >
          ✓&nbsp;&nbsp;CON PANEL URBAN RESOUND
        </span>
      </div>

      {/* Visual SVG — no text elements inside */}
      <div className="overflow-hidden flex-1">
        <svg viewBox="0 0 520 190" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="sap-l">
              <rect x={lX1} y={CY1} width={lX2 - lX1} height={CY2 - CY1} />
            </clipPath>
            <clipPath id="sap-r">
              <rect x={rX1} y={CY1} width={rX2 - rX1} height={CY2 - CY1} />
            </clipPath>
            <filter id="amber-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <style>{`
            @keyframes sap {
              0%   { transform: translateX(0px) }
              100% { transform: translateX(${WL}px) }
            }
          `}</style>

          {/* Background */}
          <rect width={520} height={190} fill="#0a0a0a" />

          {/* Right calm zone — amber tint */}
          <rect x={246} width={274} height={190} fill="rgba(200,145,74,0.03)" />
          <line x1={246} y1={0} x2={246} y2={190} stroke={`${WARM}20`} strokeWidth={1} />

          {/* Left waves — strong, inside clip */}
          <g clipPath="url(#sap-l)">
            <g style={{ animation: 'sap 0.85s linear infinite' }}>
              {YS.map((y, i) => (
                <path key={i}
                  d={mkWave(lX1 - WL * 2, y, lX2 + WL * 2, AMPS[i])}
                  fill="none" stroke={WARM} strokeWidth={SWS[i]} opacity={0.9} />
              ))}
            </g>
          </g>

          {/* Panel body */}
          <rect x={194} y={12} width={48} height={166} rx={3} fill="#101010" />
          <rect x={194} y={12} width={48} height={166} rx={3}
            fill="none" stroke={WARM} strokeWidth={1.4} opacity={0.55}
            filter="url(#amber-glow)" />
          {[208, 220, 232].map(lx => (
            <line key={lx} x1={lx} y1={12} x2={lx} y2={178}
              stroke={`${WARM}18`} strokeWidth={0.9} />
          ))}

          {/* Energy dissipating inside panel */}
          {YS.map((y, i) => [
            { x1: 196, cy: y + (i === 1 ? -3 : -1.5), x2: 218 },
            { x1: 218, cy: y + (i === 1 ?  1.5 : 0.8), x2: 242 },
          ].map((seg, j) => (
            <path key={`${i}-${j}`}
              d={`M ${seg.x1},${y} Q ${(seg.x1 + seg.x2) / 2},${seg.cy} ${seg.x2},${y}`}
              fill="none" stroke={WARM}
              strokeWidth={SWS[i] * (j === 0 ? 0.55 : 0.25)}
              opacity={j === 0 ? 0.3 : 0.12}
              strokeDasharray={j === 0 ? '3 5' : '2 6'} />
          )))}

          {/* Right waves — nearly silent (15% amplitude) */}
          <g clipPath="url(#sap-r)">
            <g style={{ animation: 'sap 0.85s linear infinite' }}>
              {YS.map((y, i) => (
                <path key={i}
                  d={mkWave(rX1 - WL * 2, y, rX2 + WL * 2, Math.max(1, Math.round(AMPS[i] * 0.15)))}
                  fill="none" stroke={WARM}
                  strokeWidth={SWS[i] * 0.5} opacity={0.18} />
              ))}
            </g>
          </g>

          <Speaker x={22} y={120} />
          <PeacefulPerson x={480} y={140} />
        </svg>
      </div>

      {/* Label row — HTML below SVG */}
      <LabelRow items={[
        { text: 'Fuente de ruido',       color: '#484848' },
        { text: 'Panel Urban ReSound',   color: `${WARM}75` },
        { text: 'Tu espacio, en silencio', color: `${WARM}85` },
      ]} />
    </div>
  )
}
