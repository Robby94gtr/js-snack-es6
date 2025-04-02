// SNACK 1
//creare un array di oggetti 
const bicycles = [
{
    //ogni bici deve avere due proprietà : nome e peso
    name: 'Bianchi Oltre RC',
    weight: 5,
} ,
{
    name: 'Look 795 Blade RS Proteam',
    weight: 8,
} ,
{
    name: 'Willier Triestina',
    weight: 7,
} ,
{
    name: 'Colnago V4Rs',
    weight: 8,
} ,
{
    name: 'Canyon Ultimate CF SL R101',
    weight: 6,
}
];
console.log(bicycles);
//stampare la bici col peso minore
//dichiaro variabili che mi serviranno nel ciclo for per salvare il peso di ogni bicicletta e una che mi salverà il peso maggiore
//prendo il weight del primo array e lo assegno a maxWeight
let maxWeight = bicycles[0].weight;

let moreHeavy;

//inizio un ciclo per verificare una ad una quale abbia il peso maggiore

for (let i = 0 ; i<bicycles.length ; i++){
    //verifico il peso maggiore
    if(maxWeight> bicycles[i].weight){
        moreHeavy= bicycles[0];
    }
    else{
        moreHeavy = bicycles[i];
        maxWeight = bicycles[i].weight;
    }
}
console.log(moreHeavy);
console.log(moreHeavy.name);

// SNACK 2
const footballTeam = [
    //ogni ogni oggetto decriverà un calciatore
    {
        //ogni giocatore deve avere tre proprietà : nome, punti fatti e falli subiti
        name: 'Roma',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Inter',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Milan',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Bologna',
        score: 0,
        foul: 0,
    } ,
    {
        name: 'Fiorentina',
        score: 0,
        foul: 0,
    }
];
const generateRandomScore = () => {
    return Math.floor(Math.random()*102)+1;
}
for(let i=0 ; i<footballTeam.length ; i++){
    footballTeam[i].score= generateRandomScore();
}

const generateRandomfoul = () => {
    return Math.floor(Math.random()*50)+1;
}
for(let i=0 ; i<footballTeam.length ; i++){
    footballTeam[i].foul= generateRandomfoul();
}
console.log(footballTeam);

//creo un nuovo array contenente solo falli e punti
let scoresAndFouls = [];
//ciclo il nuovo array per inserire all'interno solo le proprietà score e foul
for(let i=0; i<footballTeam.length; i++){
    let checkscore = {};
    checkscore.score = footballTeam[i].score;
    checkscore.foul = footballTeam[i].foul;
    scoresAndFouls.push(checkscore);      
}
console.log(scoresAndFouls);