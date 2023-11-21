document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "La cocina es el corazón de cada hogar.",
    "En la cocina, todos somos humanos.",
    "La vida es una cocina. Ponte tu delantal más bonito y prepara algo increíble.",
    "Los recuerdos más entrañables se crean alrededor de la mesa.",
    "La buena comida es la base de la felicidad genuina.",
    "Cocinar es un arte, pero todo arte requiere conocer algo sobre las técnicas y los materiales.",
    "El ingrediente secreto es siempre el amor.",
    "Las personas que aman comer son siempre las mejores.",
    "Si sabes leer, sabes cocinar.",
    "El único verdadero obstáculo es el miedo al fracaso. En la cocina, hay que tener una actitud de '¡qué demonios!'",
    "Cocinar es a la vez un juego de niños y una alegría de adultos. Y cocinar con cuidado es un acto de amor.",
    "Nadie nace como un gran cocinero, se aprende haciendo.",
    "La cocina es un país en el que siempre hay descubrimientos por hacer.",
    "Cocinar es sobre la pasión, así que puede parecer un poco temperamental de una manera que es demasiado asertiva para el ojo inexperto.",
    "En la cocina, medimos con amor y cocinamos con pasión.",
    "Cocinar es como pintar o escribir una canción. Así como solo hay ciertas notas o colores, solo hay ciertos sabores; es cómo los combinas lo que te distingue.",
    "Cocinar es sobre crear algo delicioso para alguien más.",
    "La cocina es donde lidiamos con los elementos del universo. Es donde venimos a entender nuestro pasado y a nosotros mismos.",
    "La comida es simbólica del amor cuando las palabras son insuficientes."
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const quoteElement = document.querySelector('.quote-text');
  quoteElement.textContent = getRandomQuote();
});


