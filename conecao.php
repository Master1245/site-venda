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



?>