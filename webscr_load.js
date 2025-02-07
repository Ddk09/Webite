document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const loadingIndicator = document.getElementById("loadingIndicator");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // Show the loading indicator
            loadingIndicator.style.display = "block";

            // Get the link from the data-link attribute
            const link = card.getAttribute("data-link");

            // Redirect after a short delay (e.g., 1 second)
            setTimeout(() => {
                window.location.href = link;
            }, 1000);
        });
    });
});
