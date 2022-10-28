const generateContactPage = () => {
    const heading = document.createElement('h1');
    heading.textContent = 'Pepe\'s Pizza';
    heading.setAttribute('id','heading');

    const homeContent = document.createElement('div');
    homeContent.setAttribute('class','flex-hor-center');

    const content = document.getElementById('content');

    content.appendChild(heading);
    content.appendChild(homeContent);

    const subHeading = document.createElement('h3');
    subHeading.textContent = "Contact";
    subHeading.setAttribute('id', 'sub-heading');
    homeContent.appendChild(subHeading);    

    const contactCard = document.createElement('div');
    contactCard.setAttribute('id','contact-card');
    homeContent.appendChild(contactCard)

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

    const contactButton = document.getElementById('contact');
    contactButton.setAttribute('style', 'background-color:#8c0c26')
}
export default generateContactPage();