
// index.html

function movGlowRotate() {
    var x = document.getElementById("glow-rotate");
    x.style.transition = "all 5s";
    x.style.transform = "rotate(360deg)";
    var x = document.getElementById("glow-simple");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";

    // Index Doble Glow
    var x = document.getElementById("index-shine1");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
    var x = document.getElementById("index-shine2");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
}

function mouGlowRotate() {
    var x = document.getElementById("glow-rotate");
    x.style.transition = "all 5s";
    x.style.transform = "rotate(-360deg)";
    var x = document.getElementById("glow-simple");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";

    // Index Doble Glow
    var x = document.getElementById("index-shine1");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
    var x = document.getElementById("index-shine2");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
}
function ComençaRedireccio() {
    var x = document.getElementById("boto-index");
    x.style.cursor = "url(./cursor/cursor-loading1.png), auto";
    setTimeout('setCursor2()', 1000); 
    setTimeout('Redireccio()', 2000); 
}
function Redireccio() {  
    window.location="./menu.html"; 
}

function setCursor2() {
    var x = document.getElementById("boto-index");
    x.style.cursor = "url(./cursor/cursor-loading2.png), auto";
    setTimeout('setCursor3()', 1000);
}
function setCursor3() {
    var x = document.getElementById("boto-index");
    x.style.cursor = "url(./cursor/cursor-loading3.png), auto";
}
    // window.location.href='./menu.html'
// //////////////////////////////////////////

function modelsNegoci() {
    var x = document.getElementById("botons");
    x.style.visibility = "visible";
    var x = document.getElementById("fons-blur");
    x.style.visibility = "visible";
    var x = document.getElementById("fons-blur2");
    x.style.visibility = "visible";
    var x = document.getElementById("imatge-fons-models");
    x.style.visibility = "visible";
}

function modelsNegociOut() {
    var x = document.getElementById("botons");
    x.style.visibility = "hidden";
    var x = document.getElementById("fons-blur");
    x.style.visibility = "hidden";
    var x = document.getElementById("fons-blur2");
    x.style.visibility = "hidden";
    var x = document.getElementById("imatge-fons-models");
    x.style.visibility = "hidden";
}

function apartatsOut() {
    var x = document.getElementById("apartats");
    x.style.visibility = "hidden";
    var x = document.getElementById("a1");
    x.style.visibility = "hidden";
    var x = document.getElementById("a2");
    x.style.visibility = "hidden";
    var x = document.getElementById("a3");
    x.style.visibility = "hidden";
    var x = document.getElementById("a4");
    x.style.visibility = "hidden";
    var x = document.getElementById("ac1");
    x.style.visibility = "hidden";
    var x = document.getElementById("ac2");
    x.style.visibility = "hidden";
    var x = document.getElementById("ac3");
    x.style.visibility = "hidden";
    var x = document.getElementById("ac4");
    x.style.visibility = "hidden";
}

// ----------------------------------------------------
// Models de Negoci (menu.html)

function mouseoverButton1() {
    var x = document.getElementById("glow1");
    x.style.opacity = "100%";
    var x = document.getElementById("p2p");
    x.style.visibility = "visible";
}
function mouseoutButton1() {
    var x = document.getElementById("glow1");
    x.style.opacity = "0%";
    var x = document.getElementById("p2p");
    x.style.visibility = "hidden";
}
function onclickButton1() {
    var x = document.getElementById("a1");
    x.style.visibility = "visible";
    var x = document.getElementById("apartats");
    x.style.visibility = "visible";
    var x = document.getElementById("ac1");
    x.style.visibility = "visible";
}


function mouseoverButton2() {
    var x = document.getElementById("glow2");
    x.style.opacity = "100%";
    var x = document.getElementById("f2p");
    x.style.visibility = "visible";
}
function mouseoutButton2() {
    var x = document.getElementById("glow2");
    x.style.opacity = "0%";
    var x = document.getElementById("f2p");
    x.style.visibility = "hidden";
}
function onclickButton2() {
    var x = document.getElementById("a2");
    x.style.visibility = "visible";
    var x = document.getElementById("apartats");
    x.style.visibility = "visible";
    var x = document.getElementById("ac2");
    x.style.visibility = "visible";
}


function mouseoverButton3() {
    var x = document.getElementById("glow3");
    x.style.opacity = "100%";
    var x = document.getElementById("fm");
    x.style.visibility = "visible";
}
function mouseoutButton3() {
    var x = document.getElementById("glow3");
    x.style.opacity = "0%";
    var x = document.getElementById("fm");
    x.style.visibility = "hidden";
}
function onclickButton3() {
    var x = document.getElementById("a3");
    x.style.visibility = "visible";
    var x = document.getElementById("apartats");
    x.style.visibility = "visible";
    var x = document.getElementById("ac3");
    x.style.visibility = "visible";
}


function mouseoverButton4() {
    var x = document.getElementById("glow4");
    x.style.opacity = "100%";
    var x = document.getElementById("sub");
    x.style.visibility = "visible";
}
function mouseoutButton4() {
    var x = document.getElementById("glow4");
    x.style.opacity = "0%";
    var x = document.getElementById("sub");
    x.style.visibility = "hidden";
}
function onclickButton4() {
    var x = document.getElementById("a4");
    x.style.visibility = "visible";
    var x = document.getElementById("apartats");
    x.style.visibility = "visible";
    var x = document.getElementById("ac4");
    x.style.visibility = "visible";
}



