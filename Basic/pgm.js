var a=10 //global
let b=20  //script
const c=30 //script

function sum(a,b){ //local
    var x=40 //local
    let y=50 //local
    const z=60 //local

    function cal(u,v){  //local
        var r=15 //local
        let s=16 //local
        const t=17 //local
    }
    cal(18,19)
    {
        var e=7  //local
        let f=8   //block
        const g=9 //block
    }
}
sum(2,3)

{
    var i=70 //global
    let j=80  //block
    const k=90 //block

    function add(m,n){ //local
        var o=1 //local
        let p=2  //local
        const q=3//local
    }
    add(11,12)
    }
