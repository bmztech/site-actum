import type { ReactNode } from 'react'
import { withCampaignParams } from '../lib/campaignParams'

export const CONTACT_FORM_URL = 'https://form.actumprecatorios.com.br/'

type ContactLinkProps = {
  className?: string
  children: ReactNode
}

// Todos os CTAs de contato abrem o formulário externo em nova aba, levando os parâmetros de campanha.
export function ContactLink({ className, children }: ContactLinkProps) {
  return (
    <a href={withCampaignParams(CONTACT_FORM_URL)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
