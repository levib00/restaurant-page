export default function generateHomePage() {

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