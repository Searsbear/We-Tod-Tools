const getContactConfigs = (lang) => [
    { file: `data/${lang}/Transport.txt`,   color: 'cat-transport',  header: lang === 'fr' ? 'Transport' : 'Transport' },
    { file: `data/${lang}/health.txt`, color: 'cat-health',   header: lang === 'fr' ? 'Santé et Médical' : 'Health & Medical Resources' }
];

async function initContactTools() {
    const container = document.getElementById('contact-menu-content');
    if (!container) return;

    let masterHtml = '';
    const configs = getContactConfigs(window.currentLang || 'en');

    for (const config of configs) {
        try {
            const response = await fetch(config.file);
            if (!response.ok) throw new Error();
            const text = await response.text();
            
            // Split by double line breaks
            const blocks = text.split(/\n\s*\n/); 
            
            masterHtml += `
                <details class="resource-group">
                    <summary class="resource-header ${config.color}">${config.header}</summary>
                    <div class="dropdown-content">
                        ${blocks.map(block => {
                            const lines = block.trim().split('\n');
                            if (!lines[0]) return '';
                            
                            const title = lines[0];
                            let phone = "", url = "", desc = [];
                            
                            lines.slice(1).forEach(l => {
                                const c = l.trim();
                                if (c.startsWith('http')) url = c;
                                else if (/[\d]{3}/.test(c)) phone = c;
                                else desc.push(c);
                            });

                            return `
                                <div class="resource-item ${config.color}" style="cursor:default;">
                                    <strong>${title}</strong><br>
                                    ${phone ? `<a href="tel:${phone.replace(/\D/g,'')}" class="link-text ${config.color}" style="display:block; margin:5px 0;">${phone}</a>` : ''}
                                    ${desc.length ? `<small style="display:block; color:#94a3b8; margin-bottom:5px;">${desc.join('<br>')}</small>` : ''}
                                    ${url ? `<a href="${url}" target="_blank" class="link-text ${config.color}">Visit Website</a>` : ''}
                                </div>`;
                        }).join('')}
                    </div>
                </details>`;
        } catch (e) {
            console.error(`Missing contact file: ${config.file}`);
        }
    }
    container.innerHTML = masterHtml;
}

// Auto-run on load
document.addEventListener('DOMContentLoaded', initContactTools);