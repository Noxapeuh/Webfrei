const imageToZoom = document.querySelector('.image-principal');

if (imageToZoom) {
    window.addEventListener('scroll', () => {
        const rect = imageToZoom.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            let scrollProgress = (windowHeight - rect.top) / windowHeight;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            const minZoom = 0.5; // Taille de départ
            const maxZoom = 1.0; // Taille d'arrivée

            const currentZoom = minZoom + (maxZoom - minZoom) * scrollProgress;

            imageToZoom.style.transform = `scale(${currentZoom})`;
        }
    });
}















/* Pour la page équipe */


const base_image = "https://www.efrei.fr/wp-content/uploads/"

const photo = base_image + "2025/10/Copie-de-Tech-Numerique-Masters-et-Masteres-819x1024.png";

const section1 = [
    { nom: "Youssef Ait El Mahjoub", role: "Enseignant-chercheur – Réseaux de Communication / Responsable filière IT", img: base_image + "2025/09/2301_-Youssef-AIT-EL-MAHJOUB.jpg", bio: "Diplômé d'un Master en Informatique AMIS à l'UVSQ en 2016, il soutient sa thèse en 2021 et rejoint l'Efrei en 2022." },
    { nom: "Cherifa Ben Khelil", role: "Enseignante-chercheuse en informatique", img: base_image + "2025/09/3048-Cherifa-BEN-KHELIL-819x1024.jpg", bio: "Doctorat en 2019, thèse en cotutelle entre l'ENSI de la Manouba (Tunisie) et l'Université d'Orléans (LIFO). Elle rejoint l'Efrei en 2024." },
    { nom: "Marciel Barros Pereira", role: "Doctorant – axe Réseaux de communication", img: base_image + "2025/09/Doc-Marciel-BARROS-PEREIRA-819x1024.jpg", bio: "Marciel Barros Pereira est doctorant de l'axe de recherche « Réseaux de communication »." },
    { nom: "Imène Benkermi", role: "Enseignante", img: base_image + "2025/12/BENKERMI-Imene--819x1024.jpg", bio: "Doctorat à l'université de Rennes 1 en 2007, sur l'ordonnancement dans les Systèmes Temps Réel. Elle rejoint l'Efrei après une expérience significative dans l'industrie." },
    { nom: "Félix Baschenis", role: "Enseignant", img: base_image + "2025/12/Felix-Baschenis-1024x701.png", bio: "Passionné par l'interface mathématiques-informatique, il obtient l'agrégation en 2013 après un double cursus à l'ENS de Cachan. Thèse en calculabilité-logique, il rejoint le département maths de l'Efrei en 2024." },
    { nom: "Isabelle Badreau", role: "Enseignante", img: photo, bio: "Diplômée d'un master 2 en sciences économiques et sociales (Paris 1 – Panthéon Sorbonne, 2002), elle enseigne les mathématiques et l'économie. Elle a rejoint l'Efrei en 2015 et est devenue enseignante permanente en 2023." },
    { nom: "Ibtihel Ben Ltaifa", role: "Enseignante", img: photo, bio: "Enseignante de la section Mathématiques, Informatique, Data et IA." },
    { nom: "Carlo Bianca", role: "Enseignant-chercheur en mathématiques", img: base_image + "2025/09/2570_CARLO-BIANCA--819x1024.jpg", bio: "Doctorat en Mathématiques pour les Sciences de l'Ingénieur à l'École Polytechnique de Turin en 2008. Prix INDAM-SIMAI pour la meilleure thèse de doctorat en Italie (2007-2009). HDR de l'Université Pierre et Marie Curie en 2015. Rejoint l'Efrei en 2023." },
    { nom: "Djamila Benmerzouk", role: "Enseignante", img: base_image + "2025/12/BENMERZOUK-Djamila.png", bio: "Maître de conférences qualifiée (section 26 – Mathématiques appliquées), titulaire d'un doctorat d'État en mathématiques. Thèse soutenue à l'Université de Tlemcen (Algérie) sur les systèmes de contrôle non linéaires." },
    { nom: "Asma Gabis", role: "Enseignante-chercheuse en informatique et responsable du département informatique", img: base_image + "2025/09/Gabis-Asma-683x1024.jpg", bio: "Diplôme d'ingénieur d'État en informatique en 2006 à l'ESI, Magistère en 2010. Doctorat en 2021, elle rejoint l'Efrei en 2022." },
    { nom: "Faten Chaieb-chakchouk", role: "Professeure / Responsable Adjointe axe Données & IA / Responsable majeure Image et Réalité Virtuelle / HDR", img: base_image + "2025/09/chakchouk_faten-683x1024.jpg", bio: "Diplôme d'ingénieur ENSI en 1998, DEA en 2001, doctorat à l'ENSI en 2009, habilitation universitaire 2016, HDR reconnue par Paris Panthéon-Assas en janvier 2022. Rejoint l'Efrei en 2020." },
    { nom: "Ralph Bou Nader", role: "Enseignant-chercheur – Sécurité, Résilience & Confiance numérique / Responsable majeure Data Engineering", img: base_image + "2025/10/Ralph-BOU-NADER-1024x1024.jpg", bio: "Diplômé en ingénierie informatique de l'USEK en 2018. Doctorat à l'Institut Polytechnique de Paris en 2024 sur la gestion des courriels via les processus métier. Rejoint l'Efrei en 2024." },
    { nom: "Fabien Calcado", role: "Enseignant", img: photo, bio: "Fabien Calcado est enseignant à l'Efrei depuis 2008." },
    { nom: "Jacques Augustin", role: "Enseignant", img: base_image + "2025/12/jacques-augustin.jpg", bio: "Diplômé de l'UNSA et de Skema, passionné de delivery de projets IT et de transformation digitale (Accenture France et Pologne). Enseigne à l'Efrei depuis 2010. Directeur de la majeure Software Engineering depuis 2019." },
    { nom: "Malika Charrad", role: "Enseignante-Chercheuse – Données et Intelligence Artificielle", img: base_image + "2025/09/DSC03693_Charrad-683x1024.jpg", bio: "Diplôme d'ingénieur ENSI en 2003, master de recherche 2006, thèse 2010 co-encadrée CNAM/ENSI. Rejoint l'Efrei en 2020." },
    { nom: "Benoit Charroux", role: "Enseignant-chercheur – Sécurité, Résilience et Confiance Numérique / Responsable programmes transverses", img: base_image + "2025/09/Benoit-CHARROUX-R3-1-1024x1024.jpg", bio: "DEA en électronique Univ. Paris XI, thèse à l'ENSEA, docteur de Paris XI. Travaux en traitement d'images et reconnaissance de formes. Rejoint l'Efrei en 2011." },
    { nom: "Safwan Chendeb", role: "Enseignant", img: photo, bio: "–" },
    { nom: "Djallel Dilmi", role: "Enseignant-chercheur – Données et IA / Responsable majeure Big Data & Machine Learning", img: base_image + "2025/09/2753-Djallel-Dilmi-1-819x1024.jpg", bio: "Spécialisé en Deep Learning et IA, développement de nouvelles architectures de traitement comme les mécanismes d'attention. Rejoint l'Efrei en 2023." },
    { nom: "Stefani El Kalamouni", role: "Enseignante", img: photo, bio: "Data scientiste passionnée par l'innovation technologique et l'analyse de données complexes." },
    { nom: "Issam Falih", role: "Enseignant", img: photo, bio: "–" },
];

