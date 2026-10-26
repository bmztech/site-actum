import logo from '../assets/logo-footer.png'
import { ContactLink } from './ContactLink'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Actum Precatórios S.A." />
            <div className="footer-wordmark">
              Actum<span>Precatórios S.A.</span>
            </div>
            <p>
              Atuação voltada à análise e antecipação de créditos judiciais previdenciários, com responsabilidade e
              segurança jurídica.
            </p>
          </div>

          <div className="footer-col">
            <h4>Páginas</h4>
            <ul>
              <li><a href="#top">Início</a></li>
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#servicos">Nossos Serviços</a></li>
              <li><ContactLink>Contato</ContactLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Atendimento</h4>
            <ul>
              <li><a href="mailto:contato@actumprecatorios.com.br">Email</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Telefone</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Nossos Termos</h4>
            <ul>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <p className="footer-disclaimer">
          As informações apresentadas neste site têm caráter orientativo e não substituem análise individualizada.
        </p>
        <div className="footer-legal">
          <span>Razão Social: Actum Precatórios S.A.</span>
          <span>CNPJ: [inserir]</span>
        </div>
      </div>
    </footer>
  )
}
