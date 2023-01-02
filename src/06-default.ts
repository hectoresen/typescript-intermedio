
//Valores por defecto en caso de no ser enviados:


export const createProduct = (
    id: string | number,
    isNew: boolean = true,
    stock: Number = 10,
) => {
    return {
        id,
        isNew: isNew || true,
        stock: stock || 10
    }
}

const p1 = createProduct('IDB381283')
const p2 = createProduct('IDKJASD12', true, 100);
