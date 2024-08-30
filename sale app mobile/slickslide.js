$(document).ready(function(){
    $('.homepage-slide').slick({
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        dots: true,
        centerMode: true,
        centerPadding: '120px',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '40px',
                    variableWidth: true,
                },
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '40px',
                    variableWidth: true,
                },
                breakpoint:400,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '40px',
                    variableWidth: true,
                }
            }
        ]
    });
  });