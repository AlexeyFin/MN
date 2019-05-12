
$(document).ready(function ($) {

    const default_slider_settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        nextArrow: '<button class="slick-arrow-right"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button class="slick-arrow-left"><i class="fas fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true

                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 375,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }

        ]
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const check_passwords = function() {
        if(pass.value != repeat_pass.value && pass.value && repeat_pass.value) {
            pass_err.classList.remove('d-none');
            pass.closest('form').querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
        }  else {
            pass_err.classList.add('d-none');
            pass.closest('form').querySelector('button[type="submit"]').removeAttribute('disabled');
        }
    };

    $('#pass, #repeat_pass').on('change', e => {
        check_passwords();
    });

    $('#trainings_slider_1, #materials_slider_1, .simple_slider').slick(default_slider_settings);

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        let id = e.target.getAttribute('data-sliderSelector');

        if (!$(id).hasClass('slick-slider')) {
            $(id).slick(default_slider_settings);
        }


    });

    $('a.video_link').on('click', e => {
        e.preventDefault();
        let link = e.target.closest('a.video_link');
        videoModal(link);
    })

    $('button.toggle_input_type').on('click', e => {
        let parent = e.target.closest('.input-group');
        let eaye = e.currentTarget.querySelector('.fa-eye');
        let input = parent.querySelector('input');
        input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
        eaye.classList.toggle('fa-eye-slash');
    })
});