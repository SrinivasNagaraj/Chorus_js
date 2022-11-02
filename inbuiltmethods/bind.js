var cricket={
    cap:"rohit",
    vice:"rahul",
ind:function(a,b){
    console.log("welome" +this.cap+"  "+this.vice +a+ b);
}
}

var footbal={
cap:"sergio",
vice:"koke",
spain:function(){
    console.log("hello" +this.cap+"  "+this.vice);
}
}

var sports=cricket.ind.bind(footbal,"virat","bumhra")
sports()