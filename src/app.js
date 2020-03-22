// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 150;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  //renderIngredientsBoard();

  renderPrice();
}

function renderPatty() {
  let $patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    $patty.style.display = "inherit";
  } else {
    $patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let $cheese = document.querySelector("#cheese");
  if (state.cheese) {
    $cheese.style.display = "inherit";
  } else {
    $cheese.style.display = "none";
  }

}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let $tomato = document.querySelector("#tomato");
  if (state.tomato) {
    $tomato.style.display = "inherit";
  } else {
    $tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let $onion = document.querySelector("#onion");
  if (state.onion) {
    $onion.style.display = "inherit";
  } else {
    $onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let $lettuce = document.querySelector("#lettuce");
  if (state.lettuce) {
    $lettuce.style.display = "inherit";
  } else {
    $lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.cheese = !state.cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.tomato = !state.tomato;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.onion = !state.onion;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.lettuce = !state.lettuce;
  renderAll();
};




//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  /*var items = ["btn-cheese", "btn-patty", "btn-tomatoes", "btn-onions", "btn-lettuce"]
  var ingredient = ["Patty", "Cheese", "Tomatoes", "Onions", "Lettuce"]
  for (var index = 0; index < items.length; index++) {
    var item = document.querySelector(".button." + items[index]);
    console.log(item)
    addOrRemove(state[ingredient[index]], item);
  }*/

  var patty = document.querySelector(".btn-patty");
  var cheese = document.querySelector(".btn-cheese");
  //var patty = document.querySelector(".button.btn-tomatoes.active");
  //var patty = document.querySelector(".button.btn-onions.active");
  //var patty = document.querySelector(".button.btn-lettuce.active");
  //patty.classList.remove("active");
  addOrRemove(state.Patty, patty);
  addOrRemove(state.Cheese, cheese);
}


function addOrRemove(st, item) {
  st = !st;
  if (st)
    return item.classList.add("active");
  else
    return item.classList.remove("active");
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  if (state.Patty)
    wholeWheatBun -= ingredients.Patty;
  console.log(wholeWheatBun);
}