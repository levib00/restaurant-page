export default function generateContactPage() {

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
