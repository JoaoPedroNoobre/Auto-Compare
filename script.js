// ============================================================
// AUTO COMPARE - LÓGICA E FUNCIONALIDADES
// ============================================================


// ============================================================
// 01 - REFERÊNCIAS AOS ELEMENTOS DO HTML
// ============================================================

const botaoComparar = document.getElementById("comparar");

const carro1 = document.getElementById("carro1");

const carro2 = document.getElementById("carro2");

const mensagem = document.getElementById("mensagem");

const resultado = document.getElementById("resultado");

const secaoComparacao = document.querySelector(".comparacao");


// ============================================================
// 02 - PREENCHIMENTO AUTOMÁTICO DOS SELETORES
// ============================================================

function preencherSeletores(){

    const opcaoPadrao = '<option value="">Selecione um carro</option>';

    carro1.innerHTML = opcaoPadrao;
    carro2.innerHTML =opcaoPadrao;

    // PERCORRE TODOS OS VEÍCULOS CADASTRADOS

    Object.keys(carros).forEach(function(codigo){

        const nome = carros[codigo].nome;

        // ADICIONA CADA CARRO AOS DOIS SELETORES

        carro1.add(new Option(nome, codigo));
        carro2.add(new Option(nome, codigo));

    });
}

// EXECUTA O PREENCHIMENTO DOS SELETORES

preencherSeletores();


// ============================================================
// 03 - COMPARAÇÃO DE VALORES
//      UTILIZADA QUANDO O MAIOR VALOR É MELHOR
// ============================================================

function compararMaior(valor1, valor2) {

    // IGNORA COMPARAÇÕES COM DADOS NÃO INFORMADOS

    if (valor1 === null || valor2 === null) {
        return ["", ""];
    }

    // VITÓRIA DO PRIMEIRO CARRO

    if (valor1 > valor2) {
        return ["vencedor", ""];
    }

    // VITÓRIA DO SEGUNDO CARRO

    if (valor2 > valor1) {
        return ["", "vencedor"];
    }

    // EMPATE

    return["empate", "empate"];
}


// ============================================================
// 04 - COMPARAÇÃO DE VALORES
//      UTILIZADA QUANDO O MENOR VALOR É MELHOR
// ============================================================

function compararMenor(valor1, valor2) {

    // IGNORA COMPARAÇÕES COM DADOS NÃO INFORMADOS

    if (valor1 === null || valor2 === null) {
        return ["", ""];
    }

    // VITÓRIA DO PRIMEIRO CARRO

    if (valor1 < valor2) {
        return ["vencedor", ""];
    }

    // VITÓRIA DO SEGUNDO CARRO

    if (valor2 < valor1) {
        return ["", "vencedor"];
    }

    // EMPATE

    return["empate", "empate"];
}


// ============================================================
// 05 - FORMATAÇÃO DOS PREÇOS EM REAIS
// ============================================================

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0
    });
}


// ============================================================
// 06 - EVENTO DO BOTÃO COMPARAR
// ============================================================

