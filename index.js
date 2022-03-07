
function encriptar () {

  let inp_letter = document.getElementById('inp_text');
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
    document.getElementById('out_text').innerHTML= out_text;
  }
  
  }