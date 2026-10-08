# Como editar o cardápio (sem mexer no resto do site)

Tudo o que muda no dia a dia fica em **um arquivo só: `cardapio.js`**.
Você **não precisa mexer no `index.html`**. Basta abrir o `cardapio.js`, trocar o texto ou o número e salvar.

> **Regra de ouro:** mantenha as **aspas** (`"..."`), as **vírgulas** e as **chaves** (`{ }`) como estão.
> Troque só o que está **dentro** das aspas ou o número. Preço usa **ponto**, não vírgula: `32.50`.

---

## 1) Trocar o preço de um item
Procure o nome do item e mude o número depois de `preco:`

```js
{ nome: "Calabresa", desc: "Molho, mussarela...", preco: 37.00 },
```
vira
```js
{ nome: "Calabresa", desc: "Molho, mussarela...", preco: 39.00 },
```

## 2) Tirar a etiqueta cinza "Exemplo" (quando o preço for confirmado)
Apague o trecho `, exemplo: true` do item.

```js
{ nome: "Chocolate", desc: "...", preco: 38.00, exemplo: true },   ← antes
{ nome: "Chocolate", desc: "...", preco: 38.00 },                  ← depois
```

## 3) Incluir um item novo
Copie uma linha inteira de item (de `{` até `},`), cole logo abaixo dentro da mesma categoria e mude os textos.

```js
{ nome: "Pizza de Camarão", desc: "Molho, mussarela e camarão.", preco: 55.00, foto: "camarao" },
```
- O **nome precisa ser único** (não pode repetir outro item).
- A **última linha** de uma lista não precisa de vírgula, mas se tiver, tudo bem.

## 4) Tirar um item
Apague a linha inteira do item (de `{` até `},`).

## 5) Colocar uma etiqueta amarela ("Mais pedido", "Novidade")
Acrescente `selo: "Novidade"` no item:

```js
{ nome: "Pizza de Camarão", desc: "...", preco: 55.00, selo: "Novidade" },
```

## 6) Trocar ou incluir uma foto
1. Prepare a foto em **JPG**, de preferência **quadrada ou perto disso**, com cerca de **640 px** de largura (leve, abaixo de 200 KB).
2. Coloque o arquivo na pasta **`imagens/`**. Use um nome simples, **sem espaço e sem acento**: `camarao.jpg`.
3. No item, escreva o nome **sem o `.jpg`**: `foto: "camarao"`.

Para **trocar** a foto de um item que já existe, salve a nova foto na pasta `imagens/` **com o mesmo nome** da antiga.

Item **sem foto** mostra o emoji da categoria. Não quebra nada.

## 7) Dados da loja
No começo do arquivo, em `LOJA`:
- `telefone`, `endereco`, `cidade`
- `taxaEntrega: 5.00` (valor da entrega)
- `horario: { abre: "18:00", fecha: "23:00", dias: [0, 2, 3, 4, 5, 6] }`
  - `dias`: 0 = domingo, 1 = segunda, 2 = terça ... 6 = sábado. Para abrir também na segunda, inclua o `1`.
- `pagamentos`: formas de pagamento mostradas ao cliente.

## 8) O número que recebe os pedidos (IMPORTANTE)
Em `WHATSAPP_NUMERO`, coloque o número da loja com **55 + DDD + número, só dígitos**.
Exemplo: `"5544988591371"`.
**Teste um pedido** depois de trocar, para confirmar que a mensagem chega no número certo.

## 9) Tirar a faixa "Proposta de site"
Deixe o `AVISO_DEMO` vazio:
```js
const AVISO_DEMO = "";
```

---

## Como ver as mudanças
Salvou o arquivo? **Atualize a página do site** (F5 ou puxe para baixo no celular).

## Se o site ficar em branco ou o item sumir
Provavelmente faltou uma aspas, uma vírgula ou uma chave no `cardapio.js`.
1. Desfaça a última mudança e tente de novo, mexendo em **uma coisa por vez**.
2. No computador, aperte **F12**, vá na aba **Console**: o site mostra avisos como `[cardápio] nome repetido: "Calabresa"` ou `preço inválido`.
3. Se não achar o erro, peça ajuda a quem fez o site.

## Antes de avisar o cliente que mudou (checklist de 1 minuto)
- [ ] Abri o site pelo celular e a mudança apareceu.
- [ ] O preço está certo e com ponto (`37.00`).
- [ ] A foto aparece e não está pesada.
- [ ] Fiz um pedido de teste e a mensagem do WhatsApp veio certa.

---

## Como publicar a mudança (resumo)
- Se o site está ligado ao GitHub com publicação automática (Cloudflare Pages ou Netlify), basta **salvar o arquivo no GitHub** (lápis ✏️ → editar → *Commit changes*). O site atualiza sozinho em cerca de 1 minuto.
- Se o site é publicado de outra forma, envie o `cardapio.js` (e as fotos novas da pasta `imagens/`) para o mesmo lugar onde está o `index.html`.

## O que **não** precisa mudar
`index.html` (o desenho e o funcionamento do site). Se quiser mudar cores, layout ou incluir uma função nova, isso é um serviço à parte.
