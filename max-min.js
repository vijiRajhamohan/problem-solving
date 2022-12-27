let arr=[110,31,64,98];


//1. Maximum Value 
const result = arr.reduce((pre, cur) => {
    return (pre > cur) ? pre : cur;
})
console.log(result);


//2.  Min Value

const result1 = arr.reduce((pre, cur) => {
    return (pre < cur) ? pre : cur;
})
console.log(result1);


// 3. Asending Order

const res=arr.sort(function(a,b) { return a-b; });
console.log(res);


//4. Desending Order

const res1 = arr.sort(function (a, b) { return b-a; });
console.log(res1);


//5. second lagest value in array // 

let arr2=[1,3,7,99,17,92];
const secondLargest = (arr)=>{
    firstLargest = Math.max(...arr);
    index=arr.indexOf(firstLargest);
    arr.splice(index,1);
    secondLargestNumber=Math.max(...arr);
    return secondLargestNumber;

}

console.log(secondLargest(arr2));