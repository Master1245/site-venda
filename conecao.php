<?php
$host = "localhost";
$db = "mercado";
$user = "root";
$pass = "";
function ListarProdutos($conexao){
	$produtos = array();
	$resultado = mysqli_query($conexao, "select * from produtos");
	while($produto = mysqli_fetch_assoc($resultado)){
		array_push($produtos, $produto);
	}
	return $produtos;
}

$conn = mysqli_connect($host, $user, $pass, $db);

$itens = ListarProdutos($conn);

while ($item = mysqli_fetch_assoc($itens)) {
	echo $item['nome'];
}

while($row = $result->fetch_assoc()) {
    echo 
	"<div>" '<p id=nome $row['ID']>'$row["nome"] '</p>'. '<p id=preco $row['ID']>'.$row["preco"] '</p>'."</div>";
  }
?>

	<!-- <p id="nome 1">CARNE</p>
	<p id="preco 1">R$ 10,00KG</p>
	<button type="button" id="menos 1" onclick="less(this.id)">- </button> 
	<input value="0" type="text" id="1" escapeXml="true"></input>
	<button type="button" id="mais 1" onclick="more(this.id)">+ </button>
	<button type="button" id=1 class="AddCarrinho" onclick="AddCarrinho(this.id)">ADICIONAR</button>
 -->
