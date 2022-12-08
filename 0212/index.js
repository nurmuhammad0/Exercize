// sum of array numbers

let arr=[1,"w",3,"s",7,"2",1]
let sum=0;
for(let i=0;i<arr.length;i++){
    arr[i]=Number(arr[i])
    if(!isNaN(arr[i])){
        sum+=arr[i]
    }
}
console.log(sum);




