$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	/* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress .progress-bar').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length>0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

	// another custom callback for counting to infinity
	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    
});


const certifications = [
    'assets/img/cert1.png',
    'assets/img/cert2.png',
    'assets/img/cert3.png',
    'assets/img/cert4.png',
    'assets/img/cert5.png',
    'assets/img/cert6.png',
    'assets/img/cert7.png',
    'assets/img/cert8.png',
    'assets/img/cert9.png',
    'assets/img/cert10.png',
    'assets/img/cert11.png'
];

let currentCertificationIndex = 0;

function showCertification(index) {
    currentCertificationIndex = index;
    document.getElementById('certificationImage').src = certifications[index];
    $('#certificationModal').modal('show');
}

document.getElementById('prevCertification').addEventListener('click', function() {
    if (currentCertificationIndex > 0) {
        showCertification(currentCertificationIndex - 1);
    } else {
        showCertification(certifications.length - 1);
    }
});

document.getElementById('nextCertification').addEventListener('click', function() {
    if (currentCertificationIndex < certifications.length - 1) {
        showCertification(currentCertificationIndex + 1);
    } else {
        showCertification(0);
    }
});

document.querySelectorAll('[data-target="#certificationModal"]').forEach((element, index) => {
    element.addEventListener('click', function() {
        showCertification(index);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.getElementById('hero-title');
    heroTitle.addEventListener('animationend', function() {
        heroTitle.classList.remove('typing');
        const heroContent = document.getElementById('hero-content');
        const delayedElements = heroContent.querySelectorAll('.delayed-fade-in');
        delayedElements.forEach((element, index) => {
            element.style.animation = `fadeIn 2s ease-in ${index * 0.5}s forwards`;
        });
        // Start .mypic animation after typing effect
        const myPic = document.querySelector('.mypic');
        myPic.style.animationPlayState = 'running';
    });
});