//@ to a without using replace method
// let str="Webbr@in Ac@demy";
// let newString=""
// for(v of str){
//     newString += v==="@"?"a":v

// }
// console.log(newString);

// const dublicateStr=(str)=>{
// let res = new Set(str.split(""));
// let resStr="";
// for(i of res){
//     resStr+=i;
// }
// return resStr;


// }
// console.log(dublicateStr("Webbrin ccademuyyy"));




// let str="Webb4ra1n Acade3my";
// let num=""
// for(let i=0;i<str.length;i++){
//     if(str[i]>0){
//         num+=str[i];
//     }
// }
// console.log(Number(num));




// let str="Webrain";
// let newStr=" ";
// for(i of str){
//     newStr+=i+i;
// }
// console.log(newStr);


// let str="amm";

// let res=str.split("").reverse("").join("")===str

// console.log(res);

// let str1="sslo";
// let str2="slso"

// console.log ( str1.split("").sort().join() == str2.split("").sort().join()) 


// function test(array,s,k=0){
//     s=parseFloat(s);
//     if(array.length>1){
//         if(array[0]===s){
//             k++;
//         }
//         for(let index=0;index<array.length-1;index++){
//             for(let j=index+1;j<array.length;j++){
//                 let sum=0;
//                 for(let n=0;n<=index;n++){
//                     sum+=array[n];
//                 }
//                 if((sum+array[j])/(index+2)===s) k++;
//                 console.log((sum+array[j]),(index+2),k)
//             }
//         }
//         array.splice(0,1)
//         return test(array,s,k)
//     }
//     else{
//         if(array[0]===s){
//             k++;
//         }
//         return k;
//     }
// }
// console.log(test([3,0,4,-1],2));

// let str="Webbrain Academy";
// let obj={};
// for(i of str){
//     if(i in obj){
//         obj[i]++;
//     }else{
//         obj[i]=1;
//     }
// }

// console.log(obj);



// function substractInfinite(arr){
//     while(arr.length > 1){
//         arr=arr.sort((a,b) => a - b);
//         let substraction = arr[arr.length - 1] - arr[arr.length - 2];
//         arr.splice(arr.length - 2,2);
//         substraction ? arr.push(substraction) : null
//     }
//     return arr
// }
// console.log(substractInfinite([2,3,2,4,5,2,3]));


// let str="webbbrain";
// function zip(str){
//     let res="";
//     let count = 1;
//     for(let char of str){
//         if (res.length === 0) res+=char;
//         else if(char ===res[res.length-1])count++;
//         else{
//             if(count > 1){
//                 res+=count;
//                 count=1;
//                 res+=char;
//             }else res+=char;
//         }
//     }
//     return res
// }
// console.log(zip(str));