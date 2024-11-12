const squadre = [
    {nome: `Roma`, punti: 0, falliSub: 0},
    {nome: `Lazio`, punti: 0, falliSub: 0},
    {nome: `Milan`, punti: 0, falliSub: 0},
    {nome: `Inter`, punti: 0, falliSub: 0}
];

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadre.forEach(squadra => {
    squadra.punti = randomNum (1, 20);
    squadra.falliSub = randomNum (1, 10);
});

const nomiFalli = squadre.map(squadra => {
    return {nome: squadra.nome, falliSub: squadra.falliSub};
});

console.log(`squadre, punti e falli subiti`, squadre);
console.log(`Nomi squadre con falli subiti`, nomiFalli);


