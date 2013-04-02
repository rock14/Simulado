	// Wait for Cordova to load//
    document.addEventListener("deviceready", onDeviceReady, false);
    
    // Cordova is ready //
    function onDeviceReady() {
        teste = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
       /*
        teste.transaction (
        		function(transaction) {
		            transaction.executeSql('DROP TABLE IF EXISTS DEMO');    
        		}
        );
        */
    }

    // Populate the database //
    function populateDB() {
    	teste.transaction (
        		function(transaction) {  
		            transaction.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome VARCHAR NOT NULL, email VARCHAR NOT NULL, senha VARCHAR NOT NULL)');  
        		}
        );
    	var nome = document.itemForm.nome.value;
        var email = document.itemForm.email.value;
        var senha = document.itemForm.senha.value;
        teste.transaction (
        	function(transaction) {
        		transaction.executeSql('INSERT INTO DEMO (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha]);   
        	}
        );
        alert("Cadastro Realizado com Sucesso");
        updateForm("", "", ""); //limpa o formulario
    }

    // Query the database//
    function queryDB() {
    	teste.transaction (
        		function(transaction) {
		            transaction.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);   
        		}
        );         
    }

    // Query the success callback//
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Linha = " + i + " ID = " + results.rows.item(i).id + " Nome =  " + results.rows.item(i).nome + " Email = " 
            		+ results.rows.item(i).email + " Senha = " + results.rows.item(i).senha);
           
               
            var row = results.rows.item(i);
            var li = document.createElement("li");
			
            var liText = document.createTextNode(row['id'] + " Nome: " + row['nome'] + " Email: "+ row['email'] + " Senha: " + row['senha']);
            li.appendChild(liText);
            document.getElementById("itemData").appendChild(li);            
            var quebralinha = document.createElement('br');
            document.getElementById("itemData").appendChild(quebralinha);
            
        }
    }

    // Transaction error callback //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback //
    function successCB() {
        var teste = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    //limpa o formulario de cadastro
    function updateForm(nome, email, senha){
        document.itemForm.nome.value = nome;
        document.itemForm.email.value = email;
        document.itemForm.senha.value = senha;
    }
    
 /*
    //funcao limpar
      function limpar(){
    	  return (elem=document.getElementById("itemData")).parentNode.removeChild(elem);
      }
   */
    

  