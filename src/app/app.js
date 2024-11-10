"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("../models/classes");
// rappresentazione dei mezzi
var mezzo1 = new classes_1.Mezzo('Bicicletta', 1, 'disponibile');
var mezzo2 = new classes_1.Mezzo('Bicicletta', 2, 'disponibile');
var mezzo3 = new classes_1.Mezzo('Bicicletta', 3, 'disponibile');
var mezzo4 = new classes_1.Mezzo('Bicicletta', 4, 'disponibile');
var mezzo5 = new classes_1.Mezzo('scooter', 5, 'disponibile');
var mezzo6 = new classes_1.Mezzo('scooter', 6, 'disponibile');
var mezzo7 = new classes_1.Mezzo('scooter', 7, 'disponibile');
var mezzo8 = new classes_1.Mezzo('monopattino elettrico', 8, 'disponibile');
var mezzo9 = new classes_1.Mezzo('monopattino elettrico', 9, 'disponibile');
var mezzo10 = new classes_1.Mezzo('monopattino elettrico', 10, 'disponibile');
// rappresentazione degli utenti
var utente1 = new classes_1.Utente('Vincenzo', 'Nurcato', 'PayPal');
var utente2 = new classes_1.Utente('John', 'Ross', '');
var utente3 = new classes_1.Utente('Menphis', 'Van Vohn', 'PayPal');
// rappresentazione delle città e dei mezzi disponibili per ognuna di esse
var città1 = new classes_1.Città('Roma', [mezzo1, mezzo2, mezzo4, mezzo5]);
var città2 = new classes_1.Città('Londra', [mezzo1, mezzo2, mezzo8, mezzo9, mezzo10]);
var città3 = new classes_1.Città('Amsterdam', [
    mezzo1,
    mezzo2,
    mezzo3,
    mezzo4,
    mezzo8,
    mezzo9,
    mezzo10,
]);
// fase di prenotazione dell'utente1
// aggiunta di un nuovo mezzo nella città
città1.aggiungiMezzo(mezzo10);
// l'utente visualizza i mezzi disponibili nella sua città
città1.visualizzaMezziDisponibili();
// l'utente prenota un mezzo
utente1.prenotaMezzo(mezzo10);
// il mezzo viene assegnato dopo aver fatto la prenotazione
mezzo10.assegnaUtente(utente1);
//
//
//
// fase di prenotazione dell'utente2 che prova prenotare senza inserire tutti i dati necessari
// l'utente2 visualizza i mezzi disponibili nella sua città
città2.visualizzaMezziDisponibili();
// l'utente2 prova a prenotare un mezzo
utente2.prenotaMezzo(mezzo2);
// viene visualizzato un messaggio di errore e il mezzo non viene assegnato
//
//
//
// fase di prenotazione dell'utente3 che si trova nella terza città
// l'utente3 visualizza i mezzi disponibili nella sua città
città3.visualizzaMezziDisponibili();
// l'utente3 prenota un mezzo
utente3.prenotaMezzo(mezzo8);
// assegnazione del mezzo all'utente 3
mezzo8.assegnaUtente(utente3);
