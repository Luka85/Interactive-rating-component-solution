const submit = document.querySelector(".submit");
const rateNums = document.querySelectorAll(".rate")
const ratingState = document.querySelector(".rating_state_container");
const thankYouState = document.querySelector(".thank_you_state_container");
thankYouState.style.display = "none";
submit.disabled = true;
let savedValue;

for (let num of rateNums) {
    num.addEventListener("click", toggle)
}

function toggle() {
    submit.disabled = false;
    for (let num of rateNums) {
        num.classList.remove("toggle_rate");
    }
    this.classList.add("toggle_rate");
    savedValue = this.innerText;
}

submit.addEventListener("click", function () {
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
    const result = document.querySelector(".result");
    result.innerText = `You selected ${savedValue} out of 5`
})

