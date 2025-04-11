class Somador{
    public calcular = (numero1: number, numero2: number) =>{
        return numero1 + numero2
    }
}

class Subtrator{
    public calcular = (numero1 : number, numero2 : number) => {
        return numero1 - numero2
    } 
}

class Multiplicador{
    public calcular = (numero1: number, numero2: number) => {
        return numero1 * numero2 
    }
}

class Divisor{
    public calcular = (numero1: number, numero2 : number) => {
        return numero1 / numero2
    }
}

export {Somador, Subtrator, Multiplicador, Divisor}