// ----------------------------------------------------
// Sobres (dissenyador.html)



// function onclickSobre1() {
//     var x = document.getElementById("sobre-in-1");
//     x.style.visibility = "visible";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-2");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-3");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";

//     //Vinyetes
//     var x = document.getElementById("etiqueta1");
//     x.style.transition = "all 0s";
//     x.style.visibility = "visible";
//     var x = document.getElementById("etiqueta2");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";
//     var x = document.getElementById("etiqueta3");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";

// }
// function mouseoverSobre1() {
//     var x = document.getElementById("sobre-in-1");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1.1) rotate(-5deg)";

//     var x = document.getElementById("brillo-blau");
//     x.style.visibility = "visible";
//     x.style.transition = "0.4s";
//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(8)";

//     // El fons comença a brillar

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "2s";
//     x.style.opacity = "100%";

//     // Desapareix la vinyeta (temporalment)

//     var x = document.getElementById("etiqueta1");
//     x.style.transition = "0.5s";
//     x.style.opacity = "0%";
// }
// function mouseoutSobre1() {
//     var x = document.getElementById("sobre-in-1");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1) rotate(0deg)";

//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(0)";
//     x.style.visibility = "hidden";

//     // El brillo del fons comença a desapareixer

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "1s";
//     x.style.opacity = "0%";

//     // Apareix la vinyeta (Fins canvi)

//     var x = document.getElementById("etiqueta1");
//     x.style.transition = "1s";
//     x.style.opacity = "100%";
// }



// function onclickSobre2() {
//     var x = document.getElementById("sobre-in-1");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-2");
//     x.style.visibility = "visible";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-3");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";

//     //Vinyetes
//     var x = document.getElementById("etiqueta1");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";
//     var x = document.getElementById("etiqueta2");
//     x.style.transition = "all 0s";
//     x.style.visibility = "visible";
//     var x = document.getElementById("etiqueta3");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";
// }
// function mouseoverSobre2() {
//     var x = document.getElementById("sobre-in-2");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1.1) rotate(-5deg)";
    
//     var x = document.getElementById("brillo-blau");
//     x.style.visibility = "visible";
//     x.style.transition = "0.4s";
//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(8)";

//     // El fons comença a brillar

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "2s";
//     x.style.opacity = "100%";

//     // Desapareix la vinyeta (temporalment)

//     var x = document.getElementById("etiqueta2");
//     x.style.transition = "0.5s";
//     x.style.opacity = "0%";
// }
// function mouseoutSobre2() {
//     var x = document.getElementById("sobre-in-2");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1) rotate(0deg)";

//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(0)";
//     x.style.visibility = "hidden";

//     // El brillo del fons comença a desapareixer

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "1s";
//     x.style.opacity = "0%";

//     // Apareix la vinyeta (Fins canvi)

//     var x = document.getElementById("etiqueta2");
//     x.style.transition = "1s";
//     x.style.opacity = "100%";
// }



// function onclickSobre3() {
//     var x = document.getElementById("sobre-in-1");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-2");
//     x.style.visibility = "hidden";
//     x.style.transition = "all 0s";
//     var x = document.getElementById("sobre-in-3");
//     x.style.visibility = "visible";
//     x.style.transition = "all 0s";

//     //Vinyetes
//     var x = document.getElementById("etiqueta1");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";
//     var x = document.getElementById("etiqueta2");
//     x.style.transition = "all 0s";
//     x.style.visibility = "hidden";
//     var x = document.getElementById("etiqueta3");
//     x.style.transition = "all 0s";
//     x.style.visibility = "visible";
// }
// function mouseoverSobre3() {
//     var x = document.getElementById("sobre-in-3");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1.1) rotate(-5deg)";

//     var x = document.getElementById("brillo-blau");
//     x.style.visibility = "visible";
//     x.style.transition = "0.4s";
//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(8)";

//     // El fons comença a brillar

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "2s";
//     x.style.opacity = "100%";

//     // Desapareix la vinyeta (temporalment)

//     var x = document.getElementById("etiqueta3");
//     x.style.transition = "0.5s";
//     x.style.opacity = "0%";
// }
// function mouseoutSobre3() {
//     var x = document.getElementById("sobre-in-3");
//     x.style.transition = "all 0.2s";
//     x.style.cursor = "pointer";
//     x.style.transform = "scale(1) rotate(0deg)";

//     var x = document.getElementById("brillo-blau");
//     x.style.transform = "scale(0)";
//     x.style.visibility = "hidden";

//     // El brillo del fons comença a desapareixer

//     var x = document.getElementById("fons-brillo");
//     x.style.transition = "1s";
//     x.style.opacity = "0%";

//     // Apareix la vinyeta (Fins canvi)

//     var x = document.getElementById("etiqueta3");
//     x.style.transition = "1s";
//     x.style.opacity = "100%";
// }






