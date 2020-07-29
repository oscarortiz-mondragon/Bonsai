let small = document.getElementById("small")
let medium = document.getElementById("medium")
let large = document.getElementById('large')

let image = document.querySelector("img")

small.onclick =  function() {
    image.removeAttribute("src")
image.setAttribute("src","https://images.pexels.com/photos/212942/pexels-photo-212942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")}
medium.onclick = function (){
    image.removeAttribute("src")
    image.setAttribute("src","https://images.pexels.com/photos/2977433/pexels-photo-2977433.jpeg?cs=srgb&dl=green-leafed-bonsai-plant-2977433.jpg&fm=jpg")}
large.onclick = function() {
    image.removeAttribute("src")
    image.setAttribute("src","https://cdn.pixabay.com/photo/2017/11/02/05/57/bonsai-2910211_1280.jpg")
}

"https://images.pexels.com/photos/212942/pexels-photo-212942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"