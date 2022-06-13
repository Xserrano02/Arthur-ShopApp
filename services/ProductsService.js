const PRODUCTS = [
    {
        id: 1,
        name: "Kenneth Cole",
        price: 99 ,
        image: require("../assets/product_images/reloj1.jpg"),
        description:
          "Resistente al agua hasta 30mts, brazalete de acero inoxidable y adicional uno de cuero y vidrio mineral",
        
    },
    {
        id: 2,
        name: "Kenneth Cole",
        price: 149,
        image: require("../assets/product_images/reloj2.jpg"),
        description:
            "Resistente al agua hasta 100mts, brazalete de cuero, luz y alarma",
    },
    {
        id: 3,
        name: "Casio Illuminator",
        price: 49,
        image: require("../assets/product_images/reloj3.jpg"),
        description: "Resistente al agua hasta 50mts, luz, cronómetro y alarma."
    },

    {
        id: 4,
        name: "Polo Assn",
        price: 89,
        image: require("../assets/product_images/imagen5.jpg"),
        description: "Reloj digital touch, brazalete de resina y pulseras adicionales"
    },

    {
        id: 5,
        name: "Polo Assn",
        price: 64,
        image: require("../assets/product_images/imagen6.jpg"),
        description: "Reloj digital touch, brazalete de resina y pulseras adicionales."
    },

    {
        id: 6,
        name: "Casio",
        price: 69,
        image: require("../assets/product_images/imagen7.jpg"),
        description: "Casio, resistente al agua, brazalete de acero inoxidable, y vidrio mineral."
    }
]


export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}