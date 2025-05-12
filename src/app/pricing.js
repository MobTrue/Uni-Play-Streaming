document.addEventListener("DOMContentLoaded", function() {
    // Cria a seção principal
    const section = document.createElement('section');
    section.id = 'price';
    section.className = 'pricing-section';

    // Cria a div container
    const container = document.createElement('div');
    container.className = 'container';

    // Cria o título da seção
    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Escolha Seu Plano e Personalize Sua Experiência';
    container.appendChild(headerTitle);

    // Cria o parágrafo de subtítulo
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = 'Assinantes do plano anual podem <span class="highlight">economizar até 40%</span> além de <span class="highlight">Suporte de Integração GRATUITO</span> para Plano de 1 Mês, 6 Meses ou 12 Meses.';
    container.appendChild(subtitle);

    // Cria a div para os planos
    const plansDiv = document.createElement('div');
    plansDiv.className = 'plans';

    // Lista de planos
    const plans = [
        {
            title: '1 Mês',
            price: 'R$34,99',
            availability: 'Ativação imediata',
            features: [
                'Acesso a todos os recursos básicos da plataforma.',
                'Atendimento ao cliente prioritário.',
                'Cancelamento a qualquer momento.'
            ],
            isPopular: false
        },
        {
            title: '6 Meses',
            price: 'R$149,99',
            availability: 'Ativação imediata',
            features: [
                'Todos os benefícios do plano mensal, com desconto exclusivo.',
                'Acesso antecipado a novas funcionalidades.',
                'Relatórios personalizados de desempenho.'
            ],
            isPopular: true
        },
        {
            title: '12 Meses',
            price: 'R$249,99',
            availability: 'Ativação imediata',
            features: [
                'Todos os benefícios dos planos anteriores com maior economia.',
                'Suporte técnico prioritário 24/7.',
                'Integrações exclusivas e automatizadas.'
            ],
            isPopular: false
        }
    ];

    // Cria os cartões dos planos
    plans.forEach(plan => {
        const planCard = document.createElement('div');
        planCard.className = 'plan-card' + (plan.isPopular ? ' popular' : '');

        // Adiciona um badge se o plano for popular
        if (plan.isPopular) {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = 'Mais Popular';
            planCard.appendChild(badge);
        }

        // Adiciona o título do plano
        const title = document.createElement('h3');
        title.textContent = plan.title;
        planCard.appendChild(title);

        // Adiciona o preço do plano
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = plan.price;
        planCard.appendChild(price);

        // Adiciona a disponibilidade do plano
        const availability = document.createElement('p');
        availability.className = 'availability';
        availability.textContent = plan.availability;
        planCard.appendChild(availability);

        // Cria a lista de características
        const featuresList = document.createElement('ul');
        featuresList.className = 'features';
        plan.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.textContent = feature;
            featuresList.appendChild(listItem);
        });
        planCard.appendChild(featuresList);

        // Adiciona o botão de assinatura
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = 'Assinar Plano';
        planCard.appendChild(button);

        // Cria a div para ícones de pagamento
        const paymentIconsDiv = document.createElement('div');
        paymentIconsDiv.className = 'payment-icons';

        // Lista de ícones de pagamento
        const paymentIcons = ['img/pix.svg', 'img/visa.svg', 'img/mastercard.svg'];
        paymentIcons.forEach(iconSrc => {
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = 'Pagamento';
            paymentIconsDiv.appendChild(icon);
        });

        planCard.appendChild(paymentIconsDiv);
        plansDiv.appendChild(planCard);
    });

    // Adiciona a div dos planos à div container
    container.appendChild(plansDiv);

    // Adiciona a div container à seção
    section.appendChild(container);

    // Adiciona a seção ao body
    document.body.appendChild(section);
});