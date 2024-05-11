//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

console.log('names of Employees :');

for(let i of employee){
    console.log(i[1]);
    
}

//print total numbers of employee

console.log('Total number of employees : ',employee.length);

//print developer employee details

console.log('developer employee details :');
for(let i of employee)
{
    if(i[2]=='developer'){
        console.log(i);
    }
}

// print details of employee Laisha

console.log('details of employee Laisha : ');
for(let i of employee)
{
    if(i[1]=='Laisha')
    {
        console.log(i);
    }
}

//print employee names whose salary is greater than 30000

console.log('employee name whose salary is greater than 30000 :');
for(let i of employee){
    if(i[4]>30000)
    {
        console.log(i[1],":",i[4]);
    }
}


//sort employee based on their salary in descending order

console.log('employee based on their salary in descending order : ');
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal);

// print the employ name whose have the higest salary

console.log('the employ name whose have the higest salary');
console.log(sal[0][1]);

//print the employee details on their experience in  ascending order
console.log('employee details on their experience in  ascending order');
exp=employee.sort((exp1,exp2)=>exp1[5]-exp2[5])
console.log(exp);





