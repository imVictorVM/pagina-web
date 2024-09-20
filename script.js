function devuelveTextoDeAlerta() {
  return "uooooo! Vaya alerta";
}

function desaparece(nombre) {
	var button = document.getElementById(nombre);

  button.style.visibility='hidden';
}

function cambiaVisible(nombre) {


  var elementos = document.querySelectorAll('.'+nombre);
      for(var i=0; i < elementos.length; i++)
      {
        var elem = elementos[i];

        if(elementos[i].style.visibility=="hidden")
          {
            elementos[i].style.visibility="visible";
          }
          else {
            elementos[i].style.visibility="hidden";
          }
      }
}

function agregaColor(nombre1, nombre2){

  var elementos = document.querySelectorAll('.'+nombre1);
  var elementos2 = document.querySelectorAll('.'+nombre2);
  for(var i=0; i < elementos.length; i++)
    {
      var elem = elementos[i];
      //elem.className += " megusta";
      elem.classList.add("megusta");
    }

  for(var j=0; j < elementos2.length; j++)
     {
      var elem2 = elementos2[j];
      //elem2.className += " nomegusta";
      elem2.classList.add("nomegusta");
     }
}

function quitaColor(nombre1, nombre2){
  var elementos = document.querySelectorAll('.'+nombre1);
  var elementos2 = document.querySelectorAll('.'+nombre2);
  for(var i=0; i < elementos.length; i++)
    {
      var elem = elementos[i];
      elem.classList.remove("megusta");
    }
  
  for(var j=0; j < elementos2.length; j++)
     {
      var elem2 = elementos2[j];
     //elem2.className += " nomegusta";
     elem2.classList.remove("nomegusta");
    }
}

function cambiaColor(check, nombre1, nombre2)
{
  var checkeador = document.getElementById(check);
  if(checkeador.classList.contains("megusta"))
  {
    quitaColor(nombre1, nombre2);
  }
  else {
    agregaColor(nombre1, nombre2);
  }

}