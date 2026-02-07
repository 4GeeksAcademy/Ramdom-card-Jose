// 📝 NOMENCLATURA: Variables en camelCase (no PascalCase)
// PascalCase se reserva para clases y componentes React
const container = document.querySelector(".contenedor");
const card = document.getElementById("card");
const generateButton = document.getElementById("BtnGenerar");
const removeButton = document.getElementById("BtnRemove");

// 📝 CONSTANTES: Arrays de datos en UPPER_SNAKE_CASE
// Esto indica que son valores que nunca cambian
const CARD_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const CARD_SUITS = [
    { symbol: '♠', color: "negro" },
    { symbol: '♣', color: "negro" },
    { symbol: '♥', color: "rojo"},
    { symbol: '♦', color: "rojo"}
];

// 📝 CONSTANTE: Máximo de cartas permitidas
const MAX_CARDS = 8;

// 📝 FUNCIÓN HELPER: Genera número aleatorio entre 0 y max-1
// Separada del listener para ser reutilizable y testeable
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// 📝 FUNCIÓN: Genera una carta aleatoria
// Retorna un objeto con suit y value
function generateRandomCard() {
    const randomSuitIndex = getRandomNumber(CARD_SUITS.length);
    const randomValueIndex = getRandomNumber(CARD_VALUES.length);
    
    return {
        suit: CARD_SUITS[randomSuitIndex],
        value: CARD_VALUES[randomValueIndex]
    };
}

// 📝 FUNCIÓN: Crea y muestra una nueva carta en el DOM
// Parámetros: suit (objeto con symbol y color), value (string)
function renderCard(suit, value) { 
    // Crear nuevo elemento de carta
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.classList.add(suit.color);
    
    // 📝 Template literal para construir el HTML de la carta
    newCard.innerHTML = `
        <div class="top-suit">${suit.symbol}</div>
        <div class="number">${value}</div>
        <div class="bottom-suit">${suit.symbol}</div>
    `;
    
    // Agregar al contenedor
    container.appendChild(newCard);
}

// 📝 FUNCIÓN: Muestra mensaje cuando se alcanza el límite
// Mejor UX que alert() - podría mejorarse aún más con un div en el DOM
function showMaxCardsMessage() {
    // 👉 MEJORA FUTURA: Crear un <div> en el DOM en lugar de alert
    // Por ahora, mensaje más profesional
    alert(`¡Límite alcanzado! Máximo ${MAX_CARDS} cartas.`);
}

// 📝 EVENT LISTENER: Botón generar carta
generateButton.addEventListener("click", function() {
    // Verificar si ya hay demasiadas cartas
    const currentCards = container.querySelectorAll(".card");
    
    if (currentCards.length >= MAX_CARDS) {
        showMaxCardsMessage();
        return;  // 📝 Early return: salir si se alcanzó el límite
    }
    
    // Generar y mostrar nueva carta
    const randomCard = generateRandomCard();
    renderCard(randomCard.suit, randomCard.value);
});

// 📝 EVENT LISTENER: Botón remover última carta
removeButton.addEventListener("click", function() {
    const lastCard = container.lastElementChild;
    
    // 📝 Verificar que exista una carta antes de remover
    if (lastCard) {
        lastCard.remove();
    }
});
