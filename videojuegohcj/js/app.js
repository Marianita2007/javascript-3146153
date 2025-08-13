
const caballero = document.querySelectorAll(".caballero-img")
const cofre = document.querySelectorAll(".cofre")
const fueguito = document.querySelectorAll(".enemigo-fuego")


caballero.forEach( function(caballero){
    
    caballero.addEventListener( 'click', function () {
        caballero.classList.add( 'saltar' )
        console.log ("click")
       
        
} )
 
} )

cofre.forEach( function(cofre){
    
    cofre.addEventListener( 'click', function () {
        cofre.classList.add( 'desaparecer' )
        console.log ("click")
       
        
} )
 
} )


fueguito.forEach( function(fueguito){
    
    fueguito.addEventListener( 'click', function () {
        fueguito.classList.add( 'desaparecer' )
        console.log ("click")
       
        
} )
 
} )