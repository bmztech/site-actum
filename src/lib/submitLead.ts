export type Concedido = 'sim' | 'nao'

export type LeadData = {
  nome: string
  telefone: string
  email: string
  concedido: Concedido | null
  tempo: string
  valor: string
}

/**
 * Envia o lead capturado no formulário de análise preliminar.
 *
 * O HTML original não enviava nada ("front-end only — connect to your backend/CRM here"):
 * apenas escondia o formulário e mostrava a mensagem de sucesso. Esta função é o ponto de
 * integração. Se ela resolver, o formulário mostra o sucesso; se lançar erro, o formulário
 * continua visível e exibe `error.message`.
 */
export async function submitLead(data: LeadData): Promise<void> {
  // TODO: integrar com backend / CRM / WhatsApp.
  void data
}
