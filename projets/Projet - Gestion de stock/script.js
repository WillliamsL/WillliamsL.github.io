document.addEventListener("DOMContentLoaded", () => {
  loadStock();
});

function addItem() {
  const itemInput = document.getElementById("item");
  const quantityInput = document.getElementById("quantity");
  const item = itemInput.value;
  const quantity = quantityInput.value;
  if (item && quantity) {
    const stockList = document.getElementById("stock-list");
    const li = document.createElement("li");
    li.innerHTML = `${item} - ${quantity} <button onclick="deleteItem(this)">Supprimer</button>`;
    stockList.appendChild(li);
    saveStock();
    itemInput.value = "";
    quantityInput.value = "";
  } else {
    alert("Veuillez remplir les deux champs");
  }
}

function deleteItem(button) {
  const li = button.parentNode;
  li.parentNode.removeChild(li);
  saveStock();
}

function saveStock() {
  const stockList = document.getElementById("stock-list");
  const items = [];
  for (let i = 0; i < stockList.children.length; i++) {
    const li = stockList.children[i];
    const itemDetails = li.innerText.split(" - ");
    const item = itemDetails[0];
    const quantity = itemDetails[1].split(" ")[0];
    items.push({ item, quantity });
  }
  localStorage.setItem("stock", JSON.stringify(items));
}

function loadStock() {
  const items = JSON.parse(localStorage.getItem("stock")) || [];
  const stockList = document.getElementById("stock-list");
  items.forEach(({ item, quantity }) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} - ${quantity} <button onclick="deleteItem(this)">Supprimer</button>`;
    stockList.appendChild(li);
  });
}
