export function mathOperation (a:number, b:number, o:string) {
    if (o === 'sum') {
        return a + b;    
    } else if (o === 'dif') {
        return a - b;
    } else if (o === 'div') {
        return a / b;
    } else if (o === 'mul') {
        return a * b;
    } else {
        throw new Error('Wrong operation requested');
    }
};