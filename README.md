# Синтаксический сахар

## Описание функций:


##### Функция `randfloat`: (min: number, max: number) => number;
```ts
// (рандомное число от минимального до максимального результат которого в float)

console.log(randfloat(0, 1000)); // 29.121677508859854
```
##### Функция `randint`: (min: number, max: number) => number; 
```ts
// (рандомное число от минимального до максимального результат которого в int)

console.log(randint(0, 1000)); // 489
```
##### Функция `randchoice`: (arr: any) => any;
```ts
// ( рандомный элемент из масива )

console.log(randchoice([123, 45, 67, 23, 1, 3])); // 123
```
##### Функция `floor`: (num: number) => number; 
```ts
// ts(округление)

console.log(floor(9.2345)); // 9
```
##### Функция `str`: (data: number) => string; 
```ts
// (перевод числа в строку)

console.log(str(123456)); // 123456 => type string

```
##### Функция `int`: (num: string) => number; 
```ts
// (перевод строки в число)


console.log(int('234')); // 234 => type int
```
##### Функция `float`: (num: number) => number;
```ts
// (перевод строки в float)

console.log(int('234.23')); // 234.23 => type float
```
##### Функция `tf`: (num: any, poin: number, type: boolean) => number; 
```ts
// (обрезание чисел после точки с возможность перевести в строку )

console.log(tf(123.234, 0, false)); // 123 type scting
console.log(tf(123.234, 0, true)); // 123 type int
console.log(tf(123.234, 2, true)); // 123.23 type int
```
##### Функция `sort`: (arr: any) => any; 
```ts
// (сортировка масива)

console.log(sort([8,6,5,3,2])); // [ 2, 3, 5, 6, 8 ]
```
##### Функция `reverse`: (arr: any) => any; 
```ts
// (сортировка масива в обратном порядке)

console.log(reverse([1,2,3,4,5,6])); // [ 6, 5, 4, 3, 2, 1 ]
```
##### Функция `type`: (data: any) => any; 
```ts
// (определние типа передоваемых данных)

console.log(type('str')); // string
console.log(type(123)); // number
console.log(type(() => {})); // function
console.log(type(true)); // boolean
console.log(type(undefined)); // undefined
console.log(type(Object)); // function
```
##### Функция `inStr`: (text: string, word: string) => boolean; 
```ts
// (функция по типу in в python)
console.log(inStr('Hello world', 'world')); // true
console.log(inStr('Hello world', 'hi')); // false
```
##### Функция `is`: (condition: boolean, callback: any) => void;
```ts

is(true, ()=>{
    console.log('hello');
})
is(2 > 1, ()=>{
    console.log('hello');
})
```

##### Функция `esc2Uni`: (str: string) => string;
##### Функция `delStr`: (text: string, param1: string) => string; 
```ts
// (удаление какого фрагмента текста)
console.log(delStr('Hello world', 'world')); // Hello
```
##### Функция `getText`: (text: string, param1: string, param2: string) => string; 
```ts
// (обрезание строки)

console.log(getText('Эта функция обрезание строки', 'функция ','строки')); // обрезание
```

