const noti = document.querySelector(".notification")

const listImages = [
    'images/IVEP1730.PNG',
    'images/IVEP1730.PNG',
    'images/IVEP1730.PNG',
    'images/IVEP1730.PNG'
]

const listComment = [
    "I Love You",
    "Name",
    "Age",
    "I Love You"
]

function loadFinish(){
   setInterval(function(){
    noti.children[0].children[0].src =
        listImages[Math.floor(Math.random() * listImages.length)]

    noti.children[1].textContent =
        listComment[Math.floor(Math.random() * listComment.length)]

    noti.classList.toggle('showNotification')
   },2000)
}