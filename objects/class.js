class mobile{
constructor(brand,colour,version,config,cost){
    this.brand=brand
    this.colour=colour
    this.version=version
    this.config=config
this.cost=function(){
    return cost
}

}
}
var mobile1=new mobile("oppo","red","android", {ram:"6gb",proccessor:"octa"},20000)

console.log(mobile1);
console.log(mobile1.cost()); 