import { menuPage } from './menu.js';

export function aboutUs() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const about = document.createElement('div');
  about.setAttribute('id', 'about');
  content.appendChild(about);

  const subHeader = document.createElement("p");
  subHeader.textContent = "TRADITIONAL RAMEN NATURAL INGREDIENTS";
  about.appendChild(subHeader);

  const header = document.createElement("h1");
  header.textContent = "MICHI RAMEN";
  about.appendChild(header);

  const desc = document.createElement("p");
  desc.textContent =
    "From the fabric of the streets to our homes, Ramen is designed to satisfy every guest and encourages them to boldy slurp away.";
    about.appendChild(desc);

  const menuButtonLink = document.createElement("button");
  menuButtonLink.textContent = "Explore Our Menu";
  about.appendChild(menuButtonLink);

  menuButtonLink.addEventListener('click', menuPage);
}
