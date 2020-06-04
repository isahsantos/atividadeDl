
/* questão  2 */
var celsius = 100
var fahrenheit = 212
var convertCelsius;
var convertFarenheit

convertCelsius = 5 * (fahrenheit - 32) / 9;

document.write("F-> C = ", convertCelsius);
document.write("<br>");

convertFarenheit = celsius / 5 * 9 + 32;
document.write("C-> F = ", convertFarenheit);
document.write("<br>");
/*------------------------------------------------------------------------------------------------*/

/* questão  3 */

var homem1 = 10
var homem2 = 60
var mulher1 = 30
var mulher2 = 20
var somaidadede;
var produtoidade
if (homem1 > homem2) {
    if (mulher1 > mulher2) {
        somaidadede = homem1 + mulher2;
        produtoidade = homem2 * mulher1
    } else {

        somaidadede = homem1 + mulher1;
        produtoidade = homem2 * mulher2
    }
    document.write("Soma homem mais velho com mulher mais nova ", somaidadede, "Produto homem mais novo com mulher mais velha", produtoidade)
} else if (homem2 > homem1) {
    if (mulher1 > mulher2) {
        somaidadede = homem2 + mulher2;
        produtoidade = homem1 * mulher1
    }
    else {

        somaidadede = homem1 + mulher1;
        produtoidade = homem2 * mulher2
    }

    document.write("Soma homem mais velho com mulher mais nova ", somaidadede);
    document.write("<br>");
    document.write("Produto homem mais novo com mulher mais velha ", produtoidade)
    document.write("<br>");
}

/*------------------------------------------------------------------------------------------------*/

/* questão  4 */
var a = 1;
var b = 0;
function quebraLinha() {
    document.write("<br>");
}
for (cont = 1; cont <= 10; cont++) {
    for (conta = 1; conta <= 10; conta++) {
        var result = a * b;
        document.write(a + "x" + b + " = " + result + " |");
        b++;
        if (conta == 10) {
            quebraLinha();
            a++;
            b = 0;
        }

    }
}
/*------------------------------------------------------------------------------------------------*/
/* questão  5 */

var desc = ["Macarrao","Feijao", "Arroz"];
var  value = [3.50,5.20, 12.30];
var unit = [4,5, 10,3];
var total

for (let i =0; i<value.length;i++){
    total = value[i] * unit[i]
   if(unit[i]<= 5){
       percentual =  total * 0.02
     total =total -percentual; 
   }
   else if(unit[i]<= 10){
    percentual =  total * 0.03
    total =total -percentual; 
   }
   else {
    percentual =  total * 0.05
    total =total -percentual;  
   }
   document.write( "preço total ",total, " produto ",desc[i]), document.write("<br>");
}
/*------------------------------------------------------------------------------------------------*/