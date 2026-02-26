let sliderOpenBtn = document.querySelector("#btn-sliderOpen")
let sliderCloseBtn = document.querySelector("#btn-sliderClose")
let sliderDiv = document.querySelector(".slider-none")
let anchor = document.querySelectorAll(".slider-none a")
let slideCloser

sliderOpenBtn.addEventListener("click", () => {
    sliderDiv.classList.add("slider-block")
    sliderOpenBtn.style.display = "none"
    sliderCloseBtn.style.display = "block"
})

slideCloser = sliderCloseBtn.addEventListener("click", () => {
    sliderDiv.classList.remove("slider-block")
    sliderOpenBtn.style.display = "block"
    sliderCloseBtn.style.display = "none"
})

anchor.forEach(a => {
    a.addEventListener("click", () => {
        sliderDiv.classList.remove("slider-block")
        sliderOpenBtn.style.display = "block"
        sliderCloseBtn.style.display = "none"
    })
})
