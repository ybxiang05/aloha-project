
// purchase bubble 

const cartItems = document.getElementsByClassName("purchase")[0];
const cart = document.getElementsByClassName("add-cart")[0];
const purchaseBubble = document.getElementById("purchase-bubble");
let clicks = 0;
purchaseBubble.style.visibility = 'hidden';

cart.addEventListener("click", function cart() {
      clicks ++;
    cartItems.innerHTML = clicks;
    console.log(clicks);
    if (clicks > 0) {
        purchaseBubble.style.visibility = 'visible';
        }
});

// email subscription

    // if no email input and click or press enter for subscribe, alert("Please submit a valid email address.")
    
    // else if incomplete email input and click/enter for subscribe, alert("please entire complete email address.")

    // if complete and click/enter for subscribe, alert ("Thank you for subscribing!")
    // const submitEmail = document.getElementById("submitted");

    // submitEmail = alert("Thanks for submitting!");
    // submitEmail.addEventListener("click", {
    //     if};



