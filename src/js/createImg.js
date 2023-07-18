let name_image;

document.querySelector("#photo").addEventListener("change", e => {
    
    let file = new FileReader();
    
    new Promise((resolve,reject)=>{
        resolve(file.readAsDataURL(e.target.files[0]))
    })
    .then(i => {
        file.onload = function() {
            name_image = file.result
            // console.log(name_image);
            showFile(name_image, document.querySelector(".field-photo__img"));
            return name_image
          };
        
          file.onerror = function() {
            console.log(file.error);
          };
    })
    .then(n => {console.log(n);})
    console.log(name_image);
    
    
})
document.querySelector(".del-photo").onclick = (e) =>{
    name_image = ''
    document.querySelector(".field-photo__img").setAttribute("src", "")
}

document.querySelector(".next").addEventListener("click", () => {
    if(name_image != null)
    {
        toggleStep("next")
    }
    else
    {
        errorMess(document.body, "Картинка не добавлена")
    }
})


function showFile(name, selector)
{
    selector.setAttribute("src", name)
    // selector.style.backgroundImage = 'url('+ name+')';
    // selector.style.backgroundSize = 'cover';
}
