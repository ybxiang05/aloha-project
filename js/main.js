document.addEventListener("DOMContentLoaded", function() {
  // purchase bubble v1 - click cart

  // const cartItems = document.getElementsByClassName("purchase")[0];
  // const cart = document.getElementsByClassName("add-cart")[0];
  // let clicks = 0;
  // cartItems.style.visibility = 'hidden';

  // cart.addEventListener("click", function cart() {
  //       clicks ++;
  //     cartItems.innerText = clicks;
  //     console.log(clicks);
  //     if (clicks > 0) {
  //         cartItems.style.visibility = 'visible';
  //         }
  // });

  // purchase bubble v2 - lick add-to-cart

  // const addToCart = document.getElementByClassName('add-to-cart')[i];

  const addToCart = document.querySelector('.add-to-cart');
  const cartItems = document.getElementsByClassName("purchase")[0];
  let clicks = 0;
  cartItems.style.visibility = 'hidden';
  addToCart.addEventListener("click", function addToCart() {
        clicks ++;
      cartItems.innerText = clicks;
      console.log(clicks);
      if (clicks > 0) {
          cartItems.style.visibility = 'visible';
          };
  });

// flickity carousel

  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: true
  });


  // email subscription


  const userEmail = document.getElementById('user-email');
  const subscribe = document.getElementsByClassName('email-input')[0];


  subscribe.addEventListener('submit', function(event) {
    event.preventDefault();
    if (userEmail.value == "") {
      alert("Please input a valid email address")
    } else {
      alert("Thank you for subscribing!")
    }
      });


      // if no email input and click or press enter for subscribe, alert("Please submit a valid email address.")
      
      // else if incomplete email input and click/enter for subscribe, alert("please entire complete email address.")

      // if complete and click/enter for subscribe, alert ("Thank you for subscribing!")
      // const submitEmail = document.getElementById("submitted");

      // submitEmail = alert("Thanks for submitting!");
      // submitEmail.addEventListener("click", {
      //     if};


});
