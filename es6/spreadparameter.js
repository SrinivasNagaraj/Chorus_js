
//combining 2 or more array
// var arr1=[1,2,3,4]
// var arr2=[5,6,7,8]
// var arr3=[...arr1,...arr2]
// console.log(arr3);


// var arr4=[2,4,6]
// var arr5=[...arr4,8]
// console.log(arr5);

//string to array
//  var str="fcbarcelona"
//  console.log(...str);


var  barca={
     coach:"leonal",l_name:"messi"
}
var city={
    coach:"pep",cap:'kevin'
}
var address = {...barca,...city}
console.log(address);