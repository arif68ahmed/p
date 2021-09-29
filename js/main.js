// Tooltip Code
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Preloder Code
var preloder = document.getElementById("preloder");
function preloder1() {
    preloder.style.display = 'none';
};

// Slider Code
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


// Sticky Navbar Code
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);


});

//Barfiller js / Prograss Bar js



$(document).ready(function () {


    $('#bar1').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar2').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar3').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar4').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar5').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar6').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar7').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar8').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });
    $('#bar9').barfiller({ barColor: 'rgb(1, 11, 19);', duration: 3000 });

});



//Type js codepen code
new Typed('#typed', {
    strings: ['Full Stack Web Developer', 'Front-end Designer', 'Back-end Developer', 'WordPrrss Theme Developer'],
    typeSpeed: 140,
    delaySpeed: 190,
    loop: true
});




