export type Chamber = 'senate' | 'house' | 'statewide'
export type Party = 'D' | 'R' | 'I'
export type SupportLevel = 'strong_support' | 'supportive' | 'unknown' | 'opposed' | 'strong_opposition'

export interface Official {
  id: string
  name: string
  chamber: Chamber
  district?: string
  party: Party
  rcvSupport: SupportLevel
  supportEvidence: SupportEvidence[]
  contactInfo?: ContactInfo
}

export interface SupportEvidence {
  type: 'bill_sponsor' | 'bill_cosponsor' | 'vote_yes' | 'vote_no' | 'public_statement' | 'endorsement'
  date: string
  description: string
  source?: string
}

export interface ContactInfo {
  email?: string
  phone?: string
  website?: string
  address?: string
}

export interface RCVBill {
  id: string
  session: string
  title: string
  status: 'introduced' | 'committee' | 'passed_chamber' | 'enacted' | 'failed'
  sponsors: string[]
  cosponsors: string[]
}
