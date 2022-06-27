var qtdCavalos = 0;
var cavalos = [];
var qtdTurfes = 0;
var rodadas = 0;
var vencedor = '';
var menor = 999;
var segundo = 999;
var cavaloSegundo = '';
var terceiro = 999;
var cavaloTerceiro = '';

function cadastrar_qtdCavalo() {

    if (quantidadeCavalos.value < 2 || quantidadeCavalos.value > 6) {
        alert('Erro na quantidade de cavalos');
        quantidadeCavalos.value = "";
    }

    else {
        qtdCavalos = Number(quantidadeCavalos.value);
        proximo();
    }

}

function cadastrar_nomeCavalo() {
    var nome = nomeCavalo.value;

    if (nome == '') {
        alert("Por favor, insira um nome coerente, seu cavalo existe");
    }

    else {
        if (cavalos.length < qtdCavalos) {
            cavalos.push({
                'nome': `${nome}`,
                'tempo': 0,
                'tempoAcumulado': 0
            });

            cavalinhos.innerHTML += `${nome} <br>`;
        }

        else {
            alert('Quantidade de cavalos já preenchidas');
        }

        if (cavalos.length == qtdCavalos) {
            btnp.style.display = 'block';
            btni.style.display = 'none';
            insertC.style.display = 'none';
        }
    }

    jaexiste = 0;
    nomeCavalo.value = "";
}

function cadastrar_qtdTurfe() {
    qtdTurfes = Number(qtdTurfe.value);
    if (qtdTurfes < 1) {
        alert("Precisa ter pelo menos uma volta");
    }

    else {
        proximo3();
    }
}

function rodada() {
    pp.innerHTML = 'Dar volta'
    venced.style.display = 'flex';
    if (qtdCavalos == 2) {
        barraterc.style.display = 'none';
        barraterc2.style.display = 'none';
    }
    if (rodadas < qtdTurfes) {
        for (var i = 0; i < qtdCavalos; i++) {
            var numeroAleatorio = (Math.random() * 2 + 7).toFixed(1);
            cavalos[i].tempo = Number(numeroAleatorio);
            cavalos[i].tempoAcumulado += Number(numeroAleatorio);
        }

        for (var i = 0; i < (qtdCavalos - 1); i++) {
            if (cavalos[i].tempoAcumulado == cavalos[i + 1].tempoAcumulado) {
                // alert("eita que deu empate");
                cavalos[i].tempo = cavalos[i].tempo + 0.1;
                cavalos[i].tempoAcumulado = cavalos[i].tempoAcumulado + 0.1;
            }
        }

        rodadas++;

        turfinho.innerHTML += ` <br> <br> Volta ${rodadas} <br>`;

        for (var i = 0; i < qtdCavalos; i++) {
            var sep = '';
            if (i > 0) {
                sep = '-';
            }
            turfinho.innerHTML += ` ${sep} ${cavalos[i].nome} - ${cavalos[i].tempo.toFixed(1)} - ${cavalos[i].tempoAcumulado.toFixed(1)}`;
        }
        verificarVencedor();
    }

    else {
        alert("acabou as rodadas");
    }
}


function verificarVencedor() {

    for (var i = 0; i < qtdCavalos; i++) {
        if (cavalos[i].tempoAcumulado < menor) {
            menor = cavalos[i].tempoAcumulado;
            vencedor = cavalos[i].nome;
            nomeven.innerHTML = vencedor;
            nomeven2.innerHTML = vencedor;
            vencedorrr.innerHTML = vencedor;
        }
    }


    for (var i = 0; i < qtdCavalos; i++) {
        if (cavalos[i].tempoAcumulado > menor && cavalos[i].tempoAcumulado < segundo) {
            segundo = cavalos[i].tempoAcumulado;
            cavaloSegundo = cavalos[i].nome;
            nomeseg.innerHTML = cavaloSegundo;
            nomeseg2.innerHTML = cavaloSegundo;
        }
    }

    for (var i = 0; i < qtdCavalos; i++) {
        if (cavalos[i].tempoAcumulado > segundo && cavalos[i].tempoAcumulado < terceiro) {
            terceiro = cavalos[i].tempoAcumulado;
            cavaloTerceiro = cavalos[i].nome;
            nometerc.innerHTML = cavaloTerceiro;
            nometerc2.innerHTML = cavaloTerceiro;
        }
    }

    if (rodadas == qtdTurfes) {
        container5.style.display = "none";
        container7.style.display = "flex";
    }

    var diferenca = segundo - menor;
    dif.innerHTML = `O cavalo <b> ${cavaloSegundo}</b> está atrás do <b> ${vencedor} </b> por ${diferenca.toFixed(1)}!!`;

    cavaloSegundo = '';
    segundo = 999;
    vencedor = '';
    menor = 999;
    cavaloTerceiro = '';
    terceiro = 999;
}