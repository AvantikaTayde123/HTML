function multiple(arr){
    let multipleoffive=[];
    for(let i=0;i<arr.length;i++){
        if (arr[i]%5==0){
            multipleoffive.push(arr[i]);
        }

}
return multipleoffive
}

let arr=[1,5,10,13,20,23,25];
let result=multiple(arr);
console.log(result);