const marvel_hero = ["thor","loki","iron man","spiderman"]
const dc_hero = ["superman","batman","aquaman","wounderwomen"]

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[4][2])


// console.log(marvel_hero.concat(dc_hero));

const arr = [...marvel_hero, ...dc_hero];
console.log(arr);

let arr1 = [1,234,12,55,89];
console.log(arr1);
console.log(arr1.reverse());
console.log(arr1.includes(12));
console.log(arr1.concat(marvel_hero));
arr1.push(marvel_hero);
console.log(arr1);
arr1.pop();
console.log(arr1);
console.log(arr1.findIndex);