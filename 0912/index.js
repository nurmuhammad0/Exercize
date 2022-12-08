
let str="Webbr@in Ac@demy";
let newString=""
for(v of str){

        newString += v==="@"?"a":v
}
console.log(newString);
