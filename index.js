var btn=document.querySelector(".btn")
var container=document.querySelector(".container")

btn.addEventListener("click",(e) => {
    e.preventDefault()

    if (btn.innerText=="Light"){
        container.style.backgroundColor="black"
        btn.innerText="Dark"
        
    }
    else{
         container.style.backgroundColor="white"
         btn.innerText="Light"
    }

})

