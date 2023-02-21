
const carros = [
    {
        nome: "escort xr3",
        valor: 10000,
        marca: "Ford",
    },
    {
        nome: "Chevette",
        valor: 8000,
        marca: "Chevrolet",
    },
{
        nome: "Landau",
        valor: 14000,
        marca: "Ford",
    },
    {
        nome: "maverick",
        valor: 18000,
        marca: "Ford",
    },
];

let carrosDaFord = []

carrosDaFord = carros.filter(carros => carros.marca == "Ford")
carrosDaFord = carrosDaFord.map(carros => {return{nome: carros.nome, valor: carros.valor}})

console.log(carrosDaFord)

