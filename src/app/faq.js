document.addEventListener("DOMContentLoaded", function() {
    // Cria a seção principal
    const section = document.createElement('section');
    section.id = 'faq';
    section.className = 'help-section';

    // Cria o cabeçalho da seção de ajuda
    const helpHeader = document.createElement('div');
    helpHeader.className = 'help-header';

    const helpContent = document.createElement('div');
    helpContent.className = 'help-content';

    // Cria o título
    const headerTitle = document.createElement('h2');
    headerTitle.innerHTML = '<i class="fas fa-question-circle"></i> Precisa de ajuda?';
    helpContent.appendChild(headerTitle);

    // Cria o parágrafo
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = 'Temos uma equipe dedicada para esclarecer suas dúvidas e garantir a melhor experiência. Confira as perguntas frequentes abaixo ou entre em contato conosco!';
    helpContent.appendChild(headerParagraph);

    helpHeader.appendChild(helpContent);

    // Cria a div para as imagens de ajuda
    const helpImages = document.createElement('div');
    helpImages.className = 'help-images';

    // Lista de imagens
    const imageSources = ['img/user1.jpg', 'img/user2.jpg', 'img/user3.jpg', 'img/user4.jpg'];
    imageSources.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Usuário';
        helpImages.appendChild(img);
    });

    helpHeader.appendChild(helpImages);

    // Adiciona o botão de contato
    const contactButton = document.createElement('a');
    contactButton.href = '#';
    contactButton.className = 'contact-button';
    contactButton.innerHTML = '<i class="fas fa-envelope"></i> Contate-nos';
    helpHeader.appendChild(contactButton);

    // Adiciona o cabeçalho à seção
    section.appendChild(helpHeader);

    // Cria a div para perguntas frequentes
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container';

    const questionsTitle = document.createElement('h3');
    questionsTitle.innerHTML = '<i class="fas fa-comments"></i> Perguntas Frequentes';
    questionsContainer.appendChild(questionsTitle);

    const questionsParagraph = document.createElement('p');
    questionsParagraph.textContent = 'Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços. Caso precise de mais informações, nossa equipe está pronta para ajudar.';
    questionsContainer.appendChild(questionsParagraph);

    // Cria a grade de perguntas
    const questionsGrid = document.createElement('div');
    questionsGrid.className = 'questions-grid';

    // Lista de perguntas
    const questions = [
        {
            icon: 'fas fa-tv',
            question: 'O que é IPTV?',
            answer: 'IPTV (Internet Protocol Television) é um serviço que transmite canais de TV e conteúdos sob demanda pela internet.'
        },
        {
            icon: 'fas fa-clock',
            question: 'Quanto tempo demora?',
            answer: 'Após a confirmação do pagamento, o serviço é ativado em até 10 minutos.'
        },
        {
            icon: 'fas fa-tablet-alt',
            question: 'Quais dispositivos podem ser usados?',
            answer: 'Nosso serviço é compatível com Smart TVs, smartphones, tablets, computadores e dispositivos como TV Box e Fire Stick.'
        },
        {
            icon: 'fas fa-headset',
            question: 'Eu tenho suporte?',
            answer: 'Sim, oferecemos suporte técnico dedicado 24/7 para ajudar em qualquer questão.'
        },
        {
            icon: 'fas fa-vial',
            question: 'Como posso testar meu serviço?',
            answer: 'Oferecemos teste gratuito de até 7 horas para que você experimente a qualidade do nosso serviço.'
        },
        {
            icon: 'fas fa-wifi',
            question: 'Velocidade de internet recomendada?',
            answer: 'Recomendamos no mínimo 10 Mbps para uma experiência de streaming estável e de alta qualidade.'
        },
        {
            icon: 'fas fa-users',
            question: 'Quantas conexões ao mesmo tempo?',
            answer: 'Nossos planos permitem 1 conexão por assinatura. Entre em contato para pacotes com múltiplas conexões.'
        },
        {
            icon: 'fas fa-gift',
            question: 'Vocês oferecem teste grátis?',
            answer: 'Sim, você pode solicitar um teste gratuito para verificar se nosso serviço atende às suas expectativas.'
        }
    ];

    // Cria os itens de perguntas
    questions.forEach(q => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';

        const questionTitle = document.createElement('h4');
        questionTitle.innerHTML = `<i class="${q.icon}" style="color: #fff;"></i> ${q.question}`;
        questionItem.appendChild(questionTitle);

        const questionAnswer = document.createElement('p');
        questionAnswer.textContent = q.answer;
        questionItem.appendChild(questionAnswer);

        questionsGrid.appendChild(questionItem);
    });

    questionsContainer.appendChild(questionsGrid);
    section.appendChild(questionsContainer);

    // Adiciona a seção ao body
    document.body.appendChild(section);
});