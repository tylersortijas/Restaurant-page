export function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const titleContent = document.createElement("div");
  titleContent.setAttribute("id", "title");
  content.appendChild(titleContent);

  const heading = document.createElement("h1");
  heading.textContent = "MICHI RAMEN";
  heading.classList.add('title-heading');
  titleContent.appendChild(heading);
  const subHeading = document.createElement("p");
  subHeading.textContent = "ONLINE ORDERING AVAILABLE FOR BOTH LOCATIONS!";
  titleContent.appendChild(subHeading);
}