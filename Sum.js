// function prints(){
// let sum=0;
// for(let i=0;i<=10;i++){
//     sum+=i;
// }
// console.log(sum);

// }

// let s= prints();
// console.log(s);

function print(a,b){
    let sum=0;
    for(let i=a; i<=b;i++) {
        sum+=i;
    }
    return sum;
}
let s=print(20,30);
console.log(s);