var fname="ankit";
var lname="ranjan";

console.log(fname);
console.log(lname);

var string = "i am\"double quoted \"string inside";//if i want to show double quotes inside a string we need to add backward slash before the quotes
console.log(string);

var ank='rj';//we use single quotes as well
console.log(ank);


/*****
 \' single quote
 \" double quote
 \\ backslash
 \n new line
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */

 var rj="dvanlsdbnvkj\\fwes\nadgfagf";

 console.log(rj);
 
 var rock="iam ankit"+""+"your aare student";
 console.log(rock);

 rock+="  lpu student";
 console.log(rock);

 rock+=132;//we can concatinate the number with string
 console.log(rock);

 var a="ankit";
 var b="robin";
 a+=b;

 console.log(a);


 //length of string

 console.log(a.length);
//accesing the charater by index number 
 var ank="adcvsffadg";
 console.log(ank[0]);

//  string are immutable 
var str="hello";
str[0]="j"
//it will not change the charater 

// we used to change the all the value 
str="HELLO";
console.log(str);

console.log(str[3]);
console.log(str[str.length-1]);

