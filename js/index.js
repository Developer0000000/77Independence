const selectDomElems = elem => document.querySelector(elem);

// * btn_down
const btnDown = selectDomElems('.btn_down');
let isOnTop = true;
btnDown.addEventListener('click', () => {
    if (isOnTop) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        btnDown.classList.remove('rotate-0')
        btnDown.classList.add('-rotate-180')
        isOnTop = false
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        btnDown.classList.remove('-rotate-180')
        btnDown.classList.add('rotate-0')
        isOnTop = true;
    }
});

// * hero
(() => {

    const butterflies = gsap.utils.toArray('.butterfly .butterfly_img');

    butterflies.forEach(butterfly => {
        gsap.to(butterfly, {
            duration: 10,
            x: () => gsap.utils.random(-200, 200), // Random horizontal movement between -100 and 100 pixels
            y: () => gsap.utils.random(-200, 200), // Random vertical movement between -100 and 100 pixels
            ease: 'power1.inOut', // Optional: smooth easing for the movement
            repeat: -1, // Repeat infinitely
            yoyo: true // Alternate the direction
        });
    });

    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.panel_1',
            start: 'top top',
            end: '+=300%',
            scrub: 2.5,
            // markers: true,
            pin: true
        },
        ease: 'power1.easeInOut',
    });

    heroTl
        .to('.minar_text .txt1', {
            duration: 5,
            xPercent: -200,
        })
        .to('.minar_text .txt2', {
            delay: -2,
            duration: 5,
            bottom: '300%',
        })
        .to('.minar_text .txt3', {
            opacity: 1,
            display: 'none',
            delay: -1,
            duration: 5,
            top: '350%',
            onComplete: () => {
                gsap.to('.minar_text .txt3', { display: 'none', opacity: 0, duration: 0 });
            }
        })
        .to('.minar_text .txt4', {
            delay: -1,
            duration: 5,
            xPercent: 200,
        })

        .to('.minar', {
            zIndex: 100,
            delay: -1,
            duration: 5,
            rotateY: '360deg',
            ease: 'power4.inOut',
        })
        .to('.minar_circ', {
            duration: 5,
            scale: 10,
            ease: 'power4.inOut',
        })
        .to('.ready_to_explore h1', {
            opacity: 1,
            zIndex: 150,
            duration: 5,
            rotate: 0,
            ease: 'elastic.out',
        })
        .to('.ready_to_explore h2', {
            opacity: 1,
            zIndex: 150,
            duration: 5,
            translateX: 0,
            ease: 'elastic.out',
        })
        .to('.ready_to_explore h3', {
            delay: -3,
            opacity: 1,
            zIndex: 150,
            duration: 2,
            rotate: 0,
            ease: 'power1',
        })
})()


//* about pakistan 

let slide = gsap.utils.toArray('.slides .slide');
// const slidesTween = gsap.to(slide, {
//     xPercent: (i) => -97 * i,
//     duration: (i) => i,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".slides",
//         start: "top top",
//         end: "+=" + 100 * slide.length + "%",
//         scrub: true,
//         pin: true,
//     }
// });

let slidesTween = gsap.to(slide, {
    xPercent: -100 * (slide.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.slides',
        pin: true,
        scrub: 3,
        start: 'top top',
        end: () => "+=" + 100 * slide.length + '%',

    },
});

gsap.from('.cultures_text span', {
    y: 300,
    scale: 1.13,
    duration: 3,
    opacity: 0,
    rotateX: '-90deg',
    stagger: 1,
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.slides',
        containerAnimation: slidesTween,
        start: "left 10%",
        end: "left 50%",
        scrub: 3,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
});


gsap.to('.punjabi_txt', {
    top: '50%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.punjabi_txt',
        containerAnimation: slidesTween,
        start: "left 20%", // Adjusted start point
        end: "left 50%", // Adjusted end point
        scrub: 1,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
    ease: 'power3.out',
});

gsap.from('.punjabi_content .punjabi_img', {
    duration: 8,
    x: 500,
    stagger: 2,
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.slide_2',
        containerAnimation: slidesTween,
        start: "left 10%", // Adjusted start point
        end: "left 80%", // Adjusted end point
        scrub: 3,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
});

