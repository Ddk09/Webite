
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    // Add hover effect to each card
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
      });
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
      });
    });
  
    // Add click event to redirect using data-link attribute
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) {
          window.location.href = link; // Redirect to the specified link
        }
      });
    });
  });

  
  
  