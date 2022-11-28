// function checkAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return "Did your parents allow you"
//     }
// }
// console.log(checkAge(19));

// function checkMin(a,b){
//     if(a<b){
//         return a;
//     }
//     else if(a>b){
//         return b;
//     }
//     else{
//         return a;
//     }

// }
// console.log( checkMin(3,3));


// function calcPow(x,n){
//     return x ** n;
// }
// console.log(calcPow(3,2));



// object

// let user = {
//     id : 1,
//     name :"Odil",
//     age:78,
//     child:{
//         id:"1",
//         name:"Ali",
//         age:48,
//         child:{
//             id:1,
//             name:"Umar",
//             age:20
//         }
//     }
// }
// let sum = 0;
// while(1){
//     if(user){
//         sum+=user.age
//     }
//     else{
//         break;
//     }
//     user=user.child
// }
// console.log(sum);


// let user = {
//     name:"John",
//     surname:"Smith",

// };


// console.log(user);
// ===========
// let user = {
//     name:"John",
//     surname:"Smith",

// };

// user.name = "Pete"
// console.log(user);

// =============

// let user = {
//     name:"John",
//     surname:"Smith",

// };

// delete user.name;
// console.log(user);


// let obj ={
//     name :"webbrain",
//     title:"it center",
//     child:{
//         name:"Muhammd"
//     }

// }
// const{name,title,child}=obj;

// console.log(child);



// const obj= {
//     name : "wba"
// }
// console.log({...obj,name:"new"});
// console.log({name:"new",...obj});




// main
// function makeUser(){
//     return{
//         name:"John",
//         ref:this,
//     }

// }
// let user=makeUser();

// console.log(user.name);//John 
// console.log(user.name);//function


// let calculator={
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum(a,b) {
//         return this.a + this.b
//     },
//     null(a,b) {
//         return this.a*this.b
//     }
// }
// calculator.read(3,4)
// console.log(calculator.sum());
// console.log(calculator.null());

// let ladder = {
//     step : 0,
//     up(){
//         this.step++;
//         return this
//     },
//     down(){
//         this.step--;
//         return this
//     },
//     showStep:function(){
//         console.log(this.step);
//         return this
//     }


// }
// ladder.up().up().down().showStep().down().showStep()