import { IMezzo, IUtente, ICittà } from '../types/interface'

export class Mezzo implements IMezzo {
    tipo: string
    ID: number
    stato: string

    constructor(tipo: string, ID: number, stato: string) {
        this.tipo = tipo
        this.ID = ID
        this.stato = stato
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso'
            console.log(
                `mezzo: ${this.tipo} con ID ${this.ID} è stato assegnato a ${utente.nome} ${utente.cognome}`
            )
            console.log(`stato del mezzo: ${this.stato}`)
            return
        }
    }
}

export class Utente implements IUtente {
    nome: string
    cognome: string
    metodoDiPagamentoPreferito: string

    constructor(
        nome: string,
        cognome: string,
        metodoDiPagamentoPreferito: string
    ) {
        this.nome = nome
        this.cognome = cognome
        this.metodoDiPagamentoPreferito = metodoDiPagamentoPreferito
    }

    prenotaMezzo(mezzo: IMezzo): void {
        if (!this.nome || !this.cognome || !this.metodoDiPagamentoPreferito) {
            console.log(
                'Impossibile effettuare la prenotazione. Si prega di inserire tutti i dati richiesti.'
            )
            return
        }

        if (mezzo.stato === 'disponibile') {
            console.log(`la prenotazione del mezzo è statta effettuata con successo.
Il metodo di pagamento utilizzato è: ${this.metodoDiPagamentoPreferito}`)
        } else {
            console.log(
                `il mezzo che vuoi prenotare con ID:${mezzo.ID} è attualmente in uso`
            )
        }
    }
}

export class Città implements ICittà {
    nomeCittà: string
    elencoMezziDisponibili: IMezzo[]

    constructor(nomeCittà: string, elencoMezziDisponibili: IMezzo[]) {
        this.nomeCittà = nomeCittà
        this.elencoMezziDisponibili = elencoMezziDisponibili
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.elencoMezziDisponibili.push(mezzo)
        console.log(`mezzo aggiunto a ${this.nomeCittà}: ${mezzo.tipo}`)
    }

    visualizzaMezziDisponibili(): void {
        console.log(`Mezzi disponibili a ${this.nomeCittà}:`)
        this.elencoMezziDisponibili.forEach((mezzo) => {
            if (mezzo.stato === 'disponibile') {
                console.log(`- ${mezzo.tipo} con ID ${mezzo.ID}`)
            }
        })
    }
}
