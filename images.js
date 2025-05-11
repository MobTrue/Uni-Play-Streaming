updateFirstClass();
setInterval(updateFirstClass, 3000);

const images = [
    'img/filmes/img1.png',
    'img/filmes/img2.png',
    'img/filmes/img3.png',
    'img/filmes/img4.png',
    'img/filmes/img5.png',
    'img/filmes/img6.png',
    'img/filmes/img7.png',
    'img/filmes/img8.png',
    'img/filmes/img9.png',
    'img/filmes/img10.png',
    'img/filmes/img11.png',
    'img/filmes/img12.png',
    'img/filmes/img13.png',
    'img/filmes/img14.png',
    'img/filmes/img15.png',
    'img/filmes/img16.png',
    'img/filmes/img17.png',
    'img/filmes/img18.png',
    'img/filmes/img19.png',
    'img/filmes/img20.png',
    'img/filmes/img21.png',
    'img/filmes/img22.png',
    'img/filmes/img23.png',
    'img/filmes/img24.png',
    'img/filmes/img25.png',
    'img/filmes/img26.png',
    'img/filmes/img27.png',
    'img/filmes/img28.png',
    'img/filmes/img29.png',
    'img/filmes/img30.png',
    'img/filmes/img31.png',
    'img/filmes/img32.png',
    'img/filmes/img33.png',
    'img/filmes/img34.png',
    'img/filmes/img35.png',
    'img/filmes/img36.png',
    'img/filmes/img37.png',
    'img/filmes/img38.png',
    'img/filmes/img39.png',
    'img/filmes/img40.png',
    'img/filmes/img41.png',
    'img/filmes/img42.png',
    'img/filmes/img43.png',
    'img/filmes/img44.png',
    'img/filmes/img45.png',
    'img/filmes/img46.png',
    'img/filmes/img47.png',
    'img/filmes/img48.png',
    'img/filmes/img49.png',
    'img/filmes/img50.png'
];

const usedImages = new Set();

function getRandomImage() {
    if (usedImages.size === images.length) {
        // Reset se todas as imagens foram usadas
        usedImages.clear();
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (usedImages.has(images[randomIndex]));

    usedImages.add(images[randomIndex]);
    return images[randomIndex];
}

function changeImage(cardId, interval) {
    setInterval(() => {
        const imgElement = document.querySelector(`#${cardId} img`);
        if (imgElement) {
            const newImage = getRandomImage();
            imgElement.src = newImage;

            // Verifica se a imagem foi carregada com sucesso
            const img = new Image();
            img.src = newImage;
            img.onload = () => {
                imgElement.src = newImage; // Atualiza a imagem se carregar com sucesso
            };
            img.onerror = () => {
                console.error(`Falha ao carregar a imagem: ${newImage}`);
            };
        } else {
            console.error(`Elemento com ID ${cardId} não encontrado.`);
        }
    }, interval);
}

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    changeImage('card1', 2500); // Card 1 a cada 3 segundos
    changeImage('card2', 2000); // Card 2 a cada 4 segundos
    changeImage('card3', 2500); // Card 3 a cada 3 segundos
    changeImage('card4', 2000); // Card 4 a cada 3 segundos
    changeImage('card5', 2500); // Card 5 a cada 4 segundos
    changeImage('card6', 2000); // Card 6 a cada 3 segundos
});