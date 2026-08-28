const products = [
    "Bread",
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

function loadSelection() {
    const favoriteProduct = localStorage.getItem("favoriteProduct");
    const savedProduct = document.getElementById("saved-product");

    if (savedProduct && favoriteProduct) {
        savedProduct.textContent = `We remembered that your favorite product is ${favoriteProduct}!`;
    }
}

loadSelection();