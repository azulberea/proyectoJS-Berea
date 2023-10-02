alert("Bienvenido!")
let nombre
do{
    nombre = prompt("Ingrese su nombre")}
while(nombre == "")

let utensilio = []
let cristaleria = []
let bebidaAlcoholica = []
let bebidaNoAlcoholica = []

function confirmacion(){
        return confirm("Deseas agregar algo más?")
}

while(true){
let numProducto = parseInt(prompt(`En cual de nuestros productos estas interesado, ${nombre}? \n1- Utensilios de cocteleria  \n2- Cristaleria \n3- Bebidas alcohólicas \n4- Bebidas no alcohólicas`))
        switch(numProducto){
            case 1:
            utensilio.push(parseInt(prompt(`Qué utensilio estás buscando, ${nombre}? \n1- Barspoon \n2- Coctelera \n3- Colador oruga \n4- Jigger`)));
            break;
        case 2:
            cristaleria.push(parseInt(prompt(`Qué tipo de cristalería estás buscando, ${nombre}? \n1- Vaso Old Fashioned \n2- Vaso Highball \n3- Vaso Hurricane \n4- Copa Cocktail`)));
            break;
        case 3:
            bebidaAlcoholica.push(parseInt(prompt(`Qué bebida alcohólica estás buscando, ${nombre}? \n1- Gin \n2- Vodka \n3- Fernet \n4- Ron blanco`)));
            break;
        case 4:
            bebidaNoAlcoholica.push(parseInt(prompt(`Qué bebida no alcohólica estás buscando, ${nombre}? \n1- Agua tónica \n2- Energizante \n3- Coca-Cola \n4- Jugo de pomelo`)));
            break;
        default:
            alert("Ingresa un número válido, por favor");
            continue;
        }if(!confirmacion()){
    break
    }
}

const productosCarrito = []
for(let x of utensilio){
    if(x == 1){
        productosCarrito.push({categoria:"Utensilios", item:"Barspoon", precio:1000})
    }else if(x == 2){
        productosCarrito.push({categoria:"Utensilios", item:"Coctelera", precio:1000})
    }else if(x == 3){
        productosCarrito.push({categoria:"Utensilios", item:"Colador oruga", precio:1000})
    }else if(x == 4){
        productosCarrito.push({categoria:"Utensilios", item:"Jigger", precio:1000})
    }
}
for(let x of cristaleria){
    if(x == 1){
        productosCarrito.push({categoria:"Cristaleria", item:"Vaso Old Fashioned", precio:1000})
    }else if(x == 2){
        productosCarrito.push({categoria:"Cristaleria", item:"Vaso Highball", precio:1000})
    }else if(x == 3){
        productosCarrito.push({categoria:"Cristaleria", item:"Vaso Hurricane", precio:1000})
    }else if(x == 4){
        productosCarrito.push({categoria:"Cristaleria", item:"Copa Cocktail", precio:1000})
    }
}
for(let x of bebidaAlcoholica){
    if(x == 1){
        productosCarrito.push({categoria:"Bebidas alcohólicas", item:"Gin", precio:1000})
    }else if(x == 2){
        productosCarrito.push({categoria:"Bebidas alcohólicas", item:"Vodka", precio:1000})
    }else if(x == 3){
        productosCarrito.push({categoria:"Bebidas alcohólicas", item:"Fernet", precio:1000})
    }else if(x == 4){
        productosCarrito.push({categoria:"Bebidas alcohólicas", item:"Ron blanco", precio:1000})
    }
}
for(let x of bebidaNoAlcoholica){
    if(x == 1){
        productosCarrito.push({categoria:"Bebidas no alcohólicas", item:"Agua tónica", precio:1000})
    }else if(x == 2){
        productosCarrito.push({categoria:"Bebidas no alcohólicas", item:"Energizante", precio:1000})
    }else if(x == 3){
        productosCarrito.push({categoria:"Bebidas no alcohólicas", item:"Coca-Cola", precio:1000})
    }else if(x == 4){
        productosCarrito.push({categoria:"Bebidas no alcohólicas", item:"Jugo de pomelo", precio:1000})
    }
}

const mostrarProductosCarrito = []
for(const x of productosCarrito){
    mostrarProductosCarrito.push(x.item)
}
alert(`¡Muchas gracias por la compra de tu ${mostrarProductosCarrito.join(", ")}, ${nombre}`)