

const $ = (selector) => document.querySelector (selector);


// CAMBIO DE MODE

// ----- Variables -----

let btnMode = $ ('.mode');
let spanMode = $ ('.span-mode');
let header = $ ('header');
let section = $ ('.section-meme');
let asideText = $ ('.txt-aside');
let asideImage = $ ('.img-aside');
let btnText = $ ('.btn-text');
let btnImage = $ ('.btn-image');
let inputColors = $ ('.cont-color');




// ----- Eventos -----


btnMode.addEventListener ("click", (event)=> {
    header.classList.toggle("darkmode-header");
    let estaModoOscuro = header.classList.contains("darkmode-header");
    if (estaModoOscuro) {
    spanMode.innerText = "Modo Oscuro";
    }else{
    spanMode.innerText = "Modo Claro";
}
})


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
    inputColors.classList.toggle ("darkmode-header");
})




//  Eventos de BTN TEXT & IMAGE


btnText.addEventListener ("click", (event)=>{
   asideText.classList.remove ("display-none");
   asideImage.classList.add ("display-none");
    
})

btnImage.addEventListener ("click", (event)=>{
    asideText.classList.add ("display-none");
    asideImage.classList.remove ("display-none");
     
})





// TEXT EDITOR ASIDE

// ------ Variables -------

let body = document.body;


let topTextImput = $ ('.input-textarea1');
let bottomTextImput = $ ('.input-textarea2');
let textSup = $ ('.text-1');
let textInf = $ ('.text-2');

let checkboxTop = $ ('#checkbox-top');
let checkboxBottom = $ ('#checkbox-bottom');
let checkboxBack = $ ('#checkbox-back');

let fontSize = $ ('.font-size');
let fontSelect = $ ('.input-font');

let leftAlign = $ ('.btn-align1');
let centerAlign = $ ('.btn-align2');
let rightAlign = $ ('.btn-align3');

let noneOut = $ ('.btn-outline1');
let whiteOut = $ ('.btn-outline2');
let blackOut = $ ('.btn-outline3');

let fontColor = $ ('.input-color-font');
let textBackColor = $ ('.input-color-back');
let nameColor = $ ('.name-color');
let nameColorBack = $ ('.name-color-back');
let spacing = $ ('.input-space');
let lineSpacing = $ ('#line-spacing');
let imageBackColor = $ ('.input-img-color');
let nameColorImage = $ ('.name-color-image');

let contImage = $ ("#meme-container");


// ----- Eventos ------


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

fontColor.addEventListener ("change", (event)=>{
    nameColor.innerText = event.target.value;
    textSup.style.color = `${event.target.value}`;
    textInf.style.color = `${event.target.value}`;

})

textBackColor.addEventListener ("change", (event)=>{
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




// IMAGE EDITOR ASIDE


// ------ Variables -------

let inputUrl = $ ('#url');
let imageContainer = $ ('.image-container');
let brightnessInput = $ ('.brightness');
let opacityInput = $ ('.opacity');
let contrastInput = $ ('.contrast');
let blurInput = $ ('.blur');
let grayscaleInput = $ ('.grayscale');
let sepiaInput = $ ('.sepia');
let hueInput = $ ('.hue');
let saturationInput = $ ('.saturation');
let negativeInput = $ ('.negative');
let btnReset = $ ('.reset');

let btnBlend = $ ('.input-img-colortype');




// ------ Eventos -------


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


// ------ filtros -------


const updateAllFilters = () => {
imageContainer.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturationInput.value}%) invert(${negativeInput.value}) `

/* console.log (brightnessInput.value)
console.log (opacityInput.value)
console.log (contrastInput.value)
console.log (blurInput.value)
console.log (grayscaleInput.value)
console.log (sepiaInput.value)
console.log (hueInput.value)
console.log (saturationInput.value)
console.log (negativeInput.value) */
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
 
// Eventos Filtros


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





// DESCARGAR MEME


let btnDownload = $ ("#download");

const descargarMeme = () => {
  domtoimage.toBlob(contImage).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
};

btnDownload.addEventListener("click", descargarMeme);

