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

## Compartilhamento de comparações

O Auto Compare permite compartilhar comparações por meio de parâmetros na URL.

Exemplo:

```text
?carro1=polo&car