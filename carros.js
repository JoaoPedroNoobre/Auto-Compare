// ============================================================
// AUTO COMPARE - CATÁLOGO DE VEÍCULOS
// ============================================================
// Este arquivo armazena os dados utilizados nas comparações.
// Cada propriedade representa uma especificação do veículo.
// ============================================================

const carros = {

    // ========================================================
    // 01 - VOLKSWAGEN POLO TRACK 1.0 MPI
    // ========================================================

    polo: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Volkswagen Polo Track 1.0 MPI",
        preco: 91722,
        imagem: "img/polo.webp",

        // MOTOR
        motor: "1.0 MPI Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 84,
        potenciaGasolina: 77,

        // TORQUE
        torqueEtanol: 10.3,
        torqueGasolina: 9.6,

        // TRANSMISSÃO
        cambio: "Manual de 5 marchas",

        // CONSUMO
        consumoCidadeEtanol: 9.3,
        consumoEstradaEtanol: 10.9,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 15.7,

        // ACELERAÇÃO
        zeroACemEtanol: 13.4,
        zeroACemGasolina: 13.8,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: 170,
        velocidadeMaximaGasolina: 165,

        // CAPACIDADE E PESO
        portaMalas: 300,
        peso: 1051,

        // DIMENSÕES
        comprimento: 4079,
        largura: 1751,
        altura: 1471,
        entreEixos: 2566
    },


    // ========================================================
    // 02 - CHEVROLET ONIX 1.0 MT
    // ========================================================

    onix: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Chevrolet Onix 1.0 MT",
        preco: 96257,
        imagem: "img/onix.jpg",

        // MOTOR
        motor: "1.0 aspirado Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 82,
        potenciaGasolina: 80,

        // TORQUE
        torqueEtanol: 10.6,
        torqueGasolina: 10.2,

        // TRANSMISSÃO
        cambio: "Manual de 6 marchas",

        // CONSUMO
        consumoCidadeEtanol: 9.5,
        consumoEstradaEtanol: 11.3,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 16.3,

        // ACELERAÇÃO
        zeroACemEtanol: null,
        zeroACemGasolina: null,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        // CAPACIDADE E PESO
        portaMalas: 303,
        peso: 1049,

        // DIMENSÕES
        comprimento: 4169,
        largura: 1746,
        altura: 1473,
        entreEixos: 2551
    },


    // ========================================================
    // 03 - HYUNDAI HB20 SENSE 1.0
    // ========================================================

    hb20: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Hyundai HB20 Sense 1.0",
        preco: 78456,
        imagem: "img/hb20.webp",

        // MOTOR
        motor: "Kappa 1.0 12V Flex",
        cilindrada: 998,

        // POTÊNCIA
        potenciaEtanol: 80,
        potenciaGasolina: 75,

        // TORQUE
        torqueEtanol: 10.2,
        torqueGasolina: 9.6,

        // TRANSMISSÃO
        cambio: "Manual de 5 marchas",

        // CONSUMO
        consumoCidadeEtanol: 9.6,
        consumoEstradaEtanol: 10.4,
        consumoCidadeGasolina: 13.5,
        consumoEstradaGasolina: 14.6,

        // ACELERAÇÃO
        zeroACemEtanol: 14.5,
        zeroACemGasolina: 15.4,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: 161,
        velocidadeMaximaGasolina: 158,

        // CAPACIDADE E PESO
        portaMalas: 300,
        peso: null,

        // DIMENSÕES
        comprimento: null,
        largura: null,
        altura: null,
        entreEixos: null
    },


    // ========================================================
    // 04 - VOLKSWAGEN T-CROSS SENSE 200 TSI
    // ========================================================

    tcross: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Volkswagen T-Cross Sense 200 TSI",
        preco: 119990,
        imagem: "img/t-cross.webp",

        // MOTOR
        motor: "1.0 TSI Turbo Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 128,
        potenciaGasolina: 116,

        // TORQUE
        torqueEtanol: 20.4,
        torqueGasolina: 20.4,

        // TRANSMISSÃO
        cambio: "Automático de 6 marchas",

        // CONSUMO
        consumoCidadeEtanol: 8.5,
        consumoEstradaEtanol: 10.2,
        consumoCidadeGasolina: 12.1,
        consumoEstradaGasolina: 14.5,

        // ACELERAÇÃO
        zeroACemEtanol: 10.0,
        zeroACemGasolina: 10.4,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: 192,
        velocidadeMaximaGasolina: 188,

        // CAPACIDADE E PESO
        portaMalas: 373,
        peso: 1259,

        // DIMENSÕES
        comprimento: 4218,
        largura: 1760,
        altura: 1571,
        entreEixos: 2651
    },


    // ========================================================
    // 05 - CHEVROLET TRACKER TURBO AT
    // ========================================================

    tracker: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Chevrolet Tracker Turbo AT",
        preco: 120510,
        imagem: "img/tracker.jpg",

        // MOTOR
        motor: "1.0 Turbo Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 117,
        potenciaGasolina: 115.5,

        // TORQUE
        torqueEtanol: 18.9,
        torqueGasolina: 18.3,

        // TRANSMISSÃO
        cambio: "Automático de 6 marchas",

        // CONSUMO
        consumoCidadeEtanol: 8.1,
        consumoEstradaEtanol: 9.9,
        consumoCidadeGasolina: 11.5,
        consumoEstradaGasolina: 13.8,

        // ACELERAÇÃO
        zeroACemEtanol: null,
        zeroACemGasolina: null,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        // CAPACIDADE E PESO
        portaMalas: 393,
        peso: null,

        // DIMENSÕES
        comprimento: 4300,
        largura: 1790,
        altura: 1620,
        entreEixos: 2570
    },


    // ========================================================
    // 06 - TOYOTA COROLLA GLI 2.0
    // ========================================================

    corolla: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Toyota Corolla GLi 2.0",
        preco: 169666,
        imagem: "img/corolla.jpg",

        // MOTOR
        motor: "2.0 Dynamic Force Flex",
        cilindrada: 1987,

        // POTÊNCIA
        potenciaEtanol: 175,
        potenciaGasolina: null,

        // TORQUE
        torqueEtanol: 21.3,
        torqueGasolina: null,

        // TRANSMISSÃO
        cambio: "Direct Shift CVT",

        // CONSUMO
        consumoCidadeEtanol: 8.0,
        consumoEstradaEtanol: 10.0,
        consumoCidadeGasolina: 11.9,
        consumoEstradaGasolina: 14.5,

        // ACELERAÇÃO
        zeroACemEtanol: null,
        zeroACemGasolina: null,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        // CAPACIDADE E PESO
        portaMalas: 470,
        peso: null,

        // DIMENSÕES
        comprimento: 4630,
        largura: 1780,
        altura: 1455,
        entreEixos: 2700
    },


    // ========================================================
    // 07 - FIAT ARGO DRIVE 1.0
    // ========================================================

    argo:{
        // IDENTIFICAÇÃO E PREÇO
        nome: "Fiat Argo Drive 1.0",
        preco: 93632,
        imagem: "img/argo.jpg",

        // MOTOR
        motor: "1.0 FireFly Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 75,
        potenciaGasolina: 71,

        // TORQUE
        torqueEtanol: 10.7,
        torqueGasolina: 10.0,

        // TRANSMISSÃO
        cambio: "Manual 5 marchas",

        // CONSUMO
        consumoCidadeEtanol: 9.4,
        consumoEstradaEtanol: 10.4,

        consumoCidadeGasolina: 13.6,
        consumoEstradaGasolina: 15.1,

        // ACELERAÇÃO
        zeroACemEtanol: 14.4,
        zeroACemGasolina: 15.1,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: 161,
        velocidadeMaximaGasolina: 166,

        // CAPACIDADE E PESO
        portaMalas: 327,
        peso: 1083,

        // DIMENSÕES
        comprimento: 4031,
        largura: 1724,
        altura: 1514,
        entreEixos: 2521
    },


    // ========================================================
    // 08 - RENAULT KWID ZEN 1.0
    // ========================================================

    kwid: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Renault Kwid Zen 1.0",
        preco: 70074,
        imagem: "img/kwid.webp",

        // MOTOR
        motor: "1.0 SCe Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 71,
        potenciaGasolina: 68,

        // TORQUE
        torqueEtanol: 10.0,
        torqueGasolina: 9.4,

        // TRANSMISSÃO
        cambio: "Manual de 5 marchas",

        // CONSUMO
        consumoCidadeEtanol: 10.4,
        consumoEstradaEtanol: 10.7,

        consumoCidadeGasolina: 14.4,
        consumoEstradaGasolina: 15.4,

        // ACELERAÇÃO
        zeroACemEtanol: null,
        zeroACemGasolina: null,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        // CAPACIDADE E PESO
        portaMalas: 290,
        peso: 818,

        // DIMENSÕES
        comprimento: 3731,
        largura: 1579,
        altura: 1481,
        entreEixos: 2423
    },


    // ========================================================
    // 09 - FIAT MOBI LIKE 1.0
    // ========================================================

    mobi: {
        // IDENTIFICAÇÃO E PREÇO
        nome: "Fiat Mobi Like 1.0",
        preco: 76775,
        imagem: "img/mobi.jpg",

        // MOTOR
        motor: "1.0 Firefly Flex",
        cilindrada: 999,

        // POTÊNCIA
        potenciaEtanol: 75,
        potenciaGasolina: 71,

        // TORQUE
        torqueEtanol: 10.7,
        torqueGasolina: 10.0,

        // TRANSMISSÃO
        cambio: "Manual de 5 marchas",

        // CONSUMO
        consumoCidadeEtanol: 10.1,
        consumoEstradaEtanol: 11.1,

        consumoCidadeGasolina: 14.5,
        consumoEstradaGasolina: 15.8,

        // ACELERAÇÃO
        zeroACemEtanol: 13.8,
        zeroACemGasolina: 14.7,

        // VELOCIDADE MÁXIMA
        velocidadeMaximaEtanol: 164,
        velocidadeMaximaGasolina: 161,

        // CAPACIDADE E PESO
        portaMalas: 200,
        peso: 955,

        // DIMENSÕES
        comprimento: 3596,
        largura: 1666,
        altura: 1553,
        entreEixos: 2304
    }
};