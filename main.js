

const $ = (selector) => document.querySelector (selector);

//CAMBIO DE MODE - Variables

let btnMode = $ ('.cont-btn-mode #mode');
let header = $ ('header');
let btnHeader = $ ('#mode', '#btn-image', '#btn-text'); // no me funciona de  avarios
let section = $ ('section');
let aside = $ ('#txt-editor');
let textarea = $ ('#top-txt', '#bottom-txt'); 


//CAMBIO DE MODE - Eventos

btnMode.addEventListener ("click", (event)=> {
    header.classList.toggle ("darkmode-header");
    let estaModoOscuro = header.classList.contains ("darkmode-header");
    if (estaModoOscuro) {
    btnMode.span.innerText = "Modo Oscuro"
    }else{
    btnMode.span.innerText = "Modo Claro"
}
})

btnMode.addEventListener ("click", (event)=> {
    section.classList.toggle ("darkmode-back");
})

//NO SE ME APLICA EL CAMBIO DE COLOR DEL BACKGROUND
btnMode.addEventListener ("click", (event)=> {
    btnHeader.classList.toggle ("darkmode-btn");
})


//NO SE ME APLICA EL CAMBIO DE COLOR DEL BACKGROUND
btnMode.addEventListener ("click", (event)=> {
    aside.classList.toggle ("darkmode-aside");
    
})

btnMode.addEventListener ("click", (event)=> {
    textarea.classList.toggle ("darkmode-header");
    
})











// TEXT EDITOR ASIDE - Variables

let body = document.body;
let bottomTextMeme = $ ('.text-2');
let bottomTextImput = $ ('#bottom-txt');
let topTextMeme = $ ('.text-1');
let topTextImput = $ ('#top-txt');
let checkboxTop = $ ('#checkbox-top');
let checkboxBottom = $ ('#checkbox-bottom');
let textSup = $ ("#textOne");
let textInf = $ ("#textTwo");
let fontSize = $ ('.font-size');
let fontSelect = $ ('#font-type');
let leftAlign = $ ('#left-align');
let centerAlign = $ ('#center-align');
let rightAlign = $ ('#right-align');
let noneOut = $ ('#none-out');
let whiteOut = $ ('#white-out');
let blackOut = $ ('#black-out');


let contImage = $ ("#meme-container");


// TEXT EDITOR ASIDE - Eventos


bottomTextImput.addEventListener ("input", (event)=>{
    bottomTextMeme.innerText = event.target.value;

})

topTextImput.addEventListener ("input", (event)=>{
    topTextMeme.innerText = event.target.value;
   
})


checkboxTop.addEventListener ("click", (event)=>{
 textSup.classList.toggle ("display-none");
    console.log (event);
})

checkboxBottom.addEventListener ("click", (event)=>{
    textInf.classList.toggle ("display-none");
    console.log (event);
})


fontSize.addEventListener ("input", (event)=>{
    bottomTextMeme.style.fontSize = `${event.target.value}px`;
    topTextMeme.style.fontSize = `${event.target.value}px`;
})


fontSelect.addEventListener ("click", (event)=>{
    bottomTextMeme.style.fontFamily = `${event.target.value}`;
    topTextMeme.style.fontFamily = `${event.target.value}`;
  
})
  
leftAlign.addEventListener ("click", (event)=>{
    bottomTextMeme.style.justifyContent = 'left';
    topTextMeme.style.justifyContent = 'left';
})

centerAlign.addEventListener ("click", (event)=>{
    bottomTextMeme.style.justifyContent = 'center';
    topTextMeme.style.justifyContent = 'center';
})

rightAlign.addEventListener ("click", (event)=>{
    bottomTextMeme.style.justifyContent = 'right';
    topTextMeme.style.justifyContent = 'right';
})

noneOut.addEventListener ("click", (event)=>{
    bottomTextMeme.style.webkitTextStrokeWidth = '0px';
    topTextMeme.style.webkitTextStrokeWidth = '0px';
})


whiteOut.addEventListener ("click", (event)=>{
    bottomTextMeme.style.webkitTextStrokeWidth = '1px';
    topTextMeme.style.webkitTextStrokeWidth = '1px';
    bottomTextMeme.style.webkitTextStrokeColor = 'white';
    topTextMeme.style.webkitTextStrokeColor = 'white';
})

blackOut.addEventListener ("click", (event)=>{
    bottomTextMeme.style.webkitTextStrokeWidth = '1px';
    topTextMeme.style.webkitTextStrokeWidth = '1px';
    bottomTextMeme.style.webkitTextStrokeColor = 'black';
    topTextMeme.style.webkitTextStrokeColor = 'black';
})

/* -webkit-text-stroke-color: red;
    -webkit-text-stroke-width: 0px;
 */

/* 
option.addEventListener ("click", (event)=>{
    /* topTextMeme.innerText = event.target.value; */
 

  /*   if (event.target.id === 'arial'){
        console.log ('soy 2');
    } */
 



// EJERCICIO DE PRUEBA - FUNCIONA OK

/* body.addEventListener("keydown", (event) => {
    console.log(event);
  
    let code = event.code;
  
    if (code === "Space") {
      alert("Saltaste");
    }
  
    if (code === "Enter") {
      alert("Aceptaste");
    }
})
 */



// DESCARGAR MEME


let btnDownload = $ ("#download");

const descargarMeme = () => {
  domtoimage.toBlob(contImage).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);