/*
Evento focus
*/

//Variables con el componente para los ejemplos click
var EventoClick1 = document.getElementById("EventoClick1");
var EventoClick2 = document.getElementById("EventoClick2");
var EventoClick3 = document.getElementById("EventoClick3");

//Eventos click
EventoClick1.addEventListener("click",EventoClick1_action)
EventoClick2.addEventListener("click",EventoClick2_action)
EventoClick3.addEventListener("click",EventoClick3_action)

//funciones para el evento click
function EventoClick1_action(){
    EventoClick1.textContent = "Haz escrito en la textbox:"+EventoClick2.value
    console.log("Se ha activado el evento click");
}
function EventoClick2_action(){
    EventoClick2.placeholder = "";
    console.log("Se ha activado el evento click")
}
function EventoClick3_action(){
    EventoClick3.textContent = "Haz dado click en el texto"
}

/*
Evento focus
*/

//variables para los ejemplos focus
var EventoFocus1 = document.getElementById("EventoFocus1");
var EventoFocus2 = document.getElementById("EventoFocus2");
var EventoFocus3 = document.getElementById("EventoFocus3");

//Eventos focus
EventoFocus1.addEventListener("focus",EventoFocus1_action);
EventoFocus2.addEventListener("focus",EventoFocus2_action);
EventoFocus3.addEventListener("focus",EventoFocus3_action);

//Eventos blur para contrarestar el evento focus
EventoFocus1.addEventListener("blur",EventoBlur1_action);
EventoFocus2.addEventListener("blur",EventoBlur2_action);
EventoFocus3.addEventListener("blur",EventoBlur3_action);

//funciones para los eventos focus
function EventoFocus1_action(){
    EventoFocus1.style.background = "red"
}
function EventoFocus2_action(){
    EventoFocus2.style.background = "red"
}
function EventoFocus3_action(){
    EventoFocus3.style.background = "red"
}

//funciones para los eventos blur
function EventoBlur1_action(){
    EventoFocus1.style.background = "green"
}
function EventoBlur2_action(){
    EventoFocus2.style.background = "green"
}
function EventoBlur3_action(){
    EventoFocus3.style.background = "green"
}

/*
Eventos mouseover
*/

//elementos de los ejemplos
var EventoMouseOver1 = document.getElementById("EventoMouseOver1");
var EventoMouseOver2 = document.getElementById("EventoMouseOver2");
var EventoMouseOver3 = document.getElementById("EventoMouseOver3");

//eventos mouse over
EventoMouseOver1.addEventListener("mouseover",EventoMouseOver1_action);
EventoMouseOver2.addEventListener("mouseover",EventoMouseOver2_action);
EventoMouseOver3.addEventListener("mouseover",EventoMouseOver3_action);

//Eventos mouse out para constrastar con el evento mouseover
EventoMouseOver1.addEventListener("mouseout",EventoMouseOut1_action);
EventoMouseOver2.addEventListener("mouseout",EventoMouseOut2_action);
EventoMouseOver3.addEventListener("mouseout",EventoMouseOut3_action);

//funciones para los eventos
function EventoMouseOver1_action(){
    EventoMouseOver1.textContent = "El mouse esta en el elemento";
}
function EventoMouseOver2_action(){
    EventoMouseOver2.placeholder = "El mouse esta encima del elemento";
}
function EventoMouseOver3_action(){
    EventoMouseOver3.textContent = "El mouse esta encima del elemento";
}

//Eventos mouse out
function EventoMouseOut1_action(){
    EventoMouseOver1.textContent = "El mouse salio del elemento";
}
function EventoMouseOut2_action(){
    EventoMouseOver2.placeholder = "El mouse salio del elemento";
}
function EventoMouseOut3_action(){
    EventoMouseOver3.textContent = "El mouse salio del elemento";
}