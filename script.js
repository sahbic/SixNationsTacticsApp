// script.js (Adapted for 1-2-1 Card Layout)

document.addEventListener('DOMContentLoaded', () => {
    // Data is loaded globally from data.js via the 'reportData' and 'frenchData' variables
    let currentLanguage = 'en';
    let currentData = reportData;

    // Translation data for UI elements
    const translations = {
        en: {
            mainTitle: "Six Nations 2025 - Tactical Deep Dive",
            performanceTitle: "Performance & Stats 📊",
            strengthsTitle: "Strengths 💪",
            weaknessesTitle: "Weaknesses 📉",
            opportunitiesTitle: "How to Beat Them 🎯",
            position: "Position",
            record: "Record",
            points: "Points",
            pointDifferential: "Point Differential",
            translateButton: "🌐 Translate to French",
            teams: {
                france: "France",
                england: "England",
                ireland: "Ireland",
                scotland: "Scotland",
                italy: "Italy",
                wales: "Wales"
            }
        },
        fr: {
            mainTitle: "Six Nations 2025 - Analyse Tactique Approfondie",
            performanceTitle: "Performance & Statistiques 📊",
            strengthsTitle: "Points Forts 💪",
            weaknessesTitle: "Points Faibles 📉",
            opportunitiesTitle: "Comment les Battre 🎯",
            position: "Position",
            record: "Bilan",
            points: "Points",
            pointDifferential: "Différence de Points",
            translateButton: "🌐 Traduire en Anglais",
            teams: {
                france: "France",
                england: "Angleterre",
                ireland: "Irlande",
                scotland: "Écosse",
                italy: "Italie",
                wales: "Pays de Galles"
            }
        }
    };

    // --- DOM Elements ---
    const teamButtons = document.querySelectorAll('.team-button');
    const contentArea = document.getElementById('content-area');
    const translateButton = document.getElementById('translate-button');
    const mainTitle = document.getElementById('main-title');
    const performanceTitle = document.getElementById('performance-title');
    const strengthsTitle = document.getElementById('strengths-title');
    const weaknessesTitle = document.getElementById('weaknesses-title');
    const opportunitiesTitle = document.getElementById('opportunities-title');
    const positionLabel = document.getElementById('position-label');
    const recordLabel = document.getElementById('record-label');
    const pointsLabel = document.getElementById('points-label');
    const pdLabel = document.getElementById('pd-label');
    const teamNameSpans = document.querySelectorAll('.team-name');
    // Elements within content-area to update
    const teamLogoDisplay = document.getElementById('team-logo-display');
    const teamNameDisplay = document.getElementById('team-name-display');
    const performanceSummary = document.getElementById('performance-summary');
    const positionStat = document.getElementById('position-stat');
    const recordStat = document.getElementById('record-stat');
    const pointsStat = document.getElementById('points-stat');
    const pdStat = document.getElementById('pd-stat');
    const strengthsList = document.getElementById('strengths-list');
    const weaknessesList = document.getElementById('weaknesses-list');
    const opportunitiesList = document.getElementById('opportunities-list');

    // --- Functions ---
    function updateUILanguage() {
        const t = translations[currentLanguage];

        // Update main title and section titles
        mainTitle.textContent = t.mainTitle;
        performanceTitle.textContent = t.performanceTitle;
        strengthsTitle.textContent = t.strengthsTitle;
        weaknessesTitle.textContent = t.weaknessesTitle;
        opportunitiesTitle.textContent = t.opportunitiesTitle;

        // Update stat labels
        positionLabel.textContent = t.position;
        recordLabel.textContent = t.record;
        pointsLabel.textContent = t.points;
        pdLabel.textContent = t.pointDifferential;

        // Update team names in buttons
        teamNameSpans.forEach(span => {
            const teamId = span.closest('.team-button').dataset.team;
            span.textContent = t.teams[teamId];
        });

        // Update translate button text
        document.querySelector('.translate-text').textContent = t.translateButton;
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        currentData = currentLanguage === 'en' ? reportData : frenchData;

        // Update UI language
        updateUILanguage();

        // Update content for current team
        const activeTeam = document.querySelector('.team-button.active');
        if (activeTeam) {
            updateContent(activeTeam.dataset.team);
        }
    }

    function parsePerformanceStats(performanceText) {
        const stats = {
            position: 'N/A',
            record: 'N/A',
            points: 'N/A',
            pd: 'N/A',
            details: ''
        };

        // Split the performance text into sections
        const sections = performanceText.split(' | ');

        // Parse each section based on the new format
        sections.forEach(section => {
            if (section.startsWith('Position:')) {
                stats.position = section.replace('Position:', '').trim();
            }
            else if (section.startsWith('Record:')) {
                stats.record = section.replace('Record:', '').trim();
            }
            else if (section.startsWith('Points:')) {
                stats.points = section.replace('Points:', '').trim();
            }
            else if (section.startsWith('PD:')) {
                stats.pd = section.replace('PD:', '').trim();
            }
            else if (section.startsWith('Additional:')) {
                stats.details = section.replace('Additional:', '').trim()
                    .replace(/Record/g, '<span class="record">Record</span>')
                    .replace(/highest/g, '<span class="record">highest</span>')
                    .replace(/lowest/g, '<span class="negative">lowest</span>')
                    .replace(/poor/gi, '<span class="negative">poor</span>')
                    .replace(/heavy loss/gi, '<span class="negative">heavy loss</span>')
                    .replace(/improved/gi, '<span class="highlight">improved</span>')
                    .replace(/historic/gi, '<span class="highlight">historic</span>')
                    .replace(/Triple Crown/g, '<span class="highlight">Triple Crown</span>')
                    .replace(/Champions/g, '<span class="record">Champions</span>')
                    .replace(/Wooden Spoon/g, '<span class="negative">Wooden Spoon</span>');
            }
        });

        return stats;
    }

    function updateContent(teamId) {
        // Access the current data object (either reportData or frenchData)
        const data = currentData[teamId];
        if (!data) {
            console.error(`Data not found for team ID: ${teamId}`);
            contentArea.innerHTML = '<p style="color: red;">Error loading team data.</p>';
            return;
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

            // Parse and display performance stats
            const stats = parsePerformanceStats(data.performance);
            if (positionStat) positionStat.textContent = stats.position;
            if (recordStat) recordStat.textContent = stats.record;
            if (pointsStat) pointsStat.textContent = stats.points;
            if (pdStat) pdStat.textContent = stats.pd;
            if (performanceSummary) performanceSummary.innerHTML = stats.details;

            // Populate Strengths, Weaknesses, Opportunities lists
            populateList(strengthsList, data.strengths);
            populateList(weaknessesList, data.weaknesses);
            populateList(opportunitiesList, data.opportunities);

            // Force reflow and reset animation for smooth transition
            contentArea.style.animation = 'none';
            contentArea.offsetHeight; /* Trigger reflow */
            contentArea.style.animation = '';

            contentArea.classList.remove('loading');
        }, 150);
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

    // Add translation button event listener
    translateButton.addEventListener('click', toggleLanguage);

    // --- Initial Load ---
    // Ensure data is available before the initial call
    if (typeof reportData !== 'undefined' && reportData.france) {
        updateUILanguage(); // Set initial UI language
        updateContent('france'); // Load France data by default
    } else {
        console.error("Initial team data not found. Ensure data.js is loaded correctly.");
        contentArea.innerHTML = '<p style="color: red;">Error loading initial team data.</p>';
    }

}); // End DOMContentLoaded