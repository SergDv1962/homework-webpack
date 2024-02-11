import "./style.css";

console.log("Hello world!");
// prompt('hi webpack!')

document.body.insertAdjacentHTML("afterbegin", "<div>Webpack wellcome!</div>");
const block = document.querySelector('div')
block.classList.add('section');
block.style.padding = 20 + "px";
block.style.background = 'yellow';
block.insertAdjacentHTML("beforebegin", 
   `<ul class="menu">
      <li>first</li>
      <li>second</li>
   </ul>`)
console.log(block);
const menu = document.querySelector('.menu');
menu.style.color = 'red';
