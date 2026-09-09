// DADOS FIXOS (Sem banco de dados complexo para evitar erros)

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

export const INITIAL_TASKS = [
  { id: 1, title: "Planejar o futuro da família", isBigRock: true, quadrant: 2 },
  { id: 2, title: "Ler com meu filho", isBigRock: true, quadrant: 2 },
  { id: 3, title: "Revisar orçamento mensal", isBigRock: false, quadrant: 1 },
  { id: 4, title: "Organizar documentos", isBigRock: false, quadrant: 3 }
];

export const INITIAL_HABITS = [
  { id: 1, name: "Exercício Físico", dimension: "Física", streak: 5 },
  { id: 2, name: "Leitura Diária", dimension: "Mental", streak: 12 },
  { id: 3, name: "Meditação/Oração", dimension: "Espiritual", streak: 3 },
  { id: 4, name: "Tempo em Família", dimension: "Social", streak: 8 }
];

export const INITIAL_RELATIONSHIPS = [
  { id: 1, name: "Filho(a)", balance: 95 },
  { id: 2, name: "Esposa/Marido", balance: 88 },
  { id: 3, name: "Eu mesmo", balance: 75 }
];