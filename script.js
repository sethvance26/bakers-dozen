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

function validateInquiry(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    let isValid = true;
    
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
        } else {
            nameError.textContent = ""
        }

    if(!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
}

const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListenerListener("submit", validateInquiry);
}
