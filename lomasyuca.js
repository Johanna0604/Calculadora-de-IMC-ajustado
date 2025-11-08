// Seleccionamos los elementos
const alturaInput = document.querySelector('input[placeholder="Ingrese su altura en metros"]');
const pesoInput = document.querySelector('input[placeholder="Ingrese su peso en kilogramos"]');
const edadInput = document.querySelector('input[placeholder="Ingrese su edad"]');
const generoSelect = document.querySelector('select');
const boton = document.querySelector('.boton-formulario');
const categoriaTexto = document.getElementById('categoria-imc');
const imagenReferencia = document.querySelector('.borde-img img');

// Evento al hacer clic en el botón
boton.addEventListener('click', (e) => {
  e.preventDefault();

  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);
  const edad = parseInt(edadInput.value);
  const genero = generoSelect.value; // 1 = femenino, 2 = masculino

  if (!altura || !peso || !edad || !genero) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Cálculo del IMC
  let imca = peso / (altura * altura);

  // Ajuste por género y edad
  if (genero === "1") imca -= 0.5; // Femenino
  if (edad > 50) imca += 0.3;      // Pequeño ajuste por edad

  // Determinar categoría
  let categoria = "";
  let tipoGenero = genero === "1" ? "femenino" : "masculino";

  if (imca < 18.5) {
    categoria = "Bajo peso";
    imagenReferencia.src = `images/${tipoGenero}-bajo.svg`;
  } else if (imca < 25) {
    categoria = "Normal";
    imagenReferencia.src = `images/${tipoGenero}-normal.svg`;
  } else if (imca < 30) {
    categoria = "Sobrepeso";
    imagenReferencia.src = `images/${tipoGenero}-sobrepeso.svg`;
  } else if (imca < 35) {
    categoria = "Obesidad I";
    imagenReferencia.src = `images/${tipoGenero}-obesidad1.svg`;
  } else if (imca < 40) {
    categoria = "Obesidad II";
    imagenReferencia.src = `images/${tipoGenero}-obesidad2.svg`;
  } else {
    categoria = "Obesidad III";
    imagenReferencia.src = `images/${tipoGenero}-obesidad3.svg`;
  }

  // Mostrar la categoría en pantalla
  categoriaTexto.textContent = categoria;
  actualizarDescripcion(categoria);
});

const descripcionIMC = document.getElementById("descripcion-imc");

// Cambiar el texto según la categoría:
function actualizarDescripcion(categoria) {
  switch (categoria) {
    case "Bajo peso":
      descripcionIMC.textContent = "Tu peso está por debajo del ideal. Es importante revisar tu alimentación y asegurarte de recibir los nutrientes necesarios 💪";
      break;
    case "Normal":
      descripcionIMC.textContent = "¡Excelente! Tu peso está dentro del rango saludable. Mantén tus buenos hábitos 🥗✨";
      break;
    case "Sobrepeso":
      descripcionIMC.textContent = "Tienes un leve exceso de peso. Un poco de movimiento y alimentación consciente pueden ayudarte ⚖️";
      break;
    case "Obesidad I":
      descripcionIMC.textContent = "Tu IMC indica obesidad grado I. Consultar a un profesional de salud puede orientarte hacia un cambio sostenible 🌱";
      break;
    case "Obesidad II":
      descripcionIMC.textContent = "Obesidad grado II. Es recomendable un acompañamiento médico y nutricional para tu bienestar 💚";
      break;
    case "Obesidad III":
      descripcionIMC.textContent = "Obesidad grado III. Necesitas atención médica especializada para cuidar tu salud ❤️‍🩹";
      break;
    default:
      descripcionIMC.textContent = "Introduce tus datos para conocer tu IMCa y recibir una recomendación personalizada 💬";
  }
}

