const numbers = [1,2,3,4,-5,26,45,4]
for(let i=0;i<numbers.length;i++){
     console.log(numbers[i]);
     if(numbers[i]>3){       //3= location
         break;
     }
}
for(let i=0;i<numbers.length;i++){
     console.log(numbers[i]);
     if(numbers[i]< 0){       //3= location
         continue ;
     }
}
