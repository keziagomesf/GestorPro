# 🚀 GestorPro

**GestorPro** é uma aplicação web completa para **gestão de sistemas**, focada no gerenciamento de **clientes** e **chamados técnicos**. Com uma interface intuitiva e funcionalidades robustas, o sistema foi pensado para facilitar o fluxo de atendimento — desde a abertura de um chamado até sua finalização.

## 📌 Funcionalidades

- 🔐 **Autenticação de usuários** para acesso seguro.
- 🧑‍💼 **Cadastro e gerenciamento de clientes**.
- 🧾 **Criação de chamados** técnicos vinculados a clientes.
- ✅ **Marcar chamados como resolvidos** após a conclusão.
- 🌐 **Envio de chamados por usuários não autenticados**.

## 🛠️ Tecnologias Utilizadas

- **Front-End**: React / Next.js  
- **Back-End**: Node.js com [Prisma](https://www.prisma.io/)  
- **Banco de Dados**: [MongoDB](https://www.mongodb.com/)  
- **Estilização**: Tailwind CSS

## ⚙️ Como Funciona

1. **Usuários autenticados** podem:
   - Cadastrar novos clientes.
   - Criar e gerenciar chamados relacionados a esses clientes.
   - Marcar chamados como "comanda fechada" após resolução do problema.

2. **Usuários não autenticados** podem:
   - Registrar chamados públicos sem necessidade de login.

## 📦 Como Executar o Projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/keziagomesf/GestorPro.git
cd gestorpro
npm install
npm run dev
