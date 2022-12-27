// 1. To find duplicate elements in array //

let arr=[1,2,5,2,3,2,5,4,8,9,8];

const duplicateElements = arr.filter((value,index,array)=>{
    return array.indexOf(value) !== index    
});

console.log(duplicateElements);

// 2.  To Remove duplicate elements in array and return the array //

let arr1 = ["a", "s", "d", "f", "g", "a", "s", "g", "s", "v"];
const removeDuplicates = arr1.filter((value,index,array)=>{
    return array.indexOf(value) === index;
});

console.log(removeDuplicates);

// 3. what is difference between Filter and Find method //

// -- Filter method return matched values in array . Find method returns 1 st matched value.

const item = [
    { name: 'a', age: 14 },
    { name: 'b', age: 52 },
    { name: 'c', age: 37 },
    { name: 'd', age: 94 },
    { name: 'e', age: 53 },
];

const filteredItem = item.filter((value)=>{
    return value.age < 50;
})
console.log(filteredItem);

const findItem = item.find((value) => {
    return value.age < 50;
})
console.log(findItem);
