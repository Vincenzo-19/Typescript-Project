"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../models/classes");
var enum_1 = require("../types/enum");
// rappresentazione dei mezzi
var MEZZO1 = new classes_1.Mezzo('Bicicletta', 1, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO2 = new classes_1.Mezzo('Bicicletta', 2, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO3 = new classes_1.Mezzo('Bicicletta', 3, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO4 = new classes_1.Mezzo('Bicicletta', 4, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO5 = new classes_1.Mezzo('scooter', 5, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO6 = new classes_1.Mezzo('scooter', 6, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO7 = new classes_1.Mezzo('scooter', 7, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO8 = new classes_1.Mezzo('monopattino elettrico', 8, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO9 = new classes_1.Mezzo('monopattino elettrico', 9, enum_1.StatoMezzo.DISPONIBILE);
var MEZZO10 = new classes_1.Mezzo('monopattino elettrico', 10, enum_1.StatoMezzo.DISPONIBILE);
// rappresentazione degli utenti
var utente1 = new classes_1.Utente('Vincenzo', 'Nurcato', 'PayPal');
var utente2 = new classes_1.Utente('John', 'Ross', '');
var utente3 = new classes_1.Utente('Menphis', 'Van Vohn', 'PayPal');
// rappresentazione delle città e dei mezzi disponibili per ognuna di esse
var città1 = new classes_1.Città('Roma', [MEZZO1, MEZZO2, MEZZO4, MEZZO5]);
var città2 = new classes_1.Città('Londra', [MEZZO1, MEZZO2, MEZZO8, MEZZO9, MEZZO10]);
var città3 = new classes_1.Città('Amsterdam', [
    MEZZO1,
    MEZZO2,
    MEZZO3,
    MEZZO4,
    MEZZO8,
    MEZZO9,
    MEZZO10,
]);
// fase di prenotazione dell'utente1
// aggiunta di un nuovo mezzo nella città
città1.aggiungiMezzo(MEZZO10);
// l'utente visualizza i mezzi disponibili nella sua città
città1.visualizzaMezziDisponibili();
// l'utente prenota un mezzo
utente1.prenotaMezzo(MEZZO10);
// il mezzo viene assegnato dopo aver fatto la prenotazione
MEZZO10.assegnaUtente(utente1);
// //
// //
// //
// fase di prenotazione dell'utente2 che prova prenotare senza inserire tutti i dati necessari
// l'utente2 visualizza i mezzi disponibili nella sua città
città2.visualizzaMezziDisponibili();
// l'utente2 prova a prenotare un mezzo
utente2.prenotaMezzo(MEZZO2);
// viene visualizzato un messaggio di errore e il mezzo non viene assegnato
//
//
//
// fase di prenotazione dell'utente3 che si trova nella terza città
// l'utente3 visualizza i mezzi disponibili nella sua città
città3.visualizzaMezziDisponibili();
// l'utente3 prenota un mezzo
utente3.prenotaMezzo(MEZZO8);
// assegnazione del mezzo all'utente 3
MEZZO8.assegnaUtente(utente3);
