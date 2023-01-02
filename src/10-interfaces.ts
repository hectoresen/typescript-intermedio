type Sizes = 'S' | 'M' | 'L' | 'XL';

interface ProductInterface  {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
}

const products: ProductInterface[] = [];


interface baseInterface {
    title: string;
}

interface movieInterface extends baseInterface {
    description: string;
}