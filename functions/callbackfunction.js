// function calculate(a,b,multify){
// console.log("started");
// res=multify(a,b)
// console.log(res);
// }
// function mul(a,b){
// return a*b;
// }

// calculate(2,3,mul)

//a=2
//b=3
//multify=mul

function add(a,b,summation){
    console.log("started");
    res=summation(a,b)
    console.log(res);
    console.log("ended");
}
function sum(a,b){
    return a+b;
}
add(3,2,sum)

//a=3
//b=2
//summation=sum
