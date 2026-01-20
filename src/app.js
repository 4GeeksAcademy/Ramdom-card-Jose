const Container = document.querySelector(".contenedor")
const card = document.getElementById ("card")
let topSuit = document.querySelector(".top-suit")
let number = document.querySelector(".number")
let buttomSuit = document.querySelector(".bottom-suit")
const button = document.getElementById("BtnGenerar")
const RemoveButton = document.getElementById("BtnRemove")

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [
    { symbol: '♠', color: "negro" },
    { symbol: '♣', color: "negro" },
    { symbol: '♥', color: "rojo"},
    { symbol: '♦', color: "rojo"}
];

button.addEventListener("click", function(){

    function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const RandomSuitArr = getRandomNumber(suits.length)
const RandomSuit = suits[RandomSuitArr]
const RandomValuesArr = getRandomNumber(values.length)
const RandomValue = values[RandomValuesArr]
RenderCards(RandomSuit,RandomValue);

function RenderCards (suit,value) { 
    /*topSuit.textContent = suit.symbol
    buttomSuit.textContent = suit.symbol
    number.textContent = value
    card.className = "card"
    card.classList.add(suit.color)*/ 

    const NewCard = document.createElement("div")
    NewCard.className = "card"
    NewCard.classList.add(suit.color)
    NewCard.innerHTML += `
        <div class="top-suit">${suit.symbol}</div>
        <div class="number">${value}</div>
        <div class="bottom-suit">${suit.symbol}</div>`
    
    Container.appendChild(NewCard)   
}
const AllCards = Container.querySelectorAll(".card")
if(AllCards.length === 8 ){
        alert("Para de generar cartas plis :)")
    }
})

RemoveButton.addEventListener("click", function(){
    
    const LastCard = Container.lastElementChild;

    if(LastCard){
        LastCard.remove()  
    }
    
})
