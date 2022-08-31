var btn = document.querySelector('.menu-moblie');
var nav = document.getElementById("header");
var height = nav.clientHeight;
function showMenu(){
    var isClosed = nav.clientHeight === height;
    if(isClosed){
        nav.style.height = 'auto';
    }else{
        nav.style.height = null;
    }
}

btn.addEventListener("click",showMenu);


var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0 ; i < menuItems.length ; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(){
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParent){
            nav.style.height = null;
        }
    }
}