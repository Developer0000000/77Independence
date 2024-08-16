const canvas = document.querySelector('.canvas_wrapper canvas');
const ctx = canvas.getContext('2d');

const panel2 = document.querySelector('.panel_2')

let mousemoveBox = document.querySelector('.mousemove_box')
let mousemoveBoxSpan = document.querySelector('.mousemove_box span')


const frames = {
    currentIndex: 1,
    maxIndex: 1200,
}

let imageLoaded = 0;
const images = []

const preloadImages = () => {

    const cloudinaryBaseURL = "https://res.cloudinary.com/dje7ukgcq/image/upload/";
    const folder = "frames";

    for (let i = 1; i <= frames.maxIndex; i++) {

        const publicId = `frame-${i}`;
        const version = "v1723797574";
        const imgUrl = `${cloudinaryBaseURL}${version}/${folder}/${publicId}.jpg`;
        // const imgUrl = `../assets/frames/frame_${i.toString().padStart(4, 0)}.jpeg`;

        const img = new Image();
        img.src = imgUrl;
        img.onerror = () => {
            console.error(`Failed to load image at index ${i}`);
        };
        img.onload = () => {
            imageLoaded++;
            if (imageLoaded === frames.maxIndex) {
                // console.log('All images loaded');
                loadImage(frames.currentIndex);
                startAnimation();
            }
        };
        images.push(img);
    }

};

const loadImage = (index) => {
    if (index >= 0 && index < images.length) {
        const img = images[index];
        if (img) {
            // Proceed with image loading
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scaleX = canvas.width / img.width;
            const scaleY = canvas.height / img.height;
            const scale = Math.max(scaleX, scaleY);

            const newWidth = img.width * scale;
            const newHeight = img.height * scale;

            const offsetX = (canvas.width - newWidth) / 2;
            const offsetY = (canvas.height - newHeight) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.imageSmoothingEnabled = false;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

            frames.currentIndex = index;
        } else {
            console.error(`Image at index ${index} is undefined.`);
        }
    }
}

const startAnimation = () => {
    const frameTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.canvas_wrapper',
            start: 'top top',
            end: 'bottom bottom', // Add end if needed
            scrub: 5,
            onEnter: () => {
                gsap.to(mousemoveBox, {
                    opacity: 1,
                    display: 'block',
                });
                gsap.to('.poster_canvas', {
                    opacity: 1,
                    display: 'block',
                });
            },
            onEnterBack: () => {
                gsap.to(mousemoveBox, {
                    opacity: 1,
                    display: 'block',
                });
                gsap.to('.poster_canvas', {
                    opacity: 1,
                    display: 'block',
                });
            },
            onLeave: () => {
                gsap.to(mousemoveBox, {
                    opacity: 0,
                    display: 'none',
                });
                gsap.to('.poster_canvas', {
                    opacity: 0,
                    display: 'none',
                });
            },
            onLeaveBack: () => {
                gsap.to(mousemoveBox, {
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

    frameTl.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: () => {
            loadImage(Math.floor(frames.currentIndex));
        },
    })

};

window.addEventListener('resize', () => {
    loadImage(Math.floor(frames.currentIndex));
});

setInterval(() => {
    mousemoveBoxSpan.textContent = 'Stop to Pause'
}, 2000);

setInterval(() => {
    mousemoveBoxSpan.textContent = 'Scroll to Play'
}, 4000);

panel2.addEventListener('mousemove', (e) => {
    gsap.to(mousemoveBox, {
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

preloadImages()