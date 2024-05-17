let box=document.querySelectorAll(".box");
let turn="o";
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7] ,[2,5,8] ,[0,4,8] ,[2,4,6]];
let main=document.getElementById("game")
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

const  checkwinner = () => {
    for(let ar of arr){
    
        
        if(box[ar[0]].innerText !=""&&box[ar[1]].innerText!=""&&box[ar[2]].innerText!="")
        {
            if(box[ar[0]].innerText===box[ar[1]].innerText&&box[ar[1]].innerText===box[ar[2]].innerText)
              {
                let win=document.createElement("div")
                win.style.marginTop='20px'
                win.style.fontSize='40px'
                main.append(win);
                if(box[ar[0]].innerText==='O')
                win.innerText="PLAYER 1 is WINNER";
            else
            win.innerText="PLAYER 2 is WINNER";


              }
        }
    }
};