var barca={
head_coach:"ronald",
team_cap:"sergio",

team1:function(){
    console.log(this.team_country);
    console.log(this.team_cap);
}
}
let barca1={
    head_coach:"xavi",
    team_cap:"dembele",
team2:function(a,b){
    console.log(barca.head_coach);
    console.log(barca1.head_coach);
}
}
barca1.team2(2,4)
barca.team1()