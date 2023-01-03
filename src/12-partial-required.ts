//artial & Required en TS
//Estos dos tipos de datos nos sirven para declarar que todos los campos de una interfaz son opcionales u obligatorios.

interface Product {
    title: string;
    price: number;
    category: string;
    size?: string;
}

type UpdateProduct = Partial<Product>
type StrictProduct = Required<Product>

//De esa forma en UpdateProduct, todos los valores de Product van a ser opcionales y a la inversa en el caso de StrictProduct