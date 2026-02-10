const toggleBtn = document.querySelector(".nav-toggle");
const menu = document.querySelector("#navMenu");

if (toggleBtn && menu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(e) {
  e.preventDefault();
  alert("Thanks! Your message was sent (demo). Next we’ll connect this to your email/Zoho.");
  e.target.reset();
  return false;
}

