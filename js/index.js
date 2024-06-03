import { navbar } from "../components/Navbar.js";
import { footer } from "../components/Footer.js";

let footerRender = document.querySelector("#footerRender");
let navbarRender = document.querySelector("#navbarRender");
document.addEventListener("DOMContentLoaded", () => {
  navbarRender.innerHTML = navbar();
  footerRender.innerHTML = footer();
});
