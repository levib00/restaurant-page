/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/home.js
function generateHomePage() {
    
    

    const homeContent = document.createElement('div')
    homeContent.setAttribute('class','flex-hor-center')
    homeContent.setAttribute('id','home-content')

    const subHeading = document.createElement('h3');
    subHeading.textContent = "Home";
    subHeading.setAttribute('id', 'sub-heading');
    homeContent.appendChild(subHeading);

    const content = document.getElementById('content')

    content.appendChild(heading);
    content.appendChild(homeContent);

    const mainPic = document.createElement('img');
    mainPic.setAttribute('id','main-pic')
    mainPic.setAttribute('src', 'https://media.blogto.com/articles/20160524-piandco2048-06.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70');

    const mainCaption = document.createElement('h3');
    mainCaption.textContent = 'Fresh, Fired, Fantastic Pizza!'

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id','paragraph')
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non elementum turpis. Sed fringilla lacus sed massa interdum congue. Pellentesque dui arcu, accumsan in aliquet nec, facilisis at magna.'

    homeContent.appendChild(mainPic)
    homeContent.appendChild(mainCaption)
    homeContent.appendChild(paragraph)
};
;// CONCATENATED MODULE: ./src/menu.js
function generateMenuPage() {

    const menuContent = document.createElement('div');
    menuContent.setAttribute('class','flex-hor-center');
    menuContent.setAttribute('id','menu-content')

    const content = document.getElementById('content');

    content.appendChild(heading);
    content.appendChild(menuContent);

    const subHeading = document.createElement('h3');
    subHeading.textContent = "Menu";
    subHeading.setAttribute('id', 'sub-heading');
    menuContent.appendChild(subHeading);

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id','menu-container');
    menuContent.appendChild(menuContainer)

    const menuItem1 = document.createElement('div');
    menuItem1.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem1);
    const menuImg1 = document.createElement('img')
    menuImg1.setAttribute('class','menu-image')
    menuImg1.setAttribute('src', '/dist/images/slmeu1eon6601.jpg')
    menuItem1.appendChild(menuImg1)
    const menuOrder1 = document.createElement('h4')
    menuOrder1.innerText = 'Pepperoni Pizza';
    menuItem1.appendChild(menuOrder1);
    const menuDescription1 = document.createElement('p');
    menuDescription1.innerText = 'Our signature wood fired pizza with pepperoni and our cheese blend.';
    menuItem1.appendChild(menuDescription1)
    const menuPrice1 = document.createElement('h5');
    menuPrice1.innerText = '$18.99';
    menuItem1.appendChild(menuPrice1)

    const menuItem2 = document.createElement('div');
    menuItem2.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem2);
    const menuImg2 = document.createElement('img')
    menuImg2.setAttribute('class','menu-image')
    menuImg2.setAttribute('src', '/dist/images/3XIELVBJWII6NNXSMTE4NPM4AE.jpg')
    menuItem2.appendChild(menuImg2)
    const menuOrder2 = document.createElement('h4')
    menuOrder2.innerText = 'Cheese Pizza';
    menuItem2.appendChild(menuOrder2);
    const menuDescription2 = document.createElement('p');
    menuDescription2.innerText = 'Our signature wood fired pizza with loads of our cheese blend.';
    menuItem2.appendChild(menuDescription2)
    const menuPrice2 = document.createElement('h5');
    menuPrice2.innerText = '$17.99';
    menuItem2.appendChild(menuPrice2)

    const menuItem3 = document.createElement('div');
    menuItem3.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem3);
    const menuImg3 = document.createElement('img')
    menuImg3.setAttribute('class','menu-image')
    menuImg3.setAttribute('src', '/dist/images/Riggattis-Stg-Utah-3.jpg')
    menuItem3.appendChild(menuImg3)
    const menuOrder3 = document.createElement('h4')
    menuOrder3.innerText = 'Hawaiian Pizza';
    menuItem3.appendChild(menuOrder3);
    const menuDescription3 = document.createElement('p');
    menuDescription3.innerText = 'Our signature wood fired pizza with ham and pineapple.';
    menuItem3.appendChild(menuDescription3)
    const menuPrice3 = document.createElement('h5');
    menuPrice3.innerText = '$18.49';
    menuItem3.appendChild(menuPrice3)

    const menuItem4 = document.createElement('div');
    menuItem4.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem4);
    const menuImg4 = document.createElement('img')
    menuImg4.setAttribute('class','menu-image')
    menuImg4.setAttribute('src', '/dist/images/meatlovers.jpg')
    menuItem4.appendChild(menuImg4)
    const menuOrder4 = document.createElement('h4')
    menuOrder4.innerText = 'Meat Lovers Pizza';
    menuItem4.appendChild(menuOrder4);
    const menuDescription4 = document.createElement('p');
    menuDescription4.innerText = 'Our signature wood fired pizza with pepperoni, bacon, ham, and sausage.';
    menuItem4.appendChild(menuDescription4)
    const menuPrice4 = document.createElement('h5');
    menuPrice4.innerText = '$20.99';
    menuItem4.appendChild(menuPrice4)

    const menuItem5 = document.createElement('div');
    menuItem5.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem5);
    const menuImg5 = document.createElement('img')
    menuImg5.setAttribute('class','menu-image')
    menuImg5.setAttribute('src', '/dist/images/Gas-vs-Wood-Fired-Pizza-Ovens.jpg')
    menuItem5.appendChild(menuImg5)
    const menuOrder5 = document.createElement('h4')
    menuOrder5.innerText = 'All Dressed Pizza';
    menuItem5.appendChild(menuOrder5);
    const menuDescription5 = document.createElement('p');
    menuDescription5.innerText = 'Our signature wood fired pizza with all of our toppings.';
    menuItem5.appendChild(menuDescription5)
    const menuPrice5 = document.createElement('h5');
    menuPrice5.innerText = '$22.99';
    menuItem5.appendChild(menuPrice5)

    const menuItem6 = document.createElement('div');
    menuItem6.setAttribute('class', 'menu-item flex-hor-center');
    menuContainer.appendChild(menuItem6);
    const menuImg6 = document.createElement('img')
    menuImg6.setAttribute('class','menu-image')
    menuImg6.setAttribute('src', '/dist/images/crust_and_craft_sodel_concepts_49.jpg')
    menuItem6.appendChild(menuImg6)
    const menuOrder6 = document.createElement('h4')
    menuOrder6.innerText = 'Custom Pizza';
    menuItem6.appendChild(menuOrder6);
    const menuDescription6 = document.createElement('p');
    menuDescription6.innerText = 'Our signature wood fired pizza with your choice of toppings.';
    menuItem6.appendChild(menuDescription6)
    const menuPrice6 = document.createElement('h5');
    menuPrice6.innerText = '$17.99 + $1.00 per topping';
    menuItem6.appendChild(menuPrice6)

    
    
};

