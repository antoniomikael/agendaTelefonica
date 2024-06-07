document.getElementById('phone').addEventListener('input', function (e) {
    var x = this.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    this.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
});

const inputNome = document.getElementById('name');
const form = document.getElementById('form');
const nomes = [];

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    nomes.push(inputNome.value);
    console.log(nomes);

})