

    // if no email input and click or press enter for subscribe, alert("Please submit a valid email address.")
    
    // if incomplete email input and click/enter for subscribe, alert("please entire complete email address.")

    // if complete and click/enter for subscribe, alert ("Thank you for subscribing!")
    // const submitEmail = document.getElementById("submitted");

    // submitEmail = alert("Thanks for submitting!");
    // submitEmail.addEventListener("click", {
    //     if};

//     const cartAdd = document.getElementsByClassName("add-cart")[0];

//     let clicks = 0;

//     cartAdd.addEventListener("click", function cartAdd() {


// tree.addEventListener("click", function tree() {
//     clicks ++; 
//     clickCount.innerHTML = clicks;
//     console.log(clicks);
//     if (clicks <5) {
//         speech.innerHTML = "A game is afoot";
                
//     }
//     else if (clicks >= 5 && clicks <6) {
//         speech.innerHTML = "Wow, look at that tree grow! You've unlocked a shrubbery!";
//         logCount.innerHTML += "5";
//             }
//     });

const cartItems = document.getElementsByClassName("purchase")[0];
const cart = document.getElementsByClassName("add-cart")[0];
const purchaseBubble = document.getElementById("purchase-bubble");
let clicks = 0;
cart.addEventListener("click", function cart() {
      clicks ++;
    cartItems.innerHTML = clicks;
    console.log(clicks);
    if (clicks <= 0) {
       
    };
  

});