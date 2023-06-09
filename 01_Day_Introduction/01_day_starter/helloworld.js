if ("0") {
    console.log('Hello');
}

console.log(null || 2 || undefined)
console.log(null || 2 && 3 || undefined)

if (-1) {
    console.log("-1")
}

let user = {
    "name": "jacky",
    "age": 18,
}

let clone = {}

for (k in user) {
    console.log("K:", k, " v:", user[k])
    clone[k] = user[k];
}
console.log(clone)

let clone2 = {}
Object.assign(clone2, user)
if (clone2 === user) {
    console.log("clone2")
}

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user2 = makeUser();

console.log(user2.ref.name); // 结果是什么？undefined!

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    show () {
        console.log("step:", this.step);
        return this;
    }
}

ladder.up().up().up().up().show()

let user3 = {}
console.log("user3.key:", user3?.key)

function sum(a, b){return a + b;}
console.log(`1+1=${sum(1,1)}`);

let str1 = "Hello, World";
console.log(str1.indexOf("Hello"))
console.log(str1.indexOf("no"))
console.log(str1.charAt(0))

function ucFirst(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1)
}