const carros = {

    polo: {
        nome: "Volkswagen Polo Track 1.0 MPI",
        preco: 91722,
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
        preco: 96257,
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
        preco: 78456,
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
        preco: 119990,
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
        preco: 120510,
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
        preco: 169666,
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
    },

    argo:{
        nome: "Fiat Argo Drive 1.0",
        preco: 93632,
        imagem: "img/argo.jpg",

        motor: "1.0 FireFly Flex",
        cilindrada: 999,

        potenciaEtanol: 75,
        potenciaGasolina: 71,

        torqueEtanol: 10.7,
        torqueGasolina: 10.0,

        cambio: "Manual 5 marchas",

        consumoCidadeEtanol: 9.4,
        consumoEstradaEtanol: 10.4,

        consumoCidadeGasolina: 13.6,
        consumoEstradaGasolina: 15.1,

        zeroACemEtanol: 14.4,
        zeroACemGasolina: 15.1,

        velocidadeMaximaEtanol: 161,
        velocidadeMaximaGasolina: 166,

        portaMalas: 327,
        peso: 1083,

        comprimento: 4031,
        largura: 1724,
        altura: 1514,
        entreEixos: 2521
    },

    kwid: {
        nome: "Renault Kwid Zen 1.0",
        preco: 70074,
        imagem: "img/kwid.webp",

        motor: "1.0 SCe Flex",
        cilindrada: 999,

        potenciaEtanol: 71,
        potenciaGasolina: 68,

        torqueEtanol: 10.0,
        torqueGasolina: 9.4,

        cambio: "Manual de 5 marchas",

        consumoCidadeEtanol: 10.4,
        consumoEstradaEtanol: 10.7,

        consumoCidadeGasolina: 14.4,
        consumoEstradaGasolina: 15.4,

        zeroACemEtanol: null,
        zeroACemGasolina: null,

        velocidadeMaximaEtanol: null,
        velocidadeMaximaGasolina: null,

        portaMalas: 290,
        peso: 818,

        comprimento: 3731,
        largura: 1579,
        altura: 1481,
        entreEixos: 2423
    },

        mobi: {
        nome: "Fiat Mobi Like 1.0",
        preco: 76775,
        imagem: "img/mobi.jpg",

        motor: "1.0 Firefly Flex",
        cilindrada: 999,

        potenciaEtanol: 75,
        potenciaGasolina: 71,

        torqueEtanol: 10.7,
        torqueGasolina: 10.0,

        cambio: "Manual de 5 marchas",

        consumoCidadeEtanol: 10.1,
        consumoEstradaEtanol: 11.1,

        consumoCidadeGasolina: 14.5,
        consumoEstradaGasolina: 15.8,

        zeroACemEtanol: 13.8,
        zeroACemGasolina: 14.7,

        velocidadeMaximaEtanol: 164,
        velocidadeMaximaGasolina: 161,

        portaMalas: 200,
        peso: 955,

        comprimento: 3596,
        largura: 1666,
        altura: 1553,
        entreEixos: 2304
    }
};