export const createProduct = (
    id: string | number,
    isNew: boolean,
    stock?: Number,
) => {
    return {
        id,
        isNew: isNew || true,
        stock: stock || 10
    }
}

//Parámetros opciones al final

const p1 = createProduct('B91823712', true, 3)
const p2 = createProduct('B91823122', false)

//La problemática de usar el operador || es la siguiente

//0 === false
//'' === false
//false === false

//Si enviamos 0, '' o false en este caso el stock será 10
//en isNew se irá por la condición aunque isNew queramos que sea false
//y en el caso del stock será 10 porque 0 es === false

export const createOtherProduct = (
    id: string | number,
    isNew: boolean,
    stock?: Number,
) => {
    return {
        id,
        isNew: isNew ?? true,
        stock: stock ?? 10
    }
}
//Con el ?? nullish coalescing solo compararemos si viene un NULL o UNDEFINEDSS
