import emailjs from '@emailjs/browser'

const SERVICE    = import.meta.env.VITE_EMAILJS_SERVICE_ID          as string
const TPL_DONA   = import.meta.env.VITE_EMAILJS_TEMPLATE_DONA        as string
const TPL_GRACIA = import.meta.env.VITE_EMAILJS_TEMPLATE_GRACIAS     as string
const TPL_CONT   = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTO    as string
const KEY        = import.meta.env.VITE_EMAILJS_PUBLIC_KEY           as string

export async function sendDonation(params: {
  nombre: string
  email: string
  ciudad?: string
  mensaje?: string
}) {
  // Notificación a dannytapia196@gmail.com
  await emailjs.send(SERVICE, TPL_DONA, params, { publicKey: KEY })
  // Correo de agradecimiento al donante
  await emailjs.send(SERVICE, TPL_GRACIA, params, { publicKey: KEY })
}

export async function sendContact(params: {
  nombre: string
  email: string
  mensaje?: string
}) {
  return emailjs.send(SERVICE, TPL_CONT, params, { publicKey: KEY })
}
