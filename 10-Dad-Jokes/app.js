const doJoke = document.getElementById("joke")
const btnJoke = document.getElementById("jokebtn")

btnJoke.addEventListener("click", generateJoke)

generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },

    }
    const ser = await fetch('https://icanhazdadjoke.com/', config)

    const data = await ser.json()
    doJoke.innerHTML = data.joke

}



//! Then 

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },

//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((ser) => ser.json())
//         .then((data) =>
//             //  console.log(data)
//             doJoke.innerHTML = data.joke
//         )

// }