const section15 = [
    { nom: "Nicolas Flasque", role: "Enseignant – Ingénieur Pédagogique", img: base_image + "2025/12/Flasque-Nicolas.jpg", bio: "Ingénieur et Docteur en informatique, enseigne à l'Efrei depuis plus de 20 ans. Programmation Python et C, mathématiques appliquées." },
    { nom: "Khodor Hammoud", role: "Enseignant-chercheur – Données et IA / Responsable majeure Data Engineering", img: base_image + "2025/09/Khodor-Hammoud-819x1024.jpg", bio: "Doctorat en 2021 à l'Université de Paris-Cité. Commence sa carrière d'enseignant à l'Efrei en février 2020 pendant son doctorat." },
    { nom: "Mohamad Ghassany", role: "Enseignant-chercheur – Données et IA / Manager cycle M / Responsable majeure Data and AI", img: base_image + "2025/09/GHASSANY-Mohamad_2-690x1024.jpg", bio: "Master en Mathématiques Appliquées & Statistiques (Grenoble Alpes), doctorat en 2013 à l'Université Paris 13. Rejoint l'Efrei en 2021." },
    { nom: "Ilyes Jenhani", role: "Enseignant-chercheur – Données et intelligence artificielle / Responsable majeure Software Engineering", img: base_image + "2025/10/Photos-staff-9-1024x701.png", bio: "Doctorat en Informatique en 2010, cotutelle entre l'Université d'Artois (France) et l'Université de Tunis (Tunisie). Rejoint l'Efrei en 2024." },
    { nom: "Jean-Charles Huet", role: "Enseignant-chercheur – Données et IA / Responsable programmes Logiciel et SI du PGE", img: base_image + "2025/09/HQ1A3112_jean-charles_huet-683x1024.jpg", bio: "Doctorat en 2011 à l'université Blaise Pascal, Clermont-Ferrand II. Ingénieur hospitalier au CHU de Clermont-Ferrand pendant sa thèse. Rejoint l'Efrei en 2018." },
    { nom: "Yvan Guifo Fodjo", role: "Enseignant-chercheur en informatique", img: base_image + "2025/09/3005-Yvan-GUIFO-819x1024.jpg", bio: "Doctorat en Informatique en 2023 à la Sorbonne Université, équipe MoVe du LIP6. ATER pendant sa thèse." },
    { nom: "Daniel Mai", role: "Enseignant-chercheur – Données et Intelligence Artificielle", img: base_image + "2025/10/Photos-staff-12-1024x701.png", bio: "Master Gamagora (Univ. Lumière Lyon 2) en 2018, master RVSI (Univ. Paris-Saclay) en 2019. Doctorat à Paris-Saclay en 2024, rejoint l'Efrei la même année." },
    { nom: "Mondher Maddouri", role: "Enseignant-chercheur – Données & Intelligence Artificielle", img: base_image + "2025/09/3192-Mondher-Maddouri-819x1024.jpg", bio: "Enseignant-chercheur de l'axe de recherche « Données & Intelligence Artificielle »." },
    { nom: "Mano Joseph Mathew", role: "Enseignant-chercheur – Données et IA / Responsable majeure Bio-informatique et département de Biologie", img: base_image + "2025/09/Mano-Joseph_large-660x1024.jpg", bio: "Doctorat en microbiologie et maladies infectieuses en 2013 à Aix-Marseille Université (AP-HM / OMS – URMITE). Rejoint l'Efrei en 2019." },
    { nom: "Zahraa Mohsen", role: "Enseignante-chercheuse en mathématiques", img: base_image + "2025/09/2056-Zahraa-MOHSEN--819x1024.jpg", bio: "Doctorat en 2022 à l'Université Paris Cité. Rejoint l'Efrei en 2023." },
    { nom: "Salim Nahle", role: "Enseignant-chercheur & Responsable Data & IA", img: base_image + "2026/03/image.jpg", bio: "Ingénieur en télécommunications de l'Université Libanaise (2005), Master 2 et doctorat à l'Université Pierre et Marie Curie (2009). ATER à l'Université Paris 13." },
    { nom: "Etienne Pernot", role: "Directeur recherche et valorisation", img: base_image + "2025/09/Etienne-PERNOT-HD-1-1024x1024.jpg", bio: "Ingénieur de l'École Polytechnique, Télécom Paris, master en astrophysique (Sorbonne Université), docteur en mathématiques appliquées (Paris-Dauphine). Rejoint l'Efrei en septembre 2021 et dirige l'Efrei Research Lab." },
    { nom: "Christine Ivetich", role: "Enseignante", img: photo, bio: "–" },
    { nom: "Helen Kassel", role: "Enseignante", img: base_image + "2025/12/Helen-Kassel.jpg", bio: "–" },
];

