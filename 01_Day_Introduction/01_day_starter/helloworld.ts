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