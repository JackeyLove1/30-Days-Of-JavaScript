function ucFirst(str: string) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("john"))

function checkSpam(str:string) {
    const target1 : string = "viagra";
    const target2 : string = "XXX";
    let lowerStr =
    return str.indexOf(target1) !== -1 || str.indexOf(target2) !== -1;
}

console.log(checkSpam('buy ViAgRA now') === true)
console.log(checkSpam('free xxxxx') === true)
console.log(checkSpam("innocent rabbit") === false)