function max (num){
  let numMayor = 0;
  for(let i=0; i<num.length ;i++){
    const numero = num[i];
      if(numMayor < numero){
        numMayor = numero;
    } 
  }
  return numMayor
}; 

console.log(max([1, 2, 3, 4]))
console.log(max([63, 85, 39, 24, 3]))