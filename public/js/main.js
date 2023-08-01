(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const textoRecortado = document.querySelector('.texto-recortado');
    const textoCompleto = document.querySelector('.texto-completo');
    const botonVerMas = document.querySelector('.ver-mas-boton');
    const textoRecortado1 = document.querySelector('.texto-recortado1');
    const textoCompleto1 = document.querySelector('.texto-completo1');
    const botonVerMas1 = document.querySelector('.ver-mas-boton1');
    const textoRecortado2 = document.querySelector('.texto-recortado2');
    const textoCompleto2 = document.querySelector('.texto-completo2');
    const botonVerMas2 = document.querySelector('.ver-mas-boton2');
    const textoRecortado3 = document.querySelector('.texto-recortado3');
    const textoCompleto3 = document.querySelector('.texto-completo3');
    const botonVerMas3 = document.querySelector('.ver-mas-boton3');
    const textoRecortado4 = document.querySelector('.texto-recortado4');
    const textoCompleto4 = document.querySelector('.texto-completo4');
    const botonVerMas4 = document.querySelector('.ver-mas-boton4');
    const textoRecortado5 = document.querySelector('.texto-recortado5');
    const textoCompleto5 = document.querySelector('.texto-completo5');
    const botonVerMas5 = document.querySelector('.ver-mas-boton5');
    
    botonVerMas.addEventListener('click', function () {
      if (textoRecortado.style.display === 'none') {
        textoRecortado.style.display = 'block';
        textoCompleto.style.display = 'none';
        botonVerMas.textContent = 'Ver más';
      } else {
        textoRecortado.style.display = 'none';
        textoCompleto.style.display = 'block';
        botonVerMas.textContent = 'Ver menos';
      }
    });
    botonVerMas1.addEventListener('click', function () {
        if (textoRecortado1.style.display === 'none') {
          textoRecortado1.style.display = 'block';
          textoCompleto1.style.display = 'none';
          botonVerMas1.textContent = 'Ver más';
        } else {
          textoRecortado1.style.display = 'none';
          textoCompleto1.style.display = 'block';
          botonVerMas1.textContent = 'Ver menos';
        }
      });
      botonVerMas2.addEventListener('click', function () {
        if (textoRecortado2.style.display === 'none') {
          textoRecortado2.style.display = 'block';
          textoCompleto2.style.display = 'none';
          botonVerMas2.textContent = 'Ver más';
        } else {
          textoRecortado2.style.display = 'none';
          textoCompleto2.style.display = 'block';
          botonVerMas2.textContent = 'Ver menos';
        }
      });
 
      botonVerMas3.addEventListener('click', function () {
        if (textoRecortado3.style.display === 'none') {
          textoRecortado3.style.display = 'block';
          textoCompleto3.style.display = 'none';
          botonVerMas3.textContent = 'Ver más';
        } else {
          textoRecortado3.style.display = 'none';
          textoCompleto3.style.display = 'block';
          botonVerMas3.textContent = 'Ver menos';
        }
      });
      botonVerMas4.addEventListener('click', function () {
        if (textoRecortado4.style.display === 'none') {
          textoRecortado4.style.display = 'block';
          textoCompleto4.style.display = 'none';
          botonVerMas4.textContent = 'Ver más';
        } else {
          textoRecortado4.style.display = 'none';
          textoCompleto4.style.display = 'block';
          botonVerMas4.textContent = 'Ver menos';
        }
      });
      botonVerMas5.addEventListener('click', function () {
        if (textoRecortado5.style.display === 'none') {
          textoRecortado5.style.display = 'block';
          textoCompleto5.style.display = 'none';
          botonVerMas5.textContent = 'Ver más';
        } else {
          textoRecortado5.style.display = 'none';
          textoCompleto5.style.display = 'block';
          botonVerMas5.textContent = 'Ver menos';
        }
      });
  });