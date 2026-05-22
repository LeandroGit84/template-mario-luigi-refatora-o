# template-mario-luigi-refatora-o

# 🚰 Mario & Luigi Plumbing

Landing Page desenvolvida para divulgação de serviços hidráulicos dos encanadores Mario & Luigi.

O projeto foi criado utilizando HTML5, CSS3 e JavaScript puro (Vanilla JS), aplicando conceitos fundamentais do desenvolvimento Front-End moderno, incluindo responsividade, manipulação do DOM e integração com serviços externos.

---

# 📋 Funcionalidades

- Página institucional
- Vídeo de fundo
- Navegação entre páginas
- Formulário de contato
- Integração com WhatsApp
- Integração com FormCarry para envio de mensagens
- Layout responsivo para celulares, tablets e desktops
- Animação de exibição e ocultação do formulário

---

# 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6
- FormCarry
- WhatsApp API

---

# 📚 Conceitos Aplicados

## 1. Estruturação Semântica com HTML5

A página foi construída utilizando elementos semânticos do HTML5:

```html
<header>
<form>
<button>
video
```

### Benefícios

- Melhor organização do código
- Melhor indexação por mecanismos de busca (SEO)
- Maior acessibilidade

---

## 2. Navegação entre Páginas

Foi utilizada navegação através de hyperlinks:

```html
<a href="servicos.html">
```

Permitindo acesso à página de serviços.

---

## 3. Formulários HTML

O formulário coleta:

- Nome
- E-mail
- Mensagem

```html
<form
 action="https://formcarry.com/..."
 method="POST">
```

### Conceitos Aplicados

- Captura de dados
- Envio HTTP POST
- Integração com backend externo

---

## 4. Integração com API do WhatsApp

Foi utilizado o endpoint oficial:

```html
https://wa.me/
```

Exemplo:

```html
<a href="https://wa.me/5513999999999">
```

### Resultado

Ao clicar no botão:

- WhatsApp é aberto
- Mensagem pré-definida é carregada
- Usuário pode solicitar orçamento rapidamente

---

## 5. Manipulação do DOM

O JavaScript acessa elementos da página através do DOM (Document Object Model).

```javascript
const formulario = document.getElementById("formulario");
```

### Conceitos

- Seleção de elementos
- Eventos
- Alteração dinâmica de estilos

---

## 6. Eventos JavaScript

O projeto utiliza eventos de clique:

```html
<button onclick="mostrarForm()">
```

Quando acionado:

```javascript
function mostrarForm() {
    formulario.style.left = "50%";
}
```

### Conceitos Aplicados

- Event Handling
- Interatividade
- UX (User Experience)

---

## 7. Manipulação de CSS via JavaScript

O formulário fica oculto inicialmente:

```css
left: -260px;
```

Ao clicar:

```javascript
formulario.style.left = "50%";
```

### Resultado

Efeito visual de entrada do formulário.

---

## 8. Transições CSS

Foi aplicada animação suave:

```css
transition: left 0.5s ease-in-out;
```

### Conceitos

- CSS Animation
- UX
- Feedback visual

---

## 9. Flexbox

O layout principal utiliza Flexbox:

```css
display: flex;
```

### Recursos Utilizados

```css
justify-content
align-items
flex-direction
gap
```

### Benefícios

- Alinhamento simplificado
- Layout flexível
- Melhor adaptação a diferentes telas

---

## 10. Variáveis CSS

Foram utilizadas Custom Properties:

```css
:root {
    --button-backgroundcolor: #c51111;
}
```

Uso:

```css
background-color: var(--button-backgroundcolor);
```

### Benefícios

- Reutilização
- Manutenção simplificada
- Padronização visual

---

## 11. Responsividade

O projeto utiliza Media Queries.

### Mobile

```css
@media (max-width: 400px)
```

### Tablet

```css
@media (min-width:401px) and (max-width:720px)
```

### Desktop Intermediário

```css
@media (min-width:721px) and (max-width:1340px)
```

### Objetivo

Adaptar:

- Tamanhos
- Espaçamentos
- Fontes
- Imagens

para diferentes dispositivos.

---

## 12. Camadas Visuais (Z-Index)

O vídeo de fundo utiliza:

```css
z-index: -3;
```

A máscara:

```css
z-index: -1;
```

O formulário:

```css
z-index: 10;
```

### Conceito

Controle de profundidade dos elementos na tela.

---

## 13. Background Overlay

Foi criada uma máscara sobre o vídeo:

```css
background: linear-gradient(...)
```

### Objetivo

Melhorar:

- Contraste
- Legibilidade
- Experiência visual

---

# 📂 Estrutura do Projeto

```
projeto-mario-luigi/
│
├── assets/
│   ├── img/
│   └── video/
│
├── index.html
├── servicos.html
├── style.css
├── script.js
└── README.md
```

---

# Fluxo da Aplicação

```text
Usuário
   │
   ▼
Página Inicial
   │
   ├── Navegação
   │
   ├── WhatsApp
   │
   └── Formulário
           │
           ▼
       FormCarry
           │
           ▼
       Recebimento da Mensagem
```

---

# Melhorias Futuras

- Validação de formulário com JavaScript
- Máscaras para telefone
- Menu responsivo (hamburger)
- Animações avançadas
- Integração com Backend Java Spring Boot
- Banco de Dados para armazenamento de solicitações
- Área administrativa para acompanhamento de chamados

---

# Autor
Leandro Santos
Projeto desenvolvido para fins de estudo e prática dos conceitos fundamentais de Front-End utilizando HTML, CSS e JavaScript.