
let num = 5;

for(let i = 1; i<=5; i++){
  let stars = ``
  for(let j = 1; j<=5; j++){
  if(i==j||(i+j==6)){
     stars += "   *    "
  }
  else{
    stars += "       "
  }
  
  
  }console.log(stars)
}


let num = 5;
for(let i = 1; i<=5; i++){
  stars = ``
  for(let j = 1; j<=5; j++){
    if(i==(j+2)||j==5){
       stars += "      *      "
    }else stars +="   "
   
  }console.log(stars)
}













