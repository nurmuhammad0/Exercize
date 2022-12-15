//1
// let res=0;
// const sum=(n)=>{
//     // console.log(n);
//     if(n === 1) return res+=1;
//     else{
//         res+=n;
//         return sum(n-=1)
//     }
// }
// sum(4)
// console.log(res);

// 2
// res=1;
// const sum=(n)=>{
//     // console.log(n);
//     if(n === 1) return res*=1;
//     else{
//         res*=n;
//         return sum(n-=1)
//     }
// }
// sum(4)
// console.log(res);


3 
function calcFib(n){
    if(n === 0||n===1){
        return n
    }
    if(n===2){
        return 1;

    }
    return calcFib(n-1)+(n-2);
}

console.log(calcFib(5));

