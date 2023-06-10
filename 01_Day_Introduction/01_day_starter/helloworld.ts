import User from "../../../../chatgpt-web-share/frontend/src/store/modules/user";
import {currentModel} from "../../../../WebUI/ChatGPT-PerfectUI/service/src/chatgpt";

function ucFirst(str: string) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("john"))

function checkSpam(str: string) {
    const target1: string = "viagra";
    const target2: string = "xxx";
    str = str.toLowerCase();
    return str.indexOf(target1) !== -1 || str.indexOf(target2) !== -1;
}

console.log(checkSpam('buy ViAgRA now') === true)
console.log(checkSpam('free xxxxx') === true)
console.log(checkSpam("innocent rabbit") === false)

function truncate(str: string, size: number) {
    if (size < 0) return str;
    if (size > str.length) {
        return str + "...";
    }
    return str.slice(0, size);
}

console.log(truncate("What I'd like to tell on this topic is:", 20) === "What I'd like to te...")
console.log(truncate("Hi everyone!", 20) === "Hi everyone!")

function extractCurrencyValue(str: string) {
    if (str.length < 1) return 0;
    return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120') === 120)

let arr: string[] = ["1", "2", "3"];
console.log(arr)
arr.pop()
console.log(arr)
arr.push("4")
console.log(arr)
for (let num in arr) {
    console.log("num:", num)
}

function getMaxSubSum(arr: number[]) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let subSum = 0;
        for (let j = i; j < arr.length; j++) {
            subSum += arr[j];
            maxSum = Math.max(maxSum, subSum);
        }
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11

let arr2: string[] = ["I", "study", "JavaScript", "right", "now"];
let removed = arr2.splice(0, 2);
console.log("removed:", removed)

arr2.splice(0, 2, "hello", "world")
console.log(arr2)

let arr3: number[] = [1, 2];
console.log(arr3.concat([3, 4], [5, 6]));
[1, 2, 3].forEach(console.log);


let arr4 = [1, 0, false];
let result = arr4.find(function (item, index, array) {
    console.log(`item:"${item}", index:"${index}, array:"${array}"`)
});

let user3 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
]

let user4 = user3.find(item => item.id === 1);
console.log("user4:", user4);

let user5 = user3.filter(item => item.id < 3);
console.log("user5:", user5);

let user6 = user3.map(item => item.name);
console.log(user6);

let user7 = "hello, world, 1, 2, 3".split(', ');
console.log("user7:", user7);

let user8: string[] = ['Bilbo', 'Gandalf', 'Nazgul'];
let user9 = user8.join(",")
console.log(user9)

let arr5: number[] = [1, 2, 3, 4, 5];
let result1 = arr5.reduce((sum, current) => sum + current, 0)
console.log(result1)

function camelize(str: string) {
    return str.split("-")
        .map((word, index) => {
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        })
        .join("")

}

console.log("background-color")
console.log("list-style-image")

function filterRange(nums: number[], a: number, b: number) {
    let result: number[] = [];
    nums.forEach((value, index, array) => {
        if (value >= a && value <= b) {
            result.push(value);
        }
    })
    return result;
}

console.log(filterRange([5, 3, 8, 1], 1, 4));

let arr6: number[] = [5, 2, 1, -10, 8];
arr6.sort((a, b) => b - a);
console.log(arr6)
arr6.sort((a, b) => a - b);
console.log(arr6)

function copySorted(strs: string[]) {
    return strs.slice().sort();
}

console.log(copySorted(["HTML", "JavaScript", "CSS"]))
{
    let john = {name: "John", age: 25};
    let pete = {name: "Pete", age: 30};
    let mary = {name: "Mary", age: 28};
    let users6 = [john, pete, mary];
    let names = users6.map(item => item.name)
    console.log(names)
}
{
    let john = {name: "John", surname: "Smith", id: 1};
    let pete = {name: "Pete", surname: "Hunt", id: 2};
    let mary = {name: "Mary", surname: "Key", id: 3};

    let users = [john, pete, mary];

    interface User {
        fullname: string,
        id: number
    }

    let usersMapped: User[] = users.map(item => {
        return {
            fullname: `${item.name} ${item.surname}`,
            id: item.id
        }
    });
    console.log(usersMapped)
}

{
    let map = new Map()
    map.set('1', "one");
    map.set(1, "1");
    map.set(true, "true");
    console.log(map.get(1));
    console.log(map.get("1"));
    for (let k in map.keys()) {
        console.log("k:", k)
    }
}

function uniqueStrs(arr: string[]) {
    let map = new Map();
    let result: string[] = [];
    arr.forEach(item => {
        if (!map.has(item)) {
            result.push(item);
            map.set(item, true);
        }
    })
    return result;
}

{
    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    console.log(uniqueStrs(values));
}

{
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    let result = Object.values(salaries).reduce((a, b) => a + b, 0);
    console.log(result)
}

function count(obj: Object) {
    return Object.keys(obj).length;
}

{
    let user = {
        name: 'John',
        age: 30
    };
    console.log(count(user))
}
{
    let options = {
        title: "Menu",
        height: 200,
        width: 100
    };

    let {title, ...rest} = options;
    console.log("rest:", rest)
}
{
    let user = {name: "John", years: 30};
    let {name, years: age} = user;
    console.log("name:", name, " age:", age)
}
{
    let student = {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        spouse: null
    };
    let json = JSON.stringify(student);
    console.log("json:", json);
    let parsed = JSON.parse(json);
    console.log("parsed:", parsed)
}

function sumTo(num: number) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log("sum:", sumTo(10));

function sum1(a: number) {
    return function (b: number) {
        return a + b;
    }
}

console.log(sum1(1)(2))

function sum2(num: number) {
    let cur = num;

    function subSum(next: number) {
        cur += next;
        return subSum;
    }

    subSum.value = () => {
        return cur;
    }
    return subSum;
}

console.log(sum2(1)(2)(3)(4)(5).value());

{
    let timerId = setInterval(() => console.log("tick"), 20);
    setTimeout(() => {
        clearInterval(timerId);
        console.log("Stop ... ")
    }, 100);
}

const printNumbers = (from: number, to: number) => {
    for (let i = from; i <= to; i++) {
        setTimeout(() => {
            console.log(i);
        }, (to - i) * 100)
    }
}
printNumbers(1, 3);
const printNumbers2 = (from: number, to: number) => {
    let cur = from;
    let timeId = setInterval(() => {
        console.log(cur);
        if (cur === to) {
            clearInterval(timeId)
        }
        cur += 1;
    }, 100)
}
printNumbers2(1, 3);

