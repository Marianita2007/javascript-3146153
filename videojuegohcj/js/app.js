
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