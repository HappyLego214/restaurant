export {buildMenu};

import burger1 from './images/burger1.jpg';
import burger2 from './images/burger2.jpg';
import burger3 from './images/burger3.jpg';

import side1 from './images/side1.jpg';
import side2 from './images/side2.jpg';
import side3 from './images/side3.jpg';

import bev1 from './images/bev1.jpg'
import bev2 from './images/bev2.jpg'
import bev3 from './images/bev3.jpg'

const menuCategories = 
['Main Orders', 'Side Orders', 'Beverages'];
const mainMenu = 
['Classic Cheeseburger', 'Southwestern Chipotle Burger', 'Mushroom Swiss Burger'];
const mainPrices = 
['$8.99', '$10.99', '$99.9'];
const mainDesc = 
['A timeless favorite with a juicy beef patty, melted cheddar cheese, crisp lettuce, ripe tomato slices, tangy pickles, and zesty mayonnaise, all on sesame seed buns.', 
'This spicy sensation features a succulent beef patty with melted pepper jack cheese, crispy bacon, grilled onions, fresh avocado, and smoky chipotle sauce.',
'Elevate your burger experience with a juicy beef patty, sautéed mushrooms, melted Swiss cheese, garlic aioli, all nestled in a toasted brioche bun.'];
const mainImgs = [burger1, burger2, burger3];

const sideMenu = ['Crispy Onion Rings', 'Garlic Parmesan Fries', 'Sweet Potato Wedges']
const sidePrices = ['$4.99', '$5.49', '$5.99']
const sideDesc = ['Indulge in a crispy delight with our golden-fried onion rings, served piping hot and seasoned to perfection.','Savor the irresistible combination of crispy French fries tossed in garlic-infused oil and sprinkled with grated Parmesan cheese.','Treat your taste buds to the sweet and savory goodness of our oven-baked sweet potato wedges, served with a side of honey mustard dipping sauce.']
const sideImgs = [side1, side2, side3];

const bevMenu = ['Classic Milkshake', 'Iced Caramel Macchiato', 'Freshly Squeezed Lemonade']
const bevPrices = ['$3.99', '$4.49', '$2.99']
const bevDesc = ['Transport yourself back to the good old days with our creamy classic milkshake, available in chocolate, vanilla, or strawberry flavors.','Indulge in a refreshing blend of espresso, chilled milk, and rich caramel syrup, topped with a swirl of whipped cream and caramel drizzle.','Quench your thirst with our tangy and refreshing lemonade, made from freshly squeezed lemons and sweetened just right for a burst of citrusy flavor.']
const bevImgs = [bev1, bev2, bev3];

function buildMenu() {
    createTitle();
    createMenuContainer()
    createMenuList();
}

function createMenuContainer() {
    const menuCont = document.createElement('div');
    menuCont.classList = 'menu-container';
    content.append(menuCont);
}

function createTitle() {
    const titleDiv = document.createElement('h1');
    titleDiv.classList = "menu-title";
    titleDiv.textContent = "Our Menu";
    content.append(titleDiv);
}

function createMenuList() {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-list';
    content.lastElementChild.append(menuDiv);

    for (let i = 0; i < menuCategories.length; i++) {
        const menuCat = document.createElement('div');
        menuCat.classList = `menu-category ${menuCategories[i].replace(' ','-').toLowerCase()}`;
        menuDiv.append(menuCat);

        const menuTitle = document.createElement('h2');
        menuTitle.textContent = menuCategories[i];
        menuCat.append(menuTitle);

        if (menuCategories[i] == 'Main Orders') {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, mainMenu, mainPrices, mainDesc, mainImgs));
            }
        } else if (menuCategories[i] == 'Side Orders') {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, sideMenu, sidePrices, sideDesc, sideImgs));
            }
        } else {
            for (let i = 0; i < 3; i++) {
                menuCat.append(createMenuItem(i, bevMenu, bevPrices, bevDesc, bevImgs));
            }
        }
    }
}

function createMenuItem(i, menu, price, desc, imgs) {

    const menuItem = document.createElement('div');
    menuItem.classList = 'menu-item';

    const menuImage = document.createElement('img');
    menuImage.src = imgs[i];
    menuItem.append(menuImage);

    const itemName = document.createElement('h3');
    itemName.textContent = menu[i];
    menuItem.append(itemName);

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = price[i];
    menuItem.append(itemPrice);
    
    const itemDesc = document.createElement('p');
    itemDesc.textContent = desc[i];
    menuItem.append(itemDesc);

    return menuItem;
}

