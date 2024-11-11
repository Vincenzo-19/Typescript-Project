import { Mezzo, Città, Utente } from '../models/classes'
import { StatoMezzo } from '../types/enum'

// rappresentazione dei mezzi
const MEZZO1 = new Mezzo('Bicicletta', 1, StatoMezzo.DISPONIBILE)
const MEZZO2 = new Mezzo('Bicicletta', 2, StatoMezzo.DISPONIBILE)
const MEZZO3 = new Mezzo('Bicicletta', 3, StatoMezzo.DISPONIBILE)
const MEZZO4 = new Mezzo('Bicicletta', 4, StatoMezzo.DISPONIBILE)
const MEZZO5 = new Mezzo('scooter', 5, StatoMezzo.DISPONIBILE)
const MEZZO6 = new Mezzo('scooter', 6, StatoMezzo.DISPONIBILE)
const MEZZO7 = new Mezzo('scooter', 7, StatoMezzo.DISPONIBILE)
const MEZZO8 = new Mezzo('monopattino elettrico', 8, StatoMezzo.DISPONIBILE)
const MEZZO9 = new Mezzo('monopattino elettrico', 9, StatoMezzo.DISPONIBILE)
const MEZZO10 = new Mezzo('monopattino elettrico', 10, StatoMezzo.DISPONIBILE)

// rappresentazione degli utenti
let utente1 = new Utente('Vincenzo', 'Nurcato', 'PayPal')
let utente2 = new Utente('John', 'Ross', '')
let utente3 = new Utente('Menphis', 'Van Vohn', 'PayPal')

// rappresentazione delle città e dei mezzi disponibili per ognuna di esse
let città1 = new Città('Roma', [MEZZO1, MEZZO2, MEZZO4, MEZZO5])
let città2 = new Città('Londra', [MEZZO1, MEZZO2, MEZZO8, MEZZO9, MEZZO10])
let città3 = new Città('Amsterdam', [
    MEZZO1,
    MEZZO2,
    MEZZO3,
    MEZZO4,
    MEZZO8,
    MEZZO9,
    MEZZO10,
])

// fase di prenotazione dell'utente1

// aggiunta di un nuovo mezzo nella città
città1.aggiungiMezzo(MEZZO10)

// l'utente visualizza i mezzi disponibili nella sua città
città1.visualizzaMezziDisponibili()

// l'utente prenota un mezzo
utente1.prenotaMezzo(MEZZO10)

// il mezzo viene assegnato dopo aver fatto la prenotazione
MEZZO10.assegnaUtente(utente1)

// //
// //
// //

// fase di prenotazione dell'utente2 che prova prenotare senza inserire tutti i dati necessari

// l'utente2 visualizza i mezzi disponibili nella sua città
città2.visualizzaMezziDisponibili()

// l'utente2 prova a prenotare un mezzo
utente2.prenotaMezzo(MEZZO2)

// viene visualizzato un messaggio di errore e il mezzo non viene assegnato

//
//
//

// fase di prenotazione dell'utente3 che si trova nella terza città

// l'utente3 visualizza i mezzi disponibili nella sua città
città3.visualizzaMezziDisponibili()

// l'utente3 prenota un mezzo
utente3.prenotaMezzo(MEZZO8)

// assegnazione del mezzo all'utente 3
MEZZO8.assegnaUtente(utente3)
