const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



document.querySelectorAll(".card").forEach(card => {
    const addToCartBtn = card.querySelectorAll("button")[1];

    addToCartBtn.addEventListener("click", () => {
      let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Store card HTML as string
      cartData.push(card.outerHTML);

      localStorage.setItem("cartItems", JSON.stringify(cartData));

      alert("Item added to cart!");
    });
  });