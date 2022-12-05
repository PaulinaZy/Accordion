const faqItem = document.querySelectorAll(".faq-item");


faqItem.forEach(item => {
    let arrow = item.querySelector(".arrow");
    let answer = item.querySelector(".answer");
    let question = item.querySelector(".question")


    function openAnswer() {


        answer.classList.toggle("hidden");

        if (!answer.classList.contains("hidden")) {
            faqItem.forEach(x => {
                x.querySelector(".answer").classList.add("hidden");
                x.querySelector(".question").style.fontWeight = "400";
                x.querySelector(".arrow").style.transform = "rotate(0)";
            })
            answer.classList.toggle("hidden");
            question.style.fontWeight = "700";
            arrow.style.transform = "rotate(180deg)";
        } else {
            question.style.fontWeight = "400";
            arrow.style.transform = "rotate(0)";
        }
    }
    item.addEventListener("click", openAnswer)
});