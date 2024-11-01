let n=[5,2,6,3,8,7]
let i,j;k=0;
for(i=0;i<n.length;i++){
    for(j=i+1;j<n.length;j++){
        if(n[i]>n[j]){
        k=n[i];
        n[i]=n[j];
        n[j]=k;
    }
}
    console.log(n[i])

}
