let owoo= ['1k.jpg', '2h.jpg', '5n.jpg','10.jpg','20.jpg','50n.jpg','100.jpg','100n.jpg','500h.jpg']
let momo= document.getElementById("curr")
let button= document.getElementById("owo")
let count=0
function money(){
    momo.setAttribute("src",owoo[count])
    count++
    if (count===9){
        count=0
    }
}
button.addEventListener("click",money)


