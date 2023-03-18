var btnContato = document.querySelector('.btn-contato');

btnContato.addEventListener('click', function () {
    var boxContato = document.querySelector('.contato-info');
    //console.log(boxContato);
    boxContato.classList.toggle('esta-aberto');

    this.classList.toggle('mudar-icone-contato');
});

//Elementos on scroll com biblioteca waypoints
var myScrollDown = document.querySelector('.scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('fade-out');
    },
    offset: '80%'
});

/*var myScrollDownMenu = document.querySelector('.topbar');
var waypoint = new Waypoint({
    element: myScrollDownMenu,
    handler: function () {
        myScrollDownMenu.classList.toggle('fade-in');
    },
    offset: '30%'
});*/


//Hover nos cards de skills
/*
function TextReveal(text) {
    var display = document.querySelector('.card-skills');
    display.innerHTML = "";
    display.innerHTML = text;
}

function Texthide() {
    var display = document.querySelector('.card-skills');
    display.innerHTML = "";
    display.innerHTML = "What would you like to do?";
}
*/