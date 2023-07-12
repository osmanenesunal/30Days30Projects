const loadingText = document.querySelector(".loading-text")
const backGround = document.querySelector(".bg")

let load = 0;
let interval = setInterval(Blurry, 30)

function Blurry() {
    load++;
    if (load > 99) {
        clearInterval(interval)
    }
    console.log(load);

    loadingText.innerText = (`${load}%`)

    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    backGround.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}