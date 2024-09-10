const types=["daimond","heart","spade","club"]
const cards=[
  "ace",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
]

const deck=[]

for(let i=0;i<types.length;i++){
  for(let j=0;j<cards.length;j++){
    let pick={type:types[i],card:cards[j]}
    deck.push(pick);
  }
}

for(let i=deck.length-1;i>0;i--){
  let j=Math.floor(Math.random()*i)
  let temp=deck[i]
  deck[i]=deck[j]
  deck[j]=temp
}

let u=Math.floor(Math.random()*52)
console.log(`A random card is ${deck[u].card} of ${deck[u].type}`)