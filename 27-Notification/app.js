const notificationContainer = document.querySelector(".notification-container")
const button = document.getElementById("button")

const notificationMessage = [
    "Instagram Notification",
    "LinkedIn Notification",
    "Twitter Notification",
    "Whatsapp Notification",
    "Github Notification",
    "Facebook Notification",
]

const colors = ["red", "purple", "black", "grey", "blue", "green"]

button.addEventListener("click", () => {
    createNotification()
})

function createNotification() {
    const notification = document.createElement("div")
    notification.classList.add("notification")
    notification.innerText = getRandomNotification()

    notification.classList.add(randomColorNotification())

    notificationContainer.appendChild(notification)

    setTimeout(()=> (notification.remove()),3000)
}

function getRandomNotification() {
    return notificationMessage[Math.floor(Math.random() * notificationMessage.length)]
}
function randomColorNotification(){
    return colors[Math.floor(Math.random() * colors.length)]
}

