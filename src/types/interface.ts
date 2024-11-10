// interfacce
export interface IMezzo {
    tipo: string
    ID: number
    stato: string

    assegnaUtente(utente: IUtente): void
}

export interface IUtente {
    nome: string
    cognome: string
    metodoDiPagamentoPreferito: string

    prenotaMezzo(mezzo: IMezzo): void
}

export interface ICittà {
    nomeCittà: string
    elencoMezziDisponibili: IMezzo[]

    aggiungiMezzo(mezzo: IMezzo): void
}
