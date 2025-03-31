// script.js (Adapted for Card Layout)

document.addEventListener('DOMContentLoaded', () => {
    // Data is loaded globally from data.js via the 'reportData' variable

    const cardsContainer = document.getElementById('team-cards-container');

    // --- Functions ---
    function populateList(ulElement, items) {
        ulElement.innerHTML = ''; // Clear existing items
        if (!items || !Array.isArray(items) || items.length === 0) {
             ulElement.innerHTML = '<li>No data available.</li>'; // Provide feedback
             return;
        }

        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            // Set CSS variable for stagger animation
            li.style.setProperty('--i', index);
            ulElement.appendChild(li);
        });
    }

    function populateAllCards() {
        if (typeof reportData === 'undefined') {
            console.error("Report data not found. Ensure data.js is loaded.");
            cardsContainer.innerHTML = '<p style="color: red;">Error loading team data.</p>';
            return;
        }

        // Find all card placeholders in the HTML
        const cardElements = cardsContainer.querySelectorAll('.team-card');

        cardElements.forEach(cardElement => {
            const teamId = cardElement.dataset.team;
            const data = reportData[teamId];

            if (!data) {
                console.warn(`Data not found for team card: ${teamId}`);
                // Optionally hide the card or show an error within it
                cardElement.style.display = 'none';
                return;
            }

            // Find elements *within this specific card*
            const logoEl = cardElement.querySelector('.card-logo');
            const nameEl = cardElement.querySelector('.card-team-name');
            const performanceEl = cardElement.querySelector('.card-performance');
            const strengthsListEl = cardElement.querySelector('.card-strengths-list');
            const weaknessesListEl = cardElement.querySelector('.card-weaknesses-list');
            const opportunitiesListEl = cardElement.querySelector('.card-opportunities-list');

            // Populate the card elements
            if (logoEl) {
                logoEl.src = data.logo;
                logoEl.alt = `${data.name} Logo`;
            }
            if (nameEl) nameEl.textContent = data.name;
            if (performanceEl) performanceEl.textContent = data.performance;

            // Populate the lists
            populateList(strengthsListEl, data.strengths);
            populateList(weaknessesListEl, data.weaknesses);
            populateList(opportunitiesListEl, data.opportunities);

             // Add click listener for 'active' state
             cardElement.addEventListener('click', handleCardClick);
        });
    }

     function handleCardClick(event) {
         // Find the card that was clicked (could be an element inside the card)
        const clickedCard = event.currentTarget; // .team-card element

        // Remove 'active' class from all cards first
         const allCards = cardsContainer.querySelectorAll('.team-card');
        allCards.forEach(card => card.classList.remove('active'));

        // Add 'active' class to the clicked card
        clickedCard.classList.add('active');

        // Optional: Scroll the clicked card into view if needed
        // clickedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
     }


    // --- Initial Load ---
    populateAllCards();

}); // End DOMContentLoaded