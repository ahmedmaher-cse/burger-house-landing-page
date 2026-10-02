const toast = document.getElementById("toast");
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});

const style = document.createElement("style");
style.textContent = `
@media (max-width: 650px) {
  .nav-links.mobile-open {
    display: flex;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    padding: 18px 5%;
    background: #fff;
    border-bottom: 1px solid #eee;
    flex-direction: column;
    gap: 15px;
  }
}`;
document.head.appendChild(style);

