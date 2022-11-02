//var arr=[1,2,3]
//1.concat
// var arr1=["barca"]
// console.log(arr.concat(arr1)); 
// console.log(arr);

//2.push
// console.log(arr);
// console.log(arr.push("messi"));
// console.log(arr);
//it will add the element in end of the array& return length of the array and it will modify in exciting array

//pop
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// it will remove the last elemt  from array & returns the removed element in console and it will modify in the exciting array

//unshift method add the element in begining of an array
// console.log(arr);
// console.log(arr.unshift("pedri"));
// console.log(arr);

//shift it will remove the 1st element from the array and returns the removed element and it will modify in the exce array
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

//splice accept 3 parameter start index,delete count,new element
// console.log(arr);
// console.log(arr.splice(1,1,"el classico"));
// console.log(arr);


//slice 2 paramaters 
 //var arr2=[5,6,8,9,2,1]
// console.log(arr2);
// console.log(arr2.slice(1,4));
// console.log(arr2);

//every
// console.log(arr2);
// console.log(arr2.every((element) => {
//     return element <5
// }))
// console.log(arr2);//false o/p


//some
// console.log(arr2);
// console.log(arr2.some((element)=> {
//     return element <5
// }))
// console.log(arr2); //true

//indexof
// console.log(arr2);
// console.log(arr2.indexOf(2,2));
// console.log(arr2);

//lastindexof
// console.log(arr2);
// console.log(arr2.lastIndexOf(9,5));
// console.log(arr2);

//reverse
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

//includes
// console.log(arr2);
// console.log(arr2.includes(8));
// console.log(arr2);

//join
// console.log(arr2);
// console.log(arr2.join("String"));
// console.log(arr2);

// arr2.forEach((element,index)=> {
//     console.log(element+":"+index);
//     console.log(element*2);

// })
// console.log(arr2);


//forEach(()=>{})  syntax

// var arr3=[2,4,6,8,10]
// arr3.forEach((element,index)=>{
// console.log(element+":"+index);
// console.log(element*3);
// })
// console.log(arr3);   //not modify

//map
//var arr4=[2,3,4,6,5,8,7]
// console.log(arr4);
// console.log(arr4.map((element,index)=>{
//     return element*2 
// }));
// console.log(arr4);

//filter
// console.log(arr4);
// console.log(arr4.filter((element,index)=>{
// if(element>5)
// return element
// }));
// console.log(arr4);

//sort
//asscending
// console.log(arr4);
//         console.log(arr4.sort((a,b) => {
//             return a-b
//                     }));
//         console.log(arr4);


//descending
// console.log(arr4);
//         console.log(arr4.sort((a,b) => {
//              return b-a
//                      }));
//          console.log(arr4);


//reduce
// var number=[20,30,50]
//     function myfunc(total,number) {
//                 return total-number
//        }
//         console.log(number.reduce(myfunc));
//        console.log(number);


//reduce right
// var number=[10,15,25,40]
//        function myfunc(total,number) {
//                return total-number     
//        }
//         console.log(number.reduceRight(myfunc));
//        console.log(number);
     

// var arr =['act','jio','airte']
// console.log(arr);
// var arr1=['idea']
// console.log(arr.concat(arr1));//combine two or more array and add the element at end of an array
// console.log(arr); //not modify
//return array

//slice(start index,end index)
// var arr=['leads','products','contacts','part number','name']
// console.log(arr);
// console.log(arr.slice(1,3));
// console.log(arr);//not modify
//return fragment of an array

//every
// var arr=['name','product','contact','part']
// console.log(arr.every((element)=>{
//         return  element< 2   //false   
// }))
// console.log(arr);//not modify
//return boolean

//
// var arr=['1','6','4']
// console.log(arr.some((element)=>{
//         return  element< 2   //true  
// }))
// console.log(arr);//not modify


