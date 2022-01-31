import Header from "./screens/partials/header.js";
import Footer from "./screens/partials/footer.js";
import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import ShopScreen from "./screens/ShopScreen.js";
import AboutScreen from "./screens/AboutScreen.js";
import CartScreen from "./screens/CartScreen.js";
import { parseRequestUrl } from "./utils.js";
import { ContactScreen } from "./screens/ContactScreen.js";

const the_header = document.getElementById("header");
the_header.innerHTML = Header.render();

const the_footer = document.getElementById("footer");
the_footer.innerHTML = Footer.render();

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen,
    "/shop": ShopScreen,
    "/about": AboutScreen,
    "/contact": ContactScreen,
    "/cart/:id": CartScreen,
    "/cart": CartScreen,
}
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen; 
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();
    await screen.after_render();
};


window.addEventListener('load', router);
window.addEventListener('hashchange', router);











