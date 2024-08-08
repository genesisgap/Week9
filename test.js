// function sumArray(arr) {
//     return arr.reduce((a,b) => a + b, 0)
// }

// console.log(sumArray([1,2,3,4,5]))

// function maxElement(arr) {
//     return arr.sort((a,b)=> a - b)
// }


// function maxElement2(arr) {
//     return Math.max(...arr)
// }

// console.log(maxElement2([1,3,2,3,323,5,87,899,4,5]))

// function isEven(number) {
//     return number % 2 == 0 ? 'Even' : 'Odd'
// }

// console.log(isEven(552))

// function reverseString(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('genesis'))

// function factorial(number) {
//     return number < 0 ? 'factorial not applied to negative integer' : (number ==  0 || number ==1) ? 1 : number * factorial(number - 1)
// }

// console.log(factorial(66))

// function calculateGrade(score){
//    return score >= 70 ? 'A' : score >= 60 ? 'B': score >= 50 ? 'C' : score >= 45 ?
//     'D' : score >= 40 ? 'E' : 'F'
// }

// console.log(calculateGrade(50))

// function calculateGrade(score){
//    return score < 40 ? 'F' : score > 49 ? 'E' : score > 69 ? 'D' : score > 79 ?
//     'C' : score > 85 ? 'A' : 'NAN'
// }

// console.log(calculateGrade(70))

// const secondLargest = arr => arr.sort((a,b) => b - a)[1]
// console.log(secondLargest([1,23,45,6,543,-77]))

// const removeDuplicates = arr => [...(new Set(arr))]
// console.log(removeDuplicates([1,2,2,1,4,5,6,5,8]))

// function removeDuplicates(arr) {
//     return [...(new Set(arr))]
// }

// console.log(removeDuplicates([1,2,2,1,4,5,6,5,8]))

// function findIndex(arr,el) {
//     return arr.indexOf(el)
// }

// console.log(findIndex([1,2,3,45,6,7,8], 2))

function capitalize(str) {
    return str.split(' ').map (name=> name.replace(name [2], name[2].toUpperCase())).join(' ')
}

console.log(capitalize('come here now stupid'))