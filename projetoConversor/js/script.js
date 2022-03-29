class Moedas {
    dolar;
    real;
    euro;
    libra;

    constructor() {
        this.dolar = 4.76;
        this.euro = 5.28;
        this.libra = 6.23;
    }

    converterRealDolar() {
        this.real = document.getElementById("realDolar").value;

        const valorEmDolar = parseFloat(this.real) / this.dolar;

        const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoRealDolar").innerText = `${valorEmReal} é igual a ${valorConvertido}`;
    }

    converterRealEuro() {
        this.real = document.getElementById("realEuro").value

        const valorEmEuro = parseFloat(this.real) / this.euro;

        document.getElementById("resultadoRealEuro").innerText = valorEmEuro
    }

    converterRealLibra() {
        this.real = document.getElementById("realLibra").value;

        const valorEmLibra = parseFloat(this.real) / this.libra;

        document.getElementById("resultadoRealLibra").innerText = valorEmLibra;
    }
}

const conversao = new Moedas();
