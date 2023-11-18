function calcularSomatorio() {
    const numero = parseInt(document.getElementById('numero').value);
    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    document.getElementById('resultado').innerText = `O somatório é: ${soma}`;
}
