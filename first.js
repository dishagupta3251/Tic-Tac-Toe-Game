let box=document.querySelectorAll(".box");
let turn="o";
const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,4,7] ,[2,5,8] ,[0,4,8] ,[2,4,6]];

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
        checkwinner();
    })
});

const  checkwinner = () => {
    for(let i=0 ;i<arr.length;i++){
        console.log(box[arr[i][0]]===box[arr[i][1]]===box[arr[i][2]]);
    }
};