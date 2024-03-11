const navElement=["About","Tours","Sale","Contact"]
let navbar= document.getElementById("navbar")

navElement.forEach((e)=>{
    let element=document.createElement('a')
    element.innerText=e
    element.href="#main"
    
    navbar.appendChild(element)
})