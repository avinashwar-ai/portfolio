```javascript
const text = [
"Artificial Intelligence Specialist",
"Machine Learning Engineer",
"Generative AI Researcher",
"Assistant Professor",
"Quantum Computing Researcher"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type, 1500);

}
else{

setTimeout(type, 100);

}

})();

function toggleTheme(){
document.body.classList.toggle("dark-mode");
}
```
