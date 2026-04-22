# Nivaldo Junior | Portfólio (Cyber-Racing Edition)

Este é um projeto de interface de tela única (hero section) focado em uma experiência altamente interativa, agressiva e brutalista. O design foi fortemente inspirado na estética "Dark Mode / Neon Red" (como temas de corrida da Red Bull, cyber-tech e alta velocidade).

## 🚀 Funcionalidades e Efeitos

* **Máscara de Revelação Geométrica (Spotlight):** O cursor padrão foi substituído por uma mira (*crosshair*) tecnológica. Ao redor do mouse, uma máscara octogonal revela uma "camada de visão térmica/neon" (expondo a imagem secundária e transformando o texto para vermelho vibrante).
* **Glitch Text Animation:** O nome principal possui animações de *glitch* contínuas feitas via CSS (deslocamento de clip-path e sombras ciano/vermelho), simulando falhas digitais intensas.
* **Física de Parallax Avançada:** O fundo, os textos e os elementos de UI se movem em oposição ao movimento do mouse com diferentes velocidades, criando profundidade 3D imediata na tela. Tudo orquestrado de forma muito suave usando JavaScript e Variáveis CSS.
* **Atmosfera Brutalista e CRT:** A adição de sobreposições de "Scanlines" (linhas de tubo de TV) e "Noise" (ruído estático) garantem a textura áspera e industrial ao projeto.
* **Ecos de Movimento:** Movimentos bruscos do mouse deixam rastros (quadrados de neon vermelho brilhante) que desaparecem progressivamente.

## 📁 Estrutura de Arquivos

- `index.html`: A estrutura de camadas, hospedando tanto a *Base Layer* (fantasma) quanto a *Reveal Layer* (neon agressivo).
- `style.css`: Toda a estilização pesada, *keyframes* de animação de glitch, overlays de grade responsiva, sombras e a tipografia brutalista (`Bebas Neue` e `Space Mono`).
- `script.js`: O motor de física da página. Calcula velocidades, coordena a máscara octogonal ao redor do cursor e atualiza as variáveis CSS nativas (`--px` e `--py`) para manter a centralização intacta durante o *parallax*.
- `public/`: Diretório que deve conter os assets de imagens (`imagem1.jpg` e `imagem2.png`).

## 🛠️ Como Executar

O projeto não possui dependências complexas nem requer compilação.
Para visualizar a página:
1. Simplesmente abra o arquivo `index.html` em qualquer navegador web moderno.
2. (Opcional) Utilize uma extensão como o **Live Server** no VSCode para rodar e visualizar qualquer alteração em tempo real.

## 🎨 Personalização
- **Sensibilidade do Parallax:** Pode ser ajustada no arquivo `script.js`, alterando os multiplicadores das variáveis `normalizedX` e `normalizedY`.
- **Cores Neon:** Definidas pelas variáveis CSS na raiz do `style.css` (`--neon-red` e `--neon-cyan`). Altere essas cores primárias e todo o esquema mudará junto.