// Menu 2 Brillo Botons
// Boto 1
function mouseoverButton1Menu2() {
    var x = document.getElementById("boto-brillo-1");
    x.style.visibility = "visible";
}
function mouseoutButton1Menu2() {
    var x = document.getElementById("boto-brillo-1");
    x.style.visibility = "hidden";
}
// Boto 2
function mouseoverButton2Menu2() {
    var x = document.getElementById("boto-brillo-2");
    x.style.visibility = "visible";
}
function mouseoutButton2Menu2() {
    var x = document.getElementById("boto-brillo-2");
    x.style.visibility = "hidden";
}
// Boto 3
function mouseoverButton3Menu2() {
    var x = document.getElementById("boto-brillo-3");
    x.style.visibility = "visible";
}
function mouseoutButton3Menu2() {
    var x = document.getElementById("boto-brillo-3");
    x.style.visibility = "hidden";
}
// Boto 4
function mouseoverButton4Menu2() {
    var x = document.getElementById("boto-brillo-4");
    x.style.visibility = "visible";
}
function mouseoutButton4Menu2() {
    var x = document.getElementById("boto-brillo-4");
    x.style.visibility = "hidden";
}



// Formalitzar conceptes del joc

function onclickNext() {
    var x = document.getElementById("img-taula");
    x.style.visibility = "hidden";
}
function onclickBefore() {
    var x = document.getElementById("img-taula");
    x.style.visibility = "visible";
}

// Botó Exemples

function onclickExemples() {
    var x = document.getElementById("img-taula");
    x.style.visibility = "hidden";
    var x = document.getElementById("wow-logo");
    x.style.visibility = "visible";
    var x = document.getElementById("div-story");
    x.style.visibility = "visible";

    var x = document.getElementById("boto-exemple-img");
    x.style.visibility = "hidden";
    var x = document.getElementById("boto-exemple-hitbox");
    x.style.visibility = "hidden";

    var x = document.getElementById("boto-exemple-surt-img");
    x.style.visibility = "visible";
    var x = document.getElementById("boto-exemple-surt-hitbox");
    x.style.visibility = "visible";
}
function onclickExemplesSurt() {
    var x = document.getElementById("img-taula");
    x.style.visibility = "visible";
    var x = document.getElementById("wow-logo");
    x.style.visibility = "hidden";
    var x = document.getElementById("div-story");
    x.style.visibility = "hidden";

    var x = document.getElementById("boto-exemple-surt-img");
    x.style.visibility = "hidden";
    var x = document.getElementById("boto-exemple-surt-hitbox");
    x.style.visibility = "hidden";

    var x = document.getElementById("boto-exemple-img");
    x.style.visibility = "visible";
    var x = document.getElementById("boto-exemple-hitbox");
    x.style.visibility = "visible";
    
}
function onmouseoverExemplesHover() {
    var x = document.getElementById("boto-exemple-brillo");
    x.style.visibility = "visible"; 
}
function onmouseoutExemplesHover() {
    var x = document.getElementById("boto-exemple-brillo");
    x.style.visibility = "hidden";
}
function onmouseoverExemplesHover2() {
    var x = document.getElementById("boto-exemple-brillo");
    x.style.visibility = "visible"; 
}
function onmouseoutExemplesHover2() {
    var x = document.getElementById("boto-exemple-brillo");
    x.style.visibility = "hidden";
}

// Obre menu 3C's

function onclick3cs() {
    var x = document.getElementById("menu-3c-img");
    x.style.visibility = "visible";
    var x = document.getElementById("menu-3c-hitbox1");
    x.style.visibility = "visible";
    var x = document.getElementById("menu-3c-hitbox2");
    x.style.visibility = "visible";
    var x = document.getElementById("menu-3c-hitbox3");
    x.style.visibility = "visible";
}

// Menu 3C's brillar el text quan faig hover

function onmouseover3cGlow1() {
    var x = document.getElementById("glow1-3c");
    x.style.visibility = "visible";
}
function onmouseout3cGlow1() {
    var x = document.getElementById("glow1-3c");
    x.style.visibility = "hidden";
}

function onmouseover3cGlow2() {
    var x = document.getElementById("glow2-3c");
    x.style.visibility = "visible";
}
function onmouseout3cGlow2() {
    var x = document.getElementById("glow2-3c");
    x.style.visibility = "hidden";
}

function onmouseover3cGlow3() {
    var x = document.getElementById("glow3-3c");
    x.style.visibility = "visible";
}
function onmouseout3cGlow3() {
    var x = document.getElementById("glow3-3c");
    x.style.visibility = "hidden";
}

// lacamera.hml

    // Apartat 1

function onclickApartat1() {
    // Buttons
    var x = document.getElementById("prova111");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-after1");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-next1");
    x.style.visibility = "visible";

    var x = document.getElementById("prova222");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova333");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next3");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova444");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next4");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova555");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next5");
    x.style.visibility = "hidden";




    // Contingut
    var x = document.getElementById("prova11");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-h1-1");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-p-1");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-hr-1");
    x.style.visibility = "visible";
    var x = document.getElementById("fixed-cam-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("fixed-cam-img-2");
    x.style.visibility = "visible";


    var x = document.getElementById("prova22");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova33");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova44");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova55");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-2");
    x.style.visibility = "hidden";
}

    // Apartat 2

