 // Array de planos Next Play
let nextPlans = [
   { id: 1, name: "Next Play - Mensal", price: 34.90, time: "1 mês"},
   { id: 2, name: "Next Play - Bimestral", price: 59.90, time: "2 meses" },
   { id: 3, name: "Next Play - Trimestral", price: 89.90, time: "3 meses" },
   { id: 4, name: "Next Play - Semestral", price: 149.90, time: "6 meses"},
   { id: 5, name: "Next Play - Anual", price: 259.90, time: "12 meses" }
];

// Array de planos Uni Mais
let uniPlans = [
   { id: 1, name: "Uni Mais - Mensal", price: 24.90, time: "1 mês"},
   { id: 2, name: "Uni Mais - Bimestral", price: 49.90, time: "2 meses" },
   { id: 3, name: "Uni Mais - Trimestral", price: 79.90, time: "3 meses" },
   { id: 4, name: "Uni Mais - Semestral", price: 139.90, time: "6 meses" },
   { id: 5, name: "Uni Mais - Anual", price: 249.90, time: "12 meses" }
];

// Função para criar cards de planos usando arrow functions
const createPlanCards = (plans, containerId) => {
   const container = document.getElementById(containerId);

   plans.forEach(plan => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
         <h3>${plan.name}</h3>
         <p>Duração: ${plan.time}</p>
         <p>R$${plan.price.toFixed(2)}</p>
         
         
         <a id="classA" href="http://bit.ly/4fOky9q">
            Assinar
         </a>
      `;
      container.appendChild(card);
   });
}

// Criar cards para todos os planos
createPlanCards(nextPlans, 'plans-container1');
createPlanCards(uniPlans, 'plans-container2');
