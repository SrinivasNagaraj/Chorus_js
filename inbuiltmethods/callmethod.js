var barca={
coach:"xavi",
cap:"sergio",
add:function(){
    console.log("hi"+this.coach+" "+this.cap);
}
}
var city={
    coach:"pep",
    cap:"kevin",
    eng:function(){
        console.log("hello" +this.coach+" "+this.cap);
    }
}
//city.eng.call(barca) 
// barca.add.call(city)

// function name(value1,value2){
//     console.log();
// }  