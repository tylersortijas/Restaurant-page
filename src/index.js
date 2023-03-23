import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutUs } from './about.js';
import './style.css';

// Initial load for page
homePage();

const homeTab = document.querySelector(".home");
homeTab.addEventListener("click", homePage);

const menuTab = document.querySelector(".menu");
menuTab.addEventListener("click", menuPage);

const aboutTab = document.querySelector(".about");
aboutTab.addEventListener("click", aboutUs);
