// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('recipes').insertOne({
  nombre: 'Enchiladas Suizas',
  descripcion: 'Las enchiladas suizas son un platillo típico de la cocina mexicana, consisten en tortillas de maíz rellenas de pollo bañadas en una salsa de chile verde y gratinadas con queso.',
  ingredientes: [
    '8 tortillas de maíz',
    '2 pechugas de pollo cocidas y desmenuzadas',
    '1 taza de crema ácida',
    '1 taza de queso suizo rallado',
    '1/2 cebolla picada',
    '2 dientes de ajo picados',
    '3 chiles poblanos asados, pelados y desvenados',
    '1/2 taza de caldo de pollo',
    'Sal y pimienta al gusto',
    'Aceite vegetal'
  ],
  tiempo: '30 minutos',
  preparacion: '1. En una sartén, calienta un poco de aceite y sofríe la cebolla y el ajo hasta que estén dorados.\n2. Agrega los chiles poblanos asados y desvenados, y mezcla bien.\n3. Vierte el caldo de pollo y cocina por unos minutos.\n4. Licúa la mezcla hasta obtener una salsa suave. Agrega sal y pimienta al gusto.\n5. Calienta las tortillas de maíz y rellénalas con el pollo desmenuzado. Enrolla las tortillas y colócalas en un refractario.\n6. Baña las enchiladas con la salsa de chile poblano.\n7. Cubre con crema ácida y espolvorea el queso suizo rallado.\n8. Gratina en el horno precalentado a 180°C hasta que el queso se derrita y se dore ligeramente.\n9. Sirve las enchiladas suizas calientes.\n',
  imagen: 'https://www.maricruzavalos.com/wp-content/uploads/2020/06/enchiladas-suizas-recipe.jpg'
});

db.getCollection('recipes').insertOne({
  nombre: 'Lasaña Clásica',
  descripcion: 'La lasaña clásica es un platillo italiano que combina capas de pasta, carne sazonada, queso y una deliciosa salsa de tomate. ¡Una experiencia auténtica en cada bocado!',
  ingredientes: [
    '12 láminas de pasta para lasaña',
    '500g de carne molida de res',
    '1 cebolla picada',
    '2 dientes de ajo picados',
    '800g de salsa de tomate',
    '2 tazas de queso ricotta',
    '1 taza de queso parmesano rallado',
    '2 tazas de queso mozzarella rallado',
    '1 huevo',
    '1/4 taza de albahaca fresca picada',
    'Sal y pimienta al gusto',
    'Aceite de oliva'
  ],
  tiempo: '1 hora',
  preparacion: '1. En una sartén, calienta aceite de oliva y sofríe la cebolla y el ajo hasta que estén dorados.\n2. Agrega la carne molida y cocina hasta que se dore. Añade la salsa de tomate y deja cocinar a fuego lento.\n3. En un tazón aparte, mezcla el queso ricotta, queso parmesano, queso mozzarella, huevo y albahaca. Añade sal y pimienta al gusto.\n4. Precalienta el horno a 180°C.\n5. En un refractario, coloca una capa de salsa de carne, seguida de láminas de pasta y la mezcla de quesos. Repite este proceso hasta agotar los ingredientes, terminando con una capa de queso.\n6. Hornea en el horno precalentado por 30-40 minutos, o hasta que la lasaña esté dorada y burbujeante.\n7. Deja reposar por unos minutos antes de cortar y servir caliente.\n',
  imagen: 'https://pastaslamuneca.com/wp-content/uploads/2021/05/lasana-en-salsa-bechamel.jpg'
});

db.getCollection('recipes').insertOne({
  nombre: 'Tacos de Bistec',
  descripcion: 'Los tacos de bistec son una deliciosa opción de la cocina mexicana, con trozos de bistec sazonados y cocidos a la perfección, acompañados de ingredientes frescos y salsas vibrantes.',
  ingredientes: [
    '500g de bistec de res, cortado en tiras',
    '1 cebolla, en rodajas',
    '2 pimientos (rojo y verde), en tiras',
    '2 dientes de ajo, picados',
    'Jugo de 2 limones',
    '1 cucharada de comino molido',
    '1 cucharadita de pimentón',
    'Sal y pimienta al gusto',
    '8 tortillas de maíz',
    'Guarniciones: cilantro fresco, cebolla picada, limón',
    'Salsas a elección: salsa verde, salsa roja, salsa de aguacate'
  ],
  tiempo: '40 minutos',
  preparacion: '1. En un tazón, marina las tiras de bistec con jugo de limón, comino, pimentón, ajo picado, sal y pimienta. Deja reposar por al menos 30 minutos.\n2. Calienta un poco de aceite en una sartén a fuego medio-alto. Agrega las tiras de bistec y cocina hasta que estén doradas y cocidas.\n3. Agrega las rodajas de cebolla y tiras de pimientos a la sartén. Cocina hasta que las verduras estén tiernas.\n4. Calienta las tortillas de maíz en una sartén o comal.\n5. Rellena cada tortilla con las tiras de bistec, cebollas y pimientos.\n6. Sirve los tacos de bistec con guarniciones frescas como cilantro, cebolla y limón.\n7. Acompaña con tus salsas favoritas.\n8. ¡Disfruta de tus deliciosos tacos de bistec!\n',
  imagen: 'https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1003443.jpg'
});

