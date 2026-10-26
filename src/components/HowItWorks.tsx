import { ContactLink } from './ContactLink'

const steps = [
  {
    num: '01',
    title: 'Análise do crédito judicial',
    text: 'Analisamos a origem do valor, em que fase o processo está e se existe possibilidade de antecipação.',
  },
  {
    num: '02',
    title: 'Proposta clara e transparente',
    text: 'Quando a antecipação é possível, apresentamos as condições de forma direta, sem pressão ou obrigação.',
  },
  {
    num: '03',
    title: 'Formalização jurídica segura',
    text: 'Todo o procedimento é feito com contrato e acompanhamento jurídico, garantindo segurança em cada etapa.',
  },
  {
    num: '04',
    title: 'Recebimento do valor',
    text: 'Após a formalização, o valor é disponibilizado e a espera deixa de fazer parte da sua decisão.',
  },
]

export function HowItWorks() {
  return (
    <section className="paper-2">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Como funciona a antecipação</div>
          <h2>Etapas do nosso processo</h2>
        </div>

        <div className="process reveal">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <ContactLink className="btn btn-outline-dark reveal">
          Quero entender como funciona no meu caso <span className="btn-arrow">→</span>
        </ContactLink>
      </div>
    </section>
  )
}
