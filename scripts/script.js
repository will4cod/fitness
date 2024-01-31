// let introducao = document.querySelector('.introducao');
let bilhetes = document.querySelectorAll('.cards li');
let descontos = ['img/desconto20.png', 'img/desconto50.png', 'img/desconto80.png'];

$(document).ready(function(){
    $('.bx-menu').click(function(){
        $(this).toggleClass('bxs-x-square');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.bx-menu').removeClass('bxs-x-square');
        $('nav').removeClass('nav-toggle');
    });

    $(window).scroll(function(){
        if($(window).scrollTop() >= 20){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var doc = $(document).height();
        var win = $(window).height();
        var value = (scroll / (doc-win)) * 80;
        $('ul .line').css('height', value + '%')
    });

    $("form").submit(function(e) {
        return false;
    })

    $('form button').click(function(){
        if($('#email').val()){
            $('.introducao').css("display", "none");
            $('.sorteio').css("display", "block");
        }
    })

});

function gerarCartela(){
    
    let cartela = []

    for(let i = 0; i < 6; i++){
        cartela[i] = [Math.floor(Math.random() * 10), descontos[Math.floor(Math.random() * 3)]];
    }

    return cartela;
}

let cartelaCompleta = gerarCartela();

for (const bilhete of bilhetes) {
    
    // console.log(bilhete.attributes[0].value)
    bilhete.addEventListener('mousemove', function(e){
        
        var img = document.createElement('img');
        
        img.src = 'img/badluck.png';

        if(cartelaCompleta[bilhete.attributes[0].value][0] === 1 ){
            img.src = cartelaCompleta[bilhete.attributes[0].value][1];
        }
        img.style.clipPath = 'circle(20px at ' + e.offsetX + 'px '+ e.offsetY +'px)';
        img.style.position = 'absolute';
        img.style.top = '0px';
        img.style.left = '0px';
        img.style.opacity = '1';
        // console.log(cartelaCompleta)
    
        bilhete.appendChild(img)
    })
};