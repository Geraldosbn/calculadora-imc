//capturar evento de submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    console.log(imc, nivelImc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    
    historico();

})
// calculo para saber o indice de obesidade
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
// calculo para descobrir o imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
// função para setar o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
// função para criar o paragrafo
function criaP() {
    const p = document.createElement('p');
    return p;
}
// função para criar o historico de consultas
function historico(){
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const tb = document.getElementById('tbHistorico');
    const qtdLinhas = tb.rows.length;
    const linha = tb.insertRow(qtdLinhas);

    const cellCod = linha.insertCell(0)
    const cellImc = linha.insertCell(1);
    const cellResultado = linha.insertCell(2);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    cellCod.innerHTML = qtdLinhas;
    cellImc.innerHTML = imc;
    cellResultado.innerHTML = nivelImc;

    if (qtdLinhas = 4) {
        qtdLinhas--;
    }
}