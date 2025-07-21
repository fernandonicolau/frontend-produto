# 🛍️ Frontend Produto

Este é o frontend de uma aplicação de vitrine de produtos, desenvolvido em **Angular**. Ele consome a API REST do backend (NestJS) para exibir uma lista de produtos, detalhes individuais e gerenciar um carrinho de compras.

## 🚀 Tecnologias

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## 🔧 Funcionalidades

- Listagem de produtos
- Visualização de detalhes via query param (`/produtos/detalhe?id=1`)
- Adição ao carrinho com persistência local
- Página inicial redireciona para `/produtos`
- Redirecionamento de rotas inválidas para `/produtos`

## 🧑‍💻 Como rodar localmente

```bash
npm install
ng serve
