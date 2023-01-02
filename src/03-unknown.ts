//any
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 1;

let isNew:boolean = anyVar; //Peligro


//UNKNOWN

let unknowVar: unknown;

// unknowVar.toUpperCase //error

if(typeof unknowVar === 'string') {
    unknowVar.toUpperCase()
}

//Unknow fuerza verificación de tipo