function onclickApartat2() {
    // Buttons
    var x = document.getElementById("prova111");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next1");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova222");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-after2");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-next2");
    x.style.visibility = "visible";

    var x = document.getElementById("prova333");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next3");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova444");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next4");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova555");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next5");
    x.style.visibility = "hidden";




    // Contingut
    var x = document.getElementById("prova11");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova22");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-h1-2");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-p-2");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-hr-2");
    x.style.visibility = "visible";
    var x = document.getElementById("scroll-cam-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("scroll-cam-img-2");
    x.style.visibility = "visible";


    var x = document.getElementById("prova33");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova44");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova55");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-2");
    x.style.visibility = "hidden";
}
    
    // Apartat 3

function onclickApartat3() {
    // Buttons
    var x = document.getElementById("prova111");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next1");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova222");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova333");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-after3");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-next3");
    x.style.visibility = "visible";

    var x = document.getElementById("prova444");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next4");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova555");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next5");
    x.style.visibility = "hidden";




    // Contingut
    var x = document.getElementById("prova11");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova22");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova33");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-h1-3");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-p-3");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-hr-3");
    x.style.visibility = "visible";
    var x = document.getElementById("parallax-cam-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("parallax-cam-img-2");
    x.style.visibility = "visible";

    var x = document.getElementById("prova44");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova55");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-2");
    x.style.visibility = "hidden";
}

    // Apartat 4

function onclickApartat4() {
    // Buttons
    var x = document.getElementById("prova111");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next1");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova222");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova333");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next3");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova444");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-after4");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-next4");
    x.style.visibility = "visible";

    var x = document.getElementById("prova555");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next5");
    x.style.visibility = "hidden";




    // Contingut
    var x = document.getElementById("prova11");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova22");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova33");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova44");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-h1-4");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-p-4");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-hr-4");
    x.style.visibility = "visible";
    var x = document.getElementById("first-cam-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("first-cam-img-2");
    x.style.visibility = "visible";


    var x = document.getElementById("prova55");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("third-cam-img-2");
    x.style.visibility = "hidden";
}

    // Apartat 5

function onclickApartat5() {
    // Buttons
    var x = document.getElementById("prova111");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next1");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova222");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova333");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next3");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova444");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-after4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-b-next4");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova555");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-after5");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-b-next5");
    x.style.visibility = "visible";




    // Contingut
    var x = document.getElementById("prova11");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("fixed-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova22");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("scroll-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova33");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("parallax-cam-img-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("prova44");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-h1-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-p-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("cam-hr-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("first-cam-img-2");
    x.style.visibility = "hidden";


    var x = document.getElementById("prova55");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-h1-5");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-p-5");
    x.style.visibility = "visible";
    var x = document.getElementById("cam-hr-5");
    x.style.visibility = "visible";
    var x = document.getElementById("third-cam-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("third-cam-img-2");
    x.style.visibility = "visible";
}

    // Botó Next Glow

function onmouseover3cNext() {
    var x = document.getElementById("fons-brillo-next");
    x.style.visibility = "visible";
}
function onmouseout3cNext() {
    var x = document.getElementById("fons-brillo-next");
    x.style.visibility = "hidden";
}



// form-videojoc.html sobres



// function onmouseoverFromSobre1() {
//     var x = document.getElementById("form-sobre1");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-1");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre1() {
//     var x = document.getElementById("form-sobre1");
//     x.style.zIndex = "1004";
//     var x = document.getElementById("form-sobre-hitbox-1");
//     x.style.zIndex = "1104";
// }


// function onmouseoverFromSobre2() {
//     var x = document.getElementById("form-sobre2");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-2");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre2() {
//     var x = document.getElementById("form-sobre2");
//     x.style.zIndex = "1003";
//     var x = document.getElementById("form-sobre-hitbox-2");
//     x.style.zIndex = "1103";
// }


// function onmouseoverFromSobre3() {
//     var x = document.getElementById("form-sobre3");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-3");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre3() {
//     var x = document.getElementById("form-sobre3");
//     x.style.zIndex = "1002";
//     var x = document.getElementById("form-sobre-hitbox-3");
//     x.style.zIndex = "1102";
// }


// function onmouseoverFromSobre4() {
//     var x = document.getElementById("form-sobre4");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-4");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre4() {
//     var x = document.getElementById("form-sobre4");
//     x.style.zIndex = "1001";
//     var x = document.getElementById("form-sobre-hitbox-4");
//     x.style.zIndex = "1101";
// }


// function onmouseoverFromSobre5() {
//     var x = document.getElementById("form-sobre5");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-5");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre5() {
//     var x = document.getElementById("form-sobre5");
//     x.style.zIndex = "1008";
//     var x = document.getElementById("form-sobre-hitbox-5");
//     x.style.zIndex = "1108";
// }


// function onmouseoverFromSobre6() {
//     var x = document.getElementById("form-sobre6");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-6");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre6() {
//     var x = document.getElementById("form-sobre6");
//     x.style.zIndex = "1007";
//     var x = document.getElementById("form-sobre-hitbox-6");
//     x.style.zIndex = "1107";
// }


// function onmouseoverFromSobre7() {
//     var x = document.getElementById("form-sobre7");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-7");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre7() {
//     var x = document.getElementById("form-sobre7");
//     x.style.zIndex = "1006";
//     var x = document.getElementById("form-sobre-hitbox-7");
//     x.style.zIndex = "1106";
// }


