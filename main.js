

const $ = (selector) => document.querySelector (selector);

// BOTONES HEADER

// ----- Variables -----

let btnMode = $ ('.cont-btn-mode #mode');
let header = $ ('header');
let btnHeader = $ ('#mode', '#btn-image', '#btn-text'); // no me funciona de  avarios
let section = $ ('section');
let asideText = $ ('#txt-editor');
let asideImage = $ ('#img-editor');
let textarea = $ ('#top-txt', '#bottom-txt'); 
let btnText = $ ('#btn-text');
let btnImage = $ ('#btn-image');

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
    btnMode.classList.toggle ("darkmode-btn");
})


//NO SE ME APLICA EL CAMBIO DE COLOR DEL BACKGROUND
btnMode.addEventListener ("click", (event)=> {
    asideText.classList.toggle ("darkmode-aside");
    
})

btnMode.addEventListener ("click", (event)=> {
    textarea.classList.toggle ("darkmode-header");
    
})



//  BOTONES PARA EDITORES


//  no se me aplica el display none
btnText.addEventListener ("click", (event)=>{
   asideText.classList.remove ("display-none");
   asideImage.classList.add ("display-none");
    console.log (event);
    
})

btnImage.addEventListener ("click", (event)=>{
    asideText.classList.add ("display-none");
    asideImage.classList.remove ("display-none");
     console.log (event);
     
 })





// TEXT EDITOR ASIDE

// ------ Variables -------

let body = document.body;
let bottomTextMeme = $ ('.text-2');
let bottomTextImput = $ ('#bottom-txt');
let topTextMeme = $ ('.text-1');
let topTextImput = $ ('#top-txt');
let checkboxTop = $ ('#checkbox-top');
let checkboxBottom = $ ('#checkbox-bottom');
let checkboxBack = $ ('#checkbox-back');
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
let fontColor = $ ('.input-color-font');
let fontColorBack = $ ('.input-color-back');
let nameColor = $ ('.name-color');
let nameColorBack = $ ('.name-color-back');
let spacing = $ ('.input-space');
let lineSpacing = $ ('#line-spacing');


let contImage = $ ("#meme-container");


// TEXT EDITOR ASIDE ----- Eventos ------


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



checkboxBack.addEventListener ("change", (event)=>{
  
 if (event.target.checked) {
    textInf.style.backgroundColor = 'transparent';
    textSup.style.backgroundColor = 'transparent';
 }else{
    textInf.style.backgroundColor = fontColorBack.value;
    textSup.style.backgroundColor = fontColorBack.value;
 }

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

fontColor.addEventListener ("change", (event)=>{
    nameColor.innerText = event.target.value;
    bottomTextMeme.style.color = `${event.target.value}`;
    topTextMeme.style.color = `${event.target.value}`;

})

fontColorBack.addEventListener ("change", (event)=>{
    nameColorBack.innerText = event.target.value;
    bottomTextMeme.style.backgroundColor = `${event.target.value}`;
    topTextMeme.style.backgroundColor = `${event.target.value}`;
    
    console.log(event);    
})


spacing.addEventListener ("input", (event)=>{
    bottomTextMeme.style.paddingTop = `${event.target.value}px`;
    topTextMeme.style.paddingTop = `${event.target.value}px`;
    bottomTextMeme.style.paddingBottom = `${event.target.value}px`;
    topTextMeme.style.paddingBottom = `${event.target.value}px`;
})

lineSpacing.addEventListener ("click", (event)=>{
    bottomTextMeme.style.lineHeight = `${event.target.value}px`;
    topTextMeme.style.lineHeight = `${event.target.value}px`;
    
})




// TEXT EDITOR ASIDE

// ------ Variables -------

let inputUrl = $ ('#url');
let imageContainer = $ ('.image-container');


inputUrl.addEventListener ("input", (event)=>{
    imageContainer.style.backgroundImage = `url("${event.target.value}")`;
    
})


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