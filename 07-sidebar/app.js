const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes: ${selector} does not exist`);
};

const sideToggle = getElement(".toggle");
const sidebar = getElement(".sidebar");
const sidebarClose = getElement(".close");

sideToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
