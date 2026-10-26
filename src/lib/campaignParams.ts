/**
 * Parâmetros de campanha (utm_*, gclid, fbclid, ...) que devem seguir para o formulário externo,
 * para o site de destino não perder o contexto de marketing.
 *
 * Comportamento atual: repassa tudo o que veio na query string da landing page.
 */
export function getCampaignParams(): URLSearchParams {
  // TODO(opcional): persistir a atribuição entre visitas (sessionStorage/localStorage),
  // ex.: visitante chega por ?utm_source=google, fecha a aba e volta direto dias depois.
  // Decidir first-touch (mantém a primeira campanha) ou last-touch (a mais recente vence).
  return new URLSearchParams(window.location.search)
}

/** Devolve `baseUrl` com os parâmetros de campanha da visita atual anexados. */
export function withCampaignParams(baseUrl: string): string {
  const url = new URL(baseUrl)
  getCampaignParams().forEach((value, key) => url.searchParams.append(key, value))
  return url.toString()
}