const section2 = [
    { nom: "Lazhar Hamel", role: "Enseignant-Chercheur – Sécurité, résilience et confiance numérique", img: photo, bio: "Doctorat en informatique en 2018 à l'Université de Sfax, Tunisie. Thèse sur la vérification formelle des architectures logicielles à base de composant-service." },
    { nom: "Benoit Charroux", role: "Enseignant-chercheur – Sécurité, Résilience et Confiance Numérique / Responsable programmes transverses", img: base_image + "2025/09/Benoit-CHARROUX-R3-1-1024x1024.jpg", bio: "DEA en électronique Univ. Paris XI, thèse à l'ENSEA, docteur de Paris XI. Travaux en traitement d'images et reconnaissance de formes. Rejoint l'Efrei en 2011." },
    { nom: "Ralph Bou Nader", role: "Enseignant-chercheur – Sécurité, Résilience & Confiance numérique / Responsable majeure Data Engineering", img: base_image + "2025/10/Ralph-BOU-NADER-1024x1024.jpg", bio: "Diplômé en ingénierie informatique de l'USEK en 2018. Doctorat à l'Institut Polytechnique de Paris en 2024 sur la gestion des courriels via les processus métier. Rejoint l'Efrei en 2024." },
    { nom: "Johannes Gomolka", role: "Enseignant-chercheur – Sécurité, Résilience et Confiance Numérique / Responsable majeure IT for Finance", img: base_image + "2025/10/Johannes-Gomolka-1024x1024.jpg", bio: "Doctorat en sciences politiques et informatique de gestion à l'Université de Potsdam en 2011. Dirige la majeure « IT for finance » depuis 2018." },
    { nom: "Youssef Ait El Mahjoub", role: "Enseignant-chercheur – Réseaux de Communication / Responsable filière IT", img: base_image + "2025/09/2301_-Youssef-AIT-EL-MAHJOUB.jpg", bio: "Diplômé d'un Master en Informatique AMIS à l'UVSQ en 2016, il soutient sa thèse en 2021 et rejoint l'Efrei en 2022." },
    { nom: "Marwa Harzi", role: "Enseignante-chercheuse – Réseaux de communication / Responsable parcours Logiciels et SI – Cycle Ingénieur Apprentissage", img: base_image + "2025/09/Harzi-Marwa-683x1024.jpg", bio: "Thèse de doctorat en informatique en 2018, co-tutelle entre le CRIL (Univ. d'Artois) et le LARODEC (ISG Tunis). Rejoint l'Efrei en 2021." },
    { nom: "Mohamed Hamidi", role: "Enseignant-chercheur en informatique – vision et sécurité multimédia", img: base_image + "2025/09/3195-Mohamed-Hamidi-819x1024.jpg", bio: "Doctorat en 2019 à l'Université Med V de Rabat en sécurité multimédia et vision par ordinateur. Collaboration avec le LIB (Univ. Bourgogne) et le laboratoire PRISME (École Polytechnique d'Orléans)." },
    { nom: "Mourad Kmimech", role: "Enseignant-chercheur en informatique", img: base_image + "2025/09/655-Mourad-Kmimech-683x1024.jpg", bio: "DEA à l'école d'ingénieurs de Sfax (Tunisie) en 2003. Thèse à l'Université de Pau et des Pays de l'Adour, équipe LIUPPA, en 2010. Rejoint l'Efrei en 2024." },
    { nom: "Kaïs Klai", role: "Chercheur associé", img: photo, bio: "Kaïs Klai est un chercheur associé de l'Efrei Research Lab." },
    { nom: "Rostom Kachouri", role: "Enseignant", img: photo, bio: "–" },
    { nom: "Reza Hatami", role: "Enseignant", img: photo, bio: "–" },
];


