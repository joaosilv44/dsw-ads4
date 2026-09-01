function duracao(){
    segundos = 3665
    restanteSegundos = segundos % 60
    minutos = segundos / 60
    horas = minutos / 60
    restanteHoras = minutos % 60

    console.log(`${horas.toFixed(0)}h ${restanteHoras.toFixed(0)}min ${restanteSegundos}s`)
    return
}

duracao()

function conversaoTemperatura(celsius){
    F = (celsius * 1.8) + 32
    K = celsius + 273.75
    console.log(`°C em Fahrenheit é: ${F} e em Kelvin é: ${K}`)
    return
}

conversaoTemperatura(1)

function notaFiscal(preco, quantidade){
    subTotal = preco * quantidade
    if(subTotal >= 100.00){
        subTotal = subTotal - 0.05
    }
    else if(subTotal >= 300.00){
        subTotal = subTotal - 0.1
    }
    console.log(`Produto XXXX\nPreço Unitário: ${preco}\nQuantiade: ${quantidade}\nTotal: ${subTotal}`)
    return
}

function verificarSituacao(anoNascimento){
    const anoAtual = 2026
    const idade = anoAtual - anoNascimento;

    const podeVotar = idade >= 16
    const votoObrigatorio = idade >= 18
    const isentoMilitar = idade < 18
    
    return{
    idade,
    podeVotar,
    votoObrigatorio,
    isentoMilitar
    }
}

function calculadora(valor1, valor2, operador){
    switch(operador){
        case "+":
            return valor1 + valor2
            break;
        case "-":
            return valor1 - valor2
            break;
        case "*":
            if(valor2 === 0){
                console.log("Não é inteligente fazer divisões por ZERO!")
            }
            else{
                return valor1 * valor2
                break;
            }
        case "/":
            return valor1 / valor2
            break;
        default:
            console.log("Operador Inválido! Tente + | - | * | / ")
    }
}

function calculoIMC(peso, altura){
    const imc = peso / (altura * altura)

    if(imc < 18.5){
        console.log("Você está abaixo do peso!")
    }
    else if(imc <= 24.9){
        console.log("Seu peso é considerado normal!")
    }
    else if(imc <= 29.9){
        console.log("Você está com sobrepeso!")
    }
    else if(imc <= 34.9){
        console.log("Obesidade Grau I")
    }
    else if(imc <= 39.9){
        console.log("Obesidade Grau II")
    }
    else if(imc >= 40){
        console.log("Obesidade Grau III")
    }
    return
}

function pedraPapelTesoura(jogador1, jogador2){
    j1 = jogador1.lower
    j2 = jogador2.lower

    if(j1 === j2){
        return "Empate"
    }

    venceDe = {
        "pedra": "tesoura",
        "papel": "pedra",
        "tesoura": "papel"
    }

    if(venceDe.get(j1) == j2){
        return "Jogador 1 venceu!"
    }
    else if(venceDe.get(j2) == j1){
        return "Jogador 2 venceu!"
    }
    else{
        return "Jogada inválida!"
    }
    
}

function palindromo(string){
    string.lower
    string.replace()

    array = string.split()
    reverso = array.reverse()
    reverso.join('')

    if(string === reverso){
        return "É palíndromo!"
    }
    else{
        return "Não é palíndromo!"
    }
}