const botaoComparar = document.getElementById("comparar");
const carro1 = document.getElementById("carro1");
const carro2 = document.getElementById("carro2");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
const secaoComparacao = document.querySelector(".comparacao");


const carros = {

    polo: {
        nome: "Volkswagen Polo Track 1.0 MPI",
        imagem: "img/polo.webp",
        motor: "1.0 MPI Flex",
        cilindrada: 999,

        potenciaEtanol: 84,
        potenciaGasolina: 77,

        torqueEtanol: 10.3,
        torqueGasolina: 9.6,

        cambio: "Manual de 5 marchas",

        consumoCidadeEtanol: 9.3,
        consumoEstradaEtanol: 10.9,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 15.7,

        zeroACemEtanol: 13.4,
        zeroACemGasolina: 13.8,

        velocidadeMaximaEtanol: 170,
        velocidadeMaximaGasolina: 165,

        portaMalas: 300,
        peso: 1051,

        comprimento: 4079,
        largura: 1751,
        altura: 1471,
        entreEixos: 2566
    },


    onix: {
        nome: "Chevrolet Onix 1.0 MT",
        imagem: "img/onix.jpg",
        motor: "1.0 aspirado Flex",
        cilindrada: 999,

        potenciaEtanol: 82,
        potenciaGasolina: 80,

        torqueEtanol: 10.6,
        torqueGasolina: 10.2,

        cambio: "Manual de 6 marchas",

        consumoCidadeEtanol: 9.5,
        consumoEstradaEtanol: 11.3,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 16.3,

        zeroACemEtanol: null,
        zeroACemGasolina: null,

        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        portaMalas: 303,
        peso: 1049,

        comprimento: 4169,
        largura: 1746,
        altura: 1473,
        entreEixos: 2551
    },


    hb20: {
        nome: "Hyundai HB20 Sense 1.0",
        imagem: "img/hb20.webp",
        motor: "Kappa 1.0 12V Flex",
        cilindrada: 998,

        potenciaEtanol: 80,
        potenciaGasolina: 75,

        torqueEtanol: 10.2,
        torqueGasolina: 9.6,

        cambio: "Manual de 5 marchas",

        consumoCidadeEtanol: 9.6,
        consumoEstradaEtanol: 10.4,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 14.6,

        zeroACemEtanol: 14.5,
        zeroACemGasolina: 15.4,

        velocidadeMaximaEtanol: 161,
        velocidadeMaximaGasolina: 158,

        portaMalas: 300,
        peso: null,

        comprimento: null,
        largura: null,
        altura: null,
        entreEixos: null
    },


    tcross: {
        nome: "Volkswagen T-Cross Sense 200 TSI",
        imagem: "img/t-cross.webp",
        motor: "1.0 TSI Turbo Flex",
        cilindrada: 999,

        potenciaEtanol: 128,
        potenciaGasolina: 116,

        torqueEtanol: 20.4,
        torqueGasolina: 20.4,

        cambio: "Automático de 6 marchas",

        consumoCidadeEtanol: 8.5,
        consumoEstradaEtanol: 10.2,
        consumoCidadeGasolina: 12.1,
        consumoEstradaGasolina: 14.5,

        zeroACemEtanol: 10.0,
        zeroACemGasolina: 10.4,

        velocidadeMaximaEtanol: 192,
        velocidadeMaximaGasolina: 188,

        portaMalas: 373,
        peso: 1259,

        comprimento: 4218,
        largura: 1760,
        altura: 1571,
        entreEixos: 2651
    },


    tracker: {
        nome: "Chevrolet Tracker Turbo AT",
        imagem: "img/tracker.jpg",
        motor: "1.0 Turbo Flex",
        cilindrada: 999,

        potenciaEtanol: 117,
        potenciaGasolina: 115.5,

        torqueEtanol: 18.9,
        torqueGasolina: 18.3,

        cambio: "Automático de 6 marchas",

        consumoCidadeEtanol: 8.1,
        consumoEstradaEtanol: 9.9,
        consumoCidadeGasolina: 11.5,
        consumoEstradaGasolina: 13.8,

        zeroACemEtanol: null,
        zeroACemGasolina: null,

        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        portaMalas: 393,
        peso: null,

        comprimento: 4300,
        largura: 1790,
        altura: 1620,
        entreEixos: 2570
    },


    corolla: {
        nome: "Toyota Corolla GLi 2.0",
        imagem: "img/corolla.jpg",
        motor: "2.0 Dynamic Force Flex",
        cilindrada: 1987,

        potenciaEtanol: 175,
        potenciaGasolina: null,

        torqueEtanol: 21.3,
        torqueGasolina: null,

        cambio: "Direct Shift CVT",

        consumoCidadeEtanol: 8.0,
        consumoEstradaEtanol: 10.0,
        consumoCidadeGasolina: 11.9,
        consumoEstradaGasolina: 14.5,

        zeroACemEtanol: null,
        zeroACemGasolina: null,

        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        portaMalas: 470,
        peso: null,

        comprimento: 4630,
        largura: 1780,
        altura: 1455,
        entreEixos: 2700
    }
};


