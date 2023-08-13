//string is immutable

let name1 = "ankit\"";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());


//slice

console.log(name1.slice(2,3));//starting index and ending index

console.log(name1.slice(2));//starting index only

//replace

console.log(name1.replace("an","rob"));

//concat

m="an";
n="rocky";

console.log(m.concat("is friend of ", n ));


//trim

ank="       rocbin      ";
console.log(ank);
console.log(ank.trim());//trim method is used to remove the unused spaces in the string
console.log(name1.substring(2,5));


//using for loop printing the sting 

rock="ankitranjanrobin";
k=rock.length();
for (i in k){
     console.log(i);
}


ank="       rocbin      ";
console.log(ank.endsWith("n"));
console.log(ank.startsWith("n"));


//the amount is rs 200000
//return the given amount from the string 

let ret ="the amount is rs 200000";
let k=ret.slice("the amount is rs".length);

console.log(k);
g=Number.parseInt(k);

console.log(g);