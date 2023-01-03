//Propiedades de solo lectura

interface BaseModel {
    readonly id: string | number;
    readonly createdAt: Date;
    updatedAt: Date;
}