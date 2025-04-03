// Escribe una función que reciba cuatro argumentos booleanos y retorne true si 
// al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos 
// es falso.

const evaluarBooleanos = (a, b, c, d) => (a || b) && (!c || !d);


console.log(evaluarBooleanos(true, false, true, true));  // false
console.log(evaluarBooleanos(false, true, false, true)); // true
console.log(evaluarBooleanos(true, true, false, false)); // true

// a    || b
// true || false  → true  
// false || true  → true  
// true || true   → true  
// false || false → false  

// !c     || !d
// !true  || !true   → false || false → false  
// !false || !true   → true  || false → true  
// !true  || !false  → false || true  → true  
// !false || !false  → true  || true  → true  