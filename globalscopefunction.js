var myglobal=10;//golbal scope can seen in every where in code
console.log(myglobal);


function mylocal(){
    var a=56;
    console.log=(a);
}

mylocal();

//console.log(a); //this will give a error because this is local variable that mainly used call inside the function

function fuc() {
    var i = 34;
    console.log(i);
  }
  fuc();








//the local variable takes presidence over the global variable
  var outerwear="shirt";

function myoutfit(){
  var outerwear="sweater"
  
  return outerwear;
}
console.log(myoutfit());
console.log(outerwear);