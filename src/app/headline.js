document.addEventListener("DOMContentLoaded", function() {
    // Cria a seção principal
    const section = document.createElement('section');
    section.id = 'home';
    section.className = 'headline';

    // Cria o conteúdo da headline
    const headlineContent = document.createElement('div');
    headlineContent.className = 'headline-content';

    // Cria o elemento de rating
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = '★★★★★';
    headlineContent.appendChild(rating);

    // Cria o título
    const title = document.createElement('h1');
    title.innerHTML = 'Assista tudo que você ama,<br>Quando Quiser e Onde Estiver.';
    headlineContent.appendChild(title);

    // Cria o parágrafo
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Descubra um mundo de entretenimento com filmes, Séries e programas para toda a família. Experimente qualidade de Streaming sem interrupções e explore nosso catálogo exclusivo.';
    headlineContent.appendChild(paragraph);

    // Cria a div para os botões
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    // Cria o botão "Saiba Mais"
    const saibaMaisButton = document.createElement('a');
    saibaMaisButton.href = 'https://abre.ai/uniplay-contact';
    saibaMaisButton.target = '_blank';
    saibaMaisButton.className = 'btn btn-primary';
    saibaMaisButton.textContent = 'Saiba Mais';
    buttonsDiv.appendChild(saibaMaisButton);

    // Cria o botão "Teste Grátis"
    const testeGratisButton = document.createElement('a');
    testeGratisButton.href = 'https://abre.ai/uniplay-contact';
    testeGratisButton.target = '_blank';
    testeGratisButton.className = 'btn btn-secondary';
    testeGratisButton.textContent = 'Teste Grátis';
    buttonsDiv.appendChild(testeGratisButton);

    // Adiciona os botões à headline content
    headlineContent.appendChild(buttonsDiv);

    // Adiciona o conteúdo da headline à seção
    section.appendChild(headlineContent);

    // Cria a div para a imagem da headline
    const headlineImgDiv = document.createElement('div');
    headlineImgDiv.className = 'headline-img';

    // Cria a imagem
    const headlineImg = document.createElement('img');
    headlineImg.src = 'img/tv-image.png';
    headlineImg.alt = 'Serviço de Streaming';
    headlineImgDiv.appendChild(headlineImg);

    // Adiciona a div da imagem à seção
    section.appendChild(headlineImgDiv);

    // Adiciona a seção ao body
    document.body.appendChild(section);
});