

const $ = (selector) => document.querySelector (selector);



// --------------- Variables ---------------


//general
let header = $ ('header');
let section = $ ('.section-meme');
let asideText = $ ('.txt-aside');
let asideImage = $ ('.img-aside');
let contImage = $ ("#meme-container");
let imageContainer = $ ('.image-container');

//textos
let titleTxt = $ ('.h2-txt');
let titleImg = $ ('.h2-img');
let subtUno = $ ('.subt1');
let subtDos = $ ('.subt2');
let subtTres = $ ('.subt3');
let subtCuatro = $ ('.subt4');
let subtCinco = $ ('.subt5');
let subtSeis = $ ('.subt6');
let subtSiete = $ ('.subt7');
let subtOcho = $ ('.subt8');
let subtNueve = $ ('.subt9');
let subtDiez = $ ('.subt10');
let spanMode = $ ('.span-mode');
let nameColor = $ ('.name-color');
let nameColorBack = $ ('.name-color-back');
let nameColorImage = $ ('.name-color-image');
let textSup = $ ('.text-1');
let textInf = $ ('.text-2');

//inputs/botones
let inputUrl = $ ('.url');
let topTextImput = $ ('.input-textarea1');
let bottomTextImput = $ ('.input-textarea2');
let fontSize = $ ('.font-size');
let fontSelect = $ ('.input-font');
let colorImgInput = $ ('.cont-color1');
let colorFontInput = $ ('.cont-color2');
let colorTxtBackInput = $ ('.cont-color3');
let spacing = $ ('.input-space');
let lineSpacing = $ ('#line-spacing');
let imageBackColor = $ ('.input-img-color');
let btnBlend = $ ('.input-img-colortype');
let leftAlign = $ ('.btn-align1');
let centerAlign = $ ('.btn-align2');
let rightAlign = $ ('.btn-align3');
let noneOut = $ ('.btn-outline1');
let whiteOut = $ ('.btn-outline2');
let blackOut = $ ('.btn-outline3');
let btnMode = $ ('.mode');
let btnText = $ ('.btn-text');
let btnImage = $ ('.btn-image');
let btnDownload = $ (".download");
let btnCloseTxt = $ (".close-txt");
let btnCloseImg = $ (".close-img");
let btnReset = $ ('.reset');
let filterInputs = $ ('.panel-control-slider input');



//checkboxs
let checkboxTop = $ ('#checkbox-top');
let checkboxBottom = $ ('#checkbox-bottom');
let checkboxBack = $ ('#checkbox-back');

//filtros
let brightnessInput = $ ('.brightness');
let opacityInput = $ ('.opacity');
let contrastInput = $ ('.contrast');
let blurInput = $ ('.blur');
let grayscaleInput = $ ('.grayscale');
let sepiaInput = $ ('.sepia');
let hueInput = $ ('.hue');
let saturationInput = $ ('.saturation');
let negativeInput = $ ('.negative');





// CAMBIO DE MODE ==============================================================


// --------------- Funciones ---------------


btnMode.addEventListener ("click", (event)=> {
    header.classList.toggle("darkmode-header");
    let estaModoOscuro = header.classList.contains("darkmode-header");
    if (estaModoOscuro) {
    spanMode.innerText = "Modo Claro";
    }else{
    spanMode.innerText = "Modo Oscuro";
}
})


// --------------- Eventos ---------------

