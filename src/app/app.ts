import { Mezzo, Città, Utente } from '../models/classes'

// rappresentazione dei mezzi
let mezzo1 = new Mezzo('Bicicletta', 1, 'disponibile')
let mezzo2 = new Mezzo('Bicicletta', 2, 'disponibile')
let mezzo3 = new Mezzo('Bicicletta', 3, 'disponibile')
let mezzo4 = new Mezzo('Bicicletta', 4, 'disponibile')
let mezzo5 = new Mezzo('scooter', 5, 'disponibile')
let mezzo6 = new Mezzo('scooter', 6, 'disponibile')
let mezzo7 = new Mezzo('scooter', 7, 'disponibile')
let mezzo8 = new Mezzo('monopattino elettrico', 8, 'disponibile')
let mezzo9 = new Mezzo('monopattino elettrico', 9, 'disponibile')
let mezzo10 = new Mezzo('monopattino elettrico', 10, 'disponibile')

// rappresentazione degli utenti
let utente1 = new Utente('Vincenzo', 'Nurcato', 'PayPal')
let utente2 = new Utente('John', 'Ross', '')
let utente3 = new Utente('Menphis', 'Van Vohn', 'PayPal')

// rappresentazione delle città e dei mezzi disponibili per ognuna di esse
let città1 = new Città('Roma', [mezzo1, mezzo2, mezzo4, mezzo5])
let città2 = new Città('Londra', [mezzo1, mezzo2, mezzo8, mezzo9, mezzo10])
let città3 = new Città('Amsterdam', [
    mezzo1,
    mezzo2,
    mezzo3,
    mezzo4,
    mezzo8,
    mezzo9,
    mezzo10,
])

// fase di prenotazione dell'utente1

// aggiunta di un nuovo mezzo nella città
città1.aggiungiMezzo(mezzo10)

// l'utente visualizza i mezzi disponibili nella sua città
città1.visualizzaMezziDisponibili()

// l'utente prenota un mezzo
utente1.prenotaMezzo(mezzo10)

// il mezzo viene assegnato dopo aver fatto la prenotazione
mezzo10.assegnaUtente(utente1)

//
//
//

// fase di prenotazione dell'utente2 che prova prenotare senza inserire tutti i dati necessari

// l'utente2 visualizza i mezzi disponibili nella sua città
città2.visualizzaMezziDisponibili()

// l'utente2 prova a prenotare un mezzo
utente2.prenotaMezzo(mezzo2)

// viene visualizzato un messaggio di errore e il mezzo non viene assegnato

//
//
//

// fase di prenotazione dell'utente3 che si trova nella terza città

// l'utente3 visualizza i mezzi disponibili nella sua città
città3.visualizzaMezziDisponibili()

// l'utente3 prenota un mezzo
utente3.prenotaMezzo(mezzo8)

// assegnazione del mezzo all'utente 3
mezzo8.assegnaUtente(utente3)
