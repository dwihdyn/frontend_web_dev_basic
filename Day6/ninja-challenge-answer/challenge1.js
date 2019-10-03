// Challenge 1: Write your answers here

// 1.Change background color of the entire page
document.querySelector('body').style.backgroundColor = "red";

// 2.Add a background image to <header>
document.querySelector('header').style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg')";

// 3.Change the color of all <h2>s using for loop
let title = document.getElementsByTagName('h2');
for (let i=0; i<title.length;i++){
    title[i].style.color = "blue";
}

// 4.Update the profile page to your personal info:
// -name
document.getElementById('name').innerHTML = "Jinqwen";
// -descriptions
document.querySelector('p > strong').innerHTML = 'HTML, CSS and Javascript'

// replacing certain text with other text
let desc = document.getElementsByClassName('descriptions')[1];
let newStr = desc.innerHTML.replace('coding','swimming, jogging')
desc.innerHTML = newStr

// 5.Change profile picture and skill picture
let images =document.getElementsByTagName('img')
for (let i=0;i<images.length;i++){
    images[i].setAttribute('src','http://cdn.shopify.com/s/files/1/1061/1924/products/Hungry_Face_Emoji_grande.png?v=1480481053')
}