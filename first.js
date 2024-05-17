let box=document.querySelectorAll(".box");
let turn="o";
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7] ,[2,5,8] ,[0,4,8] ,[2,4,6]];
let main=document.getElementById("game")
let win=document.createElement("div")
                win.style.marginTop='20px'
                win.style.fontSize='40px'
                win.style.color='maroon'
box.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        if(turn==="o"){
            box1.innerText="O";
            turn="x";
        }else{
            box1.innerText="X";
            turn="o";
        }
        box1.disabled=true;
        console.log("box is clicked");
        checkwinner();
        
    })
});

const disable=()=>
    {
        for(let b of box)
            {
                b.disabled=true;
            }

    }
const enable=()=>
        {
            for(let b of box)
                {
                    b.disabled=false;
                    b.innerText="";
                    win.innerText="";
                }
    
        }

const reset=()=>{
    turn="o";
    enable();
}


const  checkwinner = () => {
    for(let ar of arr){
    
        
        if(box[ar[0]].innerText !=""&&box[ar[1]].innerText!=""&&box[ar[2]].innerText!="")
        {
            if(box[ar[0]].innerText===box[ar[1]].innerText&&box[ar[1]].innerText===box[ar[2]].innerText)
              {
                
                main.append(win);
                if(box[ar[0]].innerText==='O')
                win.innerText="Congratulations! PLAYER 1 is WINNER";
            else
            win.innerText="Congratulations! PLAYER 2 is WINNER";
            disable();

              }
        }
    }
};
let res_btn=document.getElementById("button");
console.log(res_btn);
res_btn.addEventListener("click",()=>{ 
reset();});