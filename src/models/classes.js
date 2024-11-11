"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Città = exports.Utente = exports.Mezzo = void 0;
var enum_1 = require("../types/enum");
// classi
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === enum_1.StatoMezzo.DISPONIBILE) {
            this.stato = enum_1.StatoMezzo.IN_USO;
            console.log("Utente: ".concat(utente.nome, " ").concat(utente.cognome, "\nmezzo: ").concat(this.tipo, " con ID ").concat(this.ID, "\nstato del mezzo: ").concat(this.stato));
            return;
        }
    };
    return Mezzo;
}());
exports.Mezzo = Mezzo;
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
        if (mezzo.stato === enum_1.StatoMezzo.DISPONIBILE) {
            console.log("la prenotazione del mezzo \u00E8 statta effettuata con successo.\nIl metodo di pagamento utilizzato \u00E8: ".concat(this.metodoDiPagamentoPreferito));
        }
        else {
            console.log("il mezzo che vuoi prenotare con ID:".concat(mezzo.ID, " \u00E8 attualmente ").concat(mezzo.stato));
        }
    };
    return Utente;
}());
exports.Utente = Utente;
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
            if (mezzo.stato === enum_1.StatoMezzo.DISPONIBILE) {
                console.log("- ".concat(mezzo.tipo, " con ID ").concat(mezzo.ID));
            }
        });
    };
    return Città;
}());
exports.Città = Città;
