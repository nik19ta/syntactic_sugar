// random

const randfloat = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};
const randint = (min: number, max: number): number => {
    return +(Math.random() * (max - min) + min).toFixed(0)
}
const randchoice = (arr: any): any => {
    return arr[Math.floor(Math.random() * arr.length)]
}
const floor = (num: number): number => {
    return Math.floor(num);
}
const str = (data: number): string => {
    return data.toString();
}
const int = (num: number): number => {
    return +num;
}
const float = (num: number): number => {
    return +(num);
}
const tf = (num: any, poin: number, type: boolean): number => {
    return type ? num.toFixed(poin): +num.toFixed(poin);
}
const sort = (arr: any): any => {
    return arr.sort()
}
const reverse = (arr: any) => {
    return arr.reverse();
};
const type = (data: any): any => {
    return typeof data;
}
const inStr = (text: string, word: string) => {
    return text.indexOf(word) !== -1;
}
const is = (condition:boolean, callback:any): void => { 
    condition ? callback(): ''
};


// -- tests --
// console.log(randint(12,45))
// console.log(randint(12,45))
// console.log(randchoice([23, 34, 87, 2, 3456, 76]));
// console.log(randchoice(['weer','werf','werfg','jhgfd']));
// console.log(floor(234.345));
// console.log(str(34));
// console.log(int('234'));
// console.log(float('234.4'));
// console.log(float(234));
// console.log(tf(234.3445, 0, false));
// console.log(sort([1,234,65,32]));
// console.log(reverse([1, 234, 65, 32]));
// console.log(type(false));
// console.log(inStr('wedfg', 'w'));
// is(true, () => {
//     console.log('nik')
// })




