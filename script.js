var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button2 = document.createElement("button");
    button2.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
    li.appendChild(button2)
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function addDone(event) {
	if (event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}



function handleUlClick (element) {
	doneTask(element);
}
ul.addEventListener("click", handleUlClick)


// function createButtonElement(event) {
// 	var button = document.createElement("button");
// 	button.appendChild(document.createTextNode("Delete"));
// 	if (event.target.tagName === "LI"){
// 		event.target.appendChild(button).toggle;
// 	}
// }

// ul.addEventListener("click", createButtonElement)

var list = document.querySelectorAll("li")

list.forEach((list) => {
    var button2 = document.createElement("button");
    button2.appendChild(document.createTextNode("Delete"));
    list.appendChild(button2);
});

function removeList(event) {
	if (event.target.tagName === "BUTTON"){
		event.target.parentElement.remove();
	}
}
ul.addEventListener("click", removeList)
