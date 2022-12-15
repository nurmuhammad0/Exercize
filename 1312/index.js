// const momentJs = (iden) => {
//     let date=new Date();
//     let month=["January","February","March","Aprel","May","June","July","August","September","October","November","December"]
//     let week=["Sunday","Monday","Tuesday","Wednesday","Thirsday","Friday","Satuday"]
//     if(iden==="LT"){
//         return `${date.getHours()}:${date.getMinutes()}`
//     }
//     else if(iden==="LTS"){
//         return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     }
//     else if(iden==="L"){
//         return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
//     }
//     else if(iden === "l"){
//         return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
//     }
//    else if(iden==="LL"){
//     `return ${month[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`
//    }
//    else if(iden==="ll"){
//     return `${month[date.getMonth()].slice(0,3)} ${date.getDate()},${date.getFullYear()}`
//    }
//    else if (iden==="LLL"){
//     return `${month[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
//    }
   
//    else if (iden==="lll"){
//     return `${month[date.getMonth()].slice(0,3)} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
//    }
//    else if(iden === "LLLL"){
//     return `${week[date.getDay()]} ${month[date.getMonth()].slice(0,3)} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

//    }
//    else if(iden === "llll"){
//     return `${week[date.getDay()].slice(0,3)} ${month[date.getMonth()].slice(0,3)} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

//    }
//    else{
//     return "UnExPeCtEd"
//    }
// }
// console.log(momentJs(""));