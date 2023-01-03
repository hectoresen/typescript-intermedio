const numbers: number[] = [1,2,3,3,2,1]

//ReadonlyArray

/*
Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” 
es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc 
 */

const numbers2: ReadonlyArray<number> = [1,2,2,3,1,23,4,12,3,134];

// numbers2.push(2) error
numbers2.filter(() => {})
numbers2.reduce(() => 0)
numbers2.map(() => {})