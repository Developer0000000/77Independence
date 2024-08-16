window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.canvas_wrapper canvas');
    const ctx = canvas.getContext('2d');
    const panel2 = document.querySelector('.panel_2');
    let mousemoveBox = document.querySelector('.mousemove_box');
    let mousemoveBoxSpan = document.querySelector('.mousemove_box span');

    const frames = {
        currentIndex: 1,
        maxIndex: 1200,
    };

    const images = [];
    const cloudinaryBaseURL = "https://res.cloudinary.com/dje7ukgcq/image/upload/";
    const folder = "frames";
    const batchSize = 1200;
    let currentBatch = 1;
    let allImagesLoaded = false;

    const loadBatchImages = () => {
        const start = (currentBatch - 1) * batchSize;
        const end = Math.min(start + batchSize, frames.maxIndex);

        for (let i = start; i < end; i++) {

            const publicId = `frame-${i + 1}`;
            const version = "v1723797574";
            const imgUrl = `${cloudinaryBaseURL}${version}/${folder}/${publicId}.jpg`;

            const img = new Image();
            img.src = imgUrl;
            // console.log(imgUrl);
            img.onload = () => {
                if (i === end - 1) {
                    // Load the next batch when the current one is fully loaded
                    if (currentBatch * batchSize < frames.maxIndex) {
                        currentBatch++;
                        loadBatchImages();
                    } else {
                        allImagesLoaded = true;
                    }
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image at index ${i + 1}`);
            };
            images.push(img);
        }
    };

    const preloadImages = () => {
        loadBatchImages();

        ScrollTrigger.create({
            trigger: '.canvas_wrapper',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 5,
            onUpdate: self => {
                const progress = self.progress;
                if (progress > 0.5 && !allImagesLoaded) {
                    // Load the next batch of images when halfway through
                    if (currentBatch * batchSize < frames.maxIndex) {
                        currentBatch++;
                        loadBatchImages();
                    }
                }
            }
        });
    };

    const loadImage = (index) => {
        if (index >= 0 && index < images.length) {
            const img = images[index];

            if (img && img.complete) {
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
                ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

                frames.currentIndex = index;
            } else {
                console.error(`Image at index ${index} is not yet loaded.`);
            }
        }
    };

    const startAnimation = () => {
        const frameTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.canvas_wrapper',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 5,
            },
            ease: 'power4.inOut',
        });

        frameTl.to(frames, {
            currentIndex: frames.maxIndex,
            onUpdate: () => {
                loadImage(Math.floor(frames.currentIndex));
            },
        });
    };


    preloadImages();
    startAnimation();


    window.addEventListener('resize', () => {
        loadImage(Math.floor(frames.currentIndex));
    });

    setInterval(() => {
        mousemoveBoxSpan.textContent = 'Stop to Pause';
    }, 2000);

    setInterval(() => {
        mousemoveBoxSpan.textContent = 'Scroll to Play';
    }, 4000);

    panel2.addEventListener('mousemove', (e) => {
        gsap.to(mousemoveBox, {
            ease: 'power4',
            duration: 1,
            x: e.clientX,
            y: e.clientY,
        });
    });

    gsap.from('.poster_canvas', {
        skewX: '15deg',
        duration: 1,
        ease: 'elastic.out',
        repeat: -1,
        yoyo: true,
    });
});
