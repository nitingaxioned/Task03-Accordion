// variable declerations

var btns = document.querySelectorAll(".accordion-title");


btns.forEach(function(val){
    val.addEventListener("click", function(){
        val.classList.toggle("active-title");
        val.nextElementSibling.classList.toggle("active");
        btns.forEach(function(btn){
            if(btn != val){
                btn.classList.remove("active-title");
                btn.nextElementSibling.classList.remove("active");
            }
        });
    })
})


















