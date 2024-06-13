let calculations =''
let result;


function stringAdder(value){
  calculations += value
}

function answer(){
  result = eval(calculations)
  console.log(result);
}