botaoComparar.addEventListener("click", function() {

    if (carro1.value === "" || carro2.value === "") {
        mensagem.textContent = "Selecione os dois carros.";
        return;
    }


    if (carro1.value === carro2.value) {
        mensagem.textContent = "Escolha dois carros diferentes.";
        return;
    }


    mensagem.textContent = "";


    const primeiroCarro = carros[carro1.value];
    const segundoCarro = carros[carro2.value];


    resultado.innerHTML = `

    <div class="topo-comparacao">

        <div class="carro-comparado">

            <div class="imagem-carro">
                <img src="${primeiroCarro.imagem}" alt="${primeiroCarro.nome}">
            </div>

            <h3>${primeiroCarro.nome}</h3>

        </div>


        <div class="carro-comparado">

            <div class="imagem-carro">
                <img src="${segundoCarro.imagem}" alt="${segundoCarro.nome}">
            </div>

            <h3>${segundoCarro.nome}</h3>

        </div>

    </div>


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


    <div class="categoria-comparacao">

        <h3>Potência</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${primeiroCarro.potenciaEtanol} cv</p>
                <small>Etanol</small>

                <p>${primeiroCarro.potenciaGasolina ?? "Não informado"} cv</p>
                <small>Gasolina</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${segundoCarro.potenciaEtanol} cv</p>
                <small>Etanol</small>

                <p>${segundoCarro.potenciaGasolina ?? "Não informado"} cv</p>
                <small>Gasolina</small>

            </div>

        </div>

    </div>


    <div class="categoria-comparacao">

        <h3>Torque</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${primeiroCarro.torqueEtanol} kgfm</p>
                <small>Etanol</small>

                <p>${primeiroCarro.torqueGasolina ?? "Não informado"} kgfm</p>
                <small>Gasolina</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${segundoCarro.torqueEtanol} kgfm</p>
                <small>Etanol</small>

                <p>${segundoCarro.torqueGasolina ?? "Não informado"} kgfm</p>
                <small>Gasolina</small>

            </div>

        </div>

    </div>


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


    <div class="categoria-comparacao">

        <h3>Consumo</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>${primeiroCarro.consumoCidadeEtanol} km/l</p>
                <small>Cidade - Etanol</small>

                <p>${primeiroCarro.consumoEstradaEtanol} km/l</p>
                <small>Estrada - Etanol</small>

                <p>${primeiroCarro.consumoCidadeGasolina} km/l</p>
                <small>Cidade - Gasolina</small>

                <p>${primeiroCarro.consumoEstradaGasolina} km/l</p>
                <small>Estrada - Gasolina</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>${segundoCarro.consumoCidadeEtanol} km/l</p>
                <small>Cidade - Etanol</small>

                <p>${segundoCarro.consumoEstradaEtanol} km/l</p>
                <small>Estrada - Etanol</small>

                <p>${segundoCarro.consumoCidadeGasolina} km/l</p>
                <small>Cidade - Gasolina</small>

                <p>${segundoCarro.consumoEstradaGasolina} km/l</p>
                <small>Estrada - Gasolina</small>

            </div>

        </div>

    </div>


    <div class="categoria-comparacao">

        <h3>Desempenho</h3>

        <div class="valores-categoria">

            <div class="valor-carro">

                <strong>${primeiroCarro.nome}</strong>

                <p>
                    ${primeiroCarro.zeroACemEtanol !== null
                        ? primeiroCarro.zeroACemEtanol + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Etanol</small>

                <p>
                    ${primeiroCarro.zeroACemGasolina !== null
                        ? primeiroCarro.zeroACemGasolina + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Gasolina</small>

                <p>
                    ${primeiroCarro.velocidadeMaximaEtanol !== null
                        ? primeiroCarro.velocidadeMaximaEtanol + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Etanol</small>

                <p>
                    ${primeiroCarro.velocidadeMaximaGasolina !== null
                        ? primeiroCarro.velocidadeMaximaGasolina + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Gasolina</small>

            </div>


            <div class="valor-carro">

                <strong>${segundoCarro.nome}</strong>

                <p>
                    ${segundoCarro.zeroACemEtanol !== null
                        ? segundoCarro.zeroACemEtanol + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Etanol</small>

                <p>
                    ${segundoCarro.zeroACemGasolina !== null
                        ? segundoCarro.zeroACemGasolina + " s"
                        : "Não informado"}
                </p>
                <small>0–100 km/h - Gasolina</small>

                <p>
                    ${segundoCarro.velocidadeMaximaEtanol !== null
                        ? segundoCarro.velocidadeMaximaEtanol + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Etanol</small>

                <p>
                    ${segundoCarro.velocidadeMaximaGasolina !== null
                        ? segundoCarro.velocidadeMaximaGasolina + " km/h"
                        : "Não informado"}
                </p>
                <small>Velocidade máxima - Gasolina</small>

            </div>

        </div>

    </div>


    <div class="categoria-comparacao">

        <h3>Dimensões</h3>

        <div class="valores-categoria">

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

                <p>
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

                <p>
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

`;

const categorias = document.querySelectorAll(".categoria-comparacao");

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


categorias.forEach(function(categoria) {

    observador.observe(categoria);

});    

    secaoComparacao.scrollIntoView({
        behavior: "smooth"
    });

}); 