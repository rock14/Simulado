<?php
	include( 'index.html' );
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$senha = ($_POST['senha']);

	$con = mysql_pconnect("XwGo6Y94p8Sm.db.10856794.hostedresource.com", "XwGo6Y94p8Sm", "as@quA00P7JcC") or die("Could not connect");
	mysql_select_db("XwGo6Y94p8Sm") or die("Could not select database");
	
	$query = "INSERT INTO usuario (nome,email,senha) VALUES ('$nome','$email','$senha')";
    $insert = mysql_query($query,$con);
	
?>

