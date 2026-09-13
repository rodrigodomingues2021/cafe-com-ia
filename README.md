# ☕ Café com IA — Guia Completo da Apresentação

Este projeto foi construído para ser apresentado em eventos corporativos (como o **Café com IA**), demonstrando o fluxo completo de criação de software com IA: **do prompt à produção em minutos**.

---

## 🎯 Objetivo da Demonstração

Mostrar como o **Antigravity** (no VS Code) permite que qualquer pessoa — de desenvolvedores experientes a líderes de produto — conceba, programe, teste e publique uma aplicação web interativa em minutos, pronta para ser usada por qualquer pessoa através de um **QR Code**.

---

## 📂 Estrutura do Projeto

- **`index.html`**: Aplicação completa em *Single Page Application* (SPA):
  - **Tailwind CSS via CDN**: Estilização moderna e responsiva (mobile-first).
  - **Modo Participante**: Onde a pessoa vota no café preferido, seleciona seu nível de afinidade com IA e envia dúvidas em tempo real.
  - **Modo Apresentador / Telão**: Dashboard interativo com gráficos de barras das preferências da sala, métricas e mural de perguntas.
  - **Gerador de QR Code Automático**: Converte a URL da página no GitHub Pages em QR Code em tela cheia para a plateia escanear pelo celular.
  - **Efeito Confete**: Feedback comemorativo a cada envio.
  - **Botão "Simular Voto Demo"**: Botão discreto no painel do apresentador para demonstrar o telão atualizando em tempo real mesmo sem internet móvel da plateia.

---

## 🚀 Passo a Passo: Publicar no GitHub Pages (5 minutos antes do evento)

### 1. Crie um repositório no seu GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Nome do repositório: `cafe-com-ia`.
3. Deixe marcado como **Public**.
4. Clique em **Create repository**.

### 2. Suba o código pelo terminal
No VS Code (ou terminal), entre na pasta do projeto:
```bash
cd /home/rodrigo/.gemini/antigravity/scratch/cafe-com-ia

git init
git add .
git commit -m "feat: lancamento do app Cafe com IA"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/cafe-com-ia.git
git push -u origin main
```

### 3. Ative o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. Na barra lateral esquerda, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
4. Em **Branch**, escolha `main` e a pasta `/ (root)`.
5. Clique em **Save**.

> ⏱️ Em cerca de 1 a 2 minutos, o GitHub gerará a URL pública:
> `https://SEU_USUARIO.github.io/cafe-com-ia/`

---

## 🎤 Roteiro da Apresentação (12 a 15 Minutos)

### [00:00 - 02:00] A Abertura & A Provocação
- *"Bom dia pessoal! Sejam muito bem-vindos ao Café com IA."*
- *"Normalmente, quando pensamos em criar um aplicativo, pensamos em dias de design, semanas de sprint, aprovações e pipelines de deploy."*
- *"Hoje vamos quebrar essa barreira: nos próximos 10 minutos, nós vamos criar uma aplicação completa, com design de ponta e publicar na internet para todo mundo que está aqui na sala acessar pelo celular."*

### [02:00 - 06:00] A Mágica do Antigravity
- Abra o VS Code com a pasta vazia ou mostre o chat do Antigravity.
- Mostre o prompt:
  > *"Antigravity, crie uma aplicação para o nosso Café com IA onde as pessoas votam no café favorito, medem o sentimento sobre IA e enviam perguntas para o telão, pronta para GitHub Pages."*
- Destaque as habilidades do Antigravity:
  - **Planejamento:** Ele pensa na arquitetura antes de sair digitando.
  - **Geração de Arquivos:** Criação direta do `index.html` com design responsivo.
  - **Autonomia Segura:** Executa comandos e valida a aplicação.

### [06:00 - 08:00] A Interação ao Vivo (`Ctrl + I` Inline Edit)
- Abra o arquivo no navegador local (`file:///home/rodrigo/.gemini/antigravity/scratch/cafe-com-ia/index.html`).
- Olhe para a plateia: *"Alguém quer sugerir uma mudança rápida? Um novo tipo de café? Um botão verde do Sami Saúde?"*
- Selecione o código no VS Code, pressione **`Ctrl + I`** e peça para o Antigravity fazer a alteração.
- Isso mostra que a IA não é um gerador estático, mas um verdadeiro **pair programmer**.

### [08:00 - 10:00] Deploy no GitHub Pages & O Telão
- Mostre o comando `git push` subindo o código para o GitHub Pages.
- Alterne o app para o **Modo Telão / Apresentador** e clique no botão **"Projetar QR Code"**.
- O QR Code gigante aparecerá no projetor.

### [10:00 - 14:00] Engajamento Total da Sala
- Peça para todos apontarem a câmera do celular.
- À medida que eles votam e enviam perguntas, mostre o dashboard atualizando (ou use o botão **+ Simular Voto Demo** se quiser animar a sala).
- Leia uma das perguntas enviadas e responda ao vivo!

---

## 💡 Dicas de Sucesso para o Apresentador

1. **Abra o arquivo localmente agora mesmo para testar:**
   Cole no seu navegador: `file:///home/rodrigo/.gemini/antigravity/scratch/cafe-com-ia/index.html`
2. **Defina a pasta como Workspace:**
   No VS Code, abra a pasta `/home/rodrigo/.gemini/antigravity/scratch/cafe-com-ia`.
3. **Backup Seguro:**
   Mesmo se a internet do local estiver lenta, você pode rodar a aplicação localmente no seu computador e usar o botão de simular votos para não perder o ritmo da apresentação.

