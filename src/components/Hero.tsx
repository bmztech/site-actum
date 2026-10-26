import { ArrowRightIcon, BoltIcon, CalendarIcon, CheckIcon, ClockIcon } from './Icons'

function StageArrow() {
  return (
    <div className="stage-arrow">
      <ArrowRightIcon />
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow on-dark">Crédito judicial reconhecido</div>
          <h1>Seu direito já foi reconhecido na Justiça?</h1>
          <p className="lede">
            Ter um crédito reconhecido pela Justiça é um passo importante. Mas isso não significa que o valor
            esteja disponível imediatamente. Analisamos, com critério técnico e responsabilidade, se existe a
            possibilidade de antecipar o seu crédito judicial.
          </p>
          <a href="#formulario" className="btn btn-primary">
            Quero saber se posso receber antes <span className="btn-arrow">→</span>
          </a>
        </div>

        <div className="hero-score-card reveal">
          <div className="dossier-label">
            <span>Fluxo legal de pagamento</span>
            <span>Antecipação</span>
          </div>
          <div className="score-flow">
            <div className="score-row standard">
              <div className="stage-card">
                <div className="stage-badge filled">
                  <CheckIcon strokeWidth={2.5} />
                </div>
                <h4>Reconhecido</h4>
                <p>O direito já foi confirmado pela Justiça.</p>
              </div>
              <StageArrow />
              <div className="stage-card">
                <div className="stage-badge">
                  <ClockIcon />
                </div>
                <h4>Fila de pagamento</h4>
                <p>O valor entra na ordem cronológica de precatórios.</p>
              </div>
              <StageArrow />
              <div className="stage-card">
                <div className="stage-badge">
                  <CalendarIcon />
                </div>
                <h4>Pagamento previsto</h4>
                <p>O prazo legal pode levar anos até se concretizar.</p>
              </div>
            </div>

            <div className="score-divider">ou</div>

            <div className="score-row express">
              <div className="stage-card highlight">
                <div className="stage-badge filled">
                  <BoltIcon size={18} />
                </div>
                <div>
                  <h4>Antecipação</h4>
                  <p>
                    Analisamos se é possível pular direto para o recebimento, sem esperar os anos do fluxo
                    padrão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
