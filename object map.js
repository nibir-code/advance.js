const students =[
     {id: 1 , name:"omor sani"},
     {id: 25, name:"dipjol"},
     {id: 254, name:"sabnoor"}
];
const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x =>x.id>20);
const biggerOne = students.find(x =>x.id>20);
console.log(names,ids,bigger,biggerOne);