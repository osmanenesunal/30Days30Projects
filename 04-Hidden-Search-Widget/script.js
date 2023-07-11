const btnSearch = document.querySelector(".btn-search")
const input = document.querySelector(".input")
const search = document.querySelector(".search")

btnSearch.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})