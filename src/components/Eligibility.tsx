import { CheckIcon } from './Icons'

const criteria = [
  'Já teve um benefício do INSS reconhecido pela Justiça.',
  'Possui um valor a receber, seja uma quantia menor ou um valor mais elevado.',
  'Está aguardando o pagamento desse crédito pelo fluxo legal.',
  'Não quer que esse valor continue parado por mais tempo.',
  'Prefere entender suas opções com clareza, antes de simplesmente seguir esperando.',
]

export function Eligibility() {
  return (
    <section className="paper">
      <div className="wrap">
        <div className="split-grid">
          <div>
            <div className="section-head reveal">
              <div className="eyebrow">Para quem é indicado</div>
              <h2>Você também está esperando por um valor que já foi reconhecido?</h2>
              <p className="lede">Esta análise pode fazer sentido para quem:</p>
            </div>

            <div className="eligibility reveal">
              {criteria.map((text) => (
                <div className="elig-item" key={text}>
                  <CheckIcon size={18} />
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <p className="lede reveal" style={{ marginBottom: 18 }}>
              Não importa o valor exato neste primeiro momento. O mais importante é que o direito já tenha sido
              reconhecido.
            </p>
            <div className="note-box reveal">
              Se você se identifica com essa situação, o próximo passo é simples: entender se o seu caso pode ser
              analisado com responsabilidade.
            </div>
          </div>

          <div className="reveal">
            <div className="split-photo light-frame portrait-tall">
              <img
                src="https://images.unsplash.com/photo-1758691031979-6128d4029604?fm=jpg&q=75&w=900&auto=format&fit=crop"
                alt="Idosa sorridente usando o celular em casa, representando os beneficiários do INSS atendidos pela Actum"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
