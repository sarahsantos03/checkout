let resultado = document.getElementById('resultado');

document.getElementById('botao1').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);


    let valorAPagar = (preco + frete) * 0.90;
    resultado.innerText = `Total : R$ ${valorAPagar}`;
}
document.getElementById('botao2').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);


    let valorAPagar = (preco + frete) * 0.95;
    resultado.innerText = `Total : R$ ${valorAPagar}`;
}
document.getElementById('botao3').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);


    let valorAPagar = (preco + frete);
    resultado.innerText = `Total : R$ ${valorAPagar}`;
}
