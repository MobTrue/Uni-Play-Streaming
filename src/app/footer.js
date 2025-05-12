document.addEventListener("DOMContentLoaded", function() {
    // Cria o footer principal
    const footer = document.createElement('footer');
    footer.className = 'footer';

    // Cria o container do footer
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    // Cria a seção do logo do footer
    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';

    const logoTitle = document.createElement('h2');
    logoTitle.innerHTML = 'Uni<span>Play</span><span id="hidden">-Streaming</span>';
    footerLogo.appendChild(logoTitle);

    const logoDescription1 = document.createElement('p');
    logoDescription1.textContent = 'Aproveite seus programas e filmes favoritos com apenas um clique!';
    footerLogo.appendChild(logoDescription1);

    const logoDescription2 = document.createElement('p');
    logoDescription2.textContent = 'Explore a melhor experiência de streaming com nossa plataforma intuitiva e conteúdos exclusivos, feitos para você e sua família.';
    footerLogo.appendChild(logoDescription2);

    footerContainer.appendChild(footerLogo);

    // Cria a seção de links do footer
    const footerLinks = document.createElement('div');
    footerLinks.className = 'footer-links';

    const linkSections = [
        {
            title: 'Links',
            items: [
                { icon: 'fas fa-home', text: 'Home', href: '#' },
                { icon: 'fas fa-concierge-bell', text: 'Serviços', href: '#' },
                { icon: 'fas fa-dollar-sign', text: 'Preços', href: '#' },
                { icon: 'fas fa-envelope', text: 'Contato', href: '#' }
            ]
        },
        {
            title: 'Legal',
            items: [
                { icon: 'fas fa-file-alt', text: 'Termos de Uso', href: '#' },
                { icon: 'fas fa-file-contract', text: 'Termos e Condições', href: '#' },
                { icon: 'fas fa-user-secret', text: 'Política de Privacidade', href: '#' },
                { icon: 'fas fa-cookie-bite', text: 'Política de Cookies', href: '#' }
            ]
        },
        {
            title: 'Produtos',
            items: [
                { icon: 'fas fa-gift', text: 'Teste Grátis', href: '#' },
                { icon: 'fas fa-headset', text: 'Suporte ao Vivo', href: '#' },
                { icon: 'fas fa-share-alt', text: 'Redes Sociais', href: '#' },
                { icon: 'fas fa-handshake', text: 'Colaboração', href: '#' },
                { icon: 'fas fa-star', text: 'Avaliações', href: '#' }
            ]
        }
    ];

    linkSections.forEach(section => {
        const footerColumn = document.createElement('div');
        footerColumn.className = 'footer-column';

        const columnTitle = document.createElement('h3');
        columnTitle.textContent = section.title;
        footerColumn.appendChild(columnTitle);

        const list = document.createElement('ul');
        section.items.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = item.href;
            link.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
        footerColumn.appendChild(list);
        footerLinks.appendChild(footerColumn);
    });

    footerContainer.appendChild(footerLinks);
    footer.appendChild(footerContainer);

    // Cria a parte inferior do footer
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';

    const footerBottomLinks = document.createElement('div');
    footerBottomLinks.className = 'footer-bottom-links';

    const privacyLink = document.createElement('a');
    privacyLink.href = '#';
    privacyLink.innerHTML = '<i class="fas fa-shield-alt"></i> Privacidade & Termos';
    footerBottomLinks.appendChild(privacyLink);

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.innerHTML = '<i class="fas fa-envelope"></i> Contate-nos';
    footerBottomLinks.appendChild(contactLink);

    footerBottom.appendChild(footerBottomLinks);

    const footerCopyright = document.createElement('div');
    footerCopyright.className = 'footer-copyright';
    footerCopyright.innerHTML = '<p>© 2025 Uni٭Play. Todos os direitos reservados.</p>';
    footerBottom.appendChild(footerCopyright);

    const footerSocials = document.createElement('div');
    footerSocials.className = 'footer-socials';

    const socialLinks = [
        { icon: 'fab fa-facebook', href: '#' },
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-instagram', href: '#' }
    ];

    socialLinks.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.href;
        socialLink.innerHTML = `<i class="${social.icon}"></i>`;
        footerSocials.appendChild(socialLink);
    });

    footerBottom.appendChild(footerSocials);
    footer.appendChild(footerBottom);

    // Adiciona o footer ao body
    document.body.appendChild(footer);
});