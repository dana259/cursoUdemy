export let limit = 100;
for (let i = 1; i <= limit; i++){
    if (i===5) {
        continue;
    }
    console.log('let i', i);
    if (i===5) {
        break;
    }
}
console.log('fin del programa');