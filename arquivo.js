
function AddCarrinho(id) {
  var Quantidade = document.getElementById(id);
  validador = isNumber(Quantidade.value);

  if (validador == false){
    console.log("Favor colocar um numero valido");
    document.getElementById(id).value = 0; 
  }else{
    if (Quantidade.value > 0){
      console.log("entrou");
      CiarElemento(id, Quantidade.value );
      var adicionar = VerificarExistente(carrinho);
      if (adicionar == []){
        for (let itens of adicionar){
          CiarElemento(itens);
        };
      };
      document.getElementById(id).value = 0; 
    }else{
      console.log("Impossivel colocar 0 no carrinho");
    };
  };
};

function CiarElemento(id,dados){
  if (id != ""){
    NomeId = "nome"+" "+ id;
    var nome = document.getElementById(NomeId).innerText;
    var li = document.createElement("li");
    var textli = document.createTextNode(dados + "X" +" " + nome);
    li.appendChild(textli);
    document.getElementById("carrinho").appendChild(li);
  }else{
    var li = document.createElement("li");
    var textli = document.createTextNode(dados);
    document.getElementById("carrinho").appendChild(li);
  };
};

function VerificarExistente(id) {
  var itens = id.children;
  total = id.children.length;
  var p = 0;
  var i = 1;
  del = [];
  add = [];
  while (p < total) {
    itemP = itens[p].innerText;
    itemP = itemP.replace(/[0-9]+/, '');
    while (i < total) {
      itemI = itens[i].innerText;
      itemI = itemI.replace(/[0-9]+/, '');
      if (itemP == itemI){
        itens[p].parentNode.removeChild(itens[p]);
      };
      i++;
    };
    p++;
    i = p+1;
  };
};


function less(id) {
  id = id.replace(/\D/gim, '');
  var tag = document.getElementById(id);
  numero = tag.value;
  numero--;
  setValue(numero, id);
};

function more(id) {
  id = id.replace(/\D/gim, '');
  var tag = document.getElementById(id);
  numero = tag.value;
  numero++;
  setValue(numero, id);
};

function setValue(value, id) {
  if (value < 0){
    value = 0;
    document.getElementById(id).value = value;    
  }else{
    document.getElementById(id).value = value;
  };
};

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}