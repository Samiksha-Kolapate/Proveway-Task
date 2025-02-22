document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".bundle-box");

    boxes.forEach(resetBox);

    boxes.forEach(box => {
        box.addEventListener("click", () => handleBoxClick(box));
        box.addEventListener("mouseenter", () => box.classList.add("hover"));
        box.addEventListener("mouseleave", () => box.classList.remove("hover"));

        const dropdown = box.querySelector(".dropdown-box select");
        if (dropdown) {
            dropdown.addEventListener("click", event => {
                box.click(); 
                event.stopPropagation();
            });
        }
    });
});

function resetBox(box) {
    box.classList.remove("selected");
    const radio = box.querySelector(".option-radio");
    if (radio) radio.checked = false;

    const content = box.querySelector(".selection-area");
    if (content) content.style.display = "none";
}

function handleBoxClick(box) {
    const radio = box.querySelector(".option-radio");

    document.querySelectorAll(".option-radio").forEach(radioBtn => {
        radioBtn.checked = false;
    });

    document.querySelectorAll(".bundle-box").forEach(resetBox);

    box.classList.add("selected");
    radio.checked = true;

    const content = box.querySelector(".selection-area");
    if (content) content.style.display = "block";
}
