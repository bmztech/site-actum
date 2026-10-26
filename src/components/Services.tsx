import type { ReactNode } from 'react'
import { ContactLink } from './ContactLink'
import { EyeIcon, SearchIcon, ShieldIcon } from './Icons'

const pillars: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <SearchIcon size={20} strokeWidth={1.8} />,
    title: 'Análise técnica individual',
    text: 'Consideramos a origem do crédito e a fase do processo antes de qualquer indicação.',
  },
  {
    icon: <EyeIcon size={20} strokeWidth={1.8} />,
    title: 'Transparência total',
    text: 'Explicações claras sobre como funciona a antecipação e quais são as condições envolvidas.',
  },
  {
    icon: <ShieldIcon size={20} strokeWidth={1.8} />,
    title: 'Responsabilidade jurídica',
    text: 'Respeitamos os limites legais e a decisão de cada pessoa, em cada etapa do processo.',
  },
]

export function Services() {
  return (
    <section className="paper" id="servicos">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Nossos serviços</div>
          <h2>Analisamos créditos judiciais já reconhecidos pela Justiça</h2>
          <p className="lede">
            Com foco especial em créditos federais (contra a União Federal). Em alguns casos, é possível avaliar a
            antecipação desse valor, permitindo que o crédito deixe de ficar parado no fluxo de pagamento e passe a
            estar disponível antes.
          </p>
        </div>

        <div className="pillars reveal">
          {pillars.map((pillar) => (
            <div className="pillar-card" key={pillar.title}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>

        <ContactLink className="btn btn-outline-dark reveal">
          Quero entender mais <span className="btn-arrow">→</span>
        </ContactLink>
      </div>
    </section>
  )
}
