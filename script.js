const h1 = document.querySelector("h1");
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const resultadoSuma = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault(); //para evitar que se recargue la página
  let resultado = Number(input1.value) + Number(input2.value);
  resultadoSuma.innerText = "El resultado es: " + resultado;
}

//Existe otra forma de hacer lo mismo, con el evento de 'click'
//Además, se debe cambiar en el html en la label button añadir type="submit"
//Con esto el form ya no se recarga al dar click sobre el botón
form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault(); 
  let resultado = Number(input1.value) + Number(input2.value);
  resultadoSuma.innerText = "El resultado es: " + resultado;
}




// console.log(h1);
// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerText = 'Hola <br> Vicio xD'; //cambia el contenido del label o innerHTML(pero es insegura)
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo'); //cambiar valor de los atributos
// console.log(h1.getAttribute('class'));

// //Para trabajar específicamente con clases:
// h1.classList.add('negro');
// h1.classList.add('blanco');
// h1.classList.remove('negro');

// //h1.classList.toggle('negro');  --> quita o añade la clase si no existe, pendiente mejor explicación
// //h1.classList.contains('negro');  --> devuelve true o false, dependiendo si existe o no la clase

// input.value = 'holaaaaa';

// console.log(document.createElement('span')); //crear etiquetas

// const img = document.createElement('img');
// img.setAttribute('src','./EeVw-DOXgAAMtKk.jpg');
// console.log(img);
// pid.innerHTML = '';
// pid.append(img);