// function onmouseoverFromSobre8() {
//     var x = document.getElementById("form-sobre8");
//     x.style.zIndex = "1009";
//     var x = document.getElementById("form-sobre-hitbox-8");
//     x.style.zIndex = "1109";
// }
// function onmouseoutFromSobre8() {
//     var x = document.getElementById("form-sobre8");
//     x.style.zIndex = "1005";
//     var x = document.getElementById("form-sobre-hitbox-8");
//     x.style.zIndex = "1105";
// }



function onclickYearPackGlow1() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "visible";
    var x = document.getElementById("form-text1");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow2() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow3() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow4() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow5() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow6() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow7() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow8() {
    var x = document.getElementById("form-sobre1-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8-glow-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8");
    x.style.visibility = "visible";
}

// Sobres glow Menu 2 

function onclickYearPackGlow1_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";

    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";


    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-text1-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow2_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow3_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow4_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow5_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow6_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow7_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
}



function onclickYearPackGlow8_2() {
    var x = document.getElementById("form-sobre1-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre1-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre2-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre2-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    
    var x = document.getElementById("form-sobre3-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre3-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre4-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre4-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre5-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre5-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre6-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre6-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre7-glow-2-davant");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-glow-2-darrere");
    x.style.visibility = "hidden";
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";
    var x = document.getElementById("form-sobre7-2");
    x.style.animationDuration = "0s";
    x.style.animationIterationCount = "0";
    x.style.scale = "1";

    var x = document.getElementById("form-sobre8-glow-2-davant");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8-glow-2-darrere");
    x.style.visibility = "visible";
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-sobre8-2");
    x.style.animationDuration = "5s";
    x.style.animationIterationCount = "infinite";
    x.style.scale = "1.01";
    var x = document.getElementById("form-card-img-1-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-2-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-3-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-4-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-5-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-6-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-7-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-card-img-8-2");
    x.style.visibility = "visible";
}
// form text glow 

function overFormTextGlow1() {
    var x = document.getElementById("form-text1-glow");
    x.style.visibility = "visible";
}
function outFormTextGlow1() {
    var x = document.getElementById("form-text1-glow");
    x.style.visibility = "hidden";
}


// form-videojoc.html SLIDE esquerra, dreta


function SlideUp() {
    var x = document.getElementById("slide-div");
    x.style.transform = "translateX(100%)";
    var x = document.getElementById("slide-div2");
    x.style.transform = "translateX(100%)";
    var x = document.getElementById("form-div-botons-next");
    x.style.opacity = "100%";
    var x = document.getElementById("form-div-botons-before");
    x.style.opacity = "30%";
}
function SlideCenter() {
    var x = document.getElementById("slide-div");
    x.style.transform = "translateX(0%)";
    var x = document.getElementById("slide-div2");
    x.style.transform = "translateX(0%)";
    var x = document.getElementById("form-div-botons-next");
    x.style.opacity = "30%";
    var x = document.getElementById("form-div-botons-before");
    x.style.opacity = "100%";
}

// Submenu (Contingut de la carta) en clicar la carta

function onclickCartaContingut() {
    var x = document.getElementById("content-pack-1");
    x.style.transform = "translateY(-100%)";
    var x = document.getElementById("content-pack-2");
    x.style.transform = "translateY(0%)";
    var x = document.getElementById("content-pack-3");
    x.style.transform = "translateY(100%)";


    var x = document.getElementById("botons-amunt-avall");
    x.style.visibility = "visible";
    var x = document.getElementById("botons-amunt-avall-2");
    x.style.visibility = "visible";
    var x = document.getElementById("botons-amunt-avall-3");
    x.style.visibility = "visible";
    var x = document.getElementById("form-div-contingut-in");
    x.style.visibility = "visible";
    var x = document.getElementById("form-div-contingut-in-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-div-contingut-in-3");
    x.style.visibility = "visible";
    var x = document.getElementById("form-boto-torna");
    x.style.visibility = "visible";
    var x = document.getElementById("form-boto-torna-2");
    x.style.visibility = "visible";
    var x = document.getElementById("form-boto-torna-3");
    x.style.visibility = "visible";
    var x = document.getElementById("form-div-botons-next");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-div-botons-before");
    x.style.visibility = "hidden";
}

// Form Botó 'Torna'

function onclickFormTorna() {
    var x = document.getElementById("botons-amunt-avall");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-div-contingut-in");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-boto-torna");
    x.style.visibility = "hidden";

    var x = document.getElementById("botons-amunt-avall-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-div-contingut-in-2");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-boto-torna-2");
    x.style.visibility = "hidden";

    var x = document.getElementById("botons-amunt-avall-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-div-contingut-in-3");
    x.style.visibility = "hidden";
    var x = document.getElementById("form-boto-torna-3");
    x.style.visibility = "hidden";


    //Botons Laterals
    var x = document.getElementById("form-div-botons-next");
    x.style.visibility = "visible";
    var x = document.getElementById("form-div-botons-before");
    x.style.visibility = "visible";
}

// Slide Contingut Up

function onclickContSlideUp() {
    var x = document.getElementById("content-pack-1");
    x.style.transform = "translateY(0%)";
    var x = document.getElementById("content-pack-2");
    x.style.transform = "translateY(100%)";
    var x = document.getElementById("content-pack-3");
    x.style.transform = "translateY(200%)";
}

// Slide Contingut Down

