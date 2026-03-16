// 1. GLOBAL STATE & DICTIONARY
window.currentLang = 'en';

const translations = {
    'en': {
        'main-title': 'WE-TOD: RESOURCES+TOOLS',
        'subtitle':'Web Essentials Tanant Organization Directory'
        'qr-header': 'QR CODE',
        'bitchat-title': 'BITCHAT',
        'bitchat-desc': 'For proximity text chat using bluetooth with no login, no phone number, no email, no data collection, and end to end encryption. Great for tenants in a building to communicate with each other without giving their info to a third party app.',
        'loading': 'Loading resources...',
        '1': 'Transport',
        '2': 'Public Transit',
        '3': 'Public Transit Information',
        '4': 'Transport Options Map & Info',
        '5': 'Official Maps & Info',
        '6': 'rem.info | 1-833-REM-INFO',
        '7': 'exo.quebec | (514) 287-8726',
        '8': 'stlaval.ca | (450) 688-6520',
        '9': 'rtl-longueuil.qc.ca',
        '10': 'River Shuttles',
        '11': 'Inter-City & International',
        '12': 'Booking & Times',
        '13': 'Berri-UQAM Station | (514) 842-2281',
        '14': 'Regional Transport',
        '15': 'Coach Canada/Megabus: Destinations across Canada',
        '16': 'Greyhound Canada: Destinations across Canada',
        '17': 'Galland: Serving the Laurentians',
        '18': 'Intercar: Serving Saguenay, Lac-Saint-Jean, Charlevoix and Côte-Nord',
        '19': 'Limocar: Serving Sherbrooke and the Eastern Townships',
        '20': 'Orléans Express: Serving Québec City, Mauricie, Lower St. Lawrence, and the Gaspé Peninsula',
        '21': 'Air & USA Rail',
        '22': 'Montréal-Trudeau (YUL)',
        '23': 'Amtrak (Adirondack)',
        '24': 'Health & Medical Resources',
        '25': 'Mental Health',
        '26': 'TRACOM Crisis Centre',
        '27': 'Info-Social 811',
        '28': 'Mental health help and support resources',
        '29': 'List of Resources',
        '30': 'Suicide Prevention and Help Line',
        '31': 'Call:',
        '32': 'Call:',
        '33': 'Text (SMS):',
        '34': 'Chat:',
        '46': 'Online',
        '35': 'Health/Wellness Resources',
        '36': 'Local community services centre (CLSC)',
        '37': 'Find A CLSC',
        '38': 'YESmontreal',
        '39': 'Mental Health Resources',
        '40': 'Canada Career Search (NOC)',
        '41': 'National Occupational Classification',
        '42': 'Quebec Trades & Occupations',
        '43': 'Explore Careers',
        '44': 'Apartment Maintenance:',
        '45': 'the "Invisible Tasks" guide and apartment maintenance'
    },
    'fr': {
        'main-title': 'WE-TOD: UTILES+RESSOURCES',
        'qr-header': 'CODE QR',
        'bitchat-title': 'BITCHAT',
        'bitchat-desc': 'Pour un chat de texte de proximité utilisant le bluetooth sans connexion, sans numéro de téléphone, sans email, sans collecte de données et avec chiffrement de bout en bout. Idéal pour les locataires d\'un immeuble pour communiquer entre eux sans donner leurs informations à une application tierce.',
        'loading': 'Chargement des ressources...',
        '1': 'Transport',
        '2': 'Transport en commun',
        '3': 'Information sur le transport en commun',
        '4': 'Carte et informations sur les options de transport',
        '5': 'Cartes et informations officielles',
        '6': 'rem.info | 1-833-REM-INFO',
        '7': 'exo.quebec | (514) 287-8726',
        '8': 'stlaval.ca | (450) 688-6520',
        '9': 'rtl-longueuil.qc.ca',
        '10': 'Navettes fluviales',
        '11': 'Interurbain et international',
        '12': 'Réservations et horaires',
        '13': 'Station Berri-UQAM | (514) 842-2281',
        '14': 'Transport régional',
        '15': 'Autocar Canada/Megabus : Destinations partout au Canada',
        '16': 'Greyhound Canada : Destinations partout au Canada',
        '17': 'Galland : Desservant les Laurentides',
        '18': 'Intercar : Desservant le Saguenay, le Lac-Saint-Jean, Charlevoix et la Côte-Nord',
        '19': 'Limocar : Desservant Sherbrooke et les Cantons-de-l\'Est',
        '20': 'Orléans Express : Desservant Québec, la Mauricie, le Bas-Saint-Laurent et la Gaspésie',
        '21': 'Transport aérien et ferroviaire vers les États-Unis',
        '22': 'Montréal-Trudeau (YUL)',
        '23': 'Amtrak (Adirondack)',
        '24': 'Ressources de santé et médicales',
        '25' : 'Santé mentale',
        '26' : 'Centre de crise TRACOM',
        '27' : 'Info-Social 811',
        '28' : 'Ressources d aide et de soutien en santé mentale',
        '29' : 'Liste de ressources',
        '30' : 'Ligne d écoute et de prévention du suicide',
        '31' : 'Appeler',
        '32' : 'Appeler',
        '33' : 'Texter (SMS)',
        '34' : 'Clavarder',
        '46' : 'En ligne',
        '35' : 'Ressources de santé et de bien-être',
        '36' : 'Centre local de services communautaires (CLSC)',
        '37' : 'Trouver un CLSC',
        '38' : 'YESmontreal',
        '39' : 'Ressources en santé mentale',
        '40' : 'Recherche de carrières Canada (CNP)',
        '41' : 'Classification nationale des professions',
        '42' : 'Métiers et professions du Québec',
        '43' : 'Explorer les carrières',
        '44' : 'Entretien d appartements',
        '45' : 'Le guide des “tâches invisibles” et l entretien d appartements'
    }
};