;// CONCATENATED MODULE: ./src/contact.js
function generateContactPage() {

    const contactContent = document.createElement('div');
    contactContent.setAttribute('class','flex-hor-center');
    contactContent.setAttribute('id','contact-content')

    const content = document.getElementById('content');

    content.appendChild(heading);
    content.appendChild(contactContent);

    const subHeading = document.createElement('h3');
    subHeading.textContent = "Contact";
    subHeading.setAttribute('id', 'sub-heading');
    contactContent.appendChild(subHeading);    

    const contactCard = document.createElement('div');
    contactCard.setAttribute('id','contact-card');
    contactContent.appendChild(contactCard)

    const storeLocation = document.createElement('div');
    storeLocation.innerText = 'Location: 123 Downtown Street';
    contactCard.appendChild(storeLocation);

    const storePhone = document.createElement('div');
    storePhone.innerText = 'Phone Number: 555-555-5555'
    contactCard.appendChild(storePhone);

    const storeHours = document.createElement('h3');
    storeHours.textContent = "Our Hours";
    storeHours.setAttribute('id', 'hours-section');
    contactCard.appendChild(storeHours); 
    
    const weekHours = document.createElement('div');
    weekHours.innerText = 'Monday-Sunday: 11am-11pm'
    contactCard.appendChild(weekHours);

   
}

;// CONCATENATED MODULE: ./src/index.js





generateHomePage();
const buttonDOMs = (() => {
    const homeButton = document.getElementById('home');
    const contactButton = document.getElementById('contact');
    const menuButton = document.getElementById('menu');
    return {homeButton, contactButton, menuButton}
})()
    

buttonDOMs.homeButton.setAttribute('style', 'background-color:#8c0c26')
function CheckPage ()  {
    this.homeContent = document.getElementById('home-content')
    this.menuContent = document.getElementById('menu-content')
    this.contactContent = document.getElementById('contact-content')
    this.homeBoolean = !!document.getElementById('home-content')
    this.menuBoolean = !!document.getElementById('menu-content')
    this.contactBoolean = !!document.getElementById('contact-content')
}

buttonDOMs.homeButton.addEventListener("click",() => {
    let check = new CheckPage

    if (check.homeBoolean) return
    if (check.contactBoolean){
        check.contactContent.remove()
        buttonDOMs.contactButton.setAttribute('style','background-color: crimson;')
    }
    if (check.menuBoolean){
       check.menuContent.remove()
       buttonDOMs.menuButton.setAttribute('style','background-color: crimson;')
    }
    generateHomePage()
    buttonDOMs.homeButton.setAttribute('style', 'background-color:#8c0c26')
})

buttonDOMs.menuButton.addEventListener("click",() => {
    let check = new CheckPage
    if (check.menuBoolean) return
    if (check.contactBoolean){
        check.contactContent.remove()
        buttonDOMs.contactButton.setAttribute('style','background-color: crimson;')
    }
    if (check.homeBoolean){
        check.homeContent.remove()
       buttonDOMs. homeButton.setAttribute('style','background-color: crimson;')
    }
    generateMenuPage()
    buttonDOMs.menuButton.setAttribute('style', 'background-color: #8c0c26')
})

buttonDOMs.contactButton.addEventListener("click",() => {
    let check = new CheckPage
    if (check.contactBoolean) return
    if (check.menuBoolean){
        check.menuContent.remove()
        buttonDOMs.menuButton.setAttribute('style','background-color: crimson;')
    }
    if (check.homeBoolean){
        check.homeContent.remove()
        buttonDOMs.homeButton.setAttribute('style','background-color: crimson;')
    }
    generateContactPage()
    
    buttonDOMs.contactButton.setAttribute('style', 'background-color:#8c0c26')
})



/******/ })()
;