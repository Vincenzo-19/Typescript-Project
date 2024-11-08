// classe Mezzo che implementa l'interfaccia IMezzo
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log("mezzo: ".concat(this.tipo, " con ID ").concat(this.ID, " e\u0300 stato assegnato a ").concat(utente.nome, " ").concat(utente.cognome));
            console.log("stato del mezzo: ".concat(this.stato));
            return;
        }
    };
    return Mezzo;
}());
// classe Utente che implementa l'interfaccia IUtente
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, metodoDiPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.metodoDiPagamentoPreferito = metodoDiPagamentoPreferito;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (!this.nome || !this.cognome || !this.metodoDiPagamentoPreferito) {
            console.log('Impossibile effettuare la prenotazione. Si prega di inserire tutti i dati richiesti.');
            return;
        }
        if (mezzo.stato === 'disponibile') {
            console.log("la prenotazione del mezzo \u00E8 statta effettuata con successo.\nIl metodo di pagamento utilizzato \u00E8: ".concat(this.metodoDiPagamentoPreferito));
        }
        else {
            console.log("il mezzo che vuoi prenotare con ID:".concat(mezzo.ID, " \u00E8 attualmente in uso"));
        }
    };
    return Utente;
}());
// classe Città che implementa l'interfaccia ICittà
var Città = /** @class */ (function () {
    function Città(nomeCittà, elencoMezziDisponibili) {
        this.nomeCittà = nomeCittà;
        this.elencoMezziDisponibili = elencoMezziDisponibili;
    }
    Città.prototype.aggiungiMezzo = function (mezzo) {
        this.elencoMezziDisponibili.push(mezzo);
        console.log("mezzo aggiunto a ".concat(this.nomeCittà, ": ").concat(mezzo.tipo));
    };
    Città.prototype.visualizzaMezziDisponibili = function () {
        console.log("Mezzi disponibili a ".concat(this.nomeCittà, ":"));
        this.elencoMezziDisponibili.forEach(function (mezzo) {
            if (mezzo.stato === 'disponibile') {
                console.log("- ".concat(mezzo.tipo, " con ID ").concat(mezzo.ID));
            }
        });
    };
    return Città;
}());
// rappresentazione dei mezzi
var mezzo1 = new Mezzo('Bicicletta', 1, 'disponibile');
var mezzo2 = new Mezzo('Bicicletta', 2, 'disponibile');
var mezzo3 = new Mezzo('Bicicletta', 3, 'disponibile');
var mezzo4 = new Mezzo('Bicicletta', 4, 'disponibile');
var mezzo5 = new Mezzo('scooter', 5, 'disponibile');
var mezzo6 = new Mezzo('scooter', 6, 'disponibile');
var mezzo7 = new Mezzo('scooter', 7, 'disponibile');
var mezzo8 = new Mezzo('monopattino elettrico', 8, 'disponibile');
var mezzo9 = new Mezzo('monopattino elettrico', 9, 'disponibile');
var mezzo10 = new Mezzo('monopattino elettrico', 10, 'disponibile');
// rappresentazione degli utenti
var utente1 = new Utente('Vincenzo', 'Nurcato', 'PayPal');
var utente2 = new Utente('John', 'Ross', '');
var utente3 = new Utente('Menphis', 'Van Vohn', 'PayPal');
// rappresentazione delle città e dei mezzi disponibili per ognuna di esse
var città1 = new Città('Roma', [mezzo1, mezzo2, mezzo4, mezzo5]);
var città2 = new Città('Londra', [mezzo1, mezzo2, mezzo8, mezzo9, mezzo10]);
var città3 = new Città('Amsterdam', [
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
