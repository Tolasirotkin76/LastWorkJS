
const accordeonQustions = document.querySelectorAll('.accordeon__qustion');

for (let accordeonQustion of accordeonQustions) {
    accordeonQustion.addEventListener("click", function () {
        const clickedAnswer = accordeonQustion.parentElement.querySelector(".accordeon__answer");

        accordeonQustion.classList.toggle('accordeon__qustion--active');
        clickedAnswer.classList.toggle('accordeon__answer--visible');

        if (clickedAnswer.classList.contains('accordeon__answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        }
        else {
            clickedAnswer.style.maxHeight = null;
        }
    });
}