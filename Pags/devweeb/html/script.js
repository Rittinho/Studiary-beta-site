const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (event) => {
  const value = FormatString(event.target.value);
  const items = document.querySelectorAll(".items.item");
  items.forEach((item) => {
    if (FormatString(item.textContent.indexOf(value)) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

function FormatString(value) {
  return value.toLowerCase().trim();
}
