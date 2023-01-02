//hector => [h,e,c,t,o,r] => string => string[]
//[h,e,c,t,o,r] => hector => string[] => string

export function parseStr(input:string): string[];
export function parseStr(input: string[]): string;


export function parseStr(input: unknown): unknown{
    if (Array.isArray(input)) {
        return input.join(); //string
    }else if(typeof(input === 'string')){
        return input.split(''); //string[]
    }
}

const rtaArray = parseStr('hector');
console.log(rtaArray)

//Typescript sabe que devuelve un array de strings o string, pero no sabe cual de los 2
//por ende no podríamos acceder a los métodos de un array por ejemplo

