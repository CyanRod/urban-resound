import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { City } from '../data/ecuador'

const WARM = '#C8914A'

// Ecuador center and bounds
const ECUADOR_CENTER: [number, number] = [-1.5, -78.4]
const ECUADOR_ZOOM = 6

interface Props {
  city: City | null
}

const EcuadorMap: React.FC<Props> = ({ city }) => {
  const mapRef      = useRef<any>(null)
  const instanceRef = useRef<any>(null)
  const markerRef   = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current) return
    // Dynamically import leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      if (instanceRef.current) return // already initialized

      // Fix default icon path issue in Vite
      const icon = L.divIcon({
        html: `<div style="
          width:16px;height:16px;
          background:${WARM};
          border-radius:50%;
          border:2px solid #fff;
          box-shadow:0 0 0 5px rgba(200,145,74,0.35), 0 2px 8px rgba(0,0,0,0.4);
          animation: pulse-pin 1.8s ease-in-out infinite;
        "></div>`,
        className: '',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      const map = L.map(mapRef.current, {
        center: ECUADOR_CENTER,
        zoom: ECUADOR_ZOOM,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      })

      // Dark tile layer — CartoDB Dark Matter
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Attribution small
      L.control.attribution({ position: 'bottomright', prefix: false })
        .addAttribution('© CartoDB')
        .addTo(map)

      instanceRef.current = { map, icon, L }
    })
  }, [])

  // React to city changes
  useEffect(() => {
    if (!instanceRef.current) return
    const { map, icon, L } = instanceRef.current

    if (markerRef.current) {
      markerRef.current.remove()
      markerRef.current = null
    }

    if (city) {
      map.flyTo([city.lat, city.lng], 12, { duration: 1.6, easeLinearity: 0.3 })
      const marker = L.marker([city.lat, city.lng], { icon }).addTo(map)
      markerRef.current = marker
    } else {
      map.flyTo(ECUADOR_CENTER, ECUADOR_ZOOM, { duration: 1.2 })
    }
  }, [city])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(200,145,74,0.2)' }}
    >
      {/* Map */}
      <div
        ref={mapRef}
        style={{ height: '240px', width: '100%', background: '#111' }}
      />

      {/* Fact card */}
      {city && (
        <motion.div
          key={city.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-5 pb-6"
          style={{ background: 'rgba(200,145,74,0.07)', borderTop: '1px solid rgba(200,145,74,0.18)' }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{city.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: WARM }}>
                {city.name}
              </p>
              <p className="text-sm font-normal leading-relaxed" style={{ color: '#D8D6C4', lineHeight: '1.7' }}>
                {city.fact}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {!city && (
        <div className="p-4 text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            Selecciona tu ciudad para descubrir algo hermoso
          </p>
        </div>
      )}

      <style>{`
        @keyframes pulse-pin {
          0%, 100% { box-shadow: 0 0 0 5px rgba(200,145,74,0.35), 0 2px 8px rgba(0,0,0,0.4); }
          50%       { box-shadow: 0 0 0 9px rgba(200,145,74,0.15), 0 2px 8px rgba(0,0,0,0.4); }
        }
      `}</style>
    </motion.div>
  )
}

export default EcuadorMap
