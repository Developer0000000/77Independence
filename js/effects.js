
const makeMagnet = [
    '.ready_to_explore h1', '.ready_to_explore h2', '.ready_to_explore h3', '.preloader_text h1', '.preloader_text h2',
    '.green_pakistan_text', '.cultures_text span', '.punjabi_txt', '.sindhi_txt', '.balochi_txt', '.pashto_txt',
    '.good_citizen_text h1', '.good_citizen_text h2', '.good_citizen_text h3', '.good_citizen_text h4',
]

makeMagnet.forEach((elem) => {
    Shery.makeMagnet(elem, {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
});

Shery.makeMagnet(".butterfly .butterfly_img", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.imageEffect(".wiggle_effect", {
    style: 5,
    // debug: true,
    config: {
        "a": { "value": 4.81, "range": [0, 30] }, "b": { "value": -0.68, "range": [-1, 1] }, "zindex": { "value": 9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0.05, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.52 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.46, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }
    },
})