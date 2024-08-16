// Adjust these path values to curve from the bottom
// const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
// const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

const curve = 'M0 0S175 230 500 230s500 -230 500 -230V0H0Z';
const flat = 'M0 0S175 10 500 10s500 10 500 10V0H0Z';

const curve2 = 'M0 0S175 230 500 230s500 -230 500 -230V0H0Z';
const flat2 = 'M0 0S175 10 500 10s500 10 500 10V0H0Z';

const svg = document.querySelector('#svg');
const svg2 = document.querySelector('#svg2');

const counter = document.getElementById('counter');


(() => {

    const tl = gsap.timeline();

    tl
        .to(counter, {
            innerHTML: 100, // Target value
            duration: 6, // Duration of the animation
            ease: 'power2.easeInOut',
            stagger: 0.5,
            onUpdate: function () {
                counter.innerHTML = Math.floor(this.targets()[0].innerHTML); // Update the counter text with an integer value
            },
            onComplete: function () {
                gsap.to(counter, {
                    opacity: 0,
                    duration: 1, // Optional: fade out duration
                    ease: 'power2.easeInOut',
                });
            }
        })

        .to(svg, {
            duration: 2,
            attr: { d: curve },
            ease: 'power2.easeIn',
        })
        .to(svg, {
            duration: 2,
            attr: { d: flat },
            ease: 'power2.easeOut',
        })
        .to('.loader-wrap', {
            y: -1500,
        })
        .to('.loader-wrap', {
            zIndex: -1,
            display: 'none',
        })

        .to('.center_flag .preloader_img_3', {
            opacity: 1,
            top: '50%',
            duration: 1,
            ease: 'elastic.out',
        }, 'preloader_img_3')
        .to('.center_flag .preloader_img_3_line', {
            opacity: 1,
            top: window.innerWidth > 640 ? 0 : '-50%',
            duration: .5,
            ease: 'elastic.out',
        }, 'preloader_img_3')

        .from('.preloader_text h1 span', {
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.easeIn',
            onStart: () => {
                gsap.to('.preloader_img_1', { opacity: 1, scale: 1, duration: 0.5 });
            },
            onComplete: () => {
                gsap.to('.preloader_img_2', { opacity: 1, scale: 1, duration: 0.5 });
            }
        })
        .from('.preloader_text h2 span', {
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.easeIn',
            onStart: () => {
                gsap.to('.preloader_img_4', { opacity: 1, scale: 1, duration: 0.5 });
            },
            onComplete: () => {
                gsap.to('.preloader_img_5', { opacity: 1, scale: 1, duration: 0.5 });
            }
        })

        .to('.center_flag .preloader_img_3', {
            opacity: 0,
            top: '-50%',
            duration: 1,
            ease: 'elastic.inOut',
        }, 'preloader_img_33')
        .to('.center_flag .preloader_img_3_line', {
            opacity: 0,
            top: '-50%',
            duration: 1,
            ease: 'elastic.inOut',
        }, 'preloader_img_33')

        .to('.preloader_text h1', {
            yPercent: window.innerWidth > 640 ? -110 : -300,
            duration: 0.5,
            ease: 'back.out',
        }, 'txt1')
        .to('.preloader_text h2', {
            yPercent: window.innerWidth > 640 ? 110 : 500,
            duration: 0.5,
            ease: 'back.out',
        }, 'txt1')

        .to('.dest', {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: 'power2.easeIn',
            stagger: 0.1
        })

        .to(svg2, {
            duration: 2,
            attr: { d: curve2 },
            ease: 'power2.easeIn',
        })
        .to(svg2, {
            duration: 2,
            attr: { d: flat2 },
            ease: 'power2.easeOut',
        })
        .from('.loader-wrap2', {
            y: 0,
        })
        .to('.preloader_sec', {
            zIndex: -1,
            display: 'none',
            opacity: 0,
        }, 'remove')

        .to('.minar', {
            opacity: 1,
            duration: .5,
            top: '50%',
            ease: 'elastic.out',
        })
        .from('.minar_poster', {
            delay: 1,
            top: '-30%',
            opacity: 0,
            duration: 1,
            ease: 'elastic.out',
        }, 'poster')
        .from('.rhythm_wrapper .poster', {
            delay: 1,
            left: '-5%',
            opacity: 0,
            duration: 1,
            ease: 'elastic.out',
        }, 'poster')
        .to('.bush_right', {
            duration: 2,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: 'power4.easeInOut',
        }, 'bush')
        .to('.bush_left', {
            duration: 2,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: 'power4.easeInOut',
        }, 'bush')

        .from('.minar_poster', {
            delay: 1,
            rotateX: '45deg',
            duration: 1,
            ease: 'elastic.out',
            repeat: -1,
            yoyo: true
        }, 'poster1')
        .from('.minar_poster', {
            delay: 1,
            rotateX: '-45deg',
            duration: 1,
            ease: 'elastic.out',
            repeat: -1,
            yoyo: true
        }, 'poster1')
        .from('.rhythm_wrapper .poster', {
            delay: 1,
            skewX: '15deg',
            duration: 1,
            ease: 'elastic.out',
            repeat: -1,
            yoyo: true
        }, 'poster1')
        .to('.btn_down', {
            opacity: 1,
            duration: 1,
            ease: 'power2.easeIn',
        })

})()