btnMode.addEventListener ("click", (event)=> {
    btnMode.classList.toggle ("darkmode-header");
    btnText.classList.toggle ("darkmode-header");
    btnImage.classList.toggle ("darkmode-header");
    section.classList.toggle ("darkmode-back");
    asideText.classList.toggle ("darkmode-aside");
    asideImage.classList.toggle ("darkmode-aside");
    topTextImput.classList.toggle ("darkmode-header");
    bottomTextImput.classList.toggle ("darkmode-header");
    fontSelect.classList.toggle ("darkmode-header");
    leftAlign.classList.toggle ("darkmode-header");
    centerAlign.classList.toggle ("darkmode-header");
    rightAlign.classList.toggle ("darkmode-header");
    fontSize.classList.toggle ("darkmode-header");
    noneOut.classList.toggle ("darkmode-header");
    blackOut.classList.toggle ("darkmode-header");
    whiteOut.classList.toggle ("darkmode-header");
    lineSpacing.classList.toggle ("darkmode-header");
    spacing.classList.toggle ("darkmode-header");
    titleImg.classList.toggle ("darkmode-txt");
    titleTxt.classList.toggle ("darkmode-txt");
    subtUno.classList.toggle ("darkmode-txt");
    subtDos.classList.toggle ("darkmode-txt");
    subtTres.classList.toggle ("darkmode-txt");
    subtCuatro.classList.toggle ("darkmode-txt");
    subtCinco.classList.toggle ("darkmode-txt");
    subtSeis.classList.toggle ("darkmode-txt");
    subtSiete.classList.toggle ("darkmode-txt"); 
    subtOcho.classList.toggle ("darkmode-txt"); 
    subtNueve.classList.toggle ("darkmode-txt"); 
    subtDiez.classList.toggle ("darkmode-txt"); 
    colorFontInput.classList.toggle ("darkmode-header");
    colorImgInput.classList.toggle ("darkmode-header");
    colorTxtBackInput.classList.toggle ("darkmode-header"); 
    btnDownload.classList.toggle ("darkmode-header"); 
    inputUrl.classList.toggle ("darkmode-header");
    btnBlend.classList.toggle ("darkmode-header");
    btnReset.classList.toggle ("darkmode-header");
    brightnessInput.classList.toggle ("darkmode-header"); //no funciona ni agrupand lo inpus de filtros ni asi, individualmente
})


btnText.addEventListener ("click", (event)=>{
   asideText.classList.remove ("display-none");
   asideImage.classList.add ("display-none");
    
})

btnImage.addEventListener ("click", (event)=>{
    asideText.classList.add ("display-none");
    asideImage.classList.remove ("display-none");
     
})

btnCloseImg.addEventListener ("click", (event)=>{
    asideImage.classList.add  ("display-none");
     
})

btnCloseTxt.addEventListener ("click", (event)=>{
    asideText.classList.add ("display-none");
     
})


// TEXT EDITOR ASIDE =========================================================



// --------------- Funciones ---------------

checkboxBack.addEventListener ("change", (event)=>{
  
    if (event.target.checked) {
       textInf.style.backgroundColor = 'transparent';
       textSup.style.backgroundColor = 'transparent';
    }else{
       textInf.style.backgroundColor = fontColorBack.value;
       textSup.style.backgroundColor = fontColorBack.value;
    }
   
   })
   

// --------------- Eventos ---------------


bottomTextImput.addEventListener ("input", (event)=>{
    textInf.innerText = event.target.value;

})

topTextImput.addEventListener ("input", (event)=>{
    textSup.innerText = event.target.value;
   
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
    textSup.style.fontSize = `${event.target.value}px`;
    textInf.style.fontSize = `${event.target.value}px`;
})


fontSelect.addEventListener ("click", (event)=>{
    textSup.style.fontFamily = `${event.target.value}`;
    textInf.style.fontFamily = `${event.target.value}`;
  
})
  
leftAlign.addEventListener ("click", (event)=>{
    textSup.style.justifyContent = 'left';
    textInf.style.justifyContent = 'left';
})

centerAlign.addEventListener ("click", (event)=>{
    textSup.style.justifyContent = 'center';
    textInf.style.justifyContent = 'center';
})

rightAlign.addEventListener ("click", (event)=>{
    textSup.style.justifyContent = 'right';
    textInf.style.justifyContent = 'right';
})

noneOut.addEventListener ("click", (event)=>{
    textSup.style.webkitTextStrokeWidth = '0px';
    textInf.style.webkitTextStrokeWidth = '0px';
})


