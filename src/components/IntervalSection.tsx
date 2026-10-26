const consequences = [
  'Decisões importantes ficam adiadas.',
  'Planos que dependem desse valor não avançam.',
  'Oportunidades que fazem sentido neste momento acabam passando.',
  'O crédito existe, mas permanece indisponível.',
]

export function IntervalSection() {
  return (
    <section className="dark section-bg-photo">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow on-dark">O intervalo que pesa</div>
          <h2>Quando um valor é reconhecido judicialmente, ele segue um fluxo legal de pagamento.</h2>
          <p className="lede">
            Esse fluxo não considera urgências pessoais nem o momento de vida de quem espera. É nesse intervalo
            que a espera começa a pesar.
          </p>
        </div>

        <div className="consequence-list reveal">
          {consequences.map((text) => (
            <div className="consequence-item" key={text}>
              <div className="consequence-mark" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <p className="lede reveal" style={{ marginBottom: 24 }}>
          A questão passa a ser: entender se existe uma alternativa responsável para antecipar esse valor, sem
          abrir mão da segurança jurídica.
        </p>

        <a href="#formulario" className="btn btn-primary reveal">
          Quero analisar minhas opções agora <span className="btn-arrow">→</span>
        </a>

        <p className="pull-quote reveal">Não se trata de discutir o direito. Isso já foi resolvido.</p>
      </div>
    </section>
  )
}
