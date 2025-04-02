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