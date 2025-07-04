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
    {
        img: 'assets/img/SQL.jpg',
    },
    {
        img: 'assets/img/PLSQL.jpg',
    },
    {
        img: 'assets/img/CX.png',
    },
    {
        img: 'assets/img/ERP.png',
    },
    {
        img: 'assets/img/HCM.png',
    },
    {
        img: 'assets/img/OCI.png',
    },
    {
        img: 'assets/img/SCM.png',
    },
    {
        img: 'assets/img/JS.png',
    },
    {
        img: 'assets/img/RAPI.png',
    },
    {
        img: 'assets/img/PS.png',
    },
];

let currentCertificationIndex = 0;

function showCertification(index) {
    currentCertificationIndex = index;
    const cert = certifications[index];
    const img = document.getElementById('certificationImage');
    if (!cert || !img) return;
    img.classList.remove('cert-img-animate'); // reset animation
    void img.offsetWidth; // trigger reflow
    img.src = cert.img;
    img.alt = cert.title;
    img.classList.add('cert-img-animate');
    document.getElementById('certModalTitle').textContent = cert.title;
    document.getElementById('certModalDesc').textContent = cert.desc;
    document.getElementById('certProgress').textContent = `${index + 1} of ${certifications.length}`;
    $('#certificationModal').modal('show');
}

document.addEventListener("DOMContentLoaded", function() {
    // Hero typing and fade-in logic
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('animationend', function() {
            heroTitle.classList.remove('typing');
            const heroContent = document.getElementById('hero-content');
            if (heroContent) {
                const delayedElements = heroContent.querySelectorAll('.delayed-fade-in');
                delayedElements.forEach((element, index) => {
                    element.style.animation = `fadeIn 2s ease-in ${index * 0.5}s forwards`;
                });
            }
            // Start .mypic animation after typing effect
            const myPic = document.querySelector('.mypic');
            if (myPic) {
                myPic.style.animationPlayState = 'running';
            }
        });
    }

    // Certification modal navigation
    const prevBtn = document.getElementById('prevCertification');
    const nextBtn = document.getElementById('nextCertification');
    if (prevBtn && nextBtn) {
        prevBtn.onclick = function() {
            currentCertificationIndex = (currentCertificationIndex - 1 + certifications.length) % certifications.length;
            showCertification(currentCertificationIndex);
        };
        nextBtn.onclick = function() {
            currentCertificationIndex = (currentCertificationIndex + 1) % certifications.length;
            showCertification(currentCertificationIndex);
        };
    }
});
