/* Número: 56922, Nome: João Pedro Leal, TP: 25 */
/* ------------------------------------------------------------------------- */
/* Introdução às Tecnologias Web - Departamento de Informática - FCUL.       */
/* ------------------------------------------------------------------------- */

// Impede alguns erros fáceis de cometer.
"use strict";

/**
 * Primeira função a ser executada após o browser completar o carregamento
 * de toda a informação presente no documento HTML. Ver window.onload na
 * última linha deste script.
 */
function principal() {
  // Para ver a mensagem na consola, deve fazer Inspect da página HTML no
  // browser e escolher o separador de Console.
  console.log("Início da execução de código");

  // Procura na árvore DOM (representação em memória do documento HTML,
  // acessível pela variável global document) um elemento com identificador
  // "mensagem" (getElementById()), e substitui o texto desse elemento
  // (innerHTML) pela mensagem em baixo. Como consequência, o browser mostra
  // essa mensagem na janela do documento e o utilizador nem se apercebe que
  // ela não estava originalmente no ficheiro HTML.
  document.getElementById("mensagem").innerHTML =
    "Esta mensagem foi colocada aqui por execução de código JavaScript.";
  document.getElementById("resultado").innerHTML =
    processaDoisNumeros();
}

/* ------------------------------------------------------------------------- */

/**
 * Devolve o maior de dois números.
 * @param {number} x O primeiro número.
 * @param {number} y O segundo número.
 * @returns {number} O maior dos dois números.
 */
// Colocar aqui o código da função maiorDeDoisNumeros.

/* ------------------------------------------------------------------------- */

/**
 * Pede dois números ao utilizador, calcula o maior deles, e devolve texto na
 * seguinte forma: os números digitados foram X e Y, e o maior é Z.
 * @returns {string} O texto resultante do processamento.
 */
// Colocar aqui o código da função processaDoisNumeros.

/* ------------------------------------------------------------------------- */

// Define que, quando ficar concluído o carregamento do documento HTML para
// a árvore DOM em memória (window.onload), o browser deve invocar a função
// principal() (em cima). De notar que o carregamento só fica concluído quando
// todos os recursos mencionados no ficheiro HTML tiverem sido lidos pelo
// browser, incluindo, por exemplo, imagens e estilos.
//
// A variável global window, declarada automaticamente (tal como a document),
// representa a janela do browser onde o próprio código JavaScript está a ser
// executado, podendo ser invocadas todas as funções e acedidas todas as
// propriedades e event handlers (como onload) da interface Window.
//
// Nota: A linha de código a seguir é a primeira deste script a ser executada
//       pelo browser, e a função principal() só é invocada mais tarde, quando
//       toda a informação no documento HTML tiver sido carregada.
window.onload = principal;

/* ------------------------------------------------------------------------- */

function maiorDeDoisNumeros (a, b) {
  if  (a > b) {
    return a;
  } else {
    return b;
  }
};

function menorDeDoisNumeros (a, b) {
  if  (a < b) {
    return a;
  } else {
    return b;
  }
};

function processaDoisNumeros (x,y) {
  var c = Number(prompt("Por favor, introduza um número qualquer:", "X"));
  var d = Number(prompt("Agora introduza outro número se não se importar...", "Y"));
  return "Os números digitados foram " + c + " e " + d + ", o maior é " + maiorDeDoisNumeros (c, d) + " e o menor é " + menorDeDoisNumeros (c, d) + ".";
};