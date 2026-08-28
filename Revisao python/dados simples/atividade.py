#Tipos de Estruturas de dados
import random

numeros = []

for i in range(10):
    numeros.append(random.randint(0, 100))

print(numeros)

def questaoUm(numeros):
    maior = numeros[0]
    for i in numeros:
        if maior < i:
            maior = i

    menor = numeros[0]
    for i in numeros:
        if menor > i:
            menor = i

    soma = 0
    media = 0
    for i in numeros:
        soma +=i

    media = soma/10
    print("\nQUESTÃO 1 - TIPOS E ESTRUTURAS DE DADOS\n")
    return (
       f"Maior valor: {maior}\n"
       f"Menor valor: {menor}\n"
       f"Média: {media}"
    )

print(questaoUm(numeros))

texto = "Olá, mundo!"

def manStrings(texto):
    contador = 0

    for letra in texto:
        if letra in "aeiouAEIOU":
            contador +=1

    textoInvertido = texto[::-1]

    if texto == textoInvertido:
        numPalindromo +=1
        palindromos.append(texto)
    numPalindromo = 0
    palindromos = []

    #if 
    print("\nQUESTÃO 2 - MANIPULAÇÃO DE STRINGS\n")
    return (
        f"Número de Vogais: {contador}\n"
        f"Texto invertido: {textoInvertido}\n"
        f"Número de Palíndromos: {numPalindromo} - {palindromos}"
    )

print(manStrings(texto))