whiteOut.addEventListener ("click", (event)=>{
    textSup.style.webkitTextStrokeWidth = '1px';
    textInf.style.webkitTextStrokeWidth = '1px';
    textSup.style.webkitTextStrokeColor = 'white';
    textInf.style.webkitTextStrokeColor = 'white';
})

blackOut.addEventListener ("click", (event)=>{
    textSup.style.webkitTextStrokeWidth = '1px';
    textInf.style.webkitTextStrokeWidth = '1px';
    textSup.style.webkitTextStrokeColor = 'black';
    textInf.style.webkitTextStrokeColor = 'black';
})

colorFontInput.addEventListener ("change", (event)=>{
    nameColor.innerText = event.target.value;
    textSup.style.color = `${event.target.value}`;
    textInf.style.color = `${event.target.value}`;

})

colorTxtBackInput.addEventListener ("change", (event)=>{
    nameColorBack.innerText = event.target.value;
    textSup.style.backgroundColor = `${event.target.value}`;
    textInf.style.backgroundColor = `${event.target.value}`;
    
})


spacing.addEventListener ("input", (event)=>{
    textSup.style.paddingTop = `${event.target.value}px`;
    textInf.style.paddingTop = `${event.target.value}px`;
    textSup.style.paddingBottom = `${event.target.value}px`;
    textInf.style.paddingBottom = `${event.target.value}px`;
})

lineSpacing.addEventListener ("click", (event)=>{
    textSup.style.lineHeight = `${event.target.value}px`;
    textInf.style.lineHeight = `${event.target.value}px`;
    
})




// IMAGE EDITOR ASIDE ========================================================




// --------------- Funciones ---------------


const updateAllFilters = () => {
imageContainer.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturationInput.value}%) invert(${negativeInput.value}) `

};


const reseatAllFilters = () => {
    brightnessInput.value = 1;
    opacityInput.value = 1;
    contrastInput.value = 100;
    blurInput.value = 0;
    grayscaleInput.value = 0;
    sepiaInput.value = 0;
    hueInput.value = 0;
    saturationInput.value = 100; 
    negativeInput.value = 0;

    updateAllFilters (); // para que el reset de los filtros se aplique en la imagen.
}
 


// --------------- Eventos ---------------


brightnessInput.addEventListener ("change", (updateAllFilters));
opacityInput.addEventListener ("change", (updateAllFilters));
contrastInput.addEventListener ("change", (updateAllFilters));
blurInput.addEventListener ("change", (updateAllFilters));
grayscaleInput.addEventListener ("change", (updateAllFilters));
sepiaInput.addEventListener ("change", (updateAllFilters));
hueInput.addEventListener ("change", (updateAllFilters));
saturationInput.addEventListener ("change", (updateAllFilters));
negativeInput.addEventListener ("change", (updateAllFilters));
btnReset.addEventListener ("click", (reseatAllFilters));



inputUrl.addEventListener ("input", (event)=>{
    imageContainer.style.backgroundImage = `url("${event.target.value}")`;
    
})



imageBackColor.addEventListener ("change", (event)=>{
    nameColorImage.innerText = event.target.value;
    imageContainer.style.backgroundColor = `${event.target.value}`; 

})

btnBlend.addEventListener ("change", (event)=>{
    imageContainer.style.backgroundBlendMode = `${event.target.value}`;
})


// DESCARGAR MEME ====================================================



// --------------- Funcion ---------------

const descargarMeme = () => {
  domtoimage.toBlob(contImage).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};


// --------------- Evento ---------------


btnDownload.addEventListener("click", descargarMeme);



/* 
const mq = window.matchMedia ("(min-width: 768px)");

if (mq.matches) {
    console.log('la anchura del documento es 500px o mayor')
  } else {
    console.log('la anchura del documento es menos 500px')
  }

  if (mq.matches) {
    titles.style.color = 'red';
    //spanMode.classList.add ("display-none");
  }

  if (matchMedia) {
    mq.addListener(cambioDeAnchura);
    cambioDeAnchura(mq);
  }
  
 */