const section3 = [
    {
        nom: "Etienne Pernot",
        role: "Directeur recherche et valorisation",
        img: base_image + "2025/09/Etienne-PERNOT-HD-1-1024x1024.jpg",
        bio: "Ingénieur Polytechnique et Télécom Paris, docteur en mathématiques appliquées. Dirige l’Efrei Research Lab depuis 2021."
    },
    {
        nom: "Katarzyna Wegrzyn-Wolska",
        role: "Professeure – Directrice adjointe Efrei Research Lab / Responsable axe Données et IA",
        img: base_image + "2025/10/HQ1A9212_katarzyna-757x1024.png",
        bio: "Doctorat en automatisation et informatique à MinesParisTech (2001). HDR de l’Université du Val d’Essonne (2012)."
    },
    {
        nom: "Faten Chaieb-chakchouk",
        role: "Professeure – Responsable Adjointe axe Données et IA / Responsable majeure Image et RV",
        img: base_image + "2025/09/chakchouk_faten-683x1024.jpg",
        bio: "Doctorat à l'ENSI en 2009. Habilitation universitaire en 2016. A rejoint l’Efrei en 2020."
    },
    {
        nom: "Layth Sliman",
        role: "Professeur – Responsable axe Sécurité, Résilience et Confiance Numérique",
        img: base_image + "2025/09/Layth-Sliman-2-1-1024x1024.jpg",
        bio: "Ingénieur informatique INSA Lyon. Doctorat en collaboration avec l'Université des Ryukyus (Japon). Rejoint l’Efrei en 2010."
    },
    {
        nom: "Dario Vieira",
        role: "Professeur associé – Responsable axe Réseaux de Communication / Référent Science Ouverte",
        img: base_image + "2025/09/Dario-VIEIRA-1-1024x1024.jpg",
        bio: "Doctorat en réseaux informatiques de Télécom & Management SudParis. Rejoint l’Efrei en 2010."
    },
    {
        nom: "Elizabeth Colin",
        role: "Professeure associée – Responsable axe Systèmes Embarqués Intelligents",
        img: base_image + "2025/09/Elisabeth-COLIN-1-1-1024x1024.jpg",
        bio: "Doctorat en Électronique et Communications de Télécom Paris (2003). Référente scientifique Sciences2024."
    },
    {
        nom: "Boussad Ait Salem",
        role: "Enseignant-chercheur – Sécurité, Résilience et Confiance Numérique / Responsable majeure Cybersécurité",
        img: base_image + "2025/09/721_Boussad_AIT-SALEM-683x1024.jpg",
        bio: "Doctorat en 2011 à l'Université de Limoges (équipe PICC). Postdoctorat à Orange Labs. Rejoint l'Efrei en 2020."
    },
    {
        nom: "Ralph Bou Nader",
        role: "Enseignant-chercheur – Sécurité, Résilience & Confiance numérique / Responsable majeure Data Engineering",
        img: base_image + "2025/10/Ralph-BOU-NADER-1024x1024.jpg",
        bio: "Doctorat à l'Institut Polytechnique de Paris (2024) sur la gestion des courriels via les processus métier. Rejoint l'Efrei en 2024."
    },
    {
        nom: "Lazhar Hamel",
        role: "Enseignant-Chercheur – Sécurité, résilience et confiance numérique",
        img: photo,
        bio: "Doctorat en informatique en 2018 à l'Université de Sfax. Expert en vérification formelle des architectures logicielles."
    },
    {
        nom: "Johannes Gomolka",
        role: "Enseignant-chercheur – Sécurité, Résilience et Confiance Numérique / Responsable majeure IT for Finance",
        img: base_image + "2025/10/Johannes-Gomolka-1024x1024.jpg",
        bio: "Doctorat en sciences politiques et informatique de gestion (Univ. Potsdam, 2011). Dirige la majeure IT for finance depuis 2018."
    },
    {
        nom: "Youssef Ait El Mahjoub",
        role: "Enseignant-chercheur – Réseaux de Communication / Responsable filière IT",
        img: base_image + "2025/09/2301_-Youssef-AIT-EL-MAHJOUB.jpg",
        bio: "Master Informatique AMIS à l'UVSQ (2016). Doctorat soutenu en 2021. Rejoint l'Efrei en 2022."
    },
    {
        nom: "Marwa Harzi",
        role: "Enseignante-chercheuse – Réseaux de communication",
        img: base_image + "2025/09/Harzi-Marwa-683x1024.jpg",
        bio: "Doctorat en informatique en 2018 (Univ. d'Artois / Univ. de Tunis). Rejoint l'Efrei en 2021."
    },
    {
        nom: "Laurie Conteville",
        role: "Enseignante-chercheuse – Systèmes Embarqués Intelligents / Responsable majeure Robotique",
        img: base_image + "2025/09/HQ1A8669_Conteville-683x1024.jpg",
        bio: "Doctorat en physique spécialité automatique (Univ. Paris-Saclay / L2S Centrale-Supélec, 2013). Rejoint l'Efrei en 2020."
    },
    {
        nom: "Mohamed Hamidi",
        role: "Enseignant-chercheur en informatique",
        img: base_image + "2025/09/3195-Mohamed-Hamidi-819x1024.jpg",
        bio: "Doctorat en 2019 (Univ. Med V Rabat) en sécurité multimédia et vision par ordinateur. Collaboration Univ. Bourgogne et PRISME."
    },
    {
        nom: "Mourad Kmimech",
        role: "Enseignant-chercheur en informatique",
        img: base_image + "2025/09/655-Mourad-Kmimech-683x1024.jpg",
        bio: "DEA à Sfax (2003). Doctorat à l'Université de Pau (LIUPPA) en 2010. Rejoint l'Efrei en 2024."
    },
    {
        nom: "Djallel Dilmi",
        role: "Enseignant-chercheur – Données et Intelligence Artificielle",
        img: base_image + "2025/09/2753-Djallel-Dilmi-1-819x1024.jpg",
        bio: "Spécialiste en Deep Learning et mécanismes d'attention. Rejoint l’Efrei en 2023."
    },
    {
        nom: "Ilyes Jenhani",
        role: "Enseignant-chercheur – Données et IA / Responsable majeure Software Engineering",
        img: base_image + "2025/10/Photos-staff-9-1024x701.png",
        bio: "Doctorat en Informatique en 2010 (cotutelle Univ. d’Artois et Univ. de Tunis). Rejoint l’Efrei en 2024."
    },
    {
        nom: "Kaïs Klai",
        role: "Chercheur associé",
        img: photo,
        bio: "Kaïs Klai est un chercheur associé de l’Efrei Research Lab."
    }
];


