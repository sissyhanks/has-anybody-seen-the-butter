const openStripe = document.querySelector("#red-stripe");


console.log(localStorage.getItem('open')); 

if (
    localStorage.getItem('open') == null
) {
    openStripe.style.visibility = "visible";
    openStripe.classList.add("open-stripe");
    setTimeout(() => {
        $( "#stripe" ).remove();
    }, 2300);
    
}


