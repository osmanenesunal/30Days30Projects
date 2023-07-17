const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = sound
    btn.addEventListener("click", () => {
        stopVoice()
        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)

})

function stopVoice() {
    sounds.forEach((sound) => {
        const voice = document.getElementById(sound)

        voice.pause()

    })
}