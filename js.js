let s="";
let btns=document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>
    {
        if(e.target.innerHTML=="Enter"){
            s=eval(s);
            document.querySelector('.area').value=s;
        }
        else if(e.target.innerHTML=="Clear"){
            s="";
            document.querySelector('.area').value=s;
        }
        else{
       s=s+ e.target.innerHTML;
       document.querySelector('.area').value=s;
        }
    })
})