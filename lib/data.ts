// lib/data.ts

export const QUOTES = [
  { text: "A coisa mais importante que você faz com sua vida é a vida que vive dentro de você.", author: "Stephen Covey" },
  { text: "Comece com o fim em mente.", author: "Stephen Covey" },
  { text: "Primeiro o mais importante.", author: "Stephen Covey" },
  { text: "Procure primeiro compreender, depois ser compreendido.", author: "Stephen Covey" },
  { text: "Crie sinergia.", author: "Stephen Covey" },
  { text: "Afie a serra.", author: "Stephen Covey" },
  { text: "Você é o criador de sua própria vida.", author: "Stephen Covey" },
  { text: "A confiança é a cola da vida.", author: "Stephen Covey" },
  { text: "Entre o estímulo e a resposta existe um espaço.", author: "Stephen Covey" },
  { text: "Somos o que fazemos repetidamente.", author: "Stephen Covey" },
  { text: "A verdadeira felicidade vem da conformidade com as leis corretas.", author: "Stephen Covey" },
  { text: "O caráter é mais eloquente que as palavras.", author: "Stephen Covey" },
  { text: "Viva, ame, ria, legue.", author: "Stephen Covey" },
  { text: "Não seja apenas ocupado, seja produtivo.", author: "Stephen Covey" },
  { text: "Semeie pensamentos e colherá ações.", author: "Stephen Covey" }
];

export const HABITS = [
  { id: 1, name: "Exercício Físico", dimension: "Física", streak: 0 },
  { id: 2, name: "Leitura Diária", dimension: "Mental", streak: 0 },
  { id: 3, name: "Meditação/Oração", dimension: "Espiritual", streak: 0 },
  { id: 4, name: "Tempo em Família", dimension: "Social", streak: 0 }
];

export const TASKS = [
  { id: 1, title: "Planejar o legado familiar", isBigRock: true, quadrant: 2 },
  { id: 2, title: "Estudar para a prova", isBigRock: true, quadrant: 2 },
  { id: 3, title: "Ler 10 páginas de um livro", isBigRock: false, quadrant: 2 },
  { id: 4, title: "Organizar a garagem", isBigRock: false, quadrant: 3 }
];

export const RELATIONSHIPS = [
  { id: 1, name: "Filho(a)", balance: 100 },
  { id: 2, name: "Esposa/Marido", balance: 95 },
  { id: 3, name: "Eu mesmo", balance: 80 }
];