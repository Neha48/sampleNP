
(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });
    $(document).ready(function () {
        $(".menu-toggle").click(function (event) {
            $("nav .myul").toggleClass('active');
        });
    
        $(".nav-cl").click(function(event){
            $("nav .myul").toggleClass('active');
        });
        // $(".btn-secondary").click(function(event){
        //     $(".modal").toggleClass('hide');
        // });
        $("#dayOne").click(function(event){
            $("#day-1").show();
            $("#day-2").hide();
            $("#dayOne").addClass("active");
            $("#dayTwo").removeClass("active");
        });
        $("#dayTwo").click(()=>{
            $("#day-2").show();
            $("#day-1").hide();
            $("#dayTwo").addClass("active");
            $("#dayOne").removeClass("active");
        });
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).ready(function () {
            $(".navbar-nav li a").click(function (event) {
                $(".navbar-collapse").collapse('hide');
            });
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
            });
    
            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
            }).on('hide.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
            });
        });
    function toggle(){
        var btnOne = document.getElementById('dayOne')
        var btnTwo = document.getElementById('dayTwo')
        var firstDay = document.getElementById('day-1');
        var secondDay = document.getElementById('day-2');
        firstDay.style.display = "block";
        secondDay.style.display = "none";
        btnTwo.classList.remove("active")
        btnOne.className+=" active"
    }
    function toggle2(){
        var btnOne = document.getElementById('dayOne')
        var btnTwo = document.getElementById('dayTwo')
        var firstDay = document.getElementById('day-1');
        var secondDay = document.getElementById('day-2');
        secondDay.style.display = "block";
        firstDay.style.display = "none";
        btnOne.classList.remove("active")
        btnTwo.className+=" active"
    }
    // Testimonial Slider
    var swiper = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    $('.gallery-wrap').masonry({
        itemSelector: '.gallery-grid'
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);
