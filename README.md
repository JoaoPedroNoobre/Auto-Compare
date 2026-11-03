# Auto Compare

Comparador interativo de veículos desenvolvido com **HTML5, CSS3 e JavaScript**, com o objetivo de facilitar a comparação de carros populares do mercado brasileiro de maneira simples, visual e intuitiva.

## Funcionalidades

- Seleção e comparação de dois veículos.
- Catálogo de veículos preenchido automaticamente pelo JavaScript.
- Comparação de motor, potência, torque e câmbio.
- Comparação de consumo de combustível e desempenho.
- Comparação de dimensões, peso e capacidade do porta-malas.
- Exibição dos preços de referência e cálculo da diferença entre os valores.
- Destaque visual das melhores especificações e dos empates.
- Placar automático baseado nos critérios comparados.
- Fotografias ilustrativas dos veículos.
- Navbar para navegação entre as seções.
- Links compartilháveis que carregam automaticamente a comparação selecionada.
- Botão para copiar o link da comparação.
- Botão para iniciar uma nova comparação.
- Layout responsivo para computadores e dispositivos móveis.
- Animações durante a rolagem da página.
- Navbar fixa e inteligente, que desaparece ao rolar para baixo e reaparece ao rolar para cima.
- Navegação suave entre as seções do site (smooth scrolling).

## Catálogo de veículos

Atualmente, o Auto Compare conta com **9 veículos da linha 2026**:

1. Volkswagen Polo Track 1.0 MPI
2. Chevrolet Onix 1.0 MT
3. Hyundai HB20 Sense 1.0
4. Volkswagen T-Cross Sense 200 TSI
5. Chevrolet Tracker Turbo AT
6. Toyota Corolla GLi 2.0
7. Fiat Argo Drive 1.0
8. Renault Kwid Zen 1.0
9. Fiat Mobi Like 1.0

## Tecnologias utilizadas

- **HTML5:** estrutura e organização da página.
- **CSS3:** estilização, responsividade e animações.
- **JavaScript:** lógica de comparação, cálculo de pontuação, preenchimento dos seletores e compartilhamento por URL.

## Estrutura do projeto

```text
comprador-carros/
├── index.html
├── style.css
├── script.js
├── carros.js
├── README.md
└── img/
```

O arquivo `carros.js` armazena as informações dos veículos, enquanto `script.js` contém a lógica de comparação e as funcionalidades interativas.

Os seletores são preenchidos automaticamente a partir dos veículos cadastrados em `carros.js`, facilitando a expansão do catálogo.

## Como executar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` utilizando a extensão Live Server.
4. Selecione dois veículos e clique em **Comparar**.

O projeto não exige instalação de dependências externas.

## Site publicado

O **Auto Compare** está publicado e disponível gratuitamente na internet por meio do Cloudflare Pages.

**Acesse o projeto:** https://auto-compare.pages.dev/

O site pode ser acessado por computadores, tablets e smartphones, sem necessidade de instalar programas.

### Hospedagem e atualizações

- **Plataforma:** Cloudflare Pages.
- **Controle de versão:** Git e GitHub.
- **Repositório:** privado.
- **Branch de produção:** `main`.
- **Publicação:** integrada ao GitHub, permitindo novas implantações após atualizações na branch principal.


## Compartilhamento de comparações

O Auto Compare permite compartilhar comparações por meio de parâmetros na URL.

Exemplo:

```text
?carro1=polo&carro2=onix
```

Ao abrir um link com parâmetros válidos, o site seleciona automaticamente os dois veículos e executa a comparação.

## Status do projeto

**Publicado — em desenvolvimento contínuo.**

O Auto Compare possui uma versão pública funcional, hospedada no Cloudflare Pages.

O projeto continuará recebendo melhorias visuais, novas funcionalidades e atualizações no catálogo de veículos.

**Acesse o site:** https://auto-compare.pages.dev/
