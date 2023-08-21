const contents = document.querySelectorAll(".content")
const navBtn= document.querySelectorAll("nav ul li ")

navBtn.forEach((btn,idx)=> {
    btn.addEventListener("click", () => {
        hideAllcontent()
        hideAllbtn()
        btn.classList.add("active")
        contents[idx].classList.add("show")

    })

})
function hideAllcontent(){
    contents.forEach((content) => {content.classList.remove("show")})
}

function hideAllbtn(){
    navBtn.forEach((buttons) => { buttons.classList.remove("active")})
}