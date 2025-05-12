document.addEventListener("DOMContentLoaded", function() {
    const section = document.createElement('section');
    section.id = 'content';
    section.className = 'movies-section';

    const moviesHeader = document.createElement('div');
    moviesHeader.className = 'movies-header';

    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Filmes, Séries, Canais Ao Vivo e Muito Mais!';
    moviesHeader.appendChild(headerTitle);

    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = 'Transforme suas noites em experiências cinematográficas épicas. Assista aos maiores sucessos de bilheteira, esportes ao vivo e uma seleção exclusiva para todos os gostos.';
    moviesHeader.appendChild(headerParagraph);

    section.appendChild(moviesHeader);

    const moviesGrid = document.createElement('div');
    moviesGrid.className = 'movies-grid';

    // Armazena as imagens que foram definidas em images.js
    const images = [
        'img/filmes/img1.png',
        'img/filmes/img2.png',
        'img/filmes/img3.png',
        'img/filmes/img4.png',
        'img/filmes/img5.png',
        'img/filmes/img6.png'
    ];

    // Cria os cartões de filme
    for (let i = 0; i < images.length; i++) {
        const movieCard = document.createElement('div');
        movieCard.id = `card${i + 1}`; // IDs: card1, card2, ...
        movieCard.className = 'movie-card';

        const img = document.createElement('img');
        img.src = images[i]; // Define a fonte da imagem a partir do array de imagens
        img.alt = `Cartaz do filme ${i + 1}`; // Texto alternativo

        movieCard.appendChild(img);
        moviesGrid.appendChild(movieCard);
    }

    section.appendChild(moviesGrid);
    document.body.appendChild(section);
});