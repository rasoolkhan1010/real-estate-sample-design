// SEARCH FUNCTION
function searchProperty() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    document.querySelector(".properties").scrollIntoView({
        behavior: "smooth"
    });
}

// CARD CLICK ALERT
let allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
    card.addEventListener("click", function () {
        alert("You selected: " + this.querySelector("h3").innerText);
    });
});

// CONTACT FORM
function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}
