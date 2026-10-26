import { useEffect, useState } from 'react'
import { ContactLink } from './ContactLink'

// Aparece depois que o hero sai da tela.
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroEl = document.querySelector('.hero')
    if (!heroEl) return

    const onScroll = () => setVisible(heroEl.getBoundingClientRect().bottom < 0)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={'sticky-cta' + (visible ? ' visible' : '')} id="stickyCta">
      <ContactLink className="btn btn-primary">Quero saber se posso receber antes</ContactLink>
    </div>
  )
}
