const preloaderH1 = document.querySelector('.preloader_text h1')
const preloaderH2 = document.querySelector('.preloader_text h2')
const greenPkText = document.querySelector('.green_pakistan_text')

const splitText = (text, domElem) => {
    let clutter = '';
    text.split('').forEach((char) => {
        clutter += `<span>${char}</span>`
    })
    domElem.innerHTML = clutter;
}

splitText('Happy', preloaderH1);
splitText('Independence', preloaderH2);
splitText('Ready-to make Pakistan Green!', greenPkText);