gsap.to('.sindhi_txt', {
    top: '50%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.sindhi_txt',
        containerAnimation: slidesTween,
        start: "left 20%", // Adjusted start point
        end: "left 50%", // Adjusted end point
        scrub: 1,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
    ease: 'power3.out',
});

gsap.from('.sindhi_content .sindhi_img', {
    duration: 8,
    x: 500,
    stagger: 2,
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.slide_3',
        containerAnimation: slidesTween,
        start: "left 10%", // Adjusted start point
        end: "left 80%", // Adjusted end point
        scrub: 3,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
});

gsap.to('.balochi_txt', {
    top: '50%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.balochi_txt',
        containerAnimation: slidesTween,
        start: "left 20%", // Adjusted start point
        end: "left 50%", // Adjusted end point
        scrub: 1,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
    ease: 'power3.out',
});

gsap.from('.balochi_content .balochi_img', {
    duration: 8,
    x: 500,
    stagger: 2,
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.slide_4',
        containerAnimation: slidesTween,
        start: "left 10%", // Adjusted start point
        end: "left 80%", // Adjusted end point
        scrub: 3,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
});


gsap.to('.pashto_txt', {
    top: '50%',
    duration: 1,
    opacity: 1,
    scrollTrigger: {
        trigger: '.pashto_txt',
        containerAnimation: slidesTween,
        start: "left 20%", // Adjusted start point
        end: "left 50%", // Adjusted end point
        scrub: 1,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
    ease: 'power3.out',
});

gsap.from('.pashto_content .pashto_img', {
    duration: 8,
    x: 500,
    stagger: 2,
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.slide_5',
        containerAnimation: slidesTween,
        start: "left 10%", // Adjusted start point
        end: "left 80%", // Adjusted end point
        scrub: 3,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        // },
    },
});



//* dedication

(() => {
    const tributeVideoWrapper = selectDomElems('.tribute_video_wrapper');
    const tributeVideoWrapperVideo = selectDomElems('.tribute_video_wrapper video');
    const tributeVideoWrapperIcon = selectDomElems('.tribute_video_wrapper i');

    const tributeVideoVolume = selectDomElems('.tribute_video_volume');


    tributeVideoWrapper.addEventListener('mousemove', (e) => {
        gsap.to(tributeVideoVolume, {
            ease: 'power4',
            duration: 1,
            x: e.clientX,
            y: e.clientY,
        });
    })

    tributeVideoWrapper.addEventListener('click', (e) => {
        if (tributeVideoWrapperVideo.muted) {
            tributeVideoWrapperVideo.muted = false
            tributeVideoWrapperIcon.classList.remove('ri-volume-mute-line');
            tributeVideoWrapperIcon.classList.add('ri-volume-up-line');
        }
        else {
            tributeVideoWrapperVideo.muted = true
            tributeVideoWrapperIcon.classList.remove('ri-volume-up-line');
            tributeVideoWrapperIcon.classList.add('ri-volume-mute-line');
        }

    })
})()

const onPlants = document.querySelectorAll('.plants_imgs .plant_img');

onPlants.forEach((onPlant) => {
    onPlant.addEventListener('mouseenter', () => {

        const plant = onPlant.querySelector('img'); // Get the img inside the hovered .plant_img
        gsap.to(plant, {
            // ease: 'bounce.out',
            ease: 'expo.out',
            duration: 1,
            top: 0,
            zIndex: -50,
        });

        setTimeout(() => {
            gsap.to(plant, {
                // ease: 'bounce.out',
                ease: 'expo.out',
                duration: 1,
                top: '100%',
                zIndex: 50,
            });
        }, 500);

    });

    onPlant.addEventListener('mouseleave', () => {
        const plant = onPlant.querySelector('img'); // Get the img inside the hovered .plant_img
        gsap.to(plant, {
            // ease: 'bounce.out',
            ease: 'expo.out',
            duration: 1,
            top: '100%',
            zIndex: 50,
        });
    });

});

