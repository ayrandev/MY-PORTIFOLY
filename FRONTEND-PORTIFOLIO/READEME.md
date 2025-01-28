# Documentação do Projeto

## Visão Geral
Este projeto consiste no meu portfólio pessoal para exibir minhas habilidades, projetos e informações de contato. A aplicação é responsiva, moderna e utiliza bibliotecas como **React**, **TailwindCSS** e **Swiper** para criar uma experiência interativa e envolvente.

---

## Estrutura do Projeto

### 1. **Componente Header**
**Caminho:** `./Header.js`

- **Descrição:** Componente de cabeçalho responsivo.
- **Funcionalidade:**
  - Menu tradicional em resoluções maiores.
  - Menu hambúrguer responsivo para dispositivos menores.
- **Bibliotecas Utilizadas:** React Router.

### 2. **Componente ImagePerfil**
**Caminho:** `./ImagePerfil.js`

- **Descrição:** Exibe uma imagem de perfil com bordas estilizadas e interações visuais.
- **Funcionalidade:**
  - Imagem responsiva com hover effect.

### 3. **Componente GifBackGround**
**Caminho:** `./GifBackGround.js`

- **Descrição:** Exibe um plano de fundo animado.
- **Funcionalidade:**
  - Adiciona profundidade visual ao site com uma animação suave de fundo.

### 4. **Componente GifContact**
**Caminho:** `./GifContact.js`

- **Descrição:** Renderiza uma animação visual na seção de contato.
- **Funcionalidade:**
  - Animação responsiva e centralizada para dispositivos diferentes.

### 5. **Componente CardsAbout**
**Caminho:** `./CardsAbout.js`

- **Descrição:** Apresenta habilidades (Soft Skills e Hard Skills).
- **Funcionalidade:**
  - Grid responsivo para exibição de Cards.
  - Botões para LinkedIn, GitHub e download de arquivos.
- **Dependências:**
  - Icones: React Icons.

### 6. **Componente PageProjects**
**Caminho:** `./PageProjects.js`

- **Descrição:** Apresenta projetos pessoais em formato de carrossel.
- **Funcionalidade:**
  - Carrossel responsivo utilizando Swiper.
  - Exibição de título, descrição e botões dos projetos.
- **Dependências:**
  - SwiperJS, TailwindCSS.

### 7. **Componente SocialMedia**
**Caminho:** `./SocialMedia.js`

- **Descrição:** Exibe ícones de redes sociais com links interativos.
- **Funcionalidade:**
  - Links dinâmicos para GitHub, LinkedIn, WhatsApp e Instagram.
  - Efeitos de hover e redirecionamento.
- **Dependências:**
  - React Icons.

### 8. **Componente Gallery**
**Caminho:** `./Gallery.js`

- **Descrição:** Renderiza informações detalhadas de um projeto.
- **Funcionalidade:**
  - Layout flexível para imagem, ícone, descrição e botões.
  - Responsividade e estilização elegante.

### 9. **Componente Button**
**Caminho:** `./Button.js`

- **Descrição:** Botões reutilizáveis com ícones.
- **Funcionalidade:**
  - Aceita diferentes ícones, rótulos e funções `onClick`.
  - Design responsivo e elegante.

---

## Bibliotecas Utilizadas

- **React:** Biblioteca principal para construção da aplicação.
- **TailwindCSS:** Framework CSS para estilizações responsivas e customizações rápidas.
- **SwiperJS:** Para criação do carrossel responsivo.
- **React Icons:** Para uso de ícones padronizados.

---

## Estrutura de Arquivos

```
src/
|-- assets/
|   |-- codebg.png
|   |-- animation.png
|   |-- PerfilPortifolio.jpg
|
|-- components/
|   |-- Header.js
|   |-- ImagePerfil.js
|   |-- GifBackGround.js
|   |-- GifContact.js
|   |-- CardsAbout.js
|   |-- PageProjects.js
|   |-- SocialMedia.js
|   |-- Gallery.js
|   |-- Button.js
|
|-- App.js
|-- index.js
```

---

## Deploy e Execução Local

### 1. **Instalar Dependências**
```bash
npm install
```

### 2. **Executar o Projeto**
```bash
npm run dev
```

### 3. **Build para Produção**
```bash
npm run build
```

---

## Contato
- **Autor:** Ayran Vieira
- **LinkedIn:** [Ayran Vieira](https://www.linkedin.com/in/ayran-vieira-dev/)
- **GitHub:** [ayrandev](https://github.com/ayrandev)

