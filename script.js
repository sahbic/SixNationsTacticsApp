// script.js (Adapted for 1-2-1 Card Layout)

document.addEventListener('DOMContentLoaded', () => {
    // Data is loaded globally from data.js via the 'reportData' variable

    // --- DOM Elements ---
    const teamButtons = document.querySelectorAll('.team-button');
    const contentArea = document.getElementById('content-area');
    // Elements within content-area to update
    const teamLogoDisplay = document.getElementById('team-logo-display');
    const teamNameDisplay = document.getElementById('team-name-display');
    const performanceSummary = document.getElementById('performance-summary');
    const strengthsList = document.getElementById('strengths-list');
    const weaknessesList = document.getElementById('weaknesses-list');
    const opportunitiesList = document.getElementById('opportunities-list');

    // --- Functions ---
    function updateContent(teamId) {
        // Access the global data object from data.js
        const data = reportData[teamId];
        if (!data) {
            console.error(`Data not found for team ID: ${teamId}`);
            contentArea.innerHTML = '<p style="color: red;">Error loading team data.</p>'; // Show error in content area
            return; // Exit if data not found
        }

        // Add loading class for transition
        contentArea.classList.add('loading');

        // Update content after a short delay to allow fade out
        setTimeout(() => {
            // Populate Summary Card
            if (teamLogoDisplay) {
                 teamLogoDisplay.src = data.logo;
                 teamLogoDisplay.alt = `${data.name} Logo`;
            }
            if (teamNameDisplay) teamNameDisplay.textContent = data.name;
            if (performanceSummary) performanceSummary.textContent = data.performance;

            // Populate Strengths, Weaknesses, Opportunities lists
            populateList(strengthsList, data.strengths);
            populateList(weaknessesList, data.weaknesses);
            populateList(opportunitiesList, data.opportunities);

            // Force reflow and reset animation for smooth transition
            contentArea.style.animation = 'none';
            contentArea.offsetHeight; /* Trigger reflow */
            contentArea.style.animation = '';

            contentArea.classList.remove('loading');

        }, 150); // Adjust timing slightly less than CSS transition if needed
    }

    function populateList(ulElement, items) {
        if (!ulElement) return; // Exit if element doesn't exist
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

    // --- Event Listeners ---
    teamButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            teamButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Get team id from data attribute
            const teamId = button.dataset.team;
            // Update content area
            updateContent(teamId);
        });
    });

    // --- Initial Load ---
    // Ensure data is available before the initial call
    if (typeof reportData !== 'undefined' && reportData.france) {
        updateContent('france'); // Load France data by default
    } else {
        console.error("Initial team data not found. Ensure data.js is loaded correctly.");
        contentArea.innerHTML = '<p style="color: red;">Error loading initial team data.</p>';
    }

}); // End DOMContentLoaded