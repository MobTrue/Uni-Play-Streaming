document.addEventListener("DOMContentLoaded", function() {
    // Espera até que todos os elementos da página sejam carregados
    const planCards = document.querySelectorAll('.plan-card');
    let currentIndex = 0;

    // Verifica se os cartões de plano foram encontrados
    if (planCards.length === 0) {
        console.error("Nenhum plano encontrado com a classe 'plan-card'.");
        return; // Sai da função se não houver planos
    }

    // Função para atualizar a exibição dos planos
    function updatePlanDisplay() {
        planCards.forEach(card => card.classList.remove('first')); // Remove a classe 'first' de todos os cartões
        planCards[currentIndex].classList.add('first'); // Adiciona a classe 'first' ao cartão atual
        currentIndex = (currentIndex + 1) % planCards.length; // Atualiza o índice para o próximo cartão
    }

    // Inicializa a exibição do primeiro plano
    updatePlanDisplay();

    // Altera o plano a cada 3 segundos
    setInterval(updatePlanDisplay, 3000);
});