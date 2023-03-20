const ratingContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you-container");
const btns = document.querySelectorAll(".btn");
const submitBtn = document.getElementById("submit-btn");
const ratingValue = document.getElementById("rating");

submitBtn.addEventListener('click', ()=> {
    ratingContainer.style.display = "none";
    thankYouContainer.classList.remove("hidden");
})

btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        ratingValue.innerHTML = btn.innerHTML;
    })
})