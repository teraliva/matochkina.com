// slider config

$(document).ready(function () {
    $('.carousel').slick({
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    });
});

// noise settings

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();

function reveall() {
    var reveals = document.querySelectorAll(".page-base");

    for (var i = 0; i < reveals.length; i++) {
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('goUp');
                }
            });
        });

        observer.observe(reveals[i]);
    }
}
reveall();

function showVideo(e) {
    let a = document.querySelector("home-page__2");
    a.classList.add('goUp');
}


// small-cursor
const scursor = document.querySelector('.small-cursor');
const area = document.querySelector('.case');
document.addEventListener('mousemove', (e) => {
    scursor.style.left = e.pageX + 'px';
    scursor.style.top = e.pageY + 'px';
});



