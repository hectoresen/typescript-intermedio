const withoutEnd = () => {
    while(true) {
        console.log('Never stop');
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'Is string'
    } else if (typeof (Array.isArray(input))) {
        return 'Is array'
    }

    return fail('not match')
}

console.log(example('Hi'))
console.log(example([1,2,3,4,5]))
console.log(example(12123123123)) //stop
console.log('Fail end')