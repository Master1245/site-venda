function AddCarrinho(id) {
  var Quantidade = document.getElementById(id);
  preco = "preco"+" "+id;
  kg = document.getElementById(preco).innerText;
  kg = kg.replace(/[0-9,\.]+/g, '');
  // remover os dois primeiros caracteres (R$)
  kg = kg.substring(2);

  if (kg == "KG"){
    Quantidade.value = Quantidade.value.replace(",",".");
  }
  validador = isNumber(Quantidade.value);
  if (validador == false){
    alert("Digite um valor válido");
    document.getElementById(id).value = 0; 
  }else{

    if (Quantidade.value > 0){
      CiarElemento(id, Quantidade.value);
      ApagarItensDuplicados();
      valor(id);
      document.getElementById(id).value = 0; 
    }else{
      alert("Favor colocar um numero acima de 0");
    };
  };
};

function CiarElemento(id,dados){
  if (id != ""){
    NomeId = "nome"+" "+ id;
    preco = "preco"+" "+ id;
    var preco = document.getElementById(preco).innerText;
    var nome = document.getElementById(NomeId).innerText;
    var li = document.createElement("li");
    var text = document.createTextNode(dados + "X" +" "+ nome + " "+ preco);
    li.appendChild(text);
    li.setAttribute("id", id);
    document.getElementById("carrinho").appendChild(li);
  }else{
    var li = document.createElement("li");
    var textli = document.createTextNode(dados);
    li.appendChild(textli);
    document.getElementById("carrinho").appendChild(li);
  };
};

function ApagarItensDuplicados() {
  lista = document.getElementById("carrinho");
  for (i = 0; i < lista.children.length; i++) {
    for (j = i + 1; j < lista.children.length; j++) {
      if (lista.children[i].id == lista.children[j].id) {
        valor1 = lista.children[i].innerText;
        valor2 = lista.children[j].innerText;
        nome = valor1.replace(/[0-9.\.]+/g, '');
        valor1 = valor1.replace(/[^0-9.\.]+/g, '');
        valor2 = valor2.replace(/[^0-9.\.]+/g, '');
        total = parseFloat(valor1) + parseFloat(valor2);
        lista.children[i].innerText = total+nome;
        lista.removeChild(lista.children[j]);
      };
    };
  };
};

function valor(id) {
  id_preco  = "preco"+" "+ id;
  var preco = document.getElementById(id_preco).innerText;
  var precoT = document.getElementById("ValorT");
  var Quantidade = document.getElementById(id).value;


  preco2 = precoT.innerText;
  preco = preco.replace(",", ".");
  preco = preco.replace(/[^0-9.\.]+/g, '');
  preco2 = preco2.replace(/[^0-9.\.]+/g, '');

  preco = parseFloat(preco);
  preco2 = parseFloat(preco2);

  soma = preco * Quantidade + preco2;
  soma = soma.toFixed(2);
  precoT.innerText = "R$"+soma
  return "Ok";
}

function fechar_conta() {
  produto = [];
  preco =  [];
  Quantidade = [];
  itens = document.getElementById("carrinho");
  for (i = 0; i < itens.children.length; i++) {
    produto.push(itens.children[i].innerText);
  };

  for (i = 0; i < produto.length; i++) {
    produto[i] = produto[i].split("R$");  
    preco.push(produto[i][1]);    
    produto[i] = produto[i][0];
    produto[i] = produto[i].split("X");
    Quantidade.push(produto[i][0]);
    produto[i] = produto[i][1];
  };

  for (i = 0; i < preco.length; i++) {
    preco[i] = preco[i].replace(",", ".");
  };

  console.log(preco);
  console.log(Quantidade);
  console.log(produto);

  itensTodos = document.getElementById("produto");
  itensTodos.remove(itensTodos.children);

  var div = document.createElement("div");
  div.setAttribute("id", "produto");
  div.setAttribute("class", "produtos");
  document.getElementById("conteudo").appendChild(div);
  for (i = 0; i < produto.length; i++) {
    var div = document.createElement("div");
    var nome = document.createElement("p");
    var precoT = document.createElement("p");
    var nome_produto = document.createTextNode(produto[i]);
    
    total = parseFloat(preco[i]) * parseFloat(Quantidade[i]);
    console.log(total);
    total = total.toFixed(2);
    console.log(total);
    var preco_produto = document.createTextNode("R$"+ total);

    nome.appendChild(nome_produto);
    nome.setAttribute("id", "nome"+ " "+ i);

    precoT.appendChild(preco_produto);
    precoT.setAttribute("id", "preco"+" "+i);

    div.appendChild(nome);
    div.appendChild(precoT);
    document.getElementById("produto").appendChild(div);
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

