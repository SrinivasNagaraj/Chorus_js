{
    {
var a=10 //global
let b=20 //block
const c=30 //block
function fname() {
    {
        function fname1() 
        {
            var g=90 //local
            let s=45 //local
            const p=55 //local
          {
            j=70 //local
            let k=45 //block
            const f=33 //block
            function fname2() 
            {
                l=99 //block
                let w=100 //local
                const o=33 //local
                {
                q=10 
                let r=20 
                const u=30 
                }
            }
            fname2()
           }    
        }
        fname1()
    }
}
fname()
}
}