botaoComparar.addEventListener("click", function() {


    // --------------------------------------------------------
    // 06.1 - VALIDAÇÃO DOS CARROS SELECIONADOS
    // --------------------------------------------------------

    // VERIFICA SE OS DOIS CAMPOS FORAM PREENCHIDOS

    if (carro1.value === "" || carro2.value === "") {
        mensagem.textContent = "Selecione os dois carros.";
        return;
    }

    // IMPEDE A COMPARAÇÃO DO MESMO CARRO

    if (carro1.value === carro2.value) {
        mensagem.textContent = "Escolha dois carros diferentes.";
        return;
    }

    // LIMPA A MENSAGEM DE VALIDAÇÃO

    mensagem.textContent = "";


    // --------------------------------------------------------
    // 06.2 - CRIAÇÃO DA URL COMPARTILHÁVEL
    // --------------------------------------------------------

    const parametros = new URLSearchParams();

    parametros.set("carro1", carro1.value);
    parametros.set("carro2", carro2.value);

    window.history.replaceState(
        null,
        "",
        "?" + parametros.toString()
    );


    // --------------------------------------------------------
    // 06.3 - RECUPERAÇÃO DOS DADOS DOS VEÍCULOS
    // --------------------------------------------------------

    const primeiroCarro = carros[carro1.value];
    const segundoCarro = carros[carro2.value];


    // ========================================================
    // 07 - COMPARAÇÃO DE POTÊNCIA E TORQUE
    // ========================================================

    // POTÊNCIA COM ETANOL

    const potencialEtanol = compararMaior(
        primeiroCarro.potenciaEtanol,
        segundoCarro.potenciaEtanol
    );

    // POTÊNCIA COM GASOLINA

    const potencialGasolina = compararMaior(
        primeiroCarro.potenciaGasolina,
        segundoCarro.potenciaGasolina
    );

    // TORQUE COM ETANOL

    const torqueEtanol = compararMaior(
        primeiroCarro.torqueEtanol,
        segundoCarro.torqueEtanol
    );

    // TORQUE COM GASOLINA

    const torqueGasolina = compararMaior(
        primeiroCarro.torqueGasolina,
        segundoCarro.torqueGasolina
    );


    // ========================================================
    // 08 - COMPARAÇÃO DE CONSUMO
    // ========================================================

    // CONSUMO URBANO COM ETANOL

    const consumoCidadeEtanol = compararMaior(
        primeiroCarro.consumoCidadeEtanol,
        segundoCarro.consumoCidadeEtanol
    );

    // CONSUMO RODOVIÁRIO COM ETANOL

    const consumoEstradaEtanol = compararMaior(
        primeiroCarro.consumoEstradaEtanol,
        segundoCarro.consumoEstradaEtanol
    );

    // CONSUMO URBANO COM GASOLINA

    const consumoCidadeGasolina = compararMaior(
        primeiroCarro.consumoCidadeGasolina,
        segundoCarro.consumoCidadeGasolina
    );

    // CONSUMO RODOVIÁRIO COM GASOLINA

    const consumoEstradaGasolina = compararMaior(
        primeiroCarro.consumoEstradaGasolina,
        segundoCarro.consumoEstradaGasolina
    );


    // ========================================================
    // 09 - COMPARAÇÃO DE DESEMPENHO
    // ========================================================

    // ACELERAÇÃO 0 A 100 KM/H COM ETANOL

    const zeroACemEtanol = compararMenor(
        primeiroCarro.zeroACemEtanol,
        segundoCarro.zeroACemEtanol
    );

    // ACELERAÇÃO 0 A 100 KM/H COM GASOLINA

    const zeroACemGasolina = compararMenor(
        primeiroCarro.zeroACemGasolina,
        segundoCarro.zeroACemGasolina
    );

    // VELOCIDADE MÁXIMA COM ETANOL

    const velocidadeMaximaEtanol = compararMaior(
        primeiroCarro.velocidadeMaximaEtanol,
        segundoCarro.velocidadeMaximaEtanol
    );

    // VELOCIDADE MÁXIMA COM GASOLINA

    const velocidadeMaximaGasolina = compararMaior(
        primeiroCarro.velocidadeMaximaGasolina,
        segundoCarro.velocidadeMaximaGasolina
    );


    // ========================================================
    // 10 - COMPARAÇÃO DO PORTA-MALAS E DOS PREÇOS
    // ========================================================

    // CAPACIDADE DO PORTA-MALAS

    const portaMalas = compararMaior(
        primeiroCarro.portaMalas,
        segundoCarro.portaMalas
    );

    // MENOR PREÇO

    const preco = compararMenor(
        primeiroCarro.preco,
        segundoCarro.preco
    );

    // DIFERENÇA ABSOLUTA ENTRE OS PREÇOS

    const diferencaPreco =
        Math.abs(primeiroCarro.preco - segundoCarro.preco);


    // ========================================================
    // 11 - SISTEMA DE PONTUAÇÃO
    // ========================================================

    // PONTUAÇÕES INICIAIS

    let pontosPrimeiroCarro = 0;
    let pontosSegundoCarro = 0;

    // LISTA DE TODAS AS COMPARAÇÕES QUE VALEM PONTOS

    const comparacoes = [
        potencialEtanol,
        potencialGasolina,
        torqueEtanol,
        torqueGasolina,
        consumoCidadeEtanol,
        consumoEstradaEtanol,
        consumoCidadeGasolina,
        consumoEstradaGasolina,
        zeroACemEtanol,
        zeroACemGasolina,
        velocidadeMaximaEtanol,
        velocidadeMaximaGasolina,
        portaMalas,
        preco
    ];

    // CONTABILIZA OS CRITÉRIOS VENCIDOS POR CADA CARRO

    comparacoes.forEach(function(comparacao) {

        if (comparacao[0] === "vencedor") {
            pontosPrimeiroCarro++;
        }

        if (comparacao[1] === "vencedor") {
            pontosSegundoCarro++;
        }

    });


    // ========================================================
    // 12 - DEFINIÇÃO DO RESULTADO FINAL
    // ========================================================

    let textoResultado = "";

    // PRIMEIRO CARRO VENCE

    if (pontosPrimeiroCarro > pontosSegundoCarro) {

        textoResultado = primeiroCarro.nome + " venceu a comparação.";

    }

    // SEGUNDO CARRO VENCE

    else if (pontosSegundoCarro > pontosPrimeiroCarro) {

        textoResultado = segundoCarro.nome + " venceu a comparação.";

    }

    // EMPATE NA PONTUAÇÃO

    else {

        textoResultado = " A comparação terminou em empate.";

    }


    // ========================================================
    // 13 - GERAÇÃO DO HTML DOS RESULTADOS
    // ========================================================

    resultado.innerHTML = `


    <!-- ======================================================
         13.1 - CARTÕES SUPERIORES DOS VEÍCULOS
    ======================================================= -->

    <div class="topo-comparacao">

        <!-- PRIMEIRO VEÍCULO -->

        <div class="carro-comparado">

            <div class="imagem-carro">
                <img src="${primeiroCarro.imagem}" alt="${primeiroCarro.nome}">
            </div>

            <h3>${primeiroCarro.nome}</h3>

        </div>


        <!-- SEGUNDO VEÍCULO -->

        <div class="carro-comparado">

            <div class="imagem-carro">
                <img src="${segundoCarro.imagem}" alt="${segundoCarro.nome}">
            </div>

            <h3>${segundoCarro.nome}</h3>

        </div>

    </div>


    <!-- ======================================================
         13.2 - CATEGORIA: MOTOR
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Motor</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${primeiroCarro.motor}</p>

                <small>${primeiroCarro.cilindrada} cm³</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${segundoCarro.motor}</p>

                <small>${segundoCarro.cilindrada} cm³</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.3 - CATEGORIA: POTÊNCIA
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Potência</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p class="${potencialEtanol[0]}">
                    ${primeiroCarro.potenciaEtanol} cv
                </p>
                <small>Etanol</small>

                <p class="${potencialGasolina[0]}">
                    ${primeiroCarro.potenciaGasolina ?? "Não informado"} cv
                </p>
                <small>Gasolina</samll>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p class="${potencialEtanol[1]}">
                    ${segundoCarro.potenciaEtanol} cv
                </p>
                <small>Etanol</small>

                <p class="${potencialGasolina[1]}">
                    ${segundoCarro.potenciaGasolina ?? "Não informado"} cv
                </p>
                <small>Gasolina</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.4 - CATEGORIA: TORQUE
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Torque</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p class="${torqueEtanol[0]}">
                    ${primeiroCarro.torqueEtanol} kgfm
                </p>
                <small>Etanol</small>

                <p class="${torqueGasolina[0]}">
                    ${primeiroCarro.torqueGasolina ?? "Não informado"} kgfm
                </p>
                <small>Gasolina</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p class="${torqueEtanol[1]}">
                    ${segundoCarro.torqueEtanol} kgfm
                </p>
                <small>Etanol</small>

                <p class="${torqueGasolina[1]}">
                    ${segundoCarro.torqueGasolina ?? "Não informado"} kgfm
                </p>
                <small>Gasolina</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.5 - CATEGORIA: CÂMBIO
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Câmbio</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${primeiroCarro.cambio}</p>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${segundoCarro.cambio}</p>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.6 - CATEGORIA: PREÇO
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Preço</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p class="${preco[0]}">
                    ${formatarPreco(primeiroCarro.preco)}
                </p>

                <small>Valor de referência</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p class="${preco[1]}">
                    ${formatarPreco(segundoCarro.preco)}
                </p>

                <small>Valor de referencia</small>

            </div>

        </div>

        <!-- DIFERENÇA ENTRE OS PREÇOS -->

        <p class="diferenca-preco">
            Variação entre os preços: ${formatarPreco(diferencaPreco)}
        </p>

    </div>


    <!-- ======================================================
         13.7 - CATEGORIA: CONSUMO
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Consumo</h3>

        <div class="valores-categoria">

            <!-- CONSUMO DO PRIMEIRO CARRO -->

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p class="${consumoCidadeEtanol[0]}">
                    ${primeiroCarro.consumoCidadeEtanol} km/l
                </p>
                <small>Cidade - Etanol</small>

                <p class="${consumoEstradaEtanol[0]}">
                    ${primeiroCarro.consumoEstradaEtanol} km/l
                </p>
                <small>Estrada - Etanol</small>

                <p class="${consumoCidadeGasolina[0]}">
                    ${primeiroCarro.consumoCidadeGasolina} km/l
                </p>
                <small>Cidade - Gasolina</small>

                <p class="${consumoEstradaGasolina[0]}">
                    ${primeiroCarro.consumoEstradaGasolina} km/l
                </p>
                <small>Estrada - Gasolina</small>

            </div>


            <!-- CONSUMO DO SEGUNDO CARRO -->

            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p class="${consumoCidadeEtanol[1]}">
                    ${segundoCarro.consumoCidadeEtanol} km/l
                </p>
                <small>Cidade - Etanol</small>

                <p class="${consumoEstradaEtanol[1]}">
                    ${segundoCarro.consumoEstradaEtanol} km/l
                </p>
                <small>Estrada - Etanol</small>

                <p class="${consumoCidadeGasolina[1]}">
                    ${segundoCarro.consumoCidadeGasolina} km/l
                </p>
                <small>Cidade - Gasolina</small>

                <p class="${consumoEstradaGasolina[1]}">
                    ${segundoCarro.consumoEstradaGasolina} km/l
                </p>
                <small>Estrada - Gasolina</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.8 - CATEGORIA: DESEMPENHO
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Desempenho</h3>

        <div class="valores-categoria">

            <!-- DESEMPENHO DO PRIMEIRO CARRO -->

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p class="${zeroACemEtanol[0]}">
                    ${primeiroCarro.zeroACemEtanol !== null
                        ? primeiroCarro.zeroACemEtanol + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Etanol</small>

                <p class="${zeroACemGasolina[0]}">
                    ${primeiroCarro.zeroACemGasolina !== null
                        ? primeiroCarro.zeroACemGasolina + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Gasolina</small>

                <p class="${velocidadeMaximaEtanol[0]}">
                    ${primeiroCarro.velocidadeMaximaEtanol !== null
                        ? primeiroCarro.velocidadeMaximaEtanol + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Etanol</small>

                <p class="${velocidadeMaximaGasolina[0]}">
                    ${primeiroCarro.velocidadeMaximaGasolina !== null
                        ? primeiroCarro.velocidadeMaximaGasolina + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Gasolina</small>

            </div>


            <!-- DESEMPENHO DO SEGUNDO CARRO -->

            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p class="${zeroACemEtanol[1]}">
                    ${segundoCarro.zeroACemEtanol !== null
                        ? segundoCarro.zeroACemEtanol + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Etanol</small>

                <p class="${zeroACemGasolina[1]}">
                    ${segundoCarro.zeroACemGasolina !== null
                        ? segundoCarro.zeroACemGasolina + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Gasolina</small>

                <p class="${velocidadeMaximaEtanol[1]}">
                    ${segundoCarro.velocidadeMaximaEtanol !== null
                        ? segundoCarro.velocidadeMaximaEtanol + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Etanol</small>

                <p class="${velocidadeMaximaGasolina[1]}">
                    ${segundoCarro.velocidadeMaximaGasolina !== null
                        ? segundoCarro.velocidadeMaximaGasolina + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Gasolina</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.9 - CATEGORIA: DIMENSÕES
    ======================================================= -->

    <div class="categoria-comparacao">

        <h3>Dimensões</h3>

        <div class="valores-categoria">

            <!-- DIMENSÕES DO PRIMEIRO CARRO -->

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>
                    ${primeiroCarro.comprimento !== null
                        ? primeiroCarro.comprimento + " mm"
                        : "Não informado"}
                </p>
                <small>Comprimento</small>

                <p>
                    ${primeiroCarro.largura !== null
                        ? primeiroCarro.largura + " mm"
                        : "Não informado"}
                </p>
                <small>Largura</small>

                <p>
                    ${primeiroCarro.altura !== null
                        ? primeiroCarro.altura + " mm"
                        : "Não informado"}
                </p>
                <small>Altura</small>

                <p>
                    ${primeiroCarro.entreEixos !== null
                        ? primeiroCarro.entreEixos + " mm"
                        : "Não informado"}
                </p>
                <small>Entre-eixos</small>

                <p class="${portaMalas[0]}">
                    ${primeiroCarro.portaMalas !== null
                        ? primeiroCarro.portaMalas + " litros"
                        : "Não informado"}
                </p>
                <small>Porta-malas</small>

                <p>
                    ${primeiroCarro.peso !== null
                        ? primeiroCarro.peso + " kg"
                        : "Não informado"}
                </p>
                <small>Peso</small>

            </div>


            <!-- DIMENSÕES DO SEGUNDO CARRO -->

            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>
                    ${segundoCarro.comprimento !== null
                        ? segundoCarro.comprimento + " mm"
                        : "Não informado"}
                </p>
                <small>Comprimento</small>

                <p>
                    ${segundoCarro.largura !== null
                        ? segundoCarro.largura + " mm"
                        : "Não informado"}
                </p>
                <small>Largura</small>

                <p>
                    ${segundoCarro.altura !== null
                        ? segundoCarro.altura + " mm"
                        : "Não informado"}
                </p>
                <small>Altura</small>

                <p>
                    ${segundoCarro.entreEixos !== null
                        ? segundoCarro.entreEixos + " mm"
                        : "Não informado"}
                </p>
                <small>Entre-eixos</small>

                <p class="${portaMalas[1]}">
                    ${segundoCarro.portaMalas !== null
                        ? segundoCarro.portaMalas + " litros"
                        : "Não informado"}
                </p>
                <small>Porta-malas</small>

                <p>
                    ${segundoCarro.peso !== null
                        ? segundoCarro.peso + " kg"
                        : "Não informado"}
                </p>
                <small>Peso</small>

            </div>

        </div>

    </div>


    <!-- ======================================================
         13.10 - RESULTADO FINAL E PONTUAÇÃO
    ======================================================= -->

    <div class="resultado-final">

        <h3>Resultado</h3>

        <div class="placar-final">

            <!-- PONTUAÇÃO DO PRIMEIRO CARRO -->

            <div class="placar-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${pontosPrimeiroCarro}</p>

                <small>pontos</small>

            </div>


            <!-- PONTUAÇÃO DO SEGUNDO CARRO -->

            <div class="placar-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${pontosSegundoCarro}</p>

                <small>pontos</small>

            </div>

        </div>


        <!-- MENSAGEM DO RESULTADO -->

        <p class="resultado-vencedor">
            ${textoResultado}
        </p>


        <!-- BOTÃO PARA INICIAR OUTRA COMPARAÇÃO -->

        <button type="button" id="comparar-novamente">
            Comparar outros carros
        </button>


        <!-- BOTÃO DE COMPARTILHAMENTO -->

        <button type="button" id="copiar-link">
            Copiar link
        </button>

    </div>

    `;


    // ========================================================
    // 14 - FUNCIONALIDADE DE COPIAR LINK
    // ========================================================

    const botaoCopiarLink = document.getElementById("copiar-link");

    botaoCopiarLink.addEventListener("click", function(){

        navigator.clipboard.writeText(window.location.href)

            .then(function(){
                botaoCopiarLink.textContent = "Link copiado!";
            })

            .catch(function(){
                botaoCopiarLink.textContent = "Erro ao copiar";
            });

    });


    // ========================================================
    // 15 - SELEÇÃO DAS CATEGORIAS PARA ANIMAÇÃO
    // ========================================================

    const categorias = document.querySelectorAll(".categoria-comparacao");


    // ========================================================
    // 16 - BOTÃO PARA COMPARAR OUTROS CARROS
    // ========================================================

    const botaoCompararNovamente =
        document.getElementById("comparar-novamente");

    botaoCompararNovamente.addEventListener("click", function() {

        // LIMPA OS DOIS SELETORES

        carro1.value = "";
        carro2.value = "";

        // LIMPA A MENSAGEM

        mensagem.textContent = "";

        // VOLTA PARA A SEÇÃO DE SELEÇÃO

        document.querySelector(".selecao").scrollIntoView({
            behavior: "smooth"
        });

    });


    // ========================================================
    // 17 - ANIMAÇÃO DAS CATEGORIAS COM INTERSECTION OBSERVER
    // ========================================================

    const observador = new IntersectionObserver(function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("ativa");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.15
    });


    // OBSERVA TODAS AS CATEGORIAS DE COMPARAÇÃO

    categorias.forEach(function(categoria) {

        observador.observe(categoria);

    });


    // ========================================================
    // 18 - ROLAGEM SUAVE ATÉ O RESULTADO
    // ========================================================

    secaoComparacao.scrollIntoView({
        behavior: "smooth"
    });

});


