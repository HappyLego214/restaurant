export {buildMenu};
import data from "./data.json";

import burger1 from "./images/burger1.jpg";
import burger2 from "./images/burger2.jpg";
import burger3 from "./images/burger3.jpg";

import side1 from "./images/side1.jpg";
import side2 from "./images/side2.jpg";
import side3 from "./images/side3.jpg";

import bev1 from "./images/bev1.jpg"
import bev2 from "./images/bev2.jpg"
import bev3 from "./images/bev3.jpg"

const mainImgs = [burger1, burger2, burger3];
const sideImgs = [side1, side2, side3];
const bevImgs = [bev1, bev2, bev3];

function buildMenu() {
    createTitle();
    createMenuContainer()
    createMenuList();
}

function createMenuContainer() {
    const menuCont = document.createElement("div");
    menuCont.classList = "menu-container";
    content.append(menuCont);
}

function createTitle() {
    const titleDiv = document.createElement("h1");
    titleDiv.classList = "menu-title";
    titleDiv.textContent = "Our Menu";
    content.append(titleDiv);
}

function createMenuList() {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu-list";
    content.lastElementChild.append(menuDiv);

    for (let i = 0; i < data.menuCategories.length; i++) {
        const menuCat = document.createElement("div");
        menuCat.classList = `menu-category ${data.menuCategories[i].replace(" ","-").toLowerCase()}`;
        menuDiv.append(menuCat);

        const menuTitle = document.createElement("h2");
        menuTitle.textContent = data.menuCategories[i];
        menuCat.append(menuTitle);

        if (data.menuCategories[i] == "Main Orders") {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, data.mainMenu, data.mainPrices, data.mainDesc, mainImgs));
            }
        } else if (data.menuCategories[i] == "Side Orders") {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, data.sideMenu, data.sidePrices, data.sideDesc, sideImgs));
            }
        } else {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, data.bevMenu, data.bevPrices, data.bevDesc, bevImgs));
            }
        }
    }
}

function createMenuItem(i, menu, price, desc, imgs) {

    const menuItem = document.createElement("div");
    menuItem.classList = "menu-item";

    const menuImage = document.createElement("img");
    menuImage.src = imgs[i];
    menuItem.append(menuImage);

    const itemName = document.createElement("h3");
    itemName.textContent = menu[i];
    menuItem.append(itemName);

    const itemPrice = document.createElement("h3");
    itemPrice.textContent = price[i];
    menuItem.append(itemPrice);
    
    const itemDesc = document.createElement("p");
    itemDesc.textContent = desc[i];
    menuItem.append(itemDesc);

    return menuItem;
}

