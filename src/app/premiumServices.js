document.addEventListener("DOMContentLoaded", function() {
    // Cria a seção principal
    const section = document.createElement('section');
    section.id = 'service';
    section.className = 'premium-services';

    // Cria a div container
    const container = document.createElement('div');
    container.className = 'container';

    // Cria o título
    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Descubra Serviços Premium Tudo-em-Um';
    container.appendChild(headerTitle);

    // Cria o parágrafo de descrição
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = 'Eleve sua experiência de entretenimento com recursos avançados, suporte dedicado e acesso exclusivo ao melhor conteúdo, tudo em um só lugar.';
    container.appendChild(description);

    // Cria a grade de recursos
    const featuresGrid = document.createElement('div');
    featuresGrid.className = 'features-grid';

    // Lista de recursos
    const features = [
        {
            icon: 'fas fa-video',
            title: 'Alta Qualidade',
            text: 'Desfrute de transmissões em alta definição, proporcionando imagens nítidas e som cristalino.'
        },
        {
            icon: 'fas fa-phone-alt',
            title: 'Suporte 24/7',
            text: 'Conte com uma equipe pronta para ajudar, disponível 24 horas por dia, 7 dias por semana.'
        },
        {
            icon: 'fas fa-laptop',
            title: 'Todos os Dispositivos',
            text: 'Acesse seus conteúdos favoritos de qualquer lugar, em qualquer dispositivo.'
        },
        {
            icon: 'fas fa-film',
            title: 'Últimos Filmes',
            text: 'Fique atualizado com os lançamentos mais recentes e os grandes sucessos do cinema.'
        },
        {
            icon: 'fas fa-rocket',
            title: 'Conexão Rápida',
            text: 'Aproveite streaming sem interrupções com velocidades de conexão impressionantes.'
        },
        {
            icon: 'fas fa-sync-alt',
            title: 'Atualizações Constantes',
            text: 'Novos conteúdos adicionados regularmente para manter sua experiência sempre fresca.'
        },
        {
            icon: 'fas fa-cogs',
            title: 'Controle Total',
            text: 'Personalize suas preferências e configure sua experiência como desejar.'
        },
        {
            icon: 'fas fa-lock',
            title: 'Segurança',
            text: 'Garanta a proteção dos seus dados com tecnologia avançada de segurança.'
        }
    ];

    // Cria os itens de recursos
    features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';

        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        const icon = document.createElement('i');
        icon.className = feature.icon;
        icon.style.color = '#fff'; // Define a cor do ícone
        iconDiv.appendChild(icon);
        featureItem.appendChild(iconDiv);

        const title = document.createElement('h3');
        title.textContent = feature.title;
        featureItem.appendChild(title);

        const text = document.createElement('p');
        text.textContent = feature.text;
        featureItem.appendChild(text);

        featuresGrid.appendChild(featureItem);
    });

    // Adiciona a grade de recursos à div container
    container.appendChild(featuresGrid);

    // Adiciona a div container à seção
    section.appendChild(container);

    // Adiciona a seção ao body
    document.body.appendChild(section);
});