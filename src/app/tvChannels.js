document.addEventListener("DOMContentLoaded", function() {
    // Cria a seção principal
    const section = document.createElement('section');
    section.className = 'tv-channels-section';

    // Cria o cabeçalho da seção de canais de TV
    const tvChannelsHeader = document.createElement('div');
    tvChannelsHeader.className = 'tv-channels-header';

    // Cria o título
    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Assista aos Melhores Canais de TV do Mundo';
    tvChannelsHeader.appendChild(headerTitle);

    // Cria o parágrafo
    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = 'Tenha acesso a uma seleção incrível de alta qualidade. Desde entretenimento e esportes até filmes e séries, tudo reunido em um só lugar para você.';
    tvChannelsHeader.appendChild(headerParagraph);

    // Adiciona o cabeçalho à seção
    section.appendChild(tvChannelsHeader);

    // Cria a grade de canais de TV
    const tvChannelsGrid = document.createElement('div');
    tvChannelsGrid.className = 'tv-channels-grid';

    // Lista de canais e suas imagens
    const channels = [
        { src: 'img/prime-video.png', alt: 'Prime Video' },
        { src: 'img/hbo.png', alt: 'HBO' },
        { src: 'img/netflix.png', alt: 'Netflix' },
        { src: 'img/disney-plus.png', alt: 'Disney+' },
        { src: 'img/hulu.png', alt: 'Hulu' },
        { src: 'img/apple-tv.png', alt: 'Apple TV' },
        { src: 'img/bein-sports.png', alt: 'BeIN Sports' },
        { src: 'img/film.png', alt: 'Film' }
    ];

    // Cria os logotipos dos canais
    channels.forEach(channel => {
        const channelLogo = document.createElement('div');
        channelLogo.className = 'channel-logo';

        const img = document.createElement('img');
        img.src = channel.src;
        img.alt = channel.alt;

        channelLogo.appendChild(img);
        tvChannelsGrid.appendChild(channelLogo);
    });

    // Adiciona a grade de canais à seção
    section.appendChild(tvChannelsGrid);

    // Adiciona a seção ao body
    document.body.appendChild(section);
});