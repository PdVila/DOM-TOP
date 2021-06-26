const redText = document.querySelector('#container');

const redContent = document.createElement('p');
const header3 = document.createElement('h3');
const newDiv = document.createElement('div');

//Not sure if I need a class added
redContent.classList.add('redContent');

redContent.textContent = "This is a text-redContent."
redContent.style.color = 'red';

header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';

newDiv.style.cssText = 'border: 1px solid black; background-color: pink'

//Adding an h1 and p inside newDiv
//Done by appending the h1 and p1 before adding to the container

const insideHeader = document.createElement('h1');
insideHeader.textContent = "This is a header 1"
newDiv.appendChild(insideHeader);

const newP = document.createElement('p');
newP.textContent = "This is a paragraph tag"
newDiv.appendChild(newP);

redText.appendChild(redContent);
redText.appendChild(header3);
redText.appendChild(newDiv);


