
var mobile={devicename:"oppo",version:"baseband",android:"11",


config:{ ram:"6gb",processor:"octa"},

mobilecost: function(){
   return 25000;
}

}

// console.log(mobile);

var mobile1={}

//console.log(mobile1.brand); //undefined
mobile1._proto_=mobile 
//console.log(mobile1.brand);
mobile1.brand="real"
console.log(mobile1.brand);


