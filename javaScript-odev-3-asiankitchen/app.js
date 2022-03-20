const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
    "https://i.lezzet.com.tr/images-xxlarge-recipe/bibimbap-2d68e268-6c19-4ff8-b5f8-1145372450cf.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//BUTTONS
// ALL
// 1. Create the button
let allButton = document.createElement("button");
allButton.classList.add("btn", "btn-outline-warning", "btn-item");
allButton.innerHTML = "ALL";

drawFoods(menu);

// 2. Append somewhere
let buttonsDiv = document.getElementById("buttonsDiv");
buttonsDiv.classList.add("btn-container");
buttonsDiv.appendChild(allButton);
// 3. Add event handler
allButton.addEventListener ("click", function() {

  drawFoods(menu);

});

// KOREA  filter Method
let koreaButton = document.createElement("button");
koreaButton.classList.add("btn", "btn-outline-warning", "btn-item");
koreaButton.innerHTML = "KOREA";

buttonsDiv.appendChild(koreaButton);

koreaButton.addEventListener ("click", function() {
  
  let koreanFoods = menu.filter(function(food) {
    return (food.category == "Korea")
  })

  drawFoods(koreanFoods);

});

// JAPAN  forEach Method
let japanButton = document.createElement("button");
japanButton.classList.add("btn", "btn-outline-warning", "btn-item");
japanButton.innerHTML = "JAPAN";

buttonsDiv.appendChild(japanButton);

japanButton.addEventListener ("click", function() {
  let japanFoods = []

  menu.forEach(element => {
    if (element.category == "Japan") {
      japanFoods.push(element);
    }
  });

  drawFoods(japanFoods);

});

// CHINA  
let chinaButton = document.createElement("button");
chinaButton.classList.add("btn", "btn-outline-warning", "btn-item");
chinaButton.innerHTML = "CHINA";

buttonsDiv.appendChild(chinaButton);

chinaButton.addEventListener ("click", function() {
  let chinaFoods = menu.filter( function (item) {
    return item.category == "China"
  })

  drawFoods(chinaFoods);

});

// The function that create menu 
function drawFoods(array) {

  let menuDiv = document.getElementById("home");

  menuDiv.replaceChildren();

  array.forEach(element => {

    let row = document.createElement("div");
    row.classList.add("menu-items", "col-lg-6", "col-sm-12");

    let imgDiv = document.createElement("img");
    imgDiv.src = element.img;
    imgDiv.classList.add("photo");
    row.appendChild(imgDiv);

    let itemsDiv = document.createElement("div");
    itemsDiv.classList.add("menu-info");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("menu-title");
    itemsDiv.appendChild(titleDiv);

    let titleH4 = document.createElement("h4");
    titleH4.innerHTML = element.title;
    titleDiv.appendChild(titleH4);

    let priceH4 = document.createElement("h4");
    priceH4.innerHTML = element.price;
    priceH4.classList.add("price");
    titleDiv.appendChild(priceH4);

    let descDiv = document.createElement("div");
    descDiv.innerHTML = element.desc;
    descDiv.classList.add("menu-text");
    itemsDiv.appendChild(descDiv);

    row.appendChild(itemsDiv);

    menuDiv.appendChild(row);
    
  });

}

// localStorage.setItem('menu-all', JSON.stringify(menuDiv) );
//     console.log(menuDiv);
