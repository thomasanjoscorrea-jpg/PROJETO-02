/* ============================================================
   ARQUIVO PARA EDITAR: dados da loja e cardápio.
   Leia o COMO-EDITAR.md. Ao editar, mantenha as aspas, as vírgulas e as chaves como estão.
   Depois de salvar, atualize a página do site para ver a mudança.
   ============================================================ */
/* ============================================================
   1) DADOS DA LOJA  ← EDITE AQUI
   ============================================================ */
// >>> ALTERE AQUI O NÚMERO DO WHATSAPP QUE VAI RECEBER OS PEDIDOS (55 + DDD + número, só dígitos) <<<
// Está com um número de teste para a apresentação não enviar mensagem para ninguém sem querer.
const WHATSAPP_NUMERO = "5500000000000";

const LOJA = {
  nome: "D'Casa Pizzaria e Petiscaria",
  sigla: "D'C",                                       // letras do logo redondo
  cidade: "Doutor Camargo - PR",
  endereco: "Praça Brasil, 112 – Centro, Doutor Camargo/PR",
  telefone: "(44) 98429-9854",
  taxaEntrega: 5.00,                                  // EXEMPLO: confirme com a loja
  horario: { abre: "18:00", fecha: "23:00", dias: [0, 2, 3, 4, 5, 6] },   // terça a domingo (0 = domingo; segunda fechado)
  pagamentos: ["Pix", "Cartão de Crédito", "Cartão de Débito", "Dinheiro"]
};
const AVISO_DEMO = "Proposta de site · demonstração · pizzas salgadas conforme foto do cardápio (preços a confirmar) · demais itens são exemplos";

/* ============================================================
   2) CARDÁPIO  ← EDITE AQUI (nomes, descrições, preços e fotos)
   "foto": nome do arquivo em imagens/ (sem o .jpg). Sem foto, mostra o emoji da categoria.
   "selo": etiqueta amarela (ex.: "Mais pedido").
   "rotulo" (na categoria): nome curto usado na aba, se o nome inteiro for muito longo.
   "exemplo": true  → mostra a etiqueta cinza "Exemplo". Apague essa marca quando o preço for confirmado.
   ============================================================ */
const CARDAPIO = [
  { categoria: "Pizzas", emoji: "🍕", itens: [
    { nome: "Mussarela", foto: "mussarela",            desc: "Molho, mussarela, milho, tomate e orégano.", preco: 32.00 },
    { nome: "Napolitana", foto: "napolitana",           desc: "Molho, mussarela, presunto, tomate, milho, azeitona e orégano.", preco: 34.00 },
    { nome: "Bacon", foto: "bacon",                desc: "Molho, mussarela, bacon, tomate, milho e orégano.", preco: 37.00 },
    { nome: "Calabresa", foto: "calabresa",            desc: "Molho, mussarela, calabresa, cebola, tomate, milho e orégano.", preco: 37.00, selo: "Mais pedido" },
    { nome: "Frango", foto: "frango",               desc: "Molho, mussarela, frango, milho, azeitona, tomate e orégano.", preco: 37.00 },
    { nome: "Frango com Catupiry", foto: "frango-catupiry",  desc: "Molho, mussarela, frango, catupiry, milho, azeitona, tomate e orégano.", preco: 40.00, selo: "Mais pedido" },
    { nome: "Strogonoff de Frango", foto: "strogonoff", desc: "Molho, mussarela, strogonoff de frango, milho e batata palha.", preco: 42.00 },
    { nome: "4 Queijos", foto: "quatro-queijos",            desc: "Molho, mussarela, provolone, catupiry, prato, milho e orégano.", preco: 38.00 },
    { nome: "4 Queijos com Bacon", foto: "quatro-queijos-bacon",  desc: "Molho, mussarela, provolone, catupiry, prato, bacon, milho e orégano.", preco: 40.00 },
    { nome: "Alcatra com Queijo", foto: "alcatra",   desc: "Molho, mussarela, alcatra, cebola, azeitona, milho, tomate e orégano.", preco: 50.00 },
    { nome: "Pepperoni", foto: "pepperoni",            desc: "Molho, mussarela, pepperoni, tomate e orégano.", preco: 37.00 },
    { nome: "Palmito", foto: "palmito",              desc: "Molho, mussarela, palmito, tomate e orégano.", preco: 37.00 }
  ]},
  { categoria: "Pizzas Doces", rotulo: "Doces", emoji: "🍫", itens: [
    { nome: "Chocolate", foto: "doce-chocolate",            desc: "Massa coberta com chocolate ao leite.", preco: 38.00, exemplo: true },
    { nome: "Romeu e Julieta", foto: "doce-romeu",      desc: "Mussarela com goiabada.", preco: 38.00, exemplo: true },
    { nome: "Banana com Canela", foto: "doce-banana",    desc: "Mussarela, banana, açúcar e canela.", preco: 36.00, exemplo: true },
    { nome: "Prestígio", foto: "doce-prestigio",            desc: "Chocolate com coco ralado.", preco: 40.00, exemplo: true }
  ]},
  { categoria: "Petiscos", emoji: "🍟", itens: [
    { nome: "Torre de Batata", foto: "torre-batata",      desc: "Batata frita em camadas com queijo e bacon. Destaque da casa.", preco: 55.00, selo: "Destaque", exemplo: true },
    { nome: "Batata Frita", foto: "batata-frita",         desc: "Porção crocante, ideal para dividir.", preco: 32.00, exemplo: true },
    { nome: "Batata com Queijo e Bacon", foto: "batata-queijo-bacon", desc: "Batata frita coberta com queijo derretido e bacon.", preco: 42.00, exemplo: true },
    { nome: "Calabresa Acebolada", foto: "calabresa-acebolada",  desc: "Calabresa fatiada com cebola.", preco: 36.00, exemplo: true },
    { nome: "Isca de Frango", foto: "isca-frango",       desc: "Iscas de frango empanadas e fritas.", preco: 42.00, exemplo: true },
    { nome: "Anéis de Cebola", foto: "aneis-cebola",      desc: "Cebola empanada e frita.", preco: 28.00, exemplo: true },
    { nome: "Mandioca Frita", foto: "mandioca",       desc: "Mandioca frita sequinha.", preco: 30.00, exemplo: true }
  ]},
  { categoria: "Bebidas", emoji: "🥤", itens: [
    { nome: "Chopp 300ml", foto: "chopp",          desc: "Venda proibida para menores de 18 anos.", preco: 8.00, exemplo: true },
    { nome: "Refrigerante 2L", foto: "refri-2l",      desc: "Cola ou guaraná.", preco: 14.00, exemplo: true },
    { nome: "Refrigerante Lata", foto: "refri-lata",    desc: "Cola, guaraná ou laranja.", preco: 6.00, exemplo: true },
    { nome: "Suco 500ml", foto: "suco",           desc: "Sabores do dia.", preco: 9.00, exemplo: true },
    { nome: "Água 500ml", foto: "agua",           desc: "Com ou sem gás.", preco: 3.50, exemplo: true }
  ]}
];