function onclickContSlideDown() {
    var x = document.getElementById("content-pack-1");
    x.style.transform = "translateY(-200%)";
    var x = document.getElementById("content-pack-2");
    x.style.transform = "translateY(-100%)";
    var x = document.getElementById("content-pack-3");
    x.style.transform = "translateY(0%)";
}

// Slide Contingut Up VERSIO 2

function onclickContSlideCentre() {
    var x = document.getElementById("content-pack-1");
    x.style.transform = "translateY(-100%)";
    var x = document.getElementById("content-pack-2");
    x.style.transform = "translateY(0%)";
    var x = document.getElementById("content-pack-3");
    x.style.transform = "translateY(100%)";
}

// Brillo parts del HUD

function onmouseoverHudHistory() {
    var x = document.getElementById("hud-historial-glow");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
    x.style.visibility = "visible";
}
function onmouseoutHudHistory() {
    var x = document.getElementById("hud-historial-glow");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
    x.style.visibility = "hidden";
}

function onmouseoverHudMana() {
    var x = document.getElementById("hud-mana-glow");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
    x.style.visibility = "visible";
}
function onmouseoutHudMana() {
    var x = document.getElementById("hud-mana-glow");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
    x.style.visibility = "hidden";
}

function onmouseoverHudPj() {
    var x = document.getElementById("hud-pj-sobre");
    x.style.transition = "all 1s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseoutHudPj() {
    var x = document.getElementById("hud-pj-sobre");
    x.style.transition = "all 1s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}

// Levelup Menus

function onclickLevelUpSeguent() {
    var x = document.getElementById("levelup-menu1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-menu2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-menu3");
    x.style.visibility = "hidden";

    // Botons

    var x = document.getElementById("levelup-level1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level4");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level5");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level6");
    x.style.visibility = "hidden";


    var x = document.getElementById("levelup-level7");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level8");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level9");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level10");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level11");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level12");
    x.style.visibility = "visible";


    var x = document.getElementById("levelup-level13");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level14");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level15");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level16");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level17");
    x.style.visibility = "hidden";

    // //

    var x = document.getElementById("levelup-anterior1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-anterior2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-seguent2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-anterior3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent3");
    x.style.visibility = "hidden";
}
function onclickLevelUpSeguentSeguent() {
    var x = document.getElementById("levelup-menu1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-menu2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-menu3");
    x.style.visibility = "visible";

    // Botons

    var x = document.getElementById("levelup-level1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level4");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level5");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level6");
    x.style.visibility = "hidden";


    var x = document.getElementById("levelup-level7");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level8");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level9");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level10");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level11");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level12");
    x.style.visibility = "hidden";


    var x = document.getElementById("levelup-level13");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level14");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level15");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level16");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level17");
    x.style.visibility = "visible";

    // //

    var x = document.getElementById("levelup-anterior1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-anterior2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-anterior3");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-seguent3");
    x.style.visibility = "visible";
}

function onclickLevelUpAnterior() {
    var x = document.getElementById("levelup-menu1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-menu2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-menu3");
    x.style.visibility = "hidden";

    // Botons

    var x = document.getElementById("levelup-level1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level4");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level5");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level6");
    x.style.visibility = "hidden";


    var x = document.getElementById("levelup-level7");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level8");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level9");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level10");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level11");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level12");
    x.style.visibility = "visible";


    var x = document.getElementById("levelup-level13");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level14");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level15");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level16");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level17");
    x.style.visibility = "hidden";

    // //

    var x = document.getElementById("levelup-anterior1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent1");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-anterior2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-seguent2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-anterior3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent3");
    x.style.visibility = "hidden";
}
function onclickLevelUpAnteriorAnterior() {
    var x = document.getElementById("levelup-menu1");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-menu2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-menu3");
    x.style.visibility = "hidden";

    // Botons

    var x = document.getElementById("levelup-level1");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level2");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level3");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level4");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level5");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-level6");
    x.style.visibility = "visible";


    var x = document.getElementById("levelup-level7");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level8");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level9");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level10");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level11");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level12");
    x.style.visibility = "hidden";


    var x = document.getElementById("levelup-level13");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level14");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level15");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level16");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-level17");
    x.style.visibility = "hidden";

    // //

    var x = document.getElementById("levelup-anterior1");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-seguent1");
    x.style.visibility = "visible";
    var x = document.getElementById("levelup-anterior2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent2");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-anterior3");
    x.style.visibility = "hidden";
    var x = document.getElementById("levelup-seguent3");
    x.style.visibility = "hidden";
}

//function onmouseOverLvlAnterior() {
//    var x = document.getElementById("moure-menu-hover1");
//    x.style.marginRight = "10px";
//}
//function onmouseOutLvlAnterior() {
//    var x = document.getElementById("moure-menu-hover1");
//    x.style.marginRight = "0px";
//}

// Glow de cada un dels nivells al fer hover (Levels Levelup lvl)







