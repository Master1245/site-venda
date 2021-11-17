<?php

$parsed = parse_ini_file('.env');

$host = "localhost";
$db = $parsed['DATABASE'];
$user = $parsed['USER'];
$pass = $parsed['PASSWORD'];

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

?>

<!DOCTYPE html>
<html lang="pt-bt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <script src="jquery-1.11.3.min.js"></script>
    <title>Site</title>
    <script type="text/javascript" src="arquivo.js"></script>
</head>
<body>
    <div class="container">
        <header class="logo">
            <a class="logoA" href="">LOGO</a>
            <ul>
                <li><a href="">INICIO</a></li>
                <li><a href="">SOBRE</a></li>
            </ul>
        </header>

        <menu class="menu">
            <ul>
                <li><button>Pedidos</button></li>
                <li><button id="fechar_conta" onclick="fechar_conta()">Fechar Conta</button></li>
                <li><button href=#>Produtos</button></li>
                <li id="ValorT">R$0.00</li>
            </ul>
        </menu>

        <conteudo class="conteudo" id="conteudo">

            <div class="produtos" id='produto'>
			<?php
				for ($i=0; $i < count($itens); $i++) {
                    if ($itens[$i]['estoque'] <= '0UND') {
                       
                    }else{
                        echo
                        "<div>",
                            '<p id="nome ',$i,'">', $itens[$i]['nome'], '</p>',
                            '<p id="preco ',$i,'">', $itens[$i]['preco'], '</p>',
                            '<button type="button" class="menos" id="menos ',$i,'" onclick="less(this.id)">- </button>',
                            '<input value="0" type="text" id=',$i,' escapeXml="true"></input>',
                            '<button type="button" class="mais" id="mais ',$i,'" onclick="more(this.id)">+ </button>',
                            '<button type="button" id=',$i,' class="AddCarrinho" onclick="AddCarrinho(this.id)">ADICIONAR</button>',
                        "</div>";
                    };
				};
			?>
            </div>
        </conteudo>

        <carrinho class="carrinho" >
            <ul id ="carrinho">
            </ul>
        </carrinho>
    </div>
</body>
</html>