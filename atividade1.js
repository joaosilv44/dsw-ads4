// --- 1. DURAÇÃO ---
function duracao() {
  let segundos = 3665;
  let restanteSegundos = segundos % 60;
  let totalMinutos = Math.floor(segundos / 60);
  let minutos = totalMinutos % 60;
  let horas = Math.floor(totalMinutos / 60);

  console.log(`${horas}h ${minutos}min ${restanteSegundos}s`);
}

console.log("--- TESTE DURAÇÃO ---");
duracao();


// --- 2. CONVERSÃO TEMPERATURA ---
function conversaoTemperatura(celsius) {
  let F = celsius * 1.8 + 32;
  let K = celsius + 273.15;
  console.log(`°C em Fahrenheit é: ${F} e em Kelvin é: ${K}`);
}

console.log("\n--- TESTE TEMPERATURA ---");
conversaoTemperatura(1);


// --- 3. NOTA FISCAL ---
function notaFiscal(preco, quantidade) {
  let subTotal = preco * quantidade;

  if (subTotal >= 300.0) {
    subTotal = subTotal * 0.9; // 10% de desconto
  } else if (subTotal >= 100.0) {
    subTotal = subTotal * 0.95; // 5% de desconto
  }

  console.log(
    `Produto XXXX\nPreço Unitário: R$ ${preco}\nQuantidade: ${quantidade}\nTotal: R$ ${subTotal.toFixed(2)}`
  );
}

console.log("\n--- TESTE NOTA FISCAL ---");
notaFiscal(50, 3); // Deve aplicar 5% de desconto


// --- 4. VERIFICAR SITUAÇÃO ---
function verificarSituacao(anoNascimento) {
  const anoAtual = 2026;
  const idade = anoAtual - anoNascimento;

  const podeVotar = idade >= 16;
  const votoObrigatorio = idade >= 18;
  const isentoMilitar = idade < 18;

  return {
    idade,
    podeVotar,
    votoObrigatorio,
    isentoMilitar,
  };
}

console.log("\n--- TESTE SITUAÇÃO ELEITORAL/MILITAR ---");
console.log(verificarSituacao(2008));


// --- 5. CALCULADORA ---
function calculadora(valor1, valor2, operador) {
  switch (operador) {
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    case "*":
      return valor1 * valor2;
    case "/":
      if (valor2 === 0) {
        console.log("Não é inteligente fazer divisões por ZERO!");
        return null;
      } else {
        return valor1 / valor2;
      }
    default:
      console.log("Operador Inválido! Tente + | - | * | / ");
      return null;
  }
}

console.log("\n--- TESTE CALCULADORA ---");
console.log("10 / 2 =", calculadora(10, 2, "/"));
calculadora(10, 0, "/");


// --- 6. CÁLCULO IMC ---
function calculoIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log(`IMC ${imc.toFixed(1)}: Você está abaixo do peso!`);
  } else if (imc <= 24.9) {
    console.log(`IMC ${imc.toFixed(1)}: Seu peso é considerado normal!`);
  } else if (imc <= 29.9) {
    console.log(`IMC ${imc.toFixed(1)}: Você está com sobrepeso!`);
  } else if (imc <= 34.9) {
    console.log(`IMC ${imc.toFixed(1)}: Obesidade Grau I`);
  } else if (imc <= 39.9) {
    console.log(`IMC ${imc.toFixed(1)}: Obesidade Grau II`);
  } else {
    console.log(`IMC ${imc.toFixed(1)}: Obesidade Grau III`);
  }
}

console.log("\n--- TESTE IMC ---");
calculoIMC(70, 1.75);


// --- 7. PEDRA, PAPEL, TESOURA ---
function pedraPapelTesoura(jogador1, jogador2) {
  let j1 = jogador1.toLowerCase();
  let j2 = jogador2.toLowerCase();

  if (j1 === j2) {
    return "Empate";
  }

  const venceDe = {
    pedra: "tesoura",
    papel: "pedra",
    tesoura: "papel",
  };

  if (venceDe[j1] === j2) {
    return "Jogador 1 venceu!";
  } else if (venceDe[j2] === j1) {
    return "Jogador 2 venceu!";
  } else {
    return "Jogada inválida!";
  }
}

console.log("\n--- TESTE PEDRA, PAPEL E TESOURA ---");
console.log(pedraPapelTesoura("Pedra", "Tesoura"));


// --- 8. PALÍNDROMO ---
function palindromo(texto) {
  let limpo = texto.toLowerCase().replace(/\s+/g, "");
  let reverso = limpo.split("").reverse().join("");

  if (limpo === reverso) {
    return "É palíndromo!";
  } else {
    return "Não é palíndromo!";
  }
}

console.log("\n--- TESTE PALÍNDROMO ---");
console.log("arara:", palindromo("arara"));
console.log("javascript:", palindromo("javascript"));


// --- 9. NOTAS ---
function analisarNotas(listaNotas) {
  if (listaNotas.length === 0) return;

  let maior = listaNotas[0];
  let menor = listaNotas[0];
  let soma = 0;

  for (let i = 0; i < listaNotas.length; i++) {
    if (listaNotas[i] > maior) {
      maior = listaNotas[i];
    }
    if (listaNotas[i] < menor) {
      menor = listaNotas[i];
    }
    soma += listaNotas[i];
  }

  let media = soma / listaNotas.length;
  console.log(
    `A maior nota foi: ${maior}, a menor foi: ${menor} e a média foi: ${media.toFixed(1)}`
  );
}

console.log("\n--- TESTE NOTAS ---");
analisarNotas([7.5, 9.0, 5.0, 8.5]);


// --- 10. FIBONACCI ---
function fibonacci(n) {
  if (n < 0) return "O número deve ser maior ou igual a 0";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= n; i++) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

