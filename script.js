var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body 
var objects = {};

var pop = document.createElement("div");
pop.setAttribute("class", "popUp");
pop.style.display = "none";

// If I click on the popUp div, it should hide it
pop.addEventListener("click", function(){
  pop.style.display = "none";
});
document.body.appendChild(pop);

// Create a div for each item in the array above
for(var i = 0; i < products.length; i++) {
  objects[i] = new product(products[i]);
}

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";
function product(object) {
  var div = document.createElement("div");
  div.setAttribute("class", "product")
  
  var p = document.createElement("p");
  p.innerHTML += "Name: " + object.name + "<br> Price: $" + object.price;
  
// inside of each div, the product's image should be on top of the text
  var img = document.createElement("img");

  img.src = object.image;
  
  div.appendChild(img);
  div.appendChild(p);
 
// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black
  div.addEventListener("mouseover", function() {
    div.style.borderColor = object.color;
  });
  
  div.addEventListener("mouseleave", function() {
    div.style.borderColor = "";
  });
// When Clicking on a product, it should display the popUp Menu over all the content
// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.
  div.addEventListener("click", function() {
    pop.style.display = "flex";
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML += "Name: " + object.name + "<br> Price: $" + object.price;
    var img = document.createElement("img");

    img.src = object.image;
  
    div.appendChild(img);
    div.appendChild(p);
    pop.innerHTML = "";
    pop.appendChild(div);
  });
  
  document.body.appendChild(div);
}