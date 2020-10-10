const randfloat = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};
const randint = (min: number, max: number): number => {
    return +(Math.random() * (max - min) + min).toFixed(0)
};
const randchoice = (arr: any): any => {
    return arr[Math.floor(Math.random() * arr.length)]
};
const floor = (num: number): number => {
    return Math.floor(num);
};
const str = (data: number): string => {
    return data.toString();
};
const int = (num: string): number => {
    return +num;
};
const float = (num: string): number => {
    return +(num);
}
const tf = (num: any, poin: number, type: boolean): number => {
    return type ? num.toFixed(poin) : +num.toFixed(poin);
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
const inStr = (text: string, word: string): boolean => {
    return text.indexOf(word) !== -1;
}
const is = (condition: boolean, callback: any): void => {
    condition ? callback() : ''
};

const esc2Uni = (str: string): string => {
    let escapedCodeTemp = str.replace(/\\u([\d\w]{4})/gi, (match, group) =>
        String.fromCharCode(parseInt(group, 16)));
    return unescape(escapedCodeTemp);
}
const delStr = (text: string, param1: string): string => {
    return text.replace(param1, '')
};
const getText = (text: string, param1: string, param2: string): string => {
    return text.split(param1)[1].split(param2)[0]
};