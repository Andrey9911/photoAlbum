
function showBlock(selector)
{
    if(!document.querySelector(selector).classList.contains("active"))
    {
        setTimeout(() => {
            document.querySelector(selector).classList.add("active-anim")
        }, 0)
        document.querySelector(selector).classList.add("active")
        
    } 
    else
    {
        setTimeout(() => {
            document.querySelector(selector).classList.remove("active")
        }, 0)
        document.querySelector(selector).classList.remove("active-anim")
    }
     
}

document.querySelectorAll(".but").forEach(i => {
    i.addEventListener("click", e => {
        setTimeout(() => {e.target.classList.remove("but_active")},100)
        e.target.classList.add("but_active")
    })
});
document.querySelector(".add-photo-but").addEventListener("click", e => {showBlock(".add-block__content.add-photo-block")})
document.querySelector(".add-theme-block").addEventListener("click", e => {showBlock(".add-block__content.add-theme-block")})

function errorMess(selectParent, mess)
{
    let error = document.createElement("div")
    error.className = "notif notif_error";
    error.textContent = mess
    document.body.append(error)
    
    setTimeout(() => {
        error.classList.add("show")
        setTimeout(()=>{error.remove()}, 500)
        
    },10)
    
}