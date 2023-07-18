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

function toggleStep(direction)
{
    let step_current;
    
    for(let i = 0; i < document.querySelectorAll(".step__outer").length; i++){
        console.log(1);
        let el =  document.querySelectorAll(".step__outer")[i]
        if(el.querySelector(".step__inner").classList.contains("active"))
        {
            console.log(2);
            step_current = el.dataset.step
            
            if(direction == "next")
            {
                console.log(step_current);
                step_current++
                el.querySelector(".step__inner").classList.remove("active")
                console.log(document.querySelector(".step__outer[data-step='"+step_current+"']"));
                document.querySelector(".step__outer[data-step='"+step_current+"']").querySelector(".step__inner").classList.add("active")
                // document.querySelector(".step"+step_current+"").classList.remove("active")
                document.querySelector(".step"+step_current+"").classList.add("active")
                break
            }
            
        }
    }
}