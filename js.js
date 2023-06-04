const cardArray =[{
    name:'dog',
    icon:'<i class="fa-solid fa-dog"></i>'
},
{
    name:'hippo',
    icon:'<i class="fa-solid fa-hippo"></i>'
},
{
    name:'fish',
    icon:'<i class="fa-solid fa-fish"></i>'
},
{
    name:'cat',
    icon:'<i class="fa-solid fa-cat"></i>'
},
{
    name:'spider',
    icon:'<i class="fa-solid fa-spider"></i>'
},
{
    name:'frog',
    icon:'<i class="fa-solid fa-frog"></i>'
},
{
    name:'dog',
    icon:'<i class="fa-solid fa-dog"></i>'
},
{
    name:'hippo',
    icon:'<i class="fa-solid fa-hippo"></i>'
},
{
    name:'fish',
    icon:'<i class="fa-solid fa-fish"></i>'
},
{
    name:'cat',
    icon:'<i class="fa-solid fa-cat"></i>'
},
{
    name:'spider',
    icon:'<i class="fa-solid fa-spider"></i>'
},
{
    name:'frog',
    icon:'<i class="fa-solid fa-frog"></i>'
}
];

shuffleCards();
let  matchedPairs=0;
let flippedCards =[];
const gameboard= document.getElementById("gameboard")
displayCards();
function shuffleCards(){
 for(let i= cardArray.length-1;i>=0; i--)
 {
   const randIndex = Math.floor(Math.random()*(i+1));
   [cardArray[i],cardArray[randIndex]]= [cardArray[i],cardArray[randIndex]]
 }

}

function displayCards(){
    cardArray.forEach((curr,index,arr)=>{
    const card = document.createElement('div');
    card.setAttribute('id',index);
    card.classList.add("cardback");
    card.classList.add('active');
    gameboard.append(card);
    card.addEventListener('click',flipCard);
       
    })
}

function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active') ){
        let cardId = this.getAttribute('id');
        flippedCards.push(this);
        this.classList.remove('cardback');
        this.innerHTML = cardArray[cardId].icon;
        if(flippedCards.length==2)
        {
            setTimeout(checkmatch,1000)
        }

    }

}

function checkmatch(){
    const card1Id = flippedCards[0].getAttribute('id');
    const card2Id = flippedCards[1].getAttribute('id');
    if(cardArray[card1Id].name === cardArray[card2Id].name){
    flippedCards[0].style.border = 'none';
    flippedCards[0].style.backgroundColor = '#f5e8ba';
    flippedCards[0].innerHTML = '';
    flippedCards[0].classList.remove('active');
    flippedCards[1].classList.remove('active');
    flippedCards[1].style.border = 'none';
    flippedCards[1].style.backgroundColor = '#f5e8ba';
    flippedCards[1].innerHTML = "";
    matchedPairs++;
    checkGameOver();
}
else{
flippedCards[0].innerHTML = '';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.add('cardback');
    
}
flippedCards = [];


}

function checkGameOver(){
    if(matchedPairs == cardArray.length/2){
        while(gameboard.firstChild){
            gameboard.removeChild(gameboard.firstChild)
        }
        gameboard.innerHTML = 'You Won';
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
}