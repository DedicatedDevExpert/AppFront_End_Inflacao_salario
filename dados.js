/** @format */

// dados.js (na raiz do projeto)

export const salarios = [
  { ano: 2010, valor: 510.0 },
  { ano: 2011, valor: 545.0 },
  { ano: 2012, valor: 622.0 },
  { ano: 2013, valor: 678.0 },
  { ano: 2014, valor: 724.0 },
  { ano: 2015, valor: 788.0 },
  { ano: 2016, valor: 880.0 },
  { ano: 2017, valor: 937.0 },
  { ano: 2018, valor: 954.0 },
  { ano: 2019, valor: 998.0 },
  { ano: 2020, valor: 1045.0 },
];

export const inflacao = [
  { ano: 2010, valor: 5.91 },
  { ano: 2011, valor: 6.5 },
  { ano: 2012, valor: 5.84 },
  { ano: 2013, valor: 5.91 },
  { ano: 2014, valor: 6.41 },
  { ano: 2015, valor: 10.67 },
  { ano: 2016, valor: 6.29 },
  { ano: 2017, valor: 2.95 },
  { ano: 2018, valor: 3.75 },
  { ano: 2019, valor: 4.31 },
  { ano: 2020, valor: 4.52 },
];

export const comparacao = [
  {
    ano: 2010,
    salario: 510.0,
    inflacao: 5.91,
    crescimento: null,
    status: null,
  },
  {
    ano: 2011,
    salario: 545.0,
    inflacao: 6.5,
    crescimento: 6.86,
    status: "acima",
  },
  {
    ano: 2012,
    salario: 622.0,
    inflacao: 5.84,
    crescimento: 14.13,
    status: "acima",
  },
  {
    ano: 2013,
    salario: 678.0,
    inflacao: 5.91,
    crescimento: 9.0,
    status: "acima",
  },
  {
    ano: 2014,
    salario: 724.0,
    inflacao: 6.41,
    crescimento: 6.78,
    status: "acima",
  },
  {
    ano: 2015,
    salario: 788.0,
    inflacao: 10.67,
    crescimento: 8.84,
    status: "abaixo",
  },
  {
    ano: 2016,
    salario: 880.0,
    inflacao: 6.29,
    crescimento: 11.68,
    status: "acima",
  },
  {
    ano: 2017,
    salario: 937.0,
    inflacao: 2.95,
    crescimento: 6.48,
    status: "acima",
  },
  {
    ano: 2018,
    salario: 954.0,
    inflacao: 3.75,
    crescimento: 1.81,
    status: "abaixo",
  },
  {
    ano: 2019,
    salario: 998.0,
    inflacao: 4.31,
    crescimento: 4.61,
    status: "acima",
  },
  {
    ano: 2020,
    salario: 1045.0,
    inflacao: 4.52,
    crescimento: 4.71,
    status: "acima",
  },
];

// Função auxiliar para formatar moeda
export const formatarMoeda = (valor) => {
  if (valor === null || valor === undefined) return "-";
  // Simples formatação para 'R$ xxx,xx'
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
};

// Função auxiliar para formatar porcentagem
export const formatarPercentual = (valor) => {
  if (valor === null || valor === undefined) return "-";
  // Simples formatação para 'x,xx%'
  return `${valor.toFixed(2).replace(".", ",")}%`;
};
