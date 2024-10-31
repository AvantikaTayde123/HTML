// let attributes=[47,21,23,16,24,28,30,45,32,12]
// let smallest=Math.min(attributes);

// console.log(`The Smallest value is: ${smallest}`)
///////////

// let attribute=[12,34,56,43,67,89,76,54,32,23]
// let min=attribute[0];
// for (let i=0; i<attribute.length; i++){
//     if(attribute[i]<min){
//         min=attribute[i];
//     } 
// }
// console.log(`The Smallest value is: ${min}`)
/////////

let attribute=[];

for(let i=0; i<10; i++){
    attribute[i]= parseInt(prompt("Enter the elements of array: "))
    
}

let min=attribute[0];
for (let i=0; i<attribute.length; i++){
    if(attribute[i]<min){
        min=attribute[i];
    }
    
}
console.log(`The Smallest value is: ${min}`)