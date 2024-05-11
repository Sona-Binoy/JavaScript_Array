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

employee.forEach(emp => {console.log(emp[1]);}
    
);

//print total numbers of employee

console.log('Total number of employees : ',employee.length);

//print developer employee details

console.log('developer employee details :');

developer=employee.filter(emp=>emp[2]=='developer')//.forEach(pro=>console.log(pro))---it is used here to not to print in array
console.log(developer);

// print details of employee Laisha

console.log('details of employee Laisha : ');
laishaDetails=employee.find(emp=>emp[1]=='Laisha')//use forEach 
console.log(laishaDetails);

//print employee names whose salary is greater than 30000

console.log('employee name whose salary is greater than 30000 :');

employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))
// console.log(salary); ---used forEach ,so no need to print separatly


//sort employee based on their salary in descending order

console.log('employee based on their salary in descending order : ');
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal);

// print the employ name whose have the higest salary
console.log('employ name whose have the higest salary');
empSal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(empSal[1]);

//print the employee details on their experience in  ascending order
console.log('employee details on their experience in  ascending order');
exp=employee.sort((exp1,exp2)=>exp1[5]-exp2[5])
console.log(exp);

//total salary
console.log('total salary');
totalSal=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalSal);