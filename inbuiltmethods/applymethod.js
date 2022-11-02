var barcelona={
city:"spain",
ground:"campnou",

laliga:function(a,b){
console.log("hi" + this.city+ " " +this.ground +a+ b);
}
}

var realmadrid={
    city:"madrid",
    ground:"santiogo",
    santander:function(){
        console.log("hello" + this.city+ "  " + this.ground);
    }
}
barcelona.laliga.apply(realmadrid,["barca","spotify"])
