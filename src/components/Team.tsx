import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const members = [
  { firstName: 'Danny', lastName: 'Tapia', role: 'Líder del equipo', area: 'Producción e innovación', photo: import.meta.env.BASE_URL + 'danny.png', initials: 'DT', phrase: 'Transformamos residuos en bienestar acústico para el futuro.' },
  { firstName: 'Melanie', lastName: 'Recalde', role: 'Diseño y sostenibilidad', area: 'Biomateriales', photo: import.meta.env.BASE_URL + 'melanie.png', initials: 'MR', phrase: 'Diseñamos soluciones sostenibles con impacto real en la comunidad.' },
  { firstName: 'Anahí', lastName: 'Pillajo', role: 'Investigación y desarrollo', area: 'Área técnica', photo: import.meta.env.BASE_URL + 'anahi.png', initials: 'AP', phrase: 'Innovamos con biomateriales para construir ciudades más responsables.' },
  { firstName: 'Cinthia', lastName: 'Perugachi', role: 'Impacto comunitario', area: 'Social y ambiental', photo: import.meta.env.BASE_URL + 'cinthia.png', initials: 'CP', phrase: 'Impulsamos el desarrollo comunitario desde la economía circular.' },
]

const TeamCard: React.FC<(typeof members)[0]> = ({ firstName, lastName, role, area, photo, initials, phrase }) => {
  const [imgError, setImgError] = React.useState(false)

  return (
    <article className="rounded-2xl overflow-hidden bg-[#101010] border border-white/[0.08] flex flex-col">
      {/* Card header */}
      <div className="px-6 pt-6 pb-20 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white/[0.15] flex items-center justify-center bg-white/[0.04] flex-shrink-0">
            <span className="text-xs text-primary/70 font-medium">UR</span>
          </div>
          <div>
            <p className="text-base font-normal text-[#E1E0CC]">Urban <span className="text-gray-500">ReSound</span></p>
            <p className="text-[10px] uppercase tracking-widest text-gray-600">Acústica · Sostenible · Circular</p>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="w-36 h-36 rounded-full mx-auto -mt-16 relative z-10 flex-shrink-0 border-4 border-[#101010] bg-[#1a1a1a] overflow-hidden">
        {imgError ? (
          <div className="w-full h-full rounded-full bg-[#212121] flex items-center justify-center">
            <span className="text-2xl font-normal text-primary/60">{initials}</span>
          </div>
        ) : (
          <img
            src={photo}
            alt={`${firstName} ${lastName}`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover scale-[2] origin-top"
            style={{ objectPosition: 'center 5%' }}
          />
        )}
      </div>

      {/* Info */}
      <div className="text-center px-6 pt-4 pb-5 flex-shrink-0">
        <h4 className="text-xl font-normal text-[#E1E0CC]">
          {firstName}
          <span className="block text-gray-500 text-lg">{lastName}</span>
        </h4>
        <div className="inline-flex items-center gap-2 mt-4 mb-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1]">
          <span className="text-[10px] font-medium uppercase tracking-widest text-primary/60">{role}</span>
        </div>
        <p className="text-xs text-gray-600 uppercase tracking-widest">{area}</p>
      </div>

      {/* Footer phrase */}
      <div className="mt-auto px-6 py-5 border-t border-white/[0.06]">
        <p className="text-xs text-gray-500 text-center leading-relaxed">{phrase}</p>
      </div>
    </article>
  )
}

const Team: React.FC = () => {
  return (
    <section id="equipo" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Nuestro equipo
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Personas que transforman residuos en', className: 'text-[#E1E0CC]' },
            { text: 'bienestar acústico.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mb-4">
            Un equipo comprometido con la innovación sostenible, el diseño acústico
            y la economía circular aplicada a espacios reales.
          </p>
          <span className="inline-block px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs text-gray-500">
            Universidad de Investigación de Tecnología Experimental Yachay
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.firstName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TeamCard {...m} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p className="font-serif italic text-gray-500 max-w-lg mx-auto leading-relaxed text-base sm:text-lg">
            "Estudiantes comprometidos con transformar la realidad de Quisapincha
            a través de la ciencia, la innovación y el impacto social."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Team
