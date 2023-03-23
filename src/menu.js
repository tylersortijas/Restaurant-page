export function menuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menu = document.createElement("div");
  content.appendChild(menu);
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menu.appendChild(menuTitle);
  const ramenTitle = document.createElement("h2");
  ramenTitle.textContent = "Ramen";
  menu.appendChild(ramenTitle);

  const cardOne = document.createElement("div");
  menu.appendChild(cardOne);
  const shoyuRamen = document.createElement("p");
  shoyuRamen.textContent = "Shoyu Ramen";
  cardOne.appendChild(shoyuRamen);
  const shoyuDesc = document.createElement("p");
  shoyuDesc.textContent =
    "Clear chicken broth with shoyu, bamboo shoots, spinach, green, onion, seaweed, and seasoned egg. Choice of Pork, Chicken, or Tofu.";
  cardOne.appendChild(shoyuDesc);

  const cardTwo = document.createElement("div");
  menu.appendChild(cardTwo);
  const classicRamen = document.createElement("p");
  classicRamen.textContent = "Classic Ramen";
  cardTwo.appendChild(classicRamen);
  const classicDesc = document.createElement("p");
  classicDesc.textContent =
    "Creamy pork broth, bean sprouts, spinach, green onion, seaweed, black garlic oil and seasoned egg. Choice of Pork, Chicken, or Tofu. (Contains Dairy)";
  cardTwo.appendChild(classicDesc);

  const cardThree = document.createElement("div");
  menu.appendChild(cardThree);
  const veggieRamen = document.createElement("p");
  veggieRamen.textContent = "Veggie Ramen";
  cardThree.appendChild(veggieRamen);
  const veggieDesc = document.createElement("p");
  veggieDesc =
    "Vegetarian. Vegetable broth with miso base, bean sprouts, corn, mushroom, tofu, broccolini, baby greens, kale, red cabbage, and avocado";
  cardThree.appendChild(veggieDesc);

  const bowlsTitle = document.createElement("h2");
  bowlsTitle.textContent = "Bowls";
  menu.appendChild(bowlsTitle);

  const cardFour = document.createElement("div");
  menu.appendChild(cardFour);
  const spicyTunaBowl = document.createElement("p");
  spicyTunaBowl.textContent = "Spicy Tuna Bowl";
  cardFour.appendChild(spicyTunaBowl);
  const tunaDesc = document.createElement("p");
  tunaDesc.textContent =
    "Spicy Tuna, mixed greens, fried onion, onion dressing and avocado over rice";
  cardFour.appendChild(tunaDesc);

  const cardFive = document.createElement("div");
  menu.appendChild(cardFive);
  const porkBowl = document.createElement("p");
  porkBowl.textContent = "Pork Bowl";
  cardFive.appendChild(porkBowl);
  const porkDesc = document.createElement("p");
  porkDesc.textContent =
    "Spicy. Pork belly, pickled onion, green onion, fried jalapeno and soft boiled egg over rice.";
  cardFive.appendChild(porkDesc);
}
