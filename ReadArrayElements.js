//spread operator...
d=[1,2,3,4,5]
let s=0;
for(let a of d){
    console.log(a);
    //if(a%2==0){
        s=s+a;
    }
   // console.log(s);
//}
console.log(`sum of elements of array: ${s}`);
//console.log(d[0]);

//even
c=[1,3,4,2,5,6]
let sum=0;
let oddsum=0;
for(let a of c){
    if(a%2==0){
        sum=sum+a;
    }
    if(a%2!=0){
        oddsum=sum+a;
    }
}

console.log(`sum of even elements of array: ${sum}`);

console.log(`sum of odd elements of array: ${oddsum}`);
