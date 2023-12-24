/*

// if..else

let a=prompt("Hey Whats Your Age : ");
a=Number.parseInt(a);
if(a<0){
    alert("This is Invalid Age");
}
else if(a<9){
    alert("You are Kid and you cannot even think of driving");
}
else if(a<=18 && a>=9){
    alert("You are Kid and you can think of driving after 18");
}
else{
    alert("You can Drive Now");
}
*/

/*
// Switch Case 

const expr = prompt("Enter Fruit Name  : ");
switch (expr) {
  case 'Oranges':
    document.write('Oranges are &#8377;100.');
    break;
  case 'Mangoes':
  case 'Papayas':
    document.write('Mangoes and papayas are &#8377;100.');
    break;
  default:
    document.write(`Sorry, we are out of ${expr}.`);
}
*/

// Ternary Operator
let a=prompt("Hey Whats Your Age : ");
a=Number.parseInt(a);
document.write("You ",(a<18? "cannot drive" : "can drive"));





