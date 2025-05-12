document.addEventListener("DOMContentLoaded", function() {
    // Cria o elemento do header
    const header = document.createElement('header');
    header.className = 'navbar';

    // Cria a div do logo
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    const logoLink = document.createElement('a');
    const logoTitle = document.createElement('h1');
    logoTitle.innerHTML = 'Uni٭<span>Play</span><span id="hidden">-Streaming</span>';
    logoLink.appendChild(logoTitle);
    logoDiv.appendChild(logoLink);
    header.appendChild(logoDiv);

    // Cria o elemento nav
    const nav = document.createElement('nav');

    // Lista de links
    const links = [
        { href: "#home", text: "Home", id: "hidden" }, // ID para ocultar
        { href: "#service", text: "Serviços" },
        { href: "#price", text: "Preços" },
        { href: "#content", text: "Conteúdos", id: "hidden" }, // ID para ocultar
        { href: "#faq", text: "FAQ", id: "hidden" }, // ID para ocultar
        { href: "https://abre.ai/uniplay-contact", text: "Contato", target: "_blank" }
    ];

    // Cria os links
    links.forEach(link => {
        const navLink = document.createElement('a');
        navLink.href = link.href;
        navLink.textContent = link.text;

        // Aplica o ID para links que devem ser ocultos
        if (link.id) {
            navLink.id = link.id; // Define o ID
        }

        if (link.target) {
            navLink.target = link.target;
        }
        nav.appendChild(navLink);
    });
    
    header.appendChild(nav);

    // Adiciona o header ao body
    document.body.appendChild(header);

    // Lógica para mostrar os links ocultos
    setTimeout(() => {
        document.getElementById('hidden-home').style.display = 'inline'; // Mostra o link de Home
        document.getElementById('hidden-content').style.display = 'inline'; // Mostra o link de Conteúdos
        document.getElementById('hidden-faq').style.display = 'inline'; // Mostra o link de FAQ
    }, 500); // Ajuste o tempo conforme necessário

    // Adiciona um evento de clique para navegação suave
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave
            }
        });
    });
});