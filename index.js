const totalAmount = document.getElementById("totalAmount");
const cards = document.querySelectorAll(".card");

const selectorsHTML = `
  <div class="heading"><p>Size</p><p>Colour</p></div>
  <div class="row">
    <label>#1</label>
    <select><option>S</option><option>M</option><option>L</option></select>
    <select><option>Black</option><option>Red</option><option>Blue</option></select>
  </div>
  <div class="row">
    <label>#2</label>
    <select><option>S</option><option>M</option><option>L</option></select>
    <select><option>Black</option><option>Red</option><option>Blue</option></select>
  </div>
`;

cards.forEach((card) => {
  const selectors = card.querySelector(".selectors");
  selectors.innerHTML = selectorsHTML;
});

document.querySelectorAll('input[name="unit"]').forEach((radio) => {
  radio.addEventListener("change", ({ target }) => {
    const selectedId = target.value;

    cards.forEach((card) => {
      const isSelected = card.dataset.id === selectedId;
      card.classList.toggle("selected", isSelected);
      card.querySelector(".selectors")?.classList.toggle("hidden", !isSelected);
    });

    const prices = {
      1: "$10.00 USD",
      2: "$18.00 USD",
      3: "$24.00 USD",
    };

    totalAmount.textContent = prices[selectedId];
  });
});
