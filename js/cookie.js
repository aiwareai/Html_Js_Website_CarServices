/* cookie banner */
const cookiePopup = document.querySelector(".cookiePopup");
const btnCookie = document.querySelector(".acceptCookie");

if(btnCookie) {
btnCookie.addEventListener("click", () => {
cookiePopup.classList.add("active");
localStorage.setItem("cookieBannerDisplayed", "true");
});
}

setTimeout(() => {
if(!localStorage.getItem("cookieBannerDisplayed"))
cookiePopup.classList.remove("active");
}, 2000);