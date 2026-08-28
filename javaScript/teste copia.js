function duracao(){
    segundos = 3665
    restanteSegundos = segundos % 60
    minutos = segundos / 60
    horas = minutos / 60
    restanteHoras = minutos % 60

    console.log(`${horas.toFixed(0)}h ${restanteHoras.toFixed(0)}min ${restanteSegundos}s`)
}

duracao()

function conversaoTemperatura(celsius){
    F = (celsius * 1.8) + 32
    K = celsius + 273.75
    console.log(`°C em Fahrenheit é: ${F} e em Kelvin é: ${K}`)
}

conversaoTemperatura(1)

function notaFiscal(preco, quantidade){
    precoProduto = preco
    subTotal = precoProduto * quantidade
    if(subTotal >= 100.00){
        subTotal = subTotal - 0.05
    }
    else if(subTotal >= 300.00){
        subTotal = subTotal - 0.1
    }
    //falta o template literal para mostrar o resumo
}