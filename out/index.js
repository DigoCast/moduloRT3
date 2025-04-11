"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrator = exports.Somador = void 0;
var Somador = /** @class */ (function () {
    function Somador() {
        this.calcular = function (numero1, numero2) {
            return numero1 + numero2;
        };
    }
    return Somador;
}());
exports.Somador = Somador;
var Subtrator = /** @class */ (function () {
    function Subtrator() {
        this.calcular = function (numero1, numero2) {
            return numero1 - numero2;
        };
    }
    return Subtrator;
}());
exports.Subtrator = Subtrator;
var Multiplicador = /** @class */ (function () {
    function Multiplicador() {
        this.calcular = function (numero1, numero2) {
            return numero1 * numero2;
        };
    }
    return Multiplicador;
}());
exports.Multiplicador = Multiplicador;
var Divisor = /** @class */ (function () {
    function Divisor() {
        this.calcular = function (numero1, numero2) {
            return numero1 / numero2;
        };
    }
    return Divisor;
}());
exports.Divisor = Divisor;