function carte(p) {
    return `<div class="flip-card-equipe" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-interieur-equipe">
                <div class="flip-avant-equipe">
                    <div class="flip-image-wrapper">
                        <img src="${p.img}" alt="${p.nom}" loading="lazy">
                    </div>
                    <div class="flip-avant-info">
                        <p class="flip-nom">${p.nom}</p>
                        <p class="flip-role">${p.role}</p>
                    </div>
                </div>
                <div class="flip-arriere-equipe">
                    <p class="flip-nom-arriere">${p.nom}</p>
                    <p class="flip-role-arriere">${p.role}</p>
                    <p class="flip-bio">${p.bio}</p>
                </div>
            </div>
        </div>`;
}

/**
 * Initialise un slider de cartes profs.
 * @param {Array}  liste      - tableau de profs
 * @param {string} pisteId    - id de la div .slider-equipe-piste
 * @param {string} compteurId - id du span compteur
 * @param {string} prevId     - id bouton précédent
 * @param {string} nextId     - id bouton suivant
 */
function initSlider(liste, pisteId, compteurId, prevId, nextId) {
    const piste    = document.getElementById(pisteId);
    const compteur = document.getElementById(compteurId);
    const btnPrev  = document.getElementById(prevId);
    const btnNext  = document.getElementById(nextId);

    if (!piste || !compteur || !btnPrev || !btnNext) return;

    /* Injection des cartes */
    piste.innerHTML = liste.map(carte).join('');

    let index = 0; // index de la carte la plus à gauche visible
    const total = liste.length;

    function getVisibles() {
        return window.innerWidth <= 768 ? 1 : 4;
    }

    /* Largeur d'une carte + gap exprimée en % de la piste */
    /* On utilise CSS custom properties pour faire défiler */
    function getCardWidthPx() {
        const firstCard = piste.querySelector('.flip-card-equipe');
        if (!firstCard) return 0;
        const style = getComputedStyle(piste);
        const gap = parseFloat(style.gap) || 0;
        return firstCard.offsetWidth + gap;
    }

    function majAffichage() {
        const visibles = getVisibles();
        const maxIndex = Math.max(0, total - visibles);
        
        if (index > maxIndex) index = maxIndex;

        const decalage = index * getCardWidthPx();
        piste.style.transform = `translateX(-${decalage}px)`;

        /* Compteur : numéro affiché = index + 1 à index + visibles (cap à total) */
        const debut = index + 1;
        const fin   = Math.min(index + visibles, total);
        compteur.textContent = `${debut}–${fin} / ${total}`;

        /* État des boutons */
        btnPrev.disabled = index === 0;
        btnNext.disabled = index >= maxIndex;

        /* Classe active : la flèche disponible est rose */
        btnPrev.classList.toggle('fleche-active', index > 0);
        btnNext.classList.toggle('fleche-active', index < maxIndex);
    }

    btnPrev.addEventListener('click', () => {
        if (index > 0) { index--; majAffichage(); }
    });

    btnNext.addEventListener('click', () => {
        const maxIndex = Math.max(0, total - getVisibles());
        if (index < maxIndex) { index++; majAffichage(); }
    });

    majAffichage();

    /* Recalcul si fenêtre redimensionnée */
    window.addEventListener('resize', () => majAffichage());
}





