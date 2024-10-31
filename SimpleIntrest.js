function intrest(){
    let p=parseInt(prompt("Enter the principal amount"))
    let r=parseInt(prompt("Enter the Rate of intrest"))
    let t=parseInt(prompt("Enter the time "));

    let si=(p*r*t)/100;
    console.log(si);
}
    intrest();