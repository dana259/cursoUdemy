export let base = 10;
export let limit = 50;
// for (let i = 1; i <= limit; i++) {
//     console.log('10 x ' + i + ' =', base*i);
// }

let i:number=1;
// while (i<=limit) {
//     console.log('10 x ' + i + ' =', base*i);
//     i++;
// }

do{
    console.log('10 x ' + i + ' =', base*i);
    i++;
}while (i<=limit);