/*
Realizar un programa que muestre la nota
del alumno como: A, B, C, D y F
donde:
A+ >=95
A >=90
B >= 80
C >= 70
D >= 60
F < 60
*/
console.log('Inicio del programa');

export let grade: number = 100;

if (grade>=95) {
    console.log('La nota del alumno es A+')
}else if (grade >= 90){
    console.log('La nota del alumno es A');
} else if (grade >= 80) {
    console.log('La nota del alumno es B');
} else if (grade >= 70) {
    console.log('La nota del alumno es C');
}else if (grade >= 60) {
    console.log('La nota del alumno es D');
}else if (grade < 60) {
    console.log('La nota del alumno es F');
}

console.log('Fin del programa');