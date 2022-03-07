function encriptar(){

    let dato = document.querySelector("input");
    
    let arreglo = dato.value.split("");
    console.log(arreglo);
    let arreglo2 = dato.value.split("");
    
         
      for(let i =0; i < arreglo.length; i++){
      
      if (arreglo[i] == "a"){
        arreglo2[i] = "ai";}
        
      if (arreglo[i] == "e"){
        arreglo2[i] = "enter";}
        
      if (arreglo[i] == "i"){
        arreglo2[i] = "imes";}
        
      if (arreglo[i] == "o"){
        arreglo2[i] = "ober";}
      
      if (arreglo[i] == "u"){
        arreglo2[i] = "ufat";}
    }
    console.log(arreglo2);
     
    }
    
function encriptar();