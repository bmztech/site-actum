import { useState, type ChangeEvent, type FormEvent } from 'react'
import { submitLead, type Concedido, type LeadData } from '../lib/submitLead'
import { CheckCircleIcon, ShieldIcon } from './Icons'

const tempoOptions = ['Menos de 6 meses', 'Entre 6 meses e 1 ano', 'Entre 1 e 3 anos', 'Mais de 3 anos']

const initialData: LeadData = {
  nome: '',
  telefone: '',
  email: '',
  concedido: null,
  tempo: '',
  valor: '',
}

export function LeadForm() {
  const [data, setData] = useState<LeadData>(initialData)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')
  const [error, setError] = useState<string | null>(null)

  const update =
    (field: Exclude<keyof LeadData, 'concedido'>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }))

  const setConcedido = (value: Concedido) => setData((prev) => ({ ...prev, concedido: value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError(null)
    try {
      await submitLead(data)
      setStatus('success')
    } catch (err) {
      setStatus('idle')
      setError(err instanceof Error ? err.message : 'Não foi possível enviar. Tente novamente.')
    }
  }

  return (
    <section className="dark">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow on-dark">Análise preliminar</div>
          <h2>Vamos entender melhor o seu caso</h2>
          <p className="lede">
            Para avaliar se existe a possibilidade de antecipação, precisamos de algumas informações iniciais. Não
            há compromisso nesta etapa — o objetivo é entender a sua situação e explicar, com clareza, se faz
            sentido seguir.
          </p>
        </div>

        <div className="inline-form-card reveal" id="formulario" style={{ maxWidth: 640 }}>
          <div className="confidential" style={{ marginBottom: 20 }}>
            <ShieldIcon strokeWidth={1.8} />
            <p>Informações confidenciais, usadas apenas para análise do seu caso.</p>
          </div>

          {status !== 'success' && (
            <form id="leadForm" onSubmit={handleSubmit}>
              <div className="field-row">
                <div>
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" placeholder="Seu nome" required value={data.nome} onChange={update('nome')} />
                </div>
                <div>
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    value={data.telefone}
                    onChange={update('telefone')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  required
                  value={data.email}
                  onChange={update('email')}
                />
              </div>

              <div>
                <label>Seu benefício já foi concedido judicialmente?</label>
                <div className="radio-group" id="concedidoGroup">
                  {(
                    [
                      ['sim', 'Sim'],
                      ['nao', 'Não'],
                    ] as const
                  ).map(([value, text]) => (
                    <label key={value} className={'radio-opt' + (data.concedido === value ? ' selected' : '')}>
                      <input
                        type="radio"
                        name="concedido"
                        value={value}
                        checked={data.concedido === value}
                        onChange={() => setConcedido(value)}
                      />
                      {text}
                    </label>
                  ))}
                </div>
              </div>

              <div className="field-row">
                <div>
                  <label htmlFor="tempo">Há quanto tempo foi concedido?</label>
                  <select id="tempo" required value={data.tempo} onChange={update('tempo')}>
                    <option value="" disabled>
                      Selecione
                    </option>
                    {tempoOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="valor">Valor aproximado dos atrasados</label>
                  <input type="text" id="valor" placeholder="R$ 0,00" required value={data.valor} onChange={update('valor')} />
                </div>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                Quero saber se posso receber antes <span className="btn-arrow">→</span>
              </button>
            </form>
          )}

          <div className={'form-success' + (status === 'success' ? ' show' : '')} id="formSuccess">
            <CheckCircleIcon size={40} strokeWidth={1.5} />
            <h3>Recebemos suas informações</h3>
            <p>
              Nossa equipe vai analisar seu caso com critério técnico e entrará em contato para explicar os próximos
              passos, sem qualquer compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
