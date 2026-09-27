const filterToggleButton = document.getElementById("filter-toggle-btn");
const filterContent = document.getElementById("filter-content");
const filterChevron = document.getElementById("filter-chevron");

function toggleFilterPanel() {
  const isOpen = filterContent.classList.contains("grid-rows-[1fr]");

  filterContent.classList.toggle("grid-rows-[0fr]", isOpen);
  filterContent.classList.toggle("grid-rows-[1fr]", !isOpen);
  filterChevron.classList.toggle("rotate-180", !isOpen);
  filterToggleButton.setAttribute("aria-expanded", String(!isOpen));
}

if (filterToggleButton && filterContent && filterChevron) {
  filterToggleButton.addEventListener("click", toggleFilterPanel);

  filterToggleButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFilterPanel();
    }
  });
}
