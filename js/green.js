const canvas2 = document.querySelector('.green_pakistan canvas');
const ctx2 = canvas2.getContext('2d');

const panel5 = document.querySelector('.panel_5')

let mousemoveBox2 = document.querySelector('.mousemove_box2')
let mousemoveBoxSpan2 = document.querySelector('.mousemove_box2 span')

const frames2 = {
    currentIndex: 1,
    maxIndex: 247,
}

let imageLoaded2 = 0;
const images2 = []

const preloadImages2 = () => {

    const cloudinaryBaseURL2 = "https://res.cloudinary.com/dje7ukgcq/image/upload/";
    const folder2 = "greenary";

    // https://res.cloudinary.com/dje7ukgcq/image/upload/v1723797574/greenary/frame-1.jpg
    // https://res.cloudinary.com/dje7ukgcq/image/upload/v1723798204/greenary/frame-1.jpg

    for (let i = 1; i <= frames2.maxIndex; i++) {

        const publicId2 = `frame-${i}`;
        const version2 = "v1723798204";
        const imgUrl = `${cloudinaryBaseURL2}${version2}/${folder2}/${publicId2}.jpg`;

        const img = new Image();
        img.src = imgUrl;
        img.onerror = () => {
            console.error(`Failed to load image at index ${i}`);
        };
        img.onload = () => {
            imageLoaded2++;
            if (imageLoaded2 === frames2.maxIndex) {
                // console.log('All images loaded2');
                loadImage2(frames2.currentIndex);
                startAnimation2();
            }
        };

        images2.push(img);
    }

};

const loadImage2 = (index) => {
    if (index >= 0 && index < images2.length) {
        const img = images2[index];
        if (img) {
            // Proceed with image loading
            canvas2.width = window.innerWidth;
            canvas2.height = window.innerHeight;

            const scaleX = canvas2.width / img.width;
            const scaleY = canvas2.height / img.height;
            const scale = Math.max(scaleX, scaleY);

            const newWidth = img.width * scale;
            const newHeight = img.height * scale;

            const offsetX = (canvas2.width - newWidth) / 2;
            const offsetY = (canvas2.height - newHeight) / 2;

            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.imageSmoothingEnabled = false;
            ctx2.imageSmoothingQuality = 'high';
            ctx2.drawImage(img, offsetX, offsetY, newWidth, newHeight);

            frames2.currentIndex = index;
        } else {
            console.error(`Image at index ${index} is undefined.`);
        }
    }
}

const startAnimation2 = () => {
    const frameTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.green_pakistan',
            start: 'top top',
            end: 'bottom bottom', // Add end if needed
            scrub: 5,
            onEnter: () => {
                gsap.to(mousemoveBox2, {
                    opacity: 1,
                    display: 'block',
                });
                gsap.to('.poster_canvas', {
                    opacity: 1,
                    display: 'block',
                });
            },
            onEnterBack: () => {
                gsap.to(mousemoveBox2, {
                    opacity: 1,
                    display: 'block',
                });
                gsap.to('.poster_canvas', {
                    opacity: 1,
                    display: 'block',
                });
            },
            onLeave: () => {
                gsap.to(mousemoveBox2, {
                    opacity: 0,
                    display: 'none',
                });
                gsap.to('.poster_canvas', {
                    opacity: 0,
                    display: 'none',
                });
            },
            onLeaveBack: () => {
                gsap.to(mousemoveBox2, {
                    opacity: 0,
                    display: 'none',
                });
                gsap.to('.poster_canvas', {
                    opacity: 0,
                    display: 'none',
                });
            },
        },
        ease: 'power4.inOut',
    });

    frameTl.to(frames2, {
        currentIndex: frames2.maxIndex,
        onUpdate: () => {
            loadImage2(Math.floor(frames2.currentIndex));
        },
    });
};


window.addEventListener('resize', () => {
    loadImage2(Math.floor(frames2.currentIndex));
});

setInterval(() => {
    mousemoveBoxSpan2.textContent = 'Stop to Pause'
}, 2000);

setInterval(() => {
    mousemoveBoxSpan2.textContent = 'Scroll to Play'
}, 4000);

panel5.addEventListener('mousemove', (e) => {
    gsap.to(mousemoveBox2, {
        ease: 'power4',
        duration: 1,
        x: e.clientX,
        y: e.clientY,
    });
})

gsap.from('.poster_canvas', {
    skewX: '15deg',
    duration: 1,
    ease: 'elastic.out',
    repeat: -1,
    yoyo: true
})

preloadImages2()