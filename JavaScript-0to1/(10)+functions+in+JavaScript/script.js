console.log("Functions in JavaScript");

//1 Function Declaration
function display_message(message) {
  console.log(message);
}


display_message("Hello Duniya")


//2 Functions Expressions
let add = function(a,b){
    return a+b;
}

console.log(add(4,3));