// 2. CONFIGURATIONS
const getResourceConfigs = (lang) => [
    { file: `data/${lang}/general.txt`,   color: 'cat-start',     header: lang === 'fr' ? 'Recherche Infos Bâtiment' : 'Finding General Building and Landlord Info' },
    { file: `data/${lang}/gov_search.txt`,     color: 'cat-legal',     header: lang === 'fr' ? 'Recherche Gouvernementale' : 'Gov and Court Search' },
    { file: `data/${lang}/map_search.txt`, color: 'cat-geo',   header: lang === 'fr' ? 'Recherche Cartographique' : 'Map Searching' },
    { file: `data/${lang}/person.txt`, color: 'cat-person', header: lang === 'fr' ? 'Recherche de Personne' : 'Person Search, Number Search, Google Search' },
    { file: `data/${lang}/groups.txt`, color: 'cat-grocom',   header: lang === 'fr' ? 'Groupes / Communautés' : 'Groups/Communities' },
    { file: `data/${lang}/legal_reporting.txt`, color: 'cat-report',   header: lang === 'fr' ? 'Ressources Juridiques' : 'Legal Resources and Reporting' },
    { file: `data/${lang}/data_extras.txt`, color: 'cat-data',    header: lang === 'fr' ? 'Données et Extras' : 'Data Search and Extras' },
    { file: `data/${lang}/clpmr_resources.txt`, color: 'cat-grocom',    header: lang === 'fr' ? 'Resources CLPMR' : 'CLPMR Resources' }
];

