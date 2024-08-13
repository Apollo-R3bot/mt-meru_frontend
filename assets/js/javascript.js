// Validation
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    })()


// Slider
const imgWrap = document.querySelector('.partners .slide-track');
const imgItems = document.querySelectorAll('.partners .slide-track > *');
const imgLength = imgItems.length;
const perView = 5;
const delay = 5000;

let totalScroll = 0;

imgWrap.style.setProperty('--per-view', perView);

for (let i = 0; i < perView; i++) {
    imgWrap.insertAdjacentHTML('beforeend', imgItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
    totalScroll++;
    if (totalScroll == imgLength + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        imgWrap.style.transition = '0s';
        imgWrap.style.left = '0';
        autoScroll = setInterval(scrolling, delay)
    }
    const widthEl = document.querySelector('.partners .slide-track > :first-child').offsetWidth + 24;
    imgWrap.style.left = `-${totalScroll * widthEl}px`;
    imgWrap.style.transition = '.3s';
}

// Count
$(function () {
    function isScrolledIntoView($elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        var current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 50);
        }
    }

    $(".count").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $(".count").each(function () {
            count($(this));
        });
    }

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});


// Sidebar
var menuIcon = document.getElementById("check");
menuIcon.addEventListener('change', function () {

    var sideMenu = document.querySelector(".sidebar");
    var title = document.querySelectorAll(".title");

    if (menuIcon.checked) {
        sideMenu.style.width = "280px";
        sideMenu.style.transition = "0.5s";
        sideMenu.style.transitionProperty = "left";
        title.forEach(con => {
            con.style.display = "block";
        });
    } else {
        title.forEach(con => {
            con.style.display = "none";
        });
        sideMenu.style.width = "75px";
    }
});