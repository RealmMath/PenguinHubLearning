const activateTab = (tabName) => {
  const tab = document.querySelector(`.tab[data-name="${tabName}"]`);
  tab.classList.add("active");

  const content = document.querySelector(`.content[data-tab="${tabName}"]`);
  content.classList.add("active");
};

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  for (let tab of tabs) {
    tab.addEventListener("click", function() {
      activateTab(this.dataset.name);
    });
  }
});
