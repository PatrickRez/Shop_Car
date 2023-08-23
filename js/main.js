$(document).ready(function(){  
    $('#carousel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse:{
                required: false,
            }
        },
        messages:{
            nome:'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numeberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $(',lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo =$(this).parent().find('h3').tex();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('hmtl').animate({
            scrollTo:destino.offset().top
        }, 1000)
    })
})