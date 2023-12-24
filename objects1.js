const sym = Symbol("key1")

let login = {
    user : "root",
    pass : "password",
    number:9824233422,
    name : "alpha",
    islogin : "yes",
    [sym] : "iskey1"
}

console.log(login);

console.log(login["user"]);
console.log(login["number"]);
console.log(login["name"]);
console.log(login["islogin"]);

console.log(login[sym])
