import generateHomePage from './home'
import generateMenuPage from "./menu";
import generateContactPage from "./contact";

//generates the home page when the page first loads
generateHomePage();
buttonDOMs.homeButton.setAttribute('style', 'background-color:#8c0c26')

//holds the tab change buttons
const buttonDOMs = (() => {
    const homeButton = document.getElementById('home');
    const contactButton = document.getElementById('contact');
    const menuButton = document.getElementById('menu');
    return {homeButton, contactButton, menuButton}
})()
    
//class to reassign the dom tabs and the associated
//booleans so the program can see what page is currently loaded.
class CheckPage {
    constructor() {
        this.homeContent = document.getElementById('home-content');
        this.menuContent = document.getElementById('menu-content');
        this.contactContent = document.getElementById('contact-content');
        this.homeBoolean = !!document.getElementById('home-content');
        this.menuBoolean = !!document.getElementById('menu-content');
        this.contactBoolean = !!document.getElementById('contact-content');
    }
}

//Each event listener checks which page is showing and if necessary,
//removes the current tab from the DOM and shows the one you opened.

//Home tab
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

//Menu tab
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

//Contact tab
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