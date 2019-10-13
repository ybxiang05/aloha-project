document.addEventListener("DOMContentLoaded", function() {

  // flickity carousel

  const elem = document.getElementsByClassName("main-carousel")[0];
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: false,
    autoPlay: true
  });

  // email subscription

  const userEmail = document.getElementById("user-email");
  const form = document.getElementsByClassName("email-input")[0];

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (userEmail.value == "") {
      alert("Please input a valid email address.");
    } 
    else {
      alert("Thank you for subscribing!");
    }
  });

  // add to cart

  const addToCart = document.querySelectorAll(".add-to-cart");
  const cartItems = document.getElementsByClassName("purchase")[0];
  let clicks = 0;
  cartItems.style.visibility = "hidden";
  for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", function() {
      clicks++;
      cartItems.innerText = clicks;
      console.log(clicks);
      if (clicks > 0) {
        cartItems.style.visibility = "visible";
      }
    });
  }
});
