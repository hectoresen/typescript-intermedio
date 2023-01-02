//hector => [h,e,c,t,o,r] => string => string[]
//[h,e,c,t,o,r] => hector => string[] => string


function parseStr(input: string | string[]): string | string[]{
    if (Array.isArray(input)) {
        return input.join(); //string
    }else {
        return input.split(''); //string[]
    }
}

const rtaArray = parseStr('hector');
console.log(rtaArray)

//Typescript sabe que devuelve un array de strings o string, pero no sabe cual de los 2
//por ende no podríamos acceder a los métodos de un array por ejemplo

