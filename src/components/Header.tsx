import logo from '../assets/logo-header.png'
import { ContactLink } from './ContactLink'

export function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo-mark">
          <img src={logo} alt="Actum Precatórios" />
          <div className="logo-text">
            <strong>Actum</strong>
            <span>Precatórios S.A.</span>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#top">Home</a>
          <a href="#quem-somos">Quem Somos</a>
          <a href="#servicos">Nossos Serviços</a>
        </nav>

        <div className="header-actions">
          <ContactLink className="btn btn-primary">Fale Conosco</ContactLink>
        </div>
      </div>
    </header>
  )
}
