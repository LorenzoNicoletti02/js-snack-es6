const bici = [
    {nome: `bici1`, peso: 20},
    {nome: `bici2`, peso: 10},
    {nome: `bici3`, peso: 40},
    {nome: `bici4`, peso: 30}
];

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++){
    if (bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(`Questa è la bici più leggera: `,biciLeggera);
