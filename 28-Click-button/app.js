const button = document.querySelector(".ripple")

const colors = ["red", "green" , "blue" , "white" , "yellow" , "black"]

button.addEventListener("click", (e) => {
    const clientX = e.clientX
    const clientY = e.clientY
    console.log(`clientX  = ${clientX} -  clientY ${clientY}`);

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    console.log(`buttonTop  = ${buttonTop} -  buttonLeft ${buttonLeft}`);

    const insideX = clientX - buttonLeft
    const insideY  = clientY - buttonTop
    console.log(`insideX  = ${insideX} -  insideY ${insideY}`);

    const circle = document.createElement("span")
    circle.classList.add("circle")
    circle.style.top = insideY + "px"
    circle.style.left = insideX + "px"


    circle.classList.add(getRandomColors())

    button.appendChild(circle)

    setTimeout(()=>(circle.remove()),300)
})
function getRandomColors(){
    return colors[Math.floor(Math.random() * colors.length)]
}