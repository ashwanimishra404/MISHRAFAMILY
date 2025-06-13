document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleButton");
  const description = document.getElementById("description");

  toggleBtn.addEventListener("click", () => {
    if (description.classList.contains("hidden")) {
      description.classList.remove("hidden");
      toggleBtn.textContent = "Show Less";
    } else {
      description.classList.add("hidden");
      toggleBtn.textContent = "Show More";
    }
  });
});
