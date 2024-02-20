import './style.css';
import {buildMenu} from './menu';
import {buildAbout} from './about';

const content = document.getElementById('content');
const index = document.getElementById('index');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

index.addEventListener('click', () => {
    cleanTree()
    buildIndex();
});

menu.addEventListener('click', () => {
    cleanTree()
    buildMenu();
});

about.addEventListener('click', () => {
    cleanTree()
    buildAbout();
});

function cleanTree() {
    content.replaceChildren();
}

function buildIndex() {
    createIndexContainer()
    createMainContainers()
    createTitle();
    createDesc();
    createHours();
    createLocation();
}

function createIndexContainer() {
    const indexCont = document.createElement('div');
    indexCont.className = 'index-container';
    content.append(indexCont);
}

function createMainContainers() {
    const leftCont = document.createElement('div');
    const centerCont = document.createElement('div');
    const rightCont = document.createElement('div');

    leftCont.className = 'left';
    centerCont.className = 'center';
    rightCont.className = 'right';
    
    content.firstElementChild.appendChild(leftCont);
    content.firstElementChild.appendChild(centerCont);
    content.firstElementChild.appendChild(rightCont);
}

function createTitle() {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    content.firstElementChild.firstElementChild.nextSibling.appendChild(titleDiv);

    const titleText = document.createElement('h1');
    titleText.textContent = 'Burger Bliss';
    titleDiv.appendChild(titleText);
}

function createDesc() {
    const paragraphList = ["Welcome to Burger Bliss, where every bite is a celebration of flavor and indulgence! At our ultimate burger joint, we craft culinary masterpieces that redefine the art of burger making. Picture an atmosphere buzzing with the sizzle of grill perfection and the aroma of freshly baked buns.",

    "Our menu boasts a tantalizing array of gourmet creations, from classic favorites to bold innovations that push the boundaries of taste. Sink your teeth into juicy, handcrafted patties made from the finest cuts of beef, tantalizing turkey, or flavorful plant-based alternatives. Each burger is a symphony of premium ingredients, carefully layered with artisanal cheeses, crisp veggies, and signature sauces that dance on your palate.",
    
    "But Burger Bliss isn't just about the burgers; it's an experience. Our friendly staff and vibrant ambiance create an inviting haven for burger enthusiasts of all ages. Whether you're craving a classic cheeseburger, daring to try our fiery specialty creations, or seeking vegetarian and vegan options bursting with flavor, Burger Bliss is your ultimate destination for burger satisfaction.",
    
    "Join us at Burger Bliss, where every bite is an adventure, and every moment is a celebration of the ultimate comfort food – the burger!",
    ]

    const descDiv = document.createElement('div');
    descDiv.className = 'desc';
    content.firstElementChild.firstElementChild.nextSibling.appendChild(descDiv);

    for (let i = 0; i < paragraphList.length; i++ ) {
    const descPara = document.createElement('div');
    descPara.textContent = paragraphList[i];
    descDiv.appendChild(descPara);
    }
}

function createHours() {
    const hoursDiv = document.createElement('div');
    hoursDiv.className = 'hours';
    content.firstElementChild.firstElementChild.nextSibling.appendChild(hoursDiv);

    const hoursPara = document.createElement('p');
    hoursPara.textContent = " Monday to Thursday: 11:00 AM - 9:00 PM Friday and Saturday: 11:00 AM - 10:00 PM Sunday: 12:00 PM - 8:00 PM"
    hoursDiv.appendChild(hoursPara);
}

function createLocation() {
    const locationDiv = document.createElement('div');
    locationDiv.className = 'location';
    content.firstElementChild.firstElementChild.nextSibling.appendChild(locationDiv);

    const locationPara = document.createElement('p');
    locationPara.textContent = "Burger Bliss 123 Main Street Cityville, USA"
    locationDiv.appendChild(locationPara);
}

buildIndex();