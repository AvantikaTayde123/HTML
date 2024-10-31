function calucatebonus(salaries){
    let newsalaries=[];
   
    for(let i=0;i<salaries.length;i++){
        let bonus=salaries[i]*0.10;
        newsalaries.push(salaries[i]+bonus);
    }
    return newsalaries;
}
let employeesalaries=[30000,40000,45000,35000,50000];
let salarieswithbonus=calucatebonus(employeesalaries);
 console.log(salarieswithbonus);

