class Somador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 + numero2;
        };
    }
}
class Subtrator {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 - numero2;
        };
    }
}
class Multiplicador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 * numero2;
        };
    }
}
class Divisor {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 / numero2;
        };
    }
}
export { Somador, Subtrator, Multiplicador, Divisor };
