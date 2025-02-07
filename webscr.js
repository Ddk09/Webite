document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".pt-sans-regular");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the section to display
            const sectionId = link.getAttribute("data-section");

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the selected section
            const selectedSection = document.getElementById(sectionId);
            selectedSection.style.display = "block";
        });
    });
});


