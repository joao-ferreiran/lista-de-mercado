# 🛒 Market List Pro (Lista de Mercado)

Um aplicativo web moderno, responsivo e offline-first (PWA) para gerenciar sua lista de compras de mercado. Pare de esquecer o que comprar ou de estourar o orçamento na hora de passar no caixa!

## ✨ Funcionalidades

- **Adição Rápida:** Adicione itens informando nome, quantidade e preço unitário.
- **Cálculos Automáticos:** O app calcula o subtotal de cada item e o valor total da sua compra em tempo real.
- **Edição Prática:** Aumente `(+)` ou diminua `(-)` a quantidade de qualquer item diretamente pela lista, sem precisar redigitar.
- **Offline First (PWA):** Funciona 100% sem internet! Você pode "Instalar" o app no seu celular ou computador diretamente pelo navegador.
- **Armazenamento Local:** Seus dados nunca são perdidos se você fechar o app, graças ao salvamento automático no `localStorage`.

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3** (Vanilla, CSS Variables, Flexbox para responsividade total)
- **JavaScript (ES6+)**
- **Progressive Web App (PWA)** com `manifest.json` e Service Worker (`sw.js`).
- Ícones embutidos via SVG para garantir o carregamento offline imediato.

## 🚀 Como rodar o projeto localmente

Como o projeto é um PWA puro, você precisará serví-lo via um servidor local (para testar a funcionalidade offline do Service Worker).

1. Clone o repositório.
2. Inicie um servidor local. Se estiver usando VS Code, a extensão **Live Server** é a mais recomendada. Você também pode usar ferramentas de linha de comando:
   ```bash
   # Com Python
   python3 -m http.server 3000
   
   # Ou com Node.js (npx)
   npx serve .
   ```
3. Acesse `http://localhost:3000` (ou a porta informada) no seu navegador.
