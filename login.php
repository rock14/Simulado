<?php
	$con=mysqli_connect("XwGo6Y94p8Sm.db.10856794.hostedresource.com","XwGo6Y94p8Sm","as@quA00P7JcC","XwGo6Y94p8Sm");
	// Check connection
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	
	// busca no banco
	$result = mysqli_query($con,"SELECT * FROM usuario");
	
	while($row = mysqli_fetch_array($result))
	  {
	  echo $row['idUsuario'] . " " . $row['nome'] . " " . $row['senha'];
	  echo "<br />";
	  }
	
	mysqli_close($con);
?>