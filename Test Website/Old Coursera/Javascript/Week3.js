
var fruits =["Banana", "Orange", "Apple", "Mango"];

function loadFruits(){
	document.getElementById("fruits").innerHTML=fruits;
}

function myFunction() {
	var fruit= prompt ("Type Yo Favorit Fruit!");
	fruits[fruits.length] = fruit;
	document.getElementById("fruits").innerHTML = fruits;
}