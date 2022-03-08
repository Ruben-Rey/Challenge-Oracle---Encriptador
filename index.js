
function encriptar () {

  let inp_letter = document.getElementById('encrip__inp-text');
  inp_letter = inp_letter.value;
  let cadena = inp_letter.split('');
  let cadena1 = [];
  for (i=0; i < cadena.length; i++){
    
    switch (cadena[i]){
      case "a":
      cadena1.push("ai");
      break;
      
      case "e":
      cadena1.push("enter");
      break;
      
      case "i":
      cadena1.push("imes");
      break;
      
      case "o":
      cadena1.push("ober");
      break;
      
      case "u":
      cadena1.push("ufat");
      break;
      
      default:
      cadena1.push(cadena[i]); 
    }  
    console.log(cadena1.join(''));
    let out_text = cadena1.join('');
    document.getElementById('encrip__out-text').innerHTML= out_text;
  }
  
  }

function desencriptar() {

  let frase = document.getElementById("desencrip__inp_text");
  frase = frase.value;
    
  frase1 = frase.replace(/ai/g, "a");
  frase2 = frase1.replace(/enter/g, "e");
  frase3 = frase2.replace(/imes/g, "i");
  frase4 = frase3.replace(/ober/g, "o");
  frase5 = frase4.replace(/ufat/g, "u");
    
  console.log(frase5);
  document.getElementById("desencrip__out-text").innerHTML=frase5;
    
  }

