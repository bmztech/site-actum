import { useEffect, useState } from 'react'

// Aparece depois que o hero sai da tela e some enquanto o formulário estiver visível.
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroEl = document.querySelector('.hero')
    const formEl = document.getElementById('formulario')
    if (!heroEl || !formEl) return

    const onScroll = () => {
      const heroBottom = heroEl.getBoundingClientRect().bottom
      const { top: formTop, bottom: formBottom } = formEl.getBoundingClientRect()
      const withinForm = formTop < window.innerHeight && formBottom > 0
      setVisible(heroBottom < 0 && !withinForm)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={'sticky-cta' + (visible ? ' visible' : '')} id="stickyCta">
      <a href="#formulario" className="btn btn-primary">
        Quero saber se posso receber antes
      </a>
    </div>
  )
}
