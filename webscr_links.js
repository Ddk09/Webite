let selectedRating = 0;
document.querySelector('a[data-section="contact"]').addEventListener('click', function() {
    document.getElementById('rating-section').style.display = 'block'; // Show rating section
    document.getElementById('contact').style.display = 'none'; // Hide contact section
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = parseInt(this.getAttribute('data-value'));
        updateStars();
        document.getElementById('rating-value').textContent = selectedRating;
    });

    star.addEventListener('mouseover', function() {
        highlightStars(parseInt(this.getAttribute('data-value')));
    });

    star.addEventListener('mouseout', function() {
        updateStars();
    });
});

function updateStars() {
    document.querySelectorAll('.star').forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= selectedRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function highlightStars(rating) {
    document.querySelectorAll('.star').forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function submitRating() {
    if (selectedRating === 0) {
        alert("Please select a rating.");
    } else {
        alert("Thank you for your rating! You gave " + selectedRating + " stars.");
        // You can submit the rating to a server here using AJAX or other methods
        document.getElementById('rating-section').style.display = 'none'; // Hide rating section after submission
        document.getElementById('contact').style.display = 'block';
    }
}

  