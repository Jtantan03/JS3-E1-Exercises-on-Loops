const groceryList = [  {    category: "Meats",    items: ["Fish", "Chicken", "Pork", "Beef"]
  },
  {
    category: "Soaps and Shampoos",
    items: ["Head n shoulders", "safeguard", "dove", "rejoice"]
  },
  {
    category: "Vegetables",
    items: ["Carrots", "Petchay", "Talong", "Sitaw"]
  },
  {
    category: "Canned goods",
    items: ["corned beef", "sardines", "spam", "beef loaf"]
  }
];

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "auto auto";
container.style.gridTemplateRows = "auto auto";

for (const category of groceryList) {
  const div = document.createElement("div");
  div.style.border = "1px solid black";
  div.style.margin = "60px";
  div.style.padding = "20px";

  const h3 = document.createElement("h3");
  h3.textContent = category.category;
  div.appendChild(h3);

  for (const item of category.items) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = item;

    const label = document.createElement("label");
    label.textContent = item;
    label.htmlFor = item;

    const div2 = document.createElement("div");
    div2.appendChild(input);
    div2.appendChild(label);

    div.appendChild(div2);
  }

  container.appendChild(div);
}

document.body.appendChild(container);
