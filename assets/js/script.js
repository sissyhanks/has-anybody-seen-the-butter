const openStripe = document.querySelector("#red-stripe");


console.log(localStorage.getItem('open')); 

if (
    localStorage.getItem('open') == null
) {
    openStripe.style.visibility = "visible";
    openStripe.classList.add("open-stripe");
    setTimeout(() => {
        $( "#stripe" ).remove();
    }, 3500);
    setTimeout(() => {
        document.querySelector("#stripe-bounce").style.visibility = "visible";
    }, 3400);
    setTimeout(() => {
        document.querySelector("#v").style.visibility = "visible";
    }, 3300);
    setTimeout(() => {
        document.querySelector("#content").style.visibility = "visible";
    }, 3300);
    setTimeout(() => {
        document.querySelector("#y").style.visibility = "visible";
    }, 4300);
    setTimeout(() => {
        document.querySelector("#f").style.visibility = "visible";
    }, 4667);
    setTimeout(() => {
        document.querySelector("#q").style.visibility = "visible";
    }, 5000);
    setTimeout(() => {
        document.querySelector("#j").style.visibility = "visible";
    }, 5667);
    setTimeout(() => {
        document.querySelector("#d").style.visibility = "visible";
    }, 6000);
    setTimeout(() => {
        document.querySelector("#u").style.visibility = "visible";
    }, 6337);
    setTimeout(() => {
        document.querySelector("#x").style.visibility = "visible";
    }, 6666);
    setTimeout(() => {
        document.querySelector("#a").style.visibility = "visible";
    }, 6666);
    setTimeout(() => {
        document.querySelector("#w").style.visibility = "visible";
    }, 7000);
    setTimeout(() => {
        document.querySelector("#p").style.visibility = "visible";
    }, 7334);
    setTimeout(() => {
        document.querySelector("#o").style.visibility = "visible";
    }, 7334);
    setTimeout(() => {
        document.querySelector("#s").style.visibility = "visible";
    }, 7666);
    setTimeout(() => {
        document.querySelector("#l").style.visibility = "visible";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#logo-container").style.visibility = "visible";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#a").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#d").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#o").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#s").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#v").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#w").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#x").style.visibility = "hidden";
    }, 8000);
    setTimeout(() => {
        document.querySelector("#y").style.visibility = "hidden";
    }, 8000);
    
}


