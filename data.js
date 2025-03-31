// data.js (Subtler Formatting)

const reportData = {
    france: {
        name: "FRANCE (Champions 🏆)",
        logo: "img/france-logo.png", // Adjust if SVG
        performance: "Finished 1st (Champions) | 4W-1L (to Eng) | 21 points | +125 PD. Tournament-high 30 tries. Record 73 points vs Italy. Record win vs Ireland (42-27). Bielle-Biarrey: 8 tries (record). Adaptable 'Total Rugby' style. 7-1 bench impact. Dupont influential.",
        strengths: [
            "⚡ Attack: Potent, versatile, efficient. Strong offloads, counters, unstructured play. Individual brilliance.",
            "👟 Kicking Game: Central to strategy. Effective long kicks (avg >880m) for territory, coordinated chase.",
            "💪 Set Piece: Strong scrum/lineout platform. Dominant maul.",
            "🛡️ Defence: Generally solid & resilient (93.78% tackle success vs Wales). Key turnovers.",
            "🔄 Adaptability & Power: High performance despite absences. Impactful bench (+1.5 tries/game 2nd half)."
        ],
        weaknesses: [
            " Vulnerability: Can be penetrated, especially in transition. Susceptible to smart kicking.",
            " Discipline: Occasional costly lapses (penalties, cards).",
            " Consistency/Reliance: Beatable (loss to Eng). Can rely heavily on kicking/brilliance.",
            " Back-field coverage can be exposed by grubbers/chips."
        ],
        opportunities: [
            " Exploiting Transition Defence: Attack quickly from turnovers/restarts.",
            " Strategic Kicking: Precise kicks (grubbers, chips) to target space, pin back.",
            " Applying Relentless Pressure: High line speed, aggressive breakdown (target Dupont), force errors.",
            " Challenging Set Piece & Maul: Attack lineout, disrupt maul early, scrum pressure.",
            " Controlling Territory & Tempo: Deny easy position, disrupt rhythm.",
            " Targeting Key Players/Imbalances: Pressure playmakers, exploit 7-1 bench."
        ]
    },
    england: {
        name: "󠁧󠁢󠁥ENGLAND (2nd Place 🥈)",
        logo: "img/england-logo.svg",
        performance: "Finished 2nd | 4W-1L (to Fra) | 20 points. Best finish since 2020. Record 68-14 win vs Wales. Narrow wins vs Sco & Fra. Led tournament in turnovers (36) & jackals (21). Kicked most frequently. Freeman scored every match.",
        strengths: [
            "🛡️ Defence & Set Piece: Solid, gritty structure. Dominant scrum, efficient lineout (92% success). High work rate.",
            "💪 Breakdown Dominance: World-class back row secured numerous turnovers (21 jackals). High tackle success (93%).",
            "🧠 Resilience & Adaptability: Won tight matches. Improved attacking shape (Smith-Smith link).",
            "👟 Kicking Game: Diverse tactical kicking for territory/pressure (box kicks primary)."
        ],
        weaknesses: [
            " Attack Consistency: Can lack cutting edge. Sometimes predictable/low-tempo.",
            " Transition Defence: Vulnerable to quick counters.",
            " Wide Channel Defence: Can be exposed by fast, wide attacks.",
            " Kick Retention: Very low rate (11%) despite frequent kicking."
        ],
        opportunities: [
            " Attacking Quickly in Transition: Exploit defensive reset slowness.",
            " Attacking Wide: Use quick ball/width to stretch defence.",
            " Winning Kicking Battle & Counter: Accurate kicks. Counter predictable box kicks (target low retention).",
            " Improving Breakdown Speed: Target ruck speed <3s to negate jackal threat.",
            " Challenging Set Piece Early: Disrupt lineout rhythm before replacements.",
            " Maintaining Possession: Force prolonged defence."
        ]
    },
    ireland: {
        name: "IRELAND (3rd Place 🥉)",
        logo: "img/ireland-logo.svg",
        performance: "Finished 3rd | 4W-1L | 19 points | Triple Crown 👑. Heavy loss to France (27-42). Narrow win vs Italy (22-17). Lowest PD (+18) of top 3. Shift towards kicking. Significant defensive issues (135 missed tackles, 14 tries conceded).",
        strengths: [
            "💪 Set Piece Foundation: Lineout generally strong; scrum solid.",
            "🧠 Experience & Core Skills: Game management, phase play potential, ruck speed, aerial ability.",
            "🗣️ Leadership: Experienced players showed leadership (e.g., Doris)."
        ],
        weaknesses: [
            " Defence: Significant regression. Poor tackle success, high missed tackles/tries conceded.",
            " Tactical Inconsistency: Style shift hurt attacking fluidity ('baffling change').",
            " Consistency & Depth: Performance varied. Depth tested. Aging core noted. High error rate."
        ],
        opportunities: [
            " Targeting Defensive Frailties: Exploit high missed tackles (135) with direct/evasive runners.",
            " Disrupting Breakdown & Rhythm: Aggressively slow ruck speed. High line speed.",
            " Pressuring Set Piece: Target lineout/scrum.",
            " Countering Kicking Game: Contest high balls, pressure receivers.",
            " Exploiting Potential Fitness Gaps: High tempo late in halves.",
            " Maintaining Discipline."
        ]
    },
    scotland: {
        name: "SCOTLAND (4th Place)",
        logo: "img/scotland-logo.svg",
        performance: "Finished 4th | 2W (vs Ita/Wal), 3L. Narrow loss to Eng. Lost final to Fra. Showed attacking flair but inconsistent. Possession-heavy vs Italy (58%). Kicked least after 3 rounds. Key injuries impacted.",
        strengths: [
            "⚡ Attack: Dangerous ball-in-hand, positive intent. Russell orchestrates.",
            "🌟 Individual Talent: Game-breakers (Russell, VdM). Strong front row.",
            "👟 Kicking Precision: Selective but effective territorial kicking.",
            "💪 Resilience: Showed ability to win tight matches."
        ],
        weaknesses: [
            " Consistency: Performance fluctuated significantly.",
            " Defence: Porous at times, especially wide/scramble. Back-three vulnerable.",
            " Discipline: Conceded numerous penalties.",
            " Set Piece: Inconsistent lineout, suspect maul defence. Low red-zone efficiency (3%).",
            " Depth: Injuries significantly impacted."
        ],
        opportunities: [
            " Maintaining Pressure & Intensity: Exploit lapses. High tempo.",
            " Targeting Defence: Attack channels, power runners, wide D. Kick to contest back-three.",
            " Disrupting Possession Game: Aggressive breakdown. Fast line speed.",
            " Dominating Territory: Accurate kicking.",
            " Challenging Set Piece.",
            " Limiting Russell's Influence: Aggressive linespeed.",
            " Capitalizing on Penalties."
        ]
    },
    italy: {
        name: "ITALY (5th Place)",
        logo: "img/italy-logo.png", // Adjust if SVG
        performance: "Finished 5th | 1W (vs Wal 22-15 ✅), 4L. Narrow loss to Ire (17-22). Heavy loss to Fra (24-73 ❌). Improvement under Quesada (historic win vs Wales). Finished above Wales. Lowest turnovers conceded (8.2/game). Poor tackle success.",
        strengths: [
            "📈 Improved Competitiveness: Fought hard, beat Wales, troubled Ireland.",
            "✨ Emerging Talent & Attack Intent: Exciting backs (Garbisi flair). Willing to play wide.",
            "👍 Discipline (Ball Security): Lowest turnovers conceded per game.",
            "💪 Counter-Rucking: Effective late in games."
        ],
        weaknesses: [
            " Defence: Significant vulnerabilities. Poor tackle success. Conceded most tries (29).",
            " Consistency & Game Management: Fluctuating performance. Struggle to close games.",
            " Set Piece: Fragile vs top packs (68% lineout success).",
            " Attacking Conversion: Struggle to turn possession into points."
        ],
        opportunities: [
            " Applying Sustained Pressure & Tempo: Test defence, fitness, decisions.",
            " Exploiting Defensive Gaps: Target poor tackle success/spacing with power/width.",
            " Dominating Set Piece: Target scrum/lineout fragility.",
            " Controlling Territory & Possession.",
            " Isolating Key Playmakers (Garbisi).",
            " Capitalizing on Errors."
        ]
    },
    wales: {
        name: "WALES (6th Place 🥄)",
        logo: "img/wales-logo.png", // Adjust if SVG
        performance: "Finished last (Wooden Spoon 🥄) | 0W-5L | 3 bonus pts. Record losing streak at 17 📉. Heavy defeats (14-68 vs Eng; 0-43 vs Fra). Lowest points scored (76), highest conceded (195). Coaching change mid-tournament. Poor defence (27 missed tackles vs Fra). Failed to convert possession. Worst tackle success (83%).",
        strengths: [
            " Carrying Volume/Possession: Can hold ball but ineffectively.",
            " Set Piece (Scrum): Relatively stable on own feed (91% retention).",
            " Individual Talent: Flashes of skill despite struggles."
        ],
        weaknesses: [
            " Defence: Complete collapse. Poor organisation, weak tackling.",
            " Attack: Lacked penetration, creativity, finishing. Lowest points scored.",
            " Confidence & Morale: Clearly suffering from losing streak.",
            " Discipline & Execution: Frequent errors, lack of cohesion.",
            " Coaching Turmoil: Mid-tournament change added instability."
        ],
        opportunities: [
            " Applying Early & Sustained Pressure: Exploit low confidence. High tempo.",
            " Exploiting Defensive Frailties: Attack widely with pace/power.",
            " Dominating Set Piece: Apply significant pressure.",
            " Maximizing Turnovers: Pressure breakdown/handling.",
            " Physical & Mental Dominance: Overwhelm with high intensity."
        ]
    }
};