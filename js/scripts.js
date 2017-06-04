var a = 5;
var b = 10;

var value = (a * a) + (2 * a * b) - (b * b);

/*
  Michale pozwoliłem sobie zastosować alert zamiast console.log
  To rozwiązanie bardziej mi pasuje, dlaczego? wyjaśnie Ci na spotkaniu
*/

alert(a + " x " + a + " + " + " 2 x " + a + " x " + b + " - " + b + " x " + b + " = " + value);

//podobnie tu alert
if (value < 0) {
    alert("wynik ujemny");
} else if (value > 0) {
    alert("wynik dodatni");
} 
//znowu alert zamiast console.log
if (value == 0) {
    alert("wynik równy zeru");
} else if (value != 0) {
    alert("wynik nie równa się zeru");
} 