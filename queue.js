function nextinline(arr,item){

    arr.push(item);
    return arr.shift();

}

var testarr = [1,2,3,4,5];

console.log("before" +JSON.stringify(testarr));
console.log(nextinline(testarr,6))
console.log("after" +JSON.stringify(testarr));