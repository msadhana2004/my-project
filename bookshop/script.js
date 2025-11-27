//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
}
)

//select the cancel button
var cancelpopup=document.getElementById("cancel-popup")
 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
// select container,add-book-title-input,book-author-input,book-description-input
 var container=document.querySelector("container")
 var addbook = document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-title-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var bookdescriptioninput=document.getElementById("book-description-input")

 container.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${bookdescriptioninput.value}</h2>
    <h3>${bookauthorinput.value}</h3>
    <p>${bookdescriptioninput.value}</p>
    <button>delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
  
  
 })