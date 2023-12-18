export let weekDay: number = 5;

if (weekDay<=0) {
    throw new Error ('Dia de la semana no permitido')
}

switch (weekDay) {
    case 1:
        console.log('Hoy es Lunes.');
        break;
    case 2:
        console.log('Hoy es Martes.');
        break;
    case 3:
        console.log('Hoy es Miercoles.');
        break;
    default:
        console.log('Hoy no es Lunes, Martes o Miercoles.');
        break;
}