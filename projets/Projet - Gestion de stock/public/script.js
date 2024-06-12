document.addEventListener("DOMContentLoaded", () => {
  loadStock();
});

function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

function addItem() {
  const itemInput = document.getElementById("item");
  const quantityInput = document.getElementById("quantity");
  const item = itemInput.value.trim();
  const quantity = quantityInput.value.trim();

  if (item && quantity) {
    const newItem = { item, quantity };
    fetch("/stock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        addItemToDOM(data);
        itemInput.value = "";
        quantityInput.value = "";
        showNotification("Article ajouté avec succès", "success");
      })
      .catch((error) => {
        console.error("Erreur:", error);
        showNotification("Erreur lors de l'ajout de l'article", "error");
      });
  } else {
    showNotification("Veuillez remplir les deux champs", "error");
  }
}

function addItemToDOM(item) {
  const stockList = document.getElementById("stock-list");
  const li = document.createElement("li");
  li.innerHTML = `${item.item} - ${item.quantity} <button onclick="deleteItem('${item.item}', this)">Supprimer</button>`;
  stockList.appendChild(li);
}

function deleteItem(item, button) {
  fetch(`/stock/${item}`, {
    method: "DELETE",
  })
    .then(() => {
      const li = button.parentNode;
      li.parentNode.removeChild(li);
      showNotification("Article supprimé avec succès", "success");
    })
    .catch((error) => {
      console.error("Erreur:", error);
      showNotification("Erreur lors de la suppression de l'article", "error");
    });
}

function loadStock() {
  fetch("/stock")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => addItemToDOM(item));
    })
    .catch((error) => {
      console.error("Erreur:", error);
      showNotification("Erreur lors du chargement des articles", "error");
    });
}

function searchItems() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const stockList = document.getElementById("stock-list");
  const items = stockList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchInput)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
