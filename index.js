//**Iteración #1: Usa includes**

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = [

    "Camiseta de Pokemon",
    "Pantalón coquinero",
    "Gorra de gansta",
    "Camiseta de Basket",
    "Cinrurón de Orión",
    "AC/DC Camiseta",
];
  
function showProducts() {
    for (let i = 0; i < products.length; i++)  {
        if (products[i].includes("Camiseta")) {
            console.log(products[i]);
        }
    }
}

// showProducts();

//**Iteración #3: Probando For...of**

//Usa un bucle for of para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

//Puedes usar este array:

const placesToTravel = [
    'Japon',
    'Venecia',
    'Murcia',
    'Santander',
    'Filipinas',
    'Madagascar'
];


for (places of placesToTravel) {
    console.log(places);
}

//Iteración #4: Probando For...in

//Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:


const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var key in alien) {
    console.log("Alien" + " " + key + ": " + alien[key])
}

//**Iteración #5: Probando For**

//Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:


const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }
];

function deleteElements(array) {
    for (const key in array) {
        if ((array[key].id == 11) || (array[key].id == 40)){
            array.splice(key,1);
        }
    }
    console.log(array);
}

deleteElements(placesToTravel);

//**Iteración #6: Mixed For...of e includes**

//Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];

for (const toy of toys) {
      if (toy.name.includes("gato")) {
        toys.splice(toys.indexOf(toy));
    }
}

console.log(toys);


//Iteración #7: For...of avanzado**

//Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:


const popularToys = [];
const toys = [
    { id: 5, name: 'Buzz MyYear', sellCount: 10 },
    { id: 11, name: 'Action Woman', sellCount: 24 },
    { id: 23, name: 'Barbie Man', sellCount: 15 },
    { id: 40, name: 'El gato con Guantes', sellCount: 8 },
    { id: 40, name: 'El gato felix', sellCount: 35 }
];

for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);


