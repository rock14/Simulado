<?php
	header("Content-type: text/javascript");
	
	$link = mysql_pconnect("localhost", "root", "") or die("Could not connect");
	mysql_select_db("bdtcc") or die("Could not select database");
	 
	$arr = array();
	//mysql_query('SET CHARACTER SET utf8');
	$sql = mysql_query("SELECT * FROM dificuldade");
	 
	while($obj = mysql_fetch_object($sql)) {
		$arr[] = $obj;
	}
	
	echo json_encode($arr);

?>