async function downloadAllResources() {
    const configs = getResourceConfigs(window.currentLang);
    let combinedText = `--- TENANT RESOURCES (${window.currentLang.toUpperCase()}) ---\n`;
    combinedText += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

    for (const config of configs) {
        try {
            const response = await fetch(config.file);
            if (!response.ok) continue;
            const text = await response.text();
            
            // Clean up the special tags [[color|text]] -> text
            const cleanText = text
                .replace(/\[\[.*?\|(.*?)\]\]/g, '$1')
                .replace(/\[\[(.*?)\]\]/g, '$1');

            combinedText += `=== ${config.header.toUpperCase()} ===\n`;
            combinedText += cleanText + "\n\n";
        } catch (e) {
            console.error("Error fetching for download:", config.file);
        }
    }

    // Create the download link
    const blob = new Blob([combinedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tenant_resources_${window.currentLang}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 3. HELPERS
function updateStaticText(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function parseSpecialText(text) {
    if (!text) return '';
    return text
        .replace(/\[\[(.*?)\|(.*?)]]/g, '<span class="$1">$2</span>')
        .replace(/\[\[(.*?)]]/g, '<span class="gay-rainbow">$1</span>');
}

function parsePlaintextFile(text) {
    const lines = text.split(/\r?\n/);
    const root = [];
    const stack = [{ items: root, indent: -1 }];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;

        const indentMatch = line.match(/^(\t*)/);
        const indent = indentMatch ? indentMatch[0].length : 0;
        const cleanLine = line.trim();

        const nextLine = (lines[i + 1] || "").trim();
        const thirdLine = (lines[i + 2] || "").trim();

        let newItem = null;

        if (nextLine.toLowerCase().startsWith("http")) {
            newItem = { title: cleanLine, url: nextLine, subtitle: thirdLine };
            i += 2; 
        } else {
            newItem = { groupTitle: cleanLine, items: [] };
        }

        while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
            stack.pop();
        }
        stack[stack.length - 1].items.push(newItem);
        if (newItem.items) {
            stack.push({ items: newItem.items, indent: indent });
        }
    }
    return root;
}

function renderItem(item, folderColor, isNested = false) {
    if (item.groupTitle) {
        const childrenHtml = item.items ? item.items.map(child => renderItem(child, folderColor, true)).join('') : '';
        return `
            <details class="nested-details">
                <summary class="nested-summary ${folderColor}">
                    ${parseSpecialText(item.groupTitle)}
                </summary>
                <div class="nested-box">
                    ${childrenHtml}
                </div>
            </details>`;
    }

    const title = parseSpecialText(item.title);
    const subtitle = parseSpecialText(item.subtitle);
    const itemClass = isNested ? 'sub-link' : `resource-item ${folderColor}`;
    
    return `
        <a href="${item.url}" target="_blank" class="${itemClass}">
            <strong>${title}</strong><br>
            <span class="link-text ${folderColor}">${subtitle}</span>
        </a>`;
}

// 4. MAIN LOADER
async function initTenantTools() {
    const container = document.getElementById('resource-menu-content');
    if (!container) return;

    let masterHtml = '';
    const configs = getResourceConfigs(window.currentLang); 

    for (const config of configs) {
        try {
            const response = await fetch(config.file);
            if (!response.ok) throw new Error();
            const rawText = await response.text();
            const data = parsePlaintextFile(rawText);

            masterHtml += `
                <details class="resource-group">
                    <summary class="resource-header ${config.color}">${config.header}</summary>
                    <div class="dropdown-content">
                        ${data.map(item => renderItem(item, config.color)).join('')}
                    </div>
                </details>`;
        } catch (error) {
            console.error(`Missing file: ${config.file}`);
        }
    }
    container.innerHTML = masterHtml;
}

// 5. EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    updateStaticText(window.currentLang); // Run translation on load
    initTenantTools();

    // 5a. Language Switching Logic
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');
            
            // If it's a language button, update the app
            if (newLang) {
                window.currentLang = newLang;
                
                updateStaticText(window.currentLang); 
                initTenantTools(); 
                
                if (typeof initContactTools === 'function') {
                    initContactTools();
                }

                // Visual feedback for active button
                document.querySelectorAll('.lang-btn').forEach(b => b.style.borderColor = '#334155');
                btn.style.borderColor = '#6366f1';
            }
        });
    });

    // 5b. Download Button Logic (stays outside the loop)
    const downloadBtn = document.getElementById('download-all-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadAllResources);
    }
});

