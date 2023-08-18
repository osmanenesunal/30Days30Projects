const background = document.getElementById("background")
const passwordLabel = document.getElementById("passwordLabel")
const passwordInput = document.getElementById('password')

passwordInput.addEventListener('input' , (e)=> {
    const length = e.target.value.length
    // console.log(length);
    const bgblur = 20 - length *2
    // console.log(bgblur);
    background.style.filter = `blur(${bgblur}px) `

    if(length>= 10){
        passwordLabel.innerText = "Strong Password"

    }
    else{
        passwordLabel.innerText = "Password"
    }
})