(() => {

    const dedicationTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.panel_4',
            start: 'top top',
            end: '+=300%',
            scrub: 3,
            // markers: true,
            pin: true,
        },
        ease: 'power4.easeInOut',
    });

    dedicationTl
        .to('.tribute_to_heroes .slide1 h1', {
            transform: window.innerWidth > 640 ? "translateX(0%)" : "translateX(-1000%)",
            duration: 10,
            ease: 'linear',
        }, 'tribute_hero')
        .to('.tribute_to_heroes .slide2 h1', {
            transform: window.innerWidth > 640 ? "translateX(-100%)" : "translateX(-400%)",
            duration: 10,
            ease: 'linear',
        }, 'tribute_hero')

        .to('.tribute_video_volume', {
            opacity: 1,
            scale: 1,
            duration: 2,
        })
        .to('.tribute_video_wrapper', {
            delay: 2,
            duration: 10,
            '--clip': '0%',
            ease: 'power4.easeInOut',
        })

        .to('.panel_4', {
            background: 'white',
            ease: 'power4.easeInOut',
        }, 'pan')
        .to('.tribute_to_heroes', {
            opacity: 0,
            display: 'none'
        }, 'pan')

        .to('.tribute_video_wrapper', {
            delay: 3,
            duration: 10,
            ease: 'power4.easeInOut',
            scale: 0.5,
            objectFit: 'contain',
            rotateX: '5deg',
            rotateY: '5deg',
        })

        .to('.tribute_to_heroes_imgs .tribute_to_heroes_img', {
            delay: 1,
            duration: 30,
            ease: 'power4.easeInOut',
            top: '-100%',
            stagger: 5
        })

        .to('.tribute_video_wrapper', {
            duration: 10,
            ease: 'power4.easeInOut',
            scale: 1,
            rotateX: '0deg',
            rotateY: '0deg',
        })

        .to('.panel_4', {
            background: '#f8f8f8',
            ease: 'power4.easeInOut',
        }, 'clip&bg')

        .to('.tribute_video_wrapper', {
            delay: 1,
            duration: 10,
            '--clip': '100%',
            ease: 'power4.easeInOut',
        }, 'clip&bg')
        .to('.green_pakistan_text', {
            opacity: 1,
            duration: 3,
            stagger: .7,
            ease: 'power4.easeInOut',
        })
        .to('.plants_imgs .plant_img', {
            visibility: 'visible',
        })
        .to('.green_pakistan_text span', {
            delay: 0.5,
            opacity: 1,
            duration: 3,
            stagger: .7,
            color: '#00401A',
            ease: 'power4.easeInOut',
        }, 'gr_pk_txt')



})()


// * good citizen

const goodCitizenTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.panel_6',
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        // markers: true,
        pin: true
    },
    ease: 'power4.inOut',
});

goodCitizenTl
    .to('.pak_flag_svg .scroll_path_1', {
        scale: 0,
        duration: 0.3,
        opacity: 0,
    }, 'w')
    .to('.pak_flag_svg .scroll_path_2', {
        duration: 0.5,
        y: -500,
        rotate: '-90deg',
    }, 'w')
    .to('.pak_flag_svg .move_path', {
        duration: 0.5,
        x: -500,
        rotate: '30deg',
    }, 'w')
    .to('.pak_flag_svg .scroll_path_stick', {
        duration: 0.2,
        x: 800,
        rotate: '-180deg',
    }, 'w')
    .to('.pak_flag_svg .scroll_path_white', {
        stagger: 0.1,
        duration: 0.5,
        y: 500,
        rotate: '90deg',
    }, 'w')
    .to('.pak_flag_svg .scroll_stick_part', {
        duration: 0.2,
        x: -800,
        rotate: '180deg',
    }, 'w')
    .to('.pak_flag_svg .scroll_path_3', {
        duration: 0.5,
        x: 300,
    }, 'w')
    .to('.pak_flag_svg .scroll_zoom', {
        width: '100rem',
        duration: 1,
        scale: 20,
        rotate: '360deg',
    }, 'w')

    .to('.two_circ', {
        delay: -0.67,
        top: '50%',
        stagger: .1,
    })
    .to('.two_circ', {
        left: '50%',
        stagger: .01,
    })

    .to('.green_circle', {
        scale: 20,
        duration: 3,
    })

    .to('.good_citizen_text h1', {
        duration: .25,
        opacity: 1,
        y: 0,
        ease: 'elastic.out',
    })
    .from('.good_citizen_text h4', {
        duration: 2,
        opacity: 0,
        translateY: '150%',
        ease: 'elastic.out',
    })
    .to('.good_citizen_text h2', {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: 'elastic.out',
    })
    .to('.good_citizen_text h3', {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: 'elastic.out',
    })