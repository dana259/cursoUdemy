export let gasTank = 10;

// while (gasTank >= 0) {
//     console.log('Gasolina restante', gasTank)
//     gasTank--;
// }
// console.log('Ya no tiene gasolina');

do {
    console.log('Gasolina restante', gasTank)
    gasTank--;
} while (gasTank > 0);
console.log('Ya no tiene gasolina');