//Sintaxe básica: $(seletor).ação();

// $(document).ready(function(){
// 	$('button').click(function(){
// 		$('h1').hide();
// 	});
// });

//Outra maneira para verificar se documento foi carregado
// $(function(){
// 	$('button').click(function(){
// 		$('h1').hide();
// 	});
// });

// $(function(){
// 	$('#azul').click(function(){
// 		$('p').css("color", "blue");
// 	});

// 	$('#vermelho').click(function(){
// 		$('p').css("color", "red");
// 	});
// });

// $(function(){
// 	$('#azul').click(function(){
// 		$('p').css("background-color", "blue");
// 		$('p').fadeOut('fast');
// 		$('p').delay(3000);
// 		$('p').fadeIn(5000);
// 	});

// 	$('#vermelho').click(function(){
// 		$('p').css("background-color", "red");
// 		$('#mensagem').text("Cor alterada com sucesso");
// 		$('#mensagem').delay(3000);
// 		$('#mensagem').fadeOut('fast');
// 	});
// });

$(function(){
	$('#azul').click(function(){
		$('p').css("background-color", "blue");
		$('p').fadeOut('fast');
		$('p').delay(3000);
		$('p').fadeIn(5000);
	});

	$('#vermelho').click(function(){
		$('p').css("background-color", "red");
		$('#mensagem')
			.text("Cor alterada com sucesso")
			.css({color:'red', border: '1px solid red'})
			.delay(3000)
			.fadeOut('fast')
			.addClass('green');
		$('button').removeClass('red');
	});
});

$(function(){
	$('#l1').click(function(){
		$('#i1').show();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').hide();
	});

	$('#l2').click(function(){
		$('#i1').hide();
		$('#i2').show();
		$('#i3').hide();
		$('#i4').hide();
	});

	$('#l3').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
		$('#i4').hide();
	});

	$('#l4').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').show();
	});
});