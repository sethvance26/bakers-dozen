const products = [
    "Breads",
    "Pastries",
    "Cakes"
]

function saveSelection() {
    const favoriteProduct= document.getElementById("favorite-product");
    const savedProduct = document.getElementById("saved-product");

    const selectedProduct = favoriteProduct.value;

    if (selectedProduct) {
        localStorage.setItem("favoriteProduct", selectedProduct);
        savedProduct.textContent = `We love ${selectedProduct} just as much as you do!`
    }

}

const saveButton = document.getElementById("save-selection");

if (saveButton) {
    saveButton.addEventListener("click", saveSelection)
}