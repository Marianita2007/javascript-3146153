
const caballero = document.querySelectorAll(".caballero-img")
const cofre = document.querySelectorAll(".cofre")
const fueguito = document.querySelectorAll(".enemigo-fuego")
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");
const audio3 = document.querySelector("#audio-3")



caballero.forEach( function(caballero){
    
    caballero.addEventListener( 'click', function () {
        caballero.classList.add( 'saltar' )
        console.log ("click")

        if ( audio1.paused ) {
        audio1.play()
        
        }else{
        audio1.pause()
        
}
       
        
} )
 
} )

cofre.forEach( function(cofre){
    
    cofre.addEventListener( 'click', function () {
        cofre.classList.add( 'desaparecer' )
        console.log ("click")

        if ( audio2.paused ) {
        audio2.play()
        
        }else{
        audio2.pause()
        
}
       
        
} )
 
} )


fueguito.forEach( function(fueguito){
    
    fueguito.addEventListener( 'click', function () {
        fueguito.classList.add( 'desaparecer' )
        console.log ("click")

        if ( audio3.paused ) {
        audio3.play()
        
        }else{
        audio3.pause()
        
}
       
        
} )
 
} )

//Funcion boton siguiente galeria
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const escena1 = document.querySelector(".escena-1")
const escena2 = document.querySelector(".escena-2")
const escena3 = document.querySelector(".escena-3")
let i = 1 

next.addEventListener("click", function () {
  if(i === 1){
    escena1.classList.add("d-none")
    escena2.classList.remove("d-none")
    i++ //Incrementa a 2
  }else if(i == 2){
    escena2.classList.add("d-none")
    escena3.classList.remove("d-none")
    i++
  }
})