console.log("\n--- TESTE FIBONACCI ---");
console.log("Fibonacci no índice 7:", fibonacci(7));


// --- 11. VALIDAR SENHA ---
function validarSenha(senha) {
  let erros = [];

  if (senha.length < 8) {
    erros.push("Mínimo de 8 caracteres");
  }

  if (senha === senha.toLowerCase()) {
    erros.push("Ao menos uma letra maiúscula");
  }

  if (!/\d/.test(senha)) {
    erros.push("Ao menos um número");
  }

  return erros;
}

console.log("\n--- TESTE VALIDAR SENHA ---");
console.log("Senha 'teste':", validarSenha("teste"));
console.log("Senha 'Senha123':", validarSenha("Senha123"));


// --- 12. ESTOQUE (FUNÇÕES) ---
let estoque = [
  { nome: "Camiseta", preco: 50, quantidade: 10 },
  { nome: "Calça", preco: 120, quantidade: 3 },
  { nome: "Meia", preco: 15, quantidade: 2 },
];

function calcularValorTotal(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].preco * lista[i].quantidade;
  }
  return total;
}

function encontrarMaisCaro(lista) {
  let maisCaro = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i].preco > maisCaro.preco) {
      maisCaro = lista[i];
    }
  }
  return maisCaro;
}

function listarEstoqueBaixo(lista, minimo) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].quantidade < minimo) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}

console.log("\n--- TESTE ESTOQUE ---");
console.log("Valor total do estoque:", calcularValorTotal(estoque));
console.log("Produto mais caro:", encontrarMaisCaro(estoque));
console.log("Itens abaixo de 5 unidades:", listarEstoqueBaixo(estoque, 5));


// --- 13. AGENDA E REMOVER REPETIDOS ---
let agenda = [
  { nome: "Ana", telefone: "11999999999", categoria: "Amigos" },
  { nome: "Carlos", telefone: "11888888888", categoria: "Trabalho" },
];

function adicionarContato(nome, telefone, categoria) {
  agenda.push({ nome: nome, telefone: telefone, categoria: categoria });
}

function removerContato(nome) {
  let novaAgenda = [];
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].nome !== nome) {
      novaAgenda.push(agenda[i]);
    }
  }
  agenda = novaAgenda;
}

function listarPorCategoria(categoria) {
  let filtrados = [];
  for (let i = 0; i < agenda.length; i++) {
    if (agenda[i].categoria === categoria) {
      filtrados.push(agenda[i]);
    }
  }
  return filtrados;
}

function removerRepetidos(array) {
  let unicos = [];
  for (let i = 0; i < array.length; i++) {
    if (!unicos.includes(array[i])) {
      unicos.push(array[i]);
    }
  }
  return unicos;
}

console.log("\n--- TESTE AGENDA & VALORES ÚNICOS ---");
adicionarContato("Beatriz", "11777777777", "Amigos");
console.log("Contatos da categoria Amigos:", listarPorCategoria("Amigos"));
removerContato("Carlos");
console.log("Agenda após remover Carlos:", agenda);

let numerosRepetidos = [1, 2, 2, 3, 4, 4, 5];
console.log("Valores únicos:", removerRepetidos(numerosRepetidos));


// --- 14. CLASSE PRODUTO ---
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  aplicarDesconto(porcentagem) {
    let valorDesconto = (this.preco * porcentagem) / 100;
    this.preco = this.preco - valorDesconto;
  }

  estaDisponivel() {
    return this.quantidade > 0;
  }
}

console.log("\n--- TESTE CLASSE PRODUTO ---");
let prod1 = new Produto("Teclado", 150, 10);
let prod2 = new Produto("Mouse", 80, 0);

console.log("Teclado disponível?", prod1.estaDisponivel());
console.log("Mouse disponível?", prod2.estaDisponivel());

prod1.aplicarDesconto(10);
console.log("Preço do Teclado com 10% de desconto: R$", prod1.preco);


// --- 15. CLASSE CONTA BANCÁRIA ---
class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      console.log("Saldo insuficiente para o saque!");
      return false;
    }
  }

  extrato() {
    return "Titular: " + this.titular + " | Saldo atual: R$ " + this.saldo;
  }
}

console.log("\n--- TESTE CONTA BANCÁRIA ---");
let conta1 = new ContaBancaria("João", 1000);
conta1.depositar(200);
conta1.sacar(1500); // Excede o saldo
conta1.sacar(300);
console.log(conta1.extrato());


// --- 16. CLASSE RETÂNGULO ---
class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }
}

console.log("\n--- TESTE RETÂNGULO ---");
let rect = new Retangulo(5, 10);
console.log("Área:", rect.calcularArea());
console.log("Perímetro:", rect.calcularPerimetro());


// --- 17. CLASSE AGENDA --
class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionar(nome, telefone, categoria) {
    this.contatos.push({ nome: nome, telefone: telefone, categoria: categoria });
  }

  remover(nome) {
    let novaLista = [];
    for (let i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i].nome !== nome) {
        novaLista.push(this.contatos[i]);
      }
    }
    this.contatos = novaLista;
  }

  listarPorCategoria(categoria) {
    let resultado = [];
    for (let i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i].categoria === categoria) {
        resultado.push(this.contatos[i]);
      }
    }
    return resultado;
  }
}

console.log("\n--- TESTE CLASSE AGENDA ---");
let minhaAgenda = new Agenda();
minhaAgenda.adicionar("Maria", "11911112222", "Família");
minhaAgenda.adicionar("Pedro", "11933334444", "Trabalho");

console.log("Família:", minhaAgenda.listarPorCategoria("Família"));
minhaAgenda.remover("Pedro");
console.log("Lista completa após remoção:", minhaAgenda.contatos);