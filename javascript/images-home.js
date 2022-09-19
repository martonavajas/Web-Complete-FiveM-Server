document.querySelectorAll(".modal-1 img").forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation()
        this.parentNode.classList.add("active");
    })
})

document.querySelectorAll(".modal-1").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("active");
     
    })

  
})