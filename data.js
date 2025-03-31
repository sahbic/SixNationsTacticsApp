// data.js (Subtler Formatting)

const reportData = {
    france: {
        name: "FRANCE (Champions 🏆)",
        logo: "img/france-logo.png", // Adjust if SVG
        performance: "Position: 1st (Champions) | Record: 4W-1L | Points: 21 | PD: +125 | Additional: Tournament-high 30 tries. Record 73 points vs Italy. Record win vs Ireland (42-27). Bielle-Biarrey: 8 tries (record). Adaptable 'Total Rugby' style. 7-1 bench impact. Dupont influential.",
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
        performance: "Position: 2nd | Record: 4W-1L | Points: 20 | PD: +54 | Additional: Best finish since 2020. Record 68-14 win vs Wales. Led tournament in turnovers (36) & jackals (21). Kicked most frequently. Freeman scored every match.",
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
        performance: "Position: 3rd | Record: 4W-1L | Points: 19 | PD: +18 | Additional: Triple Crown 👑. Heavy loss to France (27-42). Narrow win vs Italy (22-17). Shift towards kicking. Significant defensive issues (135 missed tackles, 14 tries conceded).",
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
        performance: "Position: 4th | Record: 2W-3L | Points: 11 | PD: -16 | Additional: Narrow loss to Eng. Lost final to Fra. Showed attacking flair but inconsistent. Possession-heavy vs Italy (58%). Kicked least after 3 rounds. Key injuries impacted.",
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
        performance: "Position: 5th | Record: 1W-4L | Points: 6 | PD: -82 | Additional: Historic win vs Wales (22-15). Narrow loss to Ire (17-22). Heavy loss to Fra (24-73). Improvement under Quesada. Lowest turnovers conceded (8.2/game). Poor tackle success.",
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
        performance: "Position: 6th | Record: 0W-5L | Points: 3 | PD: -119 | Additional: Record losing streak at 17 📉. Heavy defeats (14-68 vs Eng; 0-43 vs Fra). Lowest points scored (76), highest conceded (195). Coaching change mid-tournament. Poor defence (27 missed tackles vs Fra). Failed to convert possession. Worst tackle success (83%).",
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

const frenchData = {
    france: {
        name: "FRANCE (Champions 🏆)",
        logo: "img/france-logo.png",
        performance: "Position: 1er (Champions) | Record: 4V-1D | Points: 21 | PD: +125 | Additional: Record de 30 essais. Record de 73 points contre l'Italie. Victoire record contre l'Irlande (42-27). Bielle-Biarrey: 8 essais (record). Style 'Rugby Total' adaptable. Impact du banc 7-1. Dupont influent.",
        strengths: [
            "⚡ Attaque: Puissante, polyvalente, efficace. Offloads forts, contres, jeu déstructuré. Brillance individuelle.",
            "👟 Jeu au pied: Central à la stratégie. Coups de pied longs efficaces (moy >880m) pour le territoire.",
            "💪 Phases statiques: Plateforme mêlée/touche solide. Maul dominant.",
            "🛡️ Défense: Généralement solide & résiliente (93.78% réussite plaquages vs Galles).",
            "🔄 Adaptabilité & Puissance: Performance élevée malgré les absences. Banc impactant."
        ],
        weaknesses: [
            " Vulnérabilité: Peut être pénétré, surtout en transition. Sensible aux coups de pied intelligents.",
            " Discipline: Écarts occasionnels coûteux (pénalités, cartons).",
            " Constance/Dépendance: Battable (défaite vs Ang). Peut trop dépendre du jeu au pied/brillance.",
            " Couverture arrière peut être exposée par les petits coups de pied."
        ],
        opportunities: [
            " Exploiter la Défense en Transition: Attaquer rapidement sur turnovers/reprises.",
            " Jeu au Pied Stratégique: Coups de pied précis pour cibler l'espace.",
            " Appliquer une Pression Continue: Vitesse de ligne haute, agressivité au breakdown.",
            " Challenger les Phases Statiques: Attaquer la touche, perturber le maul tôt.",
            " Contrôler Territoire & Tempo: Refuser position facile, perturber le rythme.",
            " Cibler Joueurs Clés: Pression sur meneurs de jeu, exploiter banc 7-1."
        ]
    },
    england: {
        name: "ANGLETERRE (2ème Place 🥈)",
        logo: "img/england-logo.svg",
        performance: "Position: 2ème | Record: 4V-1D | Points: 20 | PD: +54 | Additional: Meilleur résultat depuis 2020. Victoire record 68-14 vs Galles. Leader en turnovers (36) & grattages (21). Plus de jeu au pied. Freeman a marqué chaque match.",
        strengths: [
            "🛡️ Défense & Phases Statiques: Structure solide. Mêlée dominante, touche efficace (92%).",
            "💪 Domination au Sol: Troisième ligne de classe mondiale, nombreux turnovers.",
            "🧠 Résilience & Adaptabilité: Victoires serrées. Forme d'attaque améliorée.",
            "👟 Jeu au Pied: Jeu au pied tactique varié pour territoire/pression."
        ],
        weaknesses: [
            " Constance en Attaque: Peut manquer de tranchant. Parfois prévisible.",
            " Défense en Transition: Vulnérable aux contres rapides.",
            " Défense Large: Peut être exposée par attaques rapides et larges.",
            " Récupération Jeu au Pied: Très faible taux (11%) malgré fréquence."
        ],
        opportunities: [
            " Attaquer Rapidement en Transition: Exploiter lenteur défensive.",
            " Attaquer Large: Utiliser ballon rapide/largeur pour étirer défense.",
            " Gagner Bataille au Pied: Coups précis. Contrer box kicks prévisibles.",
            " Améliorer Vitesse au Sol: Cibler rucks <3s pour neutraliser grattage.",
            " Challenger Phases Statiques Tôt: Perturber rythme touche.",
            " Maintenir Possession: Forcer défense prolongée."
        ]
    },
    ireland: {
        name: "IRLANDE (3ème Place 🥉)",
        logo: "img/ireland-logo.svg",
        performance: "Position: 3ème | Record: 4V-1D | Points: 19 | PD: +18 | Additional: Triple Couronne 👑. Lourde défaite vs France (27-42). Victoire serrée vs Italie (22-17). Changement vers jeu au pied. Problèmes défensifs (135 plaquages manqués).",
        strengths: [
            "💪 Base Phases Statiques: Touche généralement forte; mêlée solide.",
            "🧠 Expérience & Compétences: Gestion de match, jeu de phases, vitesse ruck.",
            "🗣️ Leadership: Joueurs expérimentés ont montré leadership (ex: Doris)."
        ],
        weaknesses: [
            " Défense: Régression significative. Faible réussite plaquages.",
            " Inconstance Tactique: Changement de style a nui fluidité attaque.",
            " Constance & Profondeur: Performance variable. Profondeur testée."
        ],
        opportunities: [
            " Cibler Faiblesses Défensives: Exploiter plaquages manqués.",
            " Perturber Rythme: Ralentir agressivement rucks. Vitesse ligne haute.",
            " Presser Phases Statiques: Cibler touche/mêlée.",
            " Contrer Jeu au Pied: Contester ballons hauts.",
            " Exploiter Gaps Physiques: Tempo élevé fin de mi-temps.",
            " Maintenir Discipline."
        ]
    },
    scotland: {
        name: "ÉCOSSE (4ème Place)",
        logo: "img/scotland-logo.svg",
        performance: "Position: 4ème | Record: 2V-3D | Points: 11 | PD: -16 | Additional: Défaite serrée vs Ang. Perdu finale vs Fra. Flair attaquant mais inconstant. Possession élevée vs Italie (58%). Moins de jeu au pied. Blessures clés.",
        strengths: [
            "⚡ Attaque: Dangereux ballon en main, intention positive. Russell orchestre.",
            "🌟 Talent Individuel: Game-breakers (Russell, VdM). Première ligne forte.",
            "👟 Précision au Pied: Sélectif mais efficace territorialement.",
            "💪 Résilience: Capacité à gagner matchs serrés."
        ],
        weaknesses: [
            " Constance: Performance fluctue significativement.",
            " Défense: Poreuse par moments, surtout large/désorganisée.",
            " Discipline: Nombreuses pénalités concédées.",
            " Phases Statiques: Touche inconstante, défense maul suspecte.",
            " Profondeur: Blessures impact significatif."
        ],
        opportunities: [
            " Maintenir Pression & Intensité: Exploiter relâchements.",
            " Cibler Défense: Attaquer canaux, coureurs puissants.",
            " Perturber Possession: Breakdown agressif. Vitesse ligne.",
            " Dominer Territoire: Jeu au pied précis.",
            " Challenger Phases Statiques.",
            " Limiter Influence Russell: Vitesse ligne agressive.",
            " Capitaliser sur Pénalités."
        ]
    },
    italy: {
        name: "ITALIE (5ème Place)",
        logo: "img/italy-logo.png",
        performance: "Position: 5ème | Record: 1V-4D | Points: 6 | PD: -82 | Additional: Victoire historique vs Galles (22-15). Défaite serrée vs Irl (17-22). Lourde défaite vs Fra (24-73). Amélioration sous Quesada. Moins de turnovers (8.2/match).",
        strengths: [
            "📈 Compétitivité Améliorée: Combat dur, battu Galles, troublé Irlande.",
            "✨ Talent Émergent & Intent Attaque: Arrières excitants (flair Garbisi).",
            "👍 Discipline (Sécurité Ballon): Moins de turnovers par match.",
            "💪 Contre-Ruck: Efficace fin de match."
        ],
        weaknesses: [
            " Défense: Vulnérabilités significatives. Faible réussite plaquages.",
            " Constance & Gestion: Performance fluctuante. Difficulté à finir.",
            " Phases Statiques: Fragile vs packs forts (68% réussite touche).",
            " Conversion Attaque: Difficulté à convertir possession en points."
        ],
        opportunities: [
            " Appliquer Pression & Tempo Soutenus: Tester défense, fitness.",
            " Exploiter Gaps Défensifs: Cibler faible réussite plaquages.",
            " Dominer Phases Statiques: Cibler fragilité mêlée/touche.",
            " Contrôler Territoire & Possession.",
            " Isoler Meneurs de Jeu (Garbisi).",
            " Capitaliser sur Erreurs."
        ]
    },
    wales: {
        name: "PAYS DE GALLES (6ème Place 🥄)",
        logo: "img/wales-logo.png",
        performance: "Position: 6ème | Record: 0V-5D | Points: 3 | PD: -119 | Additional: Record série défaites à 17 📉. Lourdes défaites (14-68 vs Ang; 0-43 vs Fra). Points marqués plus bas (76), encaissés plus haut (195). Changement entraîneur mi-tournoi.",
        strengths: [
            " Volume Portage/Possession: Peut garder ballon mais inefficacement.",
            " Phases Statiques (Mêlée): Relativement stable sur introduction (91%).",
            " Talent Individuel: Éclairs de talent malgré difficultés."
        ],
        weaknesses: [
            " Défense: Effondrement complet. Organisation faible, plaquages faibles.",
            " Attaque: Manque pénétration, créativité, finition.",
            " Confiance & Moral: Clairement affecté par série défaites.",
            " Discipline & Exécution: Erreurs fréquentes, manque cohésion.",
            " Turbulence Coaching: Changement mi-tournoi ajouté instabilité."
        ],
        opportunities: [
            " Appliquer Pression Tôt & Soutenue: Exploiter faible confiance.",
            " Exploiter Faiblesses Défensives: Attaquer large avec vitesse/puissance.",
            " Dominer Phases Statiques: Appliquer pression significative.",
            " Maximiser Turnovers: Presser breakdown/manipulation.",
            " Dominance Physique & Mentale: Submerger avec haute intensité."
        ]
    }
};