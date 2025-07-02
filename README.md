# Tela de Cadastro – Projeto Angular

Este é um componente de **cadastro de usuários** desenvolvido com **Angular** e **Reactive Forms**. Ele faz parte de um sistema simples de autenticação utilizando o **localStorage** como simulação de backend.

## Funcionalidades

- ✅ Formulário de cadastro com validações:
  - **Nome** (campo obrigatório)
  - **E-mail** (formato válido)
  - **Senha** (mínimo de caracteres definidos)
- 💾 Armazenamento de usuários no `localStorage` do navegador
- 🔐 Prevenção de cadastro com e-mail já existente
- ⚠️ Exibição de mensagens de erro e feedback de sucesso
- 👤 Integração com controle de estado de usuário logado

## Tecnologias Utilizadas

- Angular (componentes, formulários reativos)
- TypeScript
- CSS puro para estilização
- localStorage como simulação de backend
- Biome para linting e padronização de código

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
ng serve
Abra o navegador e acesse:
http://localhost:4200