db.getCollection('recipes').insertOne({
  nombre: 'Ensalada César',
  descripcion: 'La ensalada César es una opción clásica y deliciosa que combina crujientes hojas de lechuga romana, pollo jugoso, croutones dorados, queso parmesano y una cremosa salsa César.',
  ingredientes: [
    '1 lechuga romana, lavada y picada',
    '2 pechugas de pollo cocidas y cortadas en tiras',
    '1 taza de croutones',
    '1 taza de queso parmesano rallado',
    'Para la Salsa César:',
    '1/2 taza de mayonesa',
    '2 cucharadas de mostaza Dijon',
    '2 cucharadas de jugo de limón',
    '2 dientes de ajo picados',
    '1/2 taza de queso parmesano rallado',
    'Sal y pimienta al gusto',
    'Aceite de oliva'
  ],
  tiempo: '20 minutos',
  preparacion: '1. En una ensaladera grande, coloca las hojas de lechuga romana picadas.\n2. Agrega las tiras de pollo cocido sobre la lechuga.\n3. Espolvorea los croutones y el queso parmesano rallado sobre la ensalada.\n4. En un tazón pequeño, mezcla todos los ingredientes de la salsa César: mayonesa, mostaza Dijon, jugo de limón, ajo picado, queso parmesano rallado, sal y pimienta al gusto.\n5. Vierte la salsa sobre la ensalada y mezcla bien para que todos los ingredientes se impregnen con la salsa.\n6. Añade un chorrito de aceite de oliva por encima.\n7. Sirve la ensalada César inmediatamente, ¡y disfruta de esta clásica y deliciosa combinación!\n',
  imagen: 'https://cdn.kiwilimon.com/brightcove/6506/6506.jpg'
});

db.getCollection('recipes').insertOne({
  nombre: 'Flautas de Pollo',
  descripcion: 'Las flautas de pollo son un platillo mexicano delicioso que consiste en tortillas de maíz rellenas de pollo, enrolladas y fritas hasta obtener una textura crujiente. Se sirven con guarniciones frescas y salsas vibrantes.',
  ingredientes: [
    '12 tortillas de maíz',
    '500g de pechugas de pollo cocidas y desmenuzadas',
    '1 cebolla picada',
    '2 dientes de ajo picados',
    '1 tomate picado',
    '1 taza de lechuga rallada',
    '1 taza de queso rallado (preferiblemente queso fresco o queso mexicano)',
    'Aceite vegetal para freír',
    'Sal y pimienta al gusto',
    'Guarniciones: crema agria, salsa, aguacate'
  ],
  tiempo: '45 minutos',
  preparacion: '1. En una sartén, calienta un poco de aceite y sofríe la cebolla y el ajo hasta que estén dorados.\n2. Agrega el pollo desmenuzado y cocina hasta que esté bien cocido. Añade sal y pimienta al gusto.\n3. Agrega el tomate picado y cocina por unos minutos hasta que se mezcle bien con el pollo.\n4. Calienta las tortillas de maíz.\n5. Rellena cada tortilla con la mezcla de pollo, enrolla y asegura con palillos para que mantengan su forma.\n6. Calienta aceite en una sartén profunda a fuego medio-alto. Fríe las flautas hasta que estén doradas y crujientes.\n7. Retira las flautas y colócalas sobre papel absorbente para quitar el exceso de aceite.\n8. Sirve las flautas de pollo con lechuga rallada, queso, crema agria, salsa y aguacate al gusto.\n9. ¡Disfruta de estas deliciosas flautas de pollo crujientes!\n',
  imagen: 'https://www.goya.com/media/3202/chicken-flautas.jpg?quality=80'
});

db.getCollection('recipes').insertOne({
  nombre: 'Ramen Casero',
  descripcion: 'El ramen casero es una deliciosa experiencia que combina fideos\nperfectamente cocidos con un caldo aromático y toppings variados.\nPrepáralo y disfruta de un plato reconfortante lleno de sabores\nauténticos.',
  ingredientes: [
    '200g de fideos de ramen',
    '2 pechugas de pollo',
    '4 tazas de caldo de pollo',
    '2 cucharadas de salsa de soja',
    '1 cucharada de aceite de sésamo',
    `2 dientes de ajo, picados`,
    `1 trozo de jengibre fresco, pelado y picado`,
    'Toppings a elección: cebolla china, brotes de bambú, huevo pochado, maíz tierno, espinacas, alga nori',
    'Aceite de oliva',
    'Sal y pimienta al gusto'
  ],
  tiempo: '30 minutos',
  preparacion: 'Cocina los fideos de ramen según las instrucciones del paquete. Escúrrelos y reserva.\n2. Sazona las pechugas de pollo con sal y pimienta. En una sartén, calienta aceite de oliva y cocina el pollo hasta que esté dorado y cocido por completo. Luego, córtalo en tiras finas.\n3. En una olla grande, calienta aceite de sésamo y saltea el ajo y el jengibre picados hasta que estén fragantes.\n4. Agrega el caldo de pollo, la salsa de soja y lleva a ebullición. Reduce el fuego y deja cocinar a fuego lento durante unos 15-20 minutos.\n5. Cocina los toppings a elección, como huevo pochado, brotes de bambú y espinacas, por separado.\n6. Arma cada tazón de ramen colocando los fideos, agregando las tiras de pollo y vertiendo el caldo caliente.\n7. Decora con los toppings cocidos y cebolla verde picada.\n8. ¡Sirve caliente y disfruta de tu delicioso ramen casero!\n',
  imagen: 'https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square.jpg'
});