// ============================================================
// 19 - LEITURA DOS PARÂMETROS DA URL
// ============================================================

const parametrosURL = new URLSearchParams(window.location.search);

const carro1URL = parametrosURL.get("carro1");
const carro2URL = parametrosURL.get("carro2");


// ============================================================
// 20 - CARREGAMENTO DE COMPARAÇÕES COMPARTILHADAS
// ============================================================

if (
    carros[carro1URL] &&
    carros[carro2URL] &&
    carro1URL !== carro2URL
) {

    carro1.value = carro1URL
    carro2.value = carro2URL

    botaoComparar.click();

}


// ============================================================
// 21 - NAVBAR INTELIGENTE
//      DESAPARECE AO DESCER E REAPARECE AO SUBIR
// ============================================================

// IDENTIFICA A BARRA DE NAVEGAÇÃO

const navbar = document.querySelector(".navbar");

// ARMAZENA A POSIÇÃO ANTERIOR DA ROLAGEM

let ultimaPosicaoScroll = window.scrollY;

// MONITORA A ROLAGEM DA PÁGINA

window.addEventListener("scroll", function() {

    const posicaoScrollAtual = window.scrollY;

    // IGNORA MOVIMENTOS MUITO PEQUENOS

    if (Math.abs(posicaoScrollAtual - ultimaPosicaoScroll) < 5) {
        return;
    }

    // MANTÉM A NAVBAR VISÍVEL PRÓXIMO AO TOPO

    if (posicaoScrollAtual <= 20) {

        navbar.classList.remove("oculta");

    }

    // ESCONDE A NAVBAR AO ROLAR PARA BAIXO

    else if (posicaoScrollAtual > ultimaPosicaoScroll && posicaoScrollAtual > 100) {

        navbar.classList.add("oculta");

    }

    // MOSTRA A NAVBAR AO ROLAR PARA CIMA

    else if (posicaoScrollAtual < ultimaPosicaoScroll) {

        navbar.classList.remove("oculta");

    }

    // ATUALIZA A POSIÇÃO ANTERIOR

    ultimaPosicaoScroll = posicaoScrollAtual;

}, { passive: true });