/* Appels au chargement de la page */
document.addEventListener('DOMContentLoaded', () => {
    /* Fusion section1 + section15 dans le premier slider */
    const listeMaths = [...section1, ...section15];
    initSlider(listeMaths, 'piste-section1', 'compteur-section1', 'prev-section1', 'next-section1');
    initSlider(section2,   'piste-section2', 'compteur-section2', 'prev-section2', 'next-section2');
    initSlider(section3,   'piste-section3', 'compteur-section3', 'prev-section3', 'next-section3');

    const boutonsRadio = document.querySelectorAll('.entree-glisseur-cours');
    const sections = document.querySelectorAll('.section-cours');

    const correspondances = {
        'choix-grande-ecole': 'section-grande-ecole',
        'choix-bachelor': 'section-bachelor',
        'choix-expert': 'section-expert'
    };

    const majSectionsCours = () => {
        // Masquer toutes les sections
        sections.forEach(section => {
            section.classList.remove('section-cours-active');
        });

        const boutonActif = document.querySelector('.entree-glisseur-cours:checked');
        if (boutonActif && correspondances[boutonActif.id]) {
            const sectionCible = document.getElementById(correspondances[boutonActif.id]);
            if (sectionCible) {
                sectionCible.classList.add('section-cours-active');
            }
        }
    };

    boutonsRadio.forEach(bouton => {
        bouton.addEventListener('change', majSectionsCours);
    });

    majSectionsCours();
});





