	function salvar(){
    		//console.log('Hello World !');
    		//alert('Olá Mundo !');
    	let campoNome = document.querySelector('#nome');
    	let campoSexo = document.querySelector('#sexo');
    	let campoIdade = document.querySelector('#idade');
    	let campoEmail = document.querySelector('#email');
    	let campoDiv = document.querySelector('#id_testa_js');

    	console.log(campoNome.value);
    	console.log(campoSexo.value);
    	console.log(campoIdade.value);
    	console.log(campoEmail.value);
    	
    	if (campoNome.value == ''){
    		alert('Preencha o campo nome');
    		return
    	}
    	if (campoSexo.value == ''){
    		alert('Preencha o campo sexo');
    		return
    	}
    	if (campoIdade.value == ''){
    		alert('Preencha o campo idade');
    		return
    	}
    	if (campoEmail.value == ''){
    		alert('Preencha o campo email');
    		return
    	}

    	campoDiv.innerHTML = 
    	'<label>' + campoNome.value + '</label> <br>' + 
    	'<label>' + campoSexo.value + '</label> <br>' + 
    	'<label>' + campoIdade.value + '</label> <br>' +
    	'<label>' + campoEmail.value + '</label> <br>'

       	//console.log('Tudo de boas');    		
    }