import type { ReactNode } from 'react'
import { CalendarSmallIcon, EyeIcon, FileIcon, ShieldIcon } from './Icons'

const trustItems: { icon: ReactNode; text: string }[] = [
  { icon: <CalendarSmallIcon size={18} strokeWidth={1.8} />, text: 'Análise individual de cada caso.' },
  { icon: <EyeIcon size={18} strokeWidth={1.8} />, text: 'Explicações claras sobre possibilidades e limites.' },
  { icon: <FileIcon size={18} strokeWidth={1.8} />, text: 'Contratos formais e acompanhamento jurídico.' },
  { icon: <ShieldIcon size={18} strokeWidth={1.8} />, text: 'Total liberdade para decidir, sem qualquer obrigação.' },
]

export function Security() {
  return (
    <section className="dark" id="quem-somos">
      <div className="wrap">
        <div className="split-grid">
          <div>
            <div className="section-head reveal">
              <div className="eyebrow on-dark">Segurança e responsabilidade</div>
              <h2>Decidir com clareza faz parte do processo</h2>
              <p className="lede">
                Analisar a antecipação de um crédito judicial é uma decisão importante. Por isso, nosso trabalho é
                pautado pela transparência e pelo respeito a cada situação. Atuamos com:
              </p>
            </div>

            <div className="trust-grid reveal">
              {trustItems.map((item) => (
                <div className="trust-item" key={item.text}>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="callout reveal">A antecipação é uma possibilidade legal, não um compromisso automático.</div>
          </div>

          <div className="reveal">
            <div className="split-photo dark-frame">
              <img
                src="https://images.unsplash.com/photo-1758686253859-8ef7e940096e?fm=jpg&q=75&w=900&auto=format&fit=crop"
                alt="Aperto de mãos representando confiança e acordo formalizado"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
