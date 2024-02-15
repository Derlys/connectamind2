
export interface HistoryItem {
  timestamp: string;
  fee: number;
  fee_payer: string;
  signers: string[];
  signatures: string[];
  protocol: Protocol;
  type: string;
  status: string;
  actions: Action[];
}
export interface Protocol {
  address: string
  name: string
}

export interface Action {
  info: Info
  source_protocol: SourceProtocol
  type: string
  parent_protocol: string
}

export interface Info {
  extensionTypes?: string[]
  mint?: string
  payer?: string
  newAccount?: string
  account?: string
}

export interface SourceProtocol {
  address: string
  name: string
}
