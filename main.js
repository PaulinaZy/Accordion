const faqItem = document.querySelectorAll(".faq-item");
const box = document.querySelector("#box");

//Loop through all faq items and add click listener
faqItem.forEach(item => {
    item.querySelector(".question").addEventListener("click", toggleOpen)
})

//Function to toggle open class
function toggleOpen(e) {
    //Mark the whole current FAQ item    e.target is a paragraph, we need to go 2 levels up
    let currentFAQItem = e.target.parentElement.parentElement;

    //move to box when faq item is clicked
    box.style.transform = "translateX(-50px)";

    //LOOP - remove class open on all faq items that are not currently clicked
    faqItem.forEach(item => {
        if (item !== currentFAQItem) {
            item.classList.remove("open");
        }
    })

    //toggle open class on clicked faq item
    currentFAQItem.classList.toggle("open");
    if (!currentFAQItem.classList.contains("open")) {
        box.style.transform = "translateX(0)";
    }



}