const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector(".seta");

    content.style.display =
      content.style.display === "block" ? "none" : "block";

    arrow.classList.toggle("rotacao");
  });
});