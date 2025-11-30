# 🏭 Apontamento de Produção - Teste Front-End

> Solução para o desafio técnico de Front-End da Sequor. O objetivo foi desenvolver uma interface para registro de ordens de produção com validação de tempo baseada em regras de negócio.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen) ![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

## 🖼️ Preview
<img width="610" height="931" alt="image" src="https://github.com/user-attachments/assets/50c30ae1-c4f1-44fa-a3d6-a6115c012609" />

## 🚀 O Desafio

O projeto consiste em uma tela de apontamento onde o operador seleciona uma ordem de produção e registra os dados. O grande diferencial é a regra de negócio do **Tempo de Ciclo**:

1.  O sistema consome uma lista de ordens (simulada via JSON).
2.  Ao selecionar uma ordem, um **cronômetro oculto** é iniciado.
3.  Cada ordem tem um tempo mínimo de fabricação.
4.  O botão de envio permanece **bloqueado** até que o tempo decorrido seja maior que o tempo mínimo exigido.

## 🛠️ Funcionalidades Implementadas

- [x] **Consumo de API Mockada:** Leitura de arquivo `dados.json` para simular o back-end (GetOrders).
- [x] **Manipulação de DOM:**
    - Ao selecionar a ordem, a imagem e a descrição do produto atualizam automaticamente.
    - A lista de materiais (dropdown) é carregada dinamicamente com base na ordem escolhida.
- [x] **Lógica de Bloqueio (Timer):** Implementação de `setInterval` para validar o tempo de ciclo em tempo real.
- [x] **Feedback Visual:** Botão muda de estado (Disabled/Enabled) e cursor muda para indicar status.
- [x] **Histórico de Produção:** Tabela dinâmica que registra os apontamentos realizados (Mock de POST).
- [x] **Design Responsivo:** Layout adaptável para Desktop e Mobile (estilo Cards).

## 💻 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização responsiva, Flexbox e variáveis CSS para tema industrial.
* **JavaScript (Vanilla):** Lógica de negócios, manipulação de eventos, `async/await` e `fetch API`.

## 📂 Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
    ```
2.  Abra o arquivo `index.html` no seu navegador.
    * *Dica: Utilize o "Live Server" do VS Code para evitar erros de CORS ao carregar o JSON local.*

---
Desenvolvido por [Vitor Carvalho](https://vitorcodes.com.br)
