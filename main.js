alert("Bienvenido!")
let nombre
do{
    nombre = prompt("Ingrese su nombre")}
while(nombre == "")
alert("en cual de nuestros productos estas interesado, " + nombre + "? \n1- Utensilios de cocteleria  \n2- Cristaleria \n3- Bebidas alcoholicas \n4- Bebidas no alcoholicas")

let utensilio
let cristaleria
let bebidaAlcoholica
let bebidaNoAlcoholica

function confirmacion(){
        return confirm("Deseas agregar algo mas? \n1- Utensilios de cocteleria  \n2- Cristaleria \n3- Bebidas alcoholicas \n4- Bebidas no alcoholicas")
}
while(true){
let numProducto = parseInt(prompt("Ingrese un numero"))
        switch(numProducto){
            case 1:
            utensilio = parseInt(prompt("Que utensilio estas buscando, " + nombre+ "? \n1- Barspoon \n2- Coctelera \n3- Colador oruga \n4- Jigger"));
            break;
        case 2:
            cristaleria = parseInt(prompt("Que tipo de cristaleria estas buscando, " + nombre+ "? \n1- Vaso Old Fashioned \n2- Vaso Highball \n3- Vaso Hurricane \n4- Copa Cocktail"));
            break;
        case 3:
            bebidaAlcoholica = parseInt(prompt("Que bebida alcoholica estas buscando, " + nombre+ "? \n1- Gin \n2- Vodka \n3- Fernet \n4- Ron blanco"));
            break;
        case 4:
            bebidaNoAlcoholica = parseInt(prompt("Que bebida no alcoholica estas buscando, " + nombre+ "? \n1- Agua tonica \n2- Energizante \n3- Coca-Cola \n4- Jugo de pomelo"));
            break;
        default:
            alert("Ingresa un numero valido, por favor");
            continue;
        }if(!confirmacion()){
    break
    }
}
alert("Muchas gracias por su compra")
