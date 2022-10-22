// 1.Print odd numbers in an array

(function(array){
    array.forEach(x => {
        if(x%2==1) {
           console.log(`oddnumber:${x}`)
        }
    });
}([10,20,30,40,45,57,33]))
output:
// 10
// 20
// 30
// 40


//2.Convert all the strings to title caps in a string array
//console.log("USING IIFE FUNCTION")
(function(array){
    array.forEach(x => {
        
           console.log(x.toLowerCase())
        }
    );
    }(["Audi","LAKShmi","varshi"]))
//     output:
//     audi
//     lakshmi
//     varshi


// 3.Sum of all numbers in an array
//console.log("USING IIFE FUNCTION")
(function(array){
    let sum=0;
array.forEach(x => {
sum+=x;
    
})
console.log(sum);
}([1,2,3,4,4,5,6]))
// // output:
//     25



// // 4.Return all the prime numbers in an array
// console.log("USING IIFE FUNCTION")
(function(array){
   array.forEach(a =>{
    let count=0;
    let x=Math.floor(a/2)
for(i=1;i<x;i++){
    if(a%i==0){
        count++;
    }
}
if(count<2){
    console.log(a)
}})
}([12,16,15,7,5]))
// output:
// 7
// 5


// 5.Return all the palindromes in an array

(function(array){
    array.forEach(a => {
        let b=a.length;
        let count=0;
        let y=Math.floor(b/2)
        let x=b-1
        
        for(i=0;i<x/2;i++)
        {
            if(a[i] === a[x-i]){
               count++; 
            }
            if(count==y){
                console.log(a)
            }
        }
})
}(["audi","alla","ablba","15251"]))
// // output:
// // alla
// // ablba
// // 15251

// ////
// remove dupilcates
(function(arr){
    let res=  arr.filter((value,index)=>arr.indexOf(value)===index)
   console.log(res)
   }([10,20,30,10]))
//    output:
//    [ 10, 20, 30 ]


// rotation 0f array by k times
(function(arr){
    let k=2
    while(k--){
    arr.push(arr.shift())
    }
    console.log(arr)
    }([1,3,4,5]))
    output:
    [ 4, 5, 1, 3 ]


//Return median of two sorted arrays of the same size.
    (function(ar1,ar2){
        let l=ar1.length
        ar1.sort(function(a, b){return a - b});
        ar2.sort(function(a, b){return a - b});
        if(l%2==0){
           let m=l/2;
           let m1=((ar1[m-1]+ar1[m])/2)
           let m2=((ar2[m-1]+ar2[m])/2)
           let median=(m1+m2)/2
           console.log(median)
        }
        else{
           let m=Math.floor(l/2)
           let median=(ar1[m]+ar2[m])/2
           console.log(median)
        }
        }([23,4,5,78,67],[32,56,78,13,67]))
        // output:
        // 39.5




//1.finding odd numbers by arrow function
const array1=[10,20,3,78,67]
const odd=array.filter(array1=>(array1%2==1))
console.log(odd)
// output:
// [ 3, 67 ]


//2.Convert all the strings to title caps in a string array
const names = ['Adi', 'lASDni', 'yutrdASSA', 'UTGFT'];
const lowercased = names.map(name => name.toLowerCase());
console.log(lowercased)
// output:
// [ 'adi', 'lasdni', 'yutrdassa', 'utgft' ]


// //3.Sum of all numbers in an array
arr = [10, 20,40,67]
let ar1=arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(ar1)
// // output:
// 137


// //Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);
// // output:
// // [ 3, 2, 5 ]





const array =["audi","lakshmi","alla","albla"]
array.filter(a=>{
           let b=a.length;
            let count=0;
            let y=Math.floor(b/2)
            let x=b-1
            
            for(i=0;i<x/2;i++)
            {
                if(a[i] === a[x-i])
                {
                   count++; 
                }
             }
              if(count==y)
                {
                    console.log(a)
                }
     })
//     output:
//          alla
//         albla
            