// MOUSEOVER, ONCLICK Level 1
function onmouseOverGlowLevel1() {
    var x = document.getElementById("glow-level1");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel1() {
    var x = document.getElementById("glow-level1");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel1() {

    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl1");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl1");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl1");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// MOUSEOVER, ONCLICK Level 2
function onmouseOverGlowLevel2() {
    var x = document.getElementById("glow-level2");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel2() {
    var x = document.getElementById("glow-level2");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel2() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl2");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl2");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl2");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 3
function onmouseOverGlowLevel3() {
    var x = document.getElementById("glow-level3");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel3() {
    var x = document.getElementById("glow-level3");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel3() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl3");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl3");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl3");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 4
function onmouseOverGlowLevel4() {
    var x = document.getElementById("glow-level4");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel4() {
    var x = document.getElementById("glow-level4");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel4() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl4");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl4");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl4");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 5
function onmouseOverGlowLevel5() {
    var x = document.getElementById("glow-level5");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel5() {
    var x = document.getElementById("glow-level5");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel5() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl5");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl5");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl5");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 6
function onmouseOverGlowLevel6() {
    var x = document.getElementById("glow-level6");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel6() {
    var x = document.getElementById("glow-level6");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel6() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl6");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl6");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl6");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 7
function onmouseOverGlowLevel7() {
    var x = document.getElementById("glow-level7");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel7() {
    var x = document.getElementById("glow-level7");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel7() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl7");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl7");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl7");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 8
function onmouseOverGlowLevel8() {
    var x = document.getElementById("glow-level8");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel8() {
    var x = document.getElementById("glow-level8");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel8() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl8");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl8");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl8");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 9
function onmouseOverGlowLevel9() {
    var x = document.getElementById("glow-level9");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel9() {
    var x = document.getElementById("glow-level9");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel9() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl9");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl9");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl9");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 10
function onmouseOverGlowLevel10() {
    var x = document.getElementById("glow-level10");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel10() {
    var x = document.getElementById("glow-level10");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel10() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl10");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl10");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl10");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 11
function onmouseOverGlowLevel11() {
    var x = document.getElementById("glow-level11");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel11() {
    var x = document.getElementById("glow-level11");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel11() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl11");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl11");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl11");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 12
function onmouseOverGlowLevel12() {
    var x = document.getElementById("glow-level12");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel12() {
    var x = document.getElementById("glow-level12");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel12() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl12");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl12");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl12");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 13
function onmouseOverGlowLevel13() {
    var x = document.getElementById("glow-level13");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel13() {
    var x = document.getElementById("glow-level13");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel13() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl13");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl13");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl13");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 14
function onmouseOverGlowLevel14() {
    var x = document.getElementById("glow-level14");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel14() {
    var x = document.getElementById("glow-level14");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel14() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl14");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl14");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl14");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 15
function onmouseOverGlowLevel15() {
    var x = document.getElementById("glow-level15");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel15() {
    var x = document.getElementById("glow-level15");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel15() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl15");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl15");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl15");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 16
function onmouseOverGlowLevel16() {
    var x = document.getElementById("glow-level16");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel16() {
    var x = document.getElementById("glow-level16");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel16() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl16");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl16");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl16");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// Level 17
function onmouseOverGlowLevel17() {
    var x = document.getElementById("glow-level17");
    x.style.transition = "all 0.2s";
    x.style.visibility = "visible";
    x.style.opacity = "100%";
}
function onmouseOutGlowLevel17() {
    var x = document.getElementById("glow-level17");
    x.style.transition = "all 0.5s";
    x.style.visibility = "hidden";
    x.style.opacity = "0%";
}
function onClickLevel17() {
    var divs = document.getElementsByClassName("div-levels");
    var cosos = document.getElementsByClassName("cos");
    var titols = document.getElementsByClassName("titol");
    for (i = 0; i < divs.length; i++ )
    {
        divs[i].style.visibility = "hidden";
        divs[i].style.opacity = "0%";
        divs[i].style.pointerEvents = "none";
        divs[i].style.overflowX = "hidden";
    };
    for (i = 0; i < cosos.length; i++)
    {
        cosos[i].style.visibility = "hidden";
        cosos[i].style.opacity = "0%";
        cosos[i].style.pointerEvents = "none";
    };
    for (i = 0; i < titols.length; i++)
    {
        titols[i].style.visibility = "hidden";
        titols[i].style.opacity = "0%";
        titols[i].style.pointerEvents = "none";
    };

    var x = document.getElementById("div-lvl17");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    x.style.overflowY = "scroll";
    x.style.overflowX = "hidden";
    var x = document.getElementById("titol-lvl17");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
    var x = document.getElementById("cos-lvl17");
    x.style.opacity = "100%";
    x.style.visibility = "visible";
    x.style.pointerEvents = "all";
}

// EL dissenyador 2

function onclickSobre1() {
    var x = document.getElementById("sobre-in-1");
    x.style.visibility = "visible";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-2");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-3");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";

    //Vinyetes
    var x = document.getElementById("etiqueta1");
    x.style.transition = "all 0s";
    x.style.visibility = "visible";
    var x = document.getElementById("etiqueta2");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";
    var x = document.getElementById("etiqueta3");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";

}
function mouseoverSobre1() {
    var x = document.getElementById("sobre-in-1");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1.1) rotate(-5deg)";

    var x = document.getElementById("brillo-blau");
    x.style.visibility = "visible";
    x.style.transition = "0.4s";
    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(8)";

    // El fons comença a brillar

    var x = document.getElementById("fons-brillo");
    x.style.transition = "2s";
    x.style.opacity = "100%";

    // Desapareix la vinyeta (temporalment)

    var x = document.getElementById("etiqueta1");
    x.style.transition = "0.5s";
    x.style.opacity = "0%";
}
function mouseoutSobre1() {
    var x = document.getElementById("sobre-in-1");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1) rotate(0deg)";

    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(0)";
    x.style.visibility = "hidden";

    // El brillo del fons comença a desapareixer

    var x = document.getElementById("fons-brillo");
    x.style.transition = "1s";
    x.style.opacity = "0%";

    // Apareix la vinyeta (Fins canvi)

    var x = document.getElementById("etiqueta1");
    x.style.transition = "1s";
    x.style.opacity = "100%";
}



function onclickSobre2() {
    var x = document.getElementById("sobre-in-1");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-2");
    x.style.visibility = "visible";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-3");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";

    //Vinyetes
    var x = document.getElementById("etiqueta1");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";
    var x = document.getElementById("etiqueta2");
    x.style.transition = "all 0s";
    x.style.visibility = "visible";
    var x = document.getElementById("etiqueta3");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";
}
function mouseoverSobre2() {
    var x = document.getElementById("sobre-in-2");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1.1) rotate(-5deg)";
    
    var x = document.getElementById("brillo-blau");
    x.style.visibility = "visible";
    x.style.transition = "0.4s";
    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(8)";

    // El fons comença a brillar

    var x = document.getElementById("fons-brillo");
    x.style.transition = "2s";
    x.style.opacity = "100%";

    // Desapareix la vinyeta (temporalment)

    var x = document.getElementById("etiqueta2");
    x.style.transition = "0.5s";
    x.style.opacity = "0%";
}
function mouseoutSobre2() {
    var x = document.getElementById("sobre-in-2");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1) rotate(0deg)";

    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(0)";
    x.style.visibility = "hidden";

    // El brillo del fons comença a desapareixer

    var x = document.getElementById("fons-brillo");
    x.style.transition = "1s";
    x.style.opacity = "0%";

    // Apareix la vinyeta (Fins canvi)

    var x = document.getElementById("etiqueta2");
    x.style.transition = "1s";
    x.style.opacity = "100%";
}



function onclickSobre3() {
    var x = document.getElementById("sobre-in-1");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-2");
    x.style.visibility = "hidden";
    x.style.transition = "all 0s";
    var x = document.getElementById("sobre-in-3");
    x.style.visibility = "visible";
    x.style.transition = "all 0s";

    //Vinyetes
    var x = document.getElementById("etiqueta1");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";
    var x = document.getElementById("etiqueta2");
    x.style.transition = "all 0s";
    x.style.visibility = "hidden";
    var x = document.getElementById("etiqueta3");
    x.style.transition = "all 0s";
    x.style.visibility = "visible";
}
function mouseoverSobre3() {
    var x = document.getElementById("sobre-in-3");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1.1) rotate(-5deg)";

    var x = document.getElementById("brillo-blau");
    x.style.visibility = "visible";
    x.style.transition = "0.4s";
    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(8)";

    // El fons comença a brillar

    var x = document.getElementById("fons-brillo");
    x.style.transition = "2s";
    x.style.opacity = "100%";

    // Desapareix la vinyeta (temporalment)

    var x = document.getElementById("etiqueta3");
    x.style.transition = "0.5s";
    x.style.opacity = "0%";
}
function mouseoutSobre3() {
    var x = document.getElementById("sobre-in-3");
    x.style.transition = "all 0.2s";
    x.style.cursor = "pointer";
    x.style.transform = "scale(1) rotate(0deg)";

    var x = document.getElementById("brillo-blau");
    x.style.transform = "scale(0)";
    x.style.visibility = "hidden";

    // El brillo del fons comença a desapareixer

    var x = document.getElementById("fons-brillo");
    x.style.transition = "1s";
    x.style.opacity = "0%";

    // Apareix la vinyeta (Fins canvi)

    var x = document.getElementById("etiqueta3");
    x.style.transition = "1s";
    x.style.opacity = "100%";
}

// function movGlowRotate() {
//     var x = document.getElementById("glow-rotate");
//     x.style.transition = "all 7s";
//     x.style.transform = "rotate(360deg)";
//     var x = document.getElementById("glow-simple");
//     x.style.transition = "all 1s";
//     x.style.opacity = "100%";
// }
// function mouGlowRotate() {
//     var x = document.getElementById("glow-rotate");
//     x.style.transition = "all 7s";
//     x.style.transform = "rotate(-360deg)";
//     var x = document.getElementById("glow-simple");
//     x.style.transition = "all 1s";
//     x.style.opacity = "0%";
// }

// El Dissenyador Hovers
// ids:
// #diss-glow-amunt, #diss-glow-avall-rotate, #diss-glow-avall

function onmouseoverDissGlow() {
    var x = document.getElementById("diss-glow-amunt");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
    var x = document.getElementById("diss-glow-avall-rotate");
    x.style.transition = "all 5s";
    x.style.opacity = "100%";
    var x = document.getElementById("diss-glow-avall");
    x.style.transition = "all 1s";
    x.style.opacity = "100%";
}
function onmouseoutDissGlow() {
    var x = document.getElementById("diss-glow-amunt");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
    var x = document.getElementById("diss-glow-avall-rotate");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
    var x = document.getElementById("diss-glow-avall");
    x.style.transition = "all 1s";
    x.style.opacity = "0%";
}
