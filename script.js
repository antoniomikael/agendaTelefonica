document.getElementById("phone").addEventListener("input", function (e) {
  var x = this.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  this.value = !x[2]
    ? x[1]
    : "(" + x[1] + ")" + x[2] + (x[3] ? "-" + x[3] : "");
});

const inputPhone = document.getElementById("phone");
const inputNome = document.getElementById("name");
const form = document.getElementById("form");
const nomes = [];
const phone = [];
let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nomes.includes(inputNome.value)) {
    alert("Contato ja foi inserido");
  }
  else if (phone.includes(inputPhone.value)) {
    alert("Contato ja foi inserido");

  }     
   else {
    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += "</tr>";
    linhas += linha;

    document.querySelector("tbody").innerHTML = linhas;
    nomes.push(inputNome.value);
    phone.push(inputPhone.value);
    document.getElementById('qtdeContato').innerHTML = nomes.length;
  }

});