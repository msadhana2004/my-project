var myNodelist = document.getElementsByTagName("li")
var i;
for (i=0; i< myNodelist.length;i++ ) {
    var span = document.createElement("span");
    var text = document.createElement("\U00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i=0; i<close.length; i++) {
    close[i].onclick = function(){
        var div = this. parentElement;
        div. style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName == 'li')
{
    ev.target.classList.toggle('checked');
}}, false);