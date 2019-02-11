$(document).ready(function () {
    let $wrapper = $('.wrapper-bar'),
        $overlay1 = $('.overlay'),
        $move = $('.move'),
        $nav = $('.overlay a'),
        $arrow = $('.arrow-down'),
        $firstOverLay = $('.firstOverlay'),
        $main = $('.main'),
        $overlayOne = $('.over--lay1, over--lay2'),
        $wrapperNav = $('.wrapper-nav');

    //menu display  

    $wrapper.on('click', () => { //scrollMenu from left to the right
        if ($wrapper.hasClass('wrapper-position')) {
            $wrapper.removeClass('wrapper-position').addClass('change');
            TweenMax.to($overlay1, 0.2, {
                width: '23%',
                ease: Power4.easeOut
            })

            TweenMax.to($move, 0.2, {
                opacity: 0.5,
                ease: Expo.easeOut
            }, '-=0.2')
            
            TweenMax.to($('.wrap'), 0.2, {
                opacity: 0.5,
                ease: Power4.easeOut
            })
            
            
            TweenMax.staggerTo($nav, 0.2, {
                opacity: 1,
                ease: Expo.easeOut
            }, 0.5)
            

        } else {
            $wrapper.removeClass('change').addClass('wrapper-position');
            TweenMax.to($overlay1, 0.5, {
                width: ''
            })
            TweenMax.to($move, 0.2, {
                opacity: 1
            })
            
            TweenMax.to($('.wrap'), 0.2, {
                opacity: 1
            })
            TweenMax.staggerTo($nav, 0.2, {
                opacity: ''
            })
        }

    });
    
    
    $('.portfolio').on('click', () => { //portFolio onclick
        $('html, body').animate({
            scrollTop: ($main).offset().top
        }, 300)
        if ($wrapper.hasClass('change')) {
            $wrapper.removeClass('change').addClass('wrapper-position');
            TweenMax.to($overlay1, 0.5, {
                width: ''
            })
            TweenMax.to($move, 0.2, {
                x: ''
            })
            TweenMax.to([$arrow, $move, $main], 0.5, {
                opacity: 1
            })
            
            TweenMax.to($('.wrap'), 0.2, {
                opacity: 1
            })
            
            
        }

    })


    $(window).scroll(() => {
        let scrollMe = $(this).scrollTop();
        let outer = $wrapperNav.outerHeight();

        if (scrollMe >= outer) {
            $wrapperNav.css({
                backgroundColor: '#fff',

            })

        }
        if (scrollMe > 100) {
            $('.button--direction').css({
                display: 'none'
            })
        } else {
            $wrapperNav.css({
                backgroundColor: '',
            })

            $('.button--direction').css('display', '')

        }
    })

    

    //END OF MENU NAV

    /******************************* box move from left to right*/
    const colors = ['#007f70', '#facc43'],
        $box = $('.box1'),
        $cover = $('.cover');

    TweenMax.set($box, {
        width: '22px',
        height: '40px',
        x: -20,
        opacity: 0.5,
        backgroundColor: function (i) {
            return colors[i % colors.length];
        }
    })

    function nav() {
        let play = $navBox.play();
    }

    function reverse() {
        let a = $navBox.reverse();
    }
    /******************************************BOX DISPLAY ***************/
    $navBox = new TimelineMax({
        paused: true,
        yoyo: true
    })

    $navBox
        .to($main, 0.3, {
            display: 'none'
        })
        .staggerTo($('.allOut'), 0.5, {
            opacity: '0'
        }, 0.1)
        .set($box[0], {
            x: 50
        })
        .set($box[1], {
            x: 100
        })
        .staggerFrom($box, 0.5, {
            cycle: {
                x: [-300, 300]
            },
            repeat: 4,
            opacity: 0,
            ease: Expo.easeOut
        }, 0)
        .staggerTo($box, 0.5, {
            opacity: 0,
            display: 'none'
        }, 0)
        .set($firstOverLay, {
            display: "block",
            opacity: 1,
            zIndex: 20
        })
        .staggerFrom($overlayOne, 0.5, {
            cycle: {
                y: [-300, 400]
            },
            opacity: 0
        }, 1);

    $cover.on('click', () => {
        nav();
    })
    
    $('.about, .contact').on('click', () => {
        if ($wrapper.hasClass('change')) {
            $wrapper.removeClass('change').addClass('wrapper-position');
            TweenMax.to($overlay1, 0.5, {
                width: ''
            })
            TweenMax.to($move, 0.2, {
                opacity: 1
            })
            
            TweenMax.to($('.wrap'), 0.2, {
                opacity: 1
            })
        }
        nav();
    })
    let wrapper = $('#wrapper')
    wrapper.on('click', function () {
        reverse()
    })


    //MAIN SECTION PORTFOLIO
    const $portfolioBox = $('.portfolio--box'),
        $numbers = $('.numbers'),
        $content = $('.portfolio--box1'),
        $empty = $('.empty'),
        $svgNum = $('.svgNum text');


    const controller = new ScrollMagic.Controller();

    $portfolioBox.each(function () {

        let ourScene = TweenMax.from($(this), 0.1, {
            autoAlpha: 0,
            scale: 0.5,
            y: 100,
            ease: Power1.easeOut
        })
        let scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                reverse: false
            }).setTween(ourScene)
            .addTo(controller);

    })


    //display elements in main
    function displayPortfolio() {
        $portfolioBox.hover((event) => {
            let num, empty, svg, content;

            num = $(event.currentTarget).find($numbers);
            empty = $(event.currentTarget).find($empty);
            svg = $(event.currentTarget).find($svgNum);
            content = $(event.currentTarget).find($content);

            TweenMax.set(svg, {
                fill: '#555',
                opacity: 0.8
            })
            TweenMax.set(num, {
                zIndex: 3,
                display: 'block',
                scale: 1.1
            })
            TweenMax.set(empty, {
                width: '100%',
                backgroundColor: '#252422'
            })

            TweenMax.from(empty, 0.5, {
                opacity: 0,
                width: '0'
            })
            TweenMax.from(num, 0.5, {
                scale: 0,
                opacity: 0
            })
            TweenMax.from(svg, 0.5, {
                fill: '#555',
                opacity: 0,
                delay: 0.5
            })
            TweenMax.to(svg, 0.5, {
                fill: '#fff',
                opacity: 1,
                delay: 1
            })
            TweenMax.to(content, 0.5, {
                scale: 1.3,
                zIndex: 100
            })





        }, (event) => {
            num = $(event.currentTarget).find($numbers);
            empty = $(event.currentTarget).find($empty);
            svg = $(event.currentTarget).find($svgNum);
            content = $(event.currentTarget).find($content);

            TweenMax.set(svg, {
                fill: 'none'
            })
            TweenMax.set(num, {
                zIndex: -1,
                display: 'none'
            })
            TweenMax.to(empty, 0.5, {
                width: '0',
                backgroundColor: 'none'
            })
            TweenMax.to(content, 0.5, {
                scale: 1
            })
        })
    }
    let myDisplay = displayPortfolio()

    /******LINK ACCT***************/

    $('.button .link1').click(function () {
        $(location).attr('href', 'mailto: michaelmabinuola@gmail.com?subject=' +
            encodeURIComponent("Hello Mike, I love your work and I would love to get in contact with you") +
            "&body=" +
            encodeURIComponent("This is my body")
        );
    });


    $('.button .link2').on('click', () => {

        window.open("https://www.linkedin.com/in/michael-mabinuola-031138102/", "_blank");


    })


    $('.button .link3').on('click', () => {

        window.open("https://www.facebook.com/mabinuola", "_blank")


    })

    $('.sayn').on('click', () => {
        
        window.open('https://www.sayn-michaelking.com/', '_blank');

    });


    $('.bit').on('click', () => {
    
     window.open('https://quizzical-clarke-a9d671.netlify.com/', '_blank');

    

    });

    $('.wix').on('click', () => {
        window.open('https://quizzical-elion-d554a6.netlify.com/', '_blank');
    })


    $('.movie').on('click', () => {
         window.open('https://upbeat-banach-343649.netlify.com', '_blank');

    })

    $('.blx').on('click', () => {
      
         window.open('https://objective-dubinsky-a4423c.netlify.com', '_blank');
    })







});
