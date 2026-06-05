export interface City {
  name: string
  lat: number
  lng: number
  fact: string
  emoji: string
}

export interface Province {
  name: string
  cities: City[]
}

export const ECUADOR: Province[] = [
  {
    name: 'Azuay',
    cities: [
      { name: 'Cuenca', lat: -2.9001, lng: -79.0059, emoji: '🌸', fact: 'Cuenca es Patrimonio de la Humanidad, rodeada de cuatro ríos que la abrazan como si supieran que merece cuidado. Su gente es así también: abre su puerta con calma, te invita a sentarte, y antes de que termines el café ya eres parte de la familia.' },
      { name: 'Gualaceo', lat: -2.8896, lng: -78.7744, emoji: '🌺', fact: 'Llamado el jardín del Azuay por sus huertos eternamente floridos. Sus artesanos tejen el macramé con una paciencia que viene de generaciones, y la comparten con quien quiera aprender — aquí el conocimiento no se guarda, se regala.' },
      { name: 'Chordeleg', lat: -2.9205, lng: -78.8118, emoji: '💎', fact: 'El pueblo de los orfebres, donde la plata y el oro se trabajan con técnicas precolombinas de 500 años. Sus artesanos explican cada pieza con el orgullo de quien sabe que lleva en las manos algo que ninguna máquina puede reemplazar.' },
      { name: 'Paute', lat: -2.7771, lng: -78.7596, emoji: '🍎', fact: 'Valle de los frutales eternos, con un clima tan generoso que las flores nunca dejan de brotar. Sus familias llevan siglos cultivando esta tierra y reciben a los visitantes con frutas del huerto y un calor humano que hace olvidar el camino de regreso.' },
    ],
  },
  {
    name: 'Bolívar',
    cities: [
      { name: 'Guaranda', lat: -1.5933, lng: -79.0014, emoji: '🏔️', fact: 'La ciudad de las siete colinas cuyo carnaval es el más alegre y colorido de la sierra ecuatoriana. Su gente serrana es tan festiva y abierta que cualquier forastero se siente hijo de la montaña antes de que acabe el primer día.' },
      { name: 'Caluma', lat: -1.7833, lng: -79.2833, emoji: '🍊', fact: 'Sus valles subtropicales producen las naranjas más dulces del Ecuador, cultivadas por familias que llevan generaciones cuidando esta tierra. Esa misma dulzura está en su gente: hospitalaria, trabajadora y siempre lista para compartir lo mejor de su huerto.' },
      { name: 'San Miguel', lat: -1.7, lng: -79.03, emoji: '🌿', fact: 'Pueblo tranquilo anidado entre montañas verdes donde el tiempo pasa despacio y bien. Sus habitantes siempre tienen tiempo para sentarse, escuchar y poner sobre la mesa lo mejor de su cocina — aquí nadie se va con hambre ni con tristeza.' },
    ],
  },
  {
    name: 'Cañar',
    cities: [
      { name: 'Azogues', lat: -2.7392, lng: -78.8469, emoji: '⛪', fact: 'Vigilada por el imponente santuario de la Virgen de la Nube, Azogues lleva en su nombre la plata y en su corazón la fe. Sus descendientes cañaris, los guerreros que enfrentaron al Imperio Inca, hoy son reconocidos por su dignidad y su generosidad tranquila.' },
      { name: 'Cañar', lat: -2.5583, lng: -78.9333, emoji: '🏯', fact: 'Hogar de Ingapirca, donde el pueblo cañari supo resistir, negociar y convivir con dos imperios sin perder su identidad. Esa fortaleza de espíritu vive en sus descendientes: trabajadores, orgullosos de su tierra y abiertos con quien la visita.' },
      { name: 'La Troncal', lat: -2.4167, lng: -79.3667, emoji: '🎷', fact: 'Entre cañaverales interminables donde nació el pasillo costeño. Su gente, musical y alegre por naturaleza, convierte cualquier reunión en un momento que se lleva grabado en el pecho — aquí la vida se celebra con música y con risa.' },
    ],
  },
  {
    name: 'Carchi',
    cities: [
      { name: 'Tulcán', lat: 0.8117, lng: -77.7175, emoji: '🌿', fact: 'La ciudad más septentrional del Ecuador, famosa por el cementerio jardín más hermoso del mundo donde los cipreses se esculpen en figuras que dejan sin aliento. Sus habitantes son tan cálidos que ningún visitante se siente extranjero en esta esquina del país.' },
      { name: 'Mira', lat: 0.5667, lng: -77.9333, emoji: '🫚', fact: 'El balcón del Carchi, donde la vista se abre en un tapiz verde infinito. Su gente, sencilla y generosa, comparte sus rosas y aceites esenciales como si el mundo entero fuera un solo jardín que merece ser embellecido.' },
      { name: 'Huaca', lat: 0.6167, lng: -77.7333, emoji: '🏡', fact: 'Pequeño pueblo andino donde la vida va despacio y bien. Sus papas negras son las mejores del país, y sus habitantes las ofrecen sin pensarlo dos veces a quien llegue — en Huaca, tener poco y dar mucho es simplemente la forma de vivir.' },
    ],
  },
  {
    name: 'Chimborazo',
    cities: [
      { name: 'Riobamba', lat: -1.6636, lng: -78.6544, emoji: '🌋', fact: 'La sultana de los Andes, vigilada por el Chimborazo — el punto más alejado del centro de la Tierra. Su gente es conocida por ser seria, trabajadora y de una lealtad inquebrantable: los amigos que se hacen en Riobamba son para toda la vida.' },
      { name: 'Alausí', lat: -2.1992, lng: -78.8467, emoji: '🚂', fact: 'Hogar de la Nariz del Diablo, uno de los recorridos en tren más emocionantes del mundo. Sus habitantes, a quienes las montañas convirtieron en poetas, reciben a cada viajero como si fuera el primero en llegar y merece ver todo lo hermoso que hay.' },
      { name: 'Baños de Agua Santa', lat: -1.3953, lng: -78.4267, emoji: '🌊', fact: 'Al pie del volcán Tungurahua activo, un pueblo que nunca abandonó su tierra por fe y por amor. Sus habitantes son famosos por ser los más valientes y acogedores del Ecuador — viven junto al peligro con una paz tranquila que contagia a todo visitante.' },
      { name: 'Guano', lat: -1.6067, lng: -78.6383, emoji: '🧶', fact: 'La capital artesanal de los Andes donde cada alfombra cuenta historias precolombinas. Sus tejedores trabajan con una paciencia infinita y siempre explican con orgullo el significado de cada diseño — aquí el arte no se vende sin la historia.' },
    ],
  },
  {
    name: 'Cotopaxi',
    cities: [
      { name: 'Latacunga', lat: -0.9319, lng: -78.6158, emoji: '🌋', fact: 'Ciudad de la Mama Negra, bajo la sombra del Cotopaxi. Su gente, profundamente festiva y religiosa, convierte cada año la devoción en un espectáculo de amor colectivo que emociona al más duro de corazón — aquí la fe se baila y se comparte.' },
      { name: 'La Maná', lat: -0.9333, lng: -79.2214, emoji: '🍍', fact: 'El corazón tropical de Cotopaxi con piña, cacao y yuca. Sus agricultores trabajan desde el amanecer con una alegría contagiosa que hace que la comida que producen sepa diferente — como siempre saben mejor las cosas hechas con amor.' },
      { name: 'Saquisilí', lat: -0.8383, lng: -78.6669, emoji: '🛍️', fact: 'Famosa por su feria indígena de los jueves, una de las más auténticas de los Andes. Sus comerciantes, vestidos con trajes tradicionales, negocian con picardía y buen humor que hace la visita un deleite — aquí el quichua sigue vivo en cada sonrisa.' },
    ],
  },
  {
    name: 'El Oro',
    cities: [
      { name: 'Machala', lat: -3.2581, lng: -79.9554, emoji: '🍌', fact: 'La capital mundial del banano, desde donde salen millones de racimos que alimentan familias en más de 150 países. Sus agricultores trabajan con un orgullo silencioso que mueve el mundo sin que el mundo lo sepa — hay amor en cada racimo.' },
      { name: 'Zaruma', lat: -3.6836, lng: -79.6103, emoji: '⛏️', fact: 'Ciudad colonial colgada entre montañas, con el mejor café del Ecuador. Sus habitantes conservan la elegancia republicana del minero antiguo y comparten su café y su historia con quien se tome el tiempo de sentarse y escuchar.' },
      { name: 'Santa Rosa', lat: -3.4469, lng: -79.9631, emoji: '🦐', fact: 'Capital camaronera con manglares llenos de vida marina. Su gente costera es de esas que te invitan a su mesa antes de preguntarte el nombre, y donde la camaradería se siente antes de que pronuncies una palabra.' },
    ],
  },
  {
    name: 'Esmeraldas',
    cities: [
      { name: 'Esmeraldas', lat: 0.9592, lng: -79.6525, emoji: '🌊', fact: 'La ciudad verde del Pacífico donde la marimba es el idioma del alma afroecuatoriana. El pueblo de Esmeraldas es puro corazón: su hospitalidad, su música y su alegría son un abrazo que cura cualquier tristeza en quien llega.' },
      { name: 'Atacames', lat: 0.8667, lng: -79.85, emoji: '🏖️', fact: 'Playas de arena dorada bañadas por el Pacífico cálido. Sus habitantes, acostumbrados a recibir visitantes de todo el país, han convertido la hospitalidad en un arte de vida — aquí nadie es extraño, todos son bienvenidos.' },
      { name: 'San Lorenzo', lat: 1.2806, lng: -78.8361, emoji: '🌿', fact: 'Puerta de los manglares más extensos del Ecuador. Su comunidad afroesmeraldeña guarda tradiciones orales, música ancestral y una solidaridad que ha sobrevivido a todo y sigue floreciendo entre las raíces del manglar.' },
    ],
  },
  {
    name: 'Galápagos',
    cities: [
      { name: 'Puerto Ayora', lat: -0.7442, lng: -90.3125, emoji: '🐢', fact: 'El corazón de las Galápagos, donde Darwin cambió la historia de la ciencia. Sus guías naturalistas, nacidos junto a tortugas gigantes, comparten su isla con una pasión genuina que te hace amar el planeta de una manera que no tenías antes.' },
      { name: 'Puerto Baquerizo Moreno', lat: -0.9014, lng: -89.6153, emoji: '🦭', fact: 'Capital de Galápagos, donde los lobos marinos son los vecinos del parque. Su pequeña comunidad, aislada del continente, aprendió a vivir con poco y a dar mucho — la generosidad de quien vive en una isla es diferente a cualquier otra.' },
      { name: 'Puerto Villamil', lat: -0.9575, lng: -90.9673, emoji: '🐧', fact: 'La isla de los pingüinos tropicales y las iguanas marinas. Sus pobladores, guardianes voluntarios del ecosistema más único del mundo, demuestran que cuando una comunidad ama su tierra de verdad, la tierra los ama de vuelta.' },
    ],
  },
  {
    name: 'Guayas',
    cities: [
      { name: 'Guayaquil', lat: -2.1962, lng: -79.8862, emoji: '🌆', fact: 'La ciudad que nunca duerme y siempre da la bienvenida. El guayaquileño tiene fama de ser directo, apasionado y generoso: si te invita a su casa, te trata como rey, y si te encuentras en la calle, ya eres amigo — aquí la amistad no necesita tiempo para ser real.' },
      { name: 'Milagro', lat: -2.1344, lng: -79.5873, emoji: '🍬', fact: 'La ciudad azucarera que endulza al país. Sus habitantes tienen esa dulzura en el carácter que solo desarrollan las personas que han trabajado la tierra con amor toda su vida — dulces porque así les enseñó la caña.' },
      { name: 'Samborondón', lat: -2.1333, lng: -79.7167, emoji: '🌿', fact: 'Ciudad moderna junto al río Guayas. Su comunidad, diversa y emprendedora, demuestra que el Ecuador puede crecer sin perder el calor humano que lo define — aquí la modernidad y la calidez conviven sin pelea.' },
      { name: 'Durán', lat: -2.1667, lng: -79.8333, emoji: '🏭', fact: 'Ciudad que conecta la costa con los Andes. Su gente, forjada entre el trabajo y la determinación, construyó una ciudad con el único material que nunca falta aquí: voluntad y solidaridad entre vecinos.' },
    ],
  },
  {
    name: 'Imbabura',
    cities: [
      { name: 'Ibarra', lat: 0.3517, lng: -78.1222, emoji: '🍦', fact: 'La ciudad blanca que enamora con sus helados de paila y sus noches frescas junto al lago Yahuarcocha. Sus ibarreños mezclan la seriedad serrana con el corazón abierto de quien sabe que vive en uno de los lugares más hermosos del mundo, y lo comparten.' },
      { name: 'Otavalo', lat: 0.2342, lng: -78.2603, emoji: '🧣', fact: 'Su mercado indígena es el más famoso de América del Sur. Los otavaleños han viajado por todos los continentes llevando su cultura con dignidad y siempre vuelven — porque Otavalo es un amor que no se puede dejar, y su gente lo sabe y lo celebra.' },
      { name: 'Cotacachi', lat: 0.3025, lng: -78.2697, emoji: '👟', fact: 'Capital mundial del cuero artesanal donde cada pieza lleva historia. Sus artesanos son tan pacientes para enseñar su oficio que uno termina con un objeto hermoso y un amigo nuevo — aquí el conocimiento se transmite con orgullo y afecto.' },
      { name: 'Urcuquí', lat: 0.4167, lng: -78.1833, emoji: '🔬', fact: 'Hogar de Yachay Tech, la Ciudad del Conocimiento del Ecuador. Su comunidad, que convive a diario con los científicos más brillantes del país, aprendió que el saber compartido es el mayor regalo que una persona puede darle a otra.' },
    ],
  },
  {
    name: 'Loja',
    cities: [
      { name: 'Loja', lat: -3.9931, lng: -79.2042, emoji: '🎵', fact: 'La capital musical del Ecuador, donde la cultura y el derecho nacieron juntos. El lojano tiene fama en todo el país de ser intelectual, hospitalario y leal — los amigos que se hacen en Loja son de esos que responden el teléfono a las tres de la mañana.' },
      { name: 'Vilcabamba', lat: -4.2653, lng: -79.2217, emoji: '🌿', fact: 'El Valle de la Longevidad, donde la gente llega a los 100 años activa y en paz. El secreto de sus centenarios no es solo el agua ni el clima — es el compañerismo, el sentido de comunidad y la paz que se respira en cada conversación.' },
      { name: 'Catamayo', lat: -3.9897, lng: -79.3394, emoji: '✈️', fact: 'Puerta aérea de Loja con mangos y limones tan fragantes que se sienten desde lejos. Su gente, heredera del espíritu lojano, recibe a los visitantes con una cálida seriedad que en minutos se convierte en amistad genuina y duradera.' },
    ],
  },
  {
    name: 'Los Ríos',
    cities: [
      { name: 'Babahoyo', lat: -1.8025, lng: -79.5217, emoji: '🌊', fact: 'La ciudad que aprendió a vivir con el río, no contra él — sus casas sobre palafitos son el símbolo de esa sabiduría. Su gente es de las más resilientes y alegres del Ecuador: las inundaciones no apagan un espíritu que el agua misma ayudó a forjar.' },
      { name: 'Quevedo', lat: -1.0281, lng: -79.4613, emoji: '🍫', fact: 'La capital cacaotera donde nació el mejor chocolate del mundo. Sus agricultores cuidan el cacao como se cuida a un hijo, y esa dedicación se siente en cada barra — el chocolate ecuatoriano sabe a cuidado, a sudor honesto y a amor por la tierra.' },
      { name: 'Vinces', lat: -1.5553, lng: -79.7564, emoji: '🎭', fact: 'Llamada el Pequeño París ecuatoriano por sus elegantes balcones republicanos de madera tallada. Sus descendientes guardan esa elegancia mezclada con la calidez del trópico — una combinación que produce las personas más refinadas y generosas de Los Ríos.' },
    ],
  },
  {
    name: 'Manabí',
    cities: [
      { name: 'Portoviejo', lat: -1.0547, lng: -80.4531, emoji: '🏛️', fact: 'Una de las ciudades más antiguas del Ecuador. Los manabitas son famosos en todo el país por ser los más hospitalarios y directos: te dan de comer antes de preguntarte el nombre, y te tratan como familia antes de conocerte — así es Manabí.' },
      { name: 'Manta', lat: -0.9481, lng: -80.7197, emoji: '🐟', fact: 'Capital atunera del mundo y cuna del sombrero de paja toquilla. Sus pescadores y artesanos comparten algo que el mar les enseñó: el trabajo arduo, el orgullo en lo que hacen, y una sonrisa fácil que conquista a todo aquel que llega al puerto.' },
      { name: 'Montecristi', lat: -1.0456, lng: -80.6583, emoji: '👒', fact: 'El verdadero origen del Sombrero Panamá, tejido aquí con paciencia de meses. Sus tejedoras — en su mayoría mujeres — han convertido el arte en sustento y el sustento en legado: lo más valioso que una comunidad puede heredarle a sus hijos.' },
      { name: 'Pedernales', lat: 0.0722, lng: -80.0556, emoji: '🌊', fact: 'Tierra de surfistas y playas vírgenes, y también de personas que supieron levantarse del terremoto del 2016 con una fortaleza que dejó al mundo sin palabras. Pedernales demostró que hay pueblos que nacen para seguir de pie, sin importar lo que caiga.' },
    ],
  },
  {
    name: 'Morona Santiago',
    cities: [
      { name: 'Macas', lat: -2.3047, lng: -78.1158, emoji: '🌿', fact: 'Puerta de la Amazonía shuar. El pueblo shuar es uno de los más valientes de la historia ecuatoriana — resistió a los incas, resistió la conquista española, y hoy sigue de pie como guardián de una selva que es el pulmón del mundo.' },
      { name: 'Gualaquiza', lat: -3.4048, lng: -78.5694, emoji: '🦋', fact: 'Paraíso de cascadas y selva tropical donde los shuar han vivido en armonía con la naturaleza durante miles de años. Sus comunidades practican una regla que el mundo moderno olvidó: que el respeto mutuo es la única ley que funciona de verdad.' },
    ],
  },
  {
    name: 'Napo',
    cities: [
      { name: 'Tena', lat: -0.9925, lng: -77.8161, emoji: '🚣', fact: 'Capital del rafting ecuatoriano con ríos turquesas que bajan desde los Andes. Su gente kichwa amazónica es conocida por su alegría genuina: te ofrecen chicha, te cuentan historias del río, y te hacen sentir parte de una familia que lleva milenios en estas selvas.' },
      { name: 'Archidona', lat: -0.9108, lng: -77.8033, emoji: '🌿', fact: 'Pueblo kichwa con la iglesia pintada más hermosa del Ecuador. Sus artesanos de cerámica trabajan con tierra de la selva y la convierten en arte que cuenta historias de dioses, ríos y estrellas — y las explican con una paciencia y un orgullo conmovedores.' },
    ],
  },
  {
    name: 'Orellana',
    cities: [
      { name: 'Francisco de Orellana', lat: -0.4625, lng: -76.9869, emoji: '🌊', fact: 'El Coca, donde los expedicionarios del siglo XVI dijeron que nació el Amazonas. Sus comunidades indígenas —huaorani, kichwa, siona— son las últimas guardianas de un conocimiento botánico y espiritual que la humanidad no puede permitirse perder.' },
      { name: 'La Joya de los Sachas', lat: -0.2952, lng: -76.8823, emoji: '🛢️', fact: 'Donde la selva amazónica y la vida moderna buscan un equilibrio. Sus habitantes, que vieron crecer una ciudad desde el suelo selvático, tienen la determinación y el orgullo de quienes construyeron algo de la nada con sus propias manos y su propia voluntad.' },
    ],
  },
  {
    name: 'Pastaza',
    cities: [
      { name: 'Puyo', lat: -1.4866, lng: -77.9964, emoji: '🌧️', fact: 'La ciudad del eterno verdor, donde llueve casi todos los días y la naturaleza responde con una exuberancia que no existe en ningún otro lugar. Sus comunidades amazónicas comparten su conocimiento sobre plantas medicinales con una generosidad que no conoce fronteras.' },
      { name: 'Mera', lat: -1.4569, lng: -78.1344, emoji: '🌈', fact: 'Entre los Andes y la Amazonía, Mera vive en una nube de neblina y colibríes. Su comunidad, que habita ese umbral mágico entre dos mundos, tiene una amplitud de corazón poco común — abiertos a lo serrano y a lo amazónico, a lo antiguo y a lo nuevo.' },
    ],
  },
  {
    name: 'Pichincha',
    cities: [
      { name: 'Quito', lat: -0.2295, lng: -78.5243, emoji: '🏔️', fact: 'La capital más alta del mundo y el primer Patrimonio de la Humanidad de la UNESCO. El quiteño puede parecer reservado al principio, pero cuando te abre su puerta, te abre todo: su casa, su historia, su mesa, y ese orgullo infinito por su ciudad que contagia a quien lo escucha.' },
      { name: 'Cayambe', lat: 0.0408, lng: -78.1411, emoji: '🌹', fact: 'Aquí se producen el 70% de las rosas que Ecuador exporta al mundo. Sus trabajadores y trabajadoras, muchos de ellos indígenas cayambis, llevan el amor del Ecuador a bodas y cumpleaños en todos los continentes — flores perfectas nacidas entre manos perfectamente humanas.' },
      { name: 'Rumiñahui', lat: -0.3581, lng: -78.5561, emoji: '🌿', fact: 'Sangolquí, famosa por las mejores fritadas del Ecuador. Su gente lleva el nombre del guerrero que nunca se rindió, y tiene ese mismo carácter: trabajador, orgulloso de lo suyo, y con el corazón tan grande como el volcán Ilaló que los cuida.' },
    ],
  },
  {
    name: 'Santa Elena',
    cities: [
      { name: 'Salinas', lat: -2.2164, lng: -80.9564, emoji: '🏄', fact: 'El balneario más elegante del Ecuador, donde los atardeceres son tan perfectos que la gente viaja cientos de kilómetros solo para verlos. Sus habitantes han aprendido que la mejor forma de recibir a alguien es hacerlo sentir que por fin llegó al lugar correcto.' },
      { name: 'Santa Elena', lat: -2.2281, lng: -80.8569, emoji: '🦣', fact: 'Tierra del Museo Megaterio, con fósiles de hace 10.000 años bajo sus pies. Sus descendientes tienen la profundidad de quien sabe que camina sobre historia viva, y eso les da una humildad y una grandeza especial que se siente en cada conversación.' },
      { name: 'Montañita', lat: -1.8133, lng: -80.7553, emoji: '🏄', fact: 'El rincón bohemio más famoso del Ecuador. Su comunidad ha convivido con viajeros de todo el mundo y eso los hizo personas abiertas, curiosas y con una hospitalidad que ya no es costumbre — es filosofía de vida.' },
    ],
  },
  {
    name: 'Santo Domingo de los Tsáchilas',
    cities: [
      { name: 'Santo Domingo', lat: -0.2523, lng: -79.1719, emoji: '🌺', fact: 'Cruce de caminos entre Costa, Sierra y Amazonía. Los Tsáchilas, que pintan su cabello de achiote rojo como estandarte de identidad, son guardianes de una cultura que resistió cinco siglos con dignidad y con los brazos abiertos al que llega.' },
      { name: 'La Concordia', lat: 0.0081, lng: -79.3939, emoji: '🍃', fact: 'Tierra tropical donde palmas, cacao y comunidades conviven en paz. Sus habitantes, llegados de todas las regiones del Ecuador, crearon juntos una comunidad diversa que prueba algo hermoso: cuando la tierra es buena, la gente aprende a serlo también.' },
    ],
  },
  {
    name: 'Sucumbíos',
    cities: [
      { name: 'Nueva Loja', lat: 0.0867, lng: -76.8831, emoji: '🛢️', fact: 'Lago Agrio, ciudad que creció de la nada entre la selva con colonos llegados de todo el Ecuador buscando un futuro. Aquí se forjó una identidad mestiza y solidaria que solo nace cuando la gente construye algo juntos desde cero — y eso los une para siempre.' },
      { name: 'Shushufindi', lat: 0.1861, lng: -76.6417, emoji: '🌿', fact: 'Donde la selva amazónica y el hombre moderno buscan equilibrio. Sus comunidades indígenas cofán, siona y secoya son las últimas portadoras de lenguas y saberes que la humanidad necesita más que el petróleo que hay bajo sus pies.' },
    ],
  },
  {
    name: 'Tungurahua',
    cities: [
      { name: 'Ambato', lat: -1.2491, lng: -78.6167, emoji: '🌸', fact: 'La ciudad de las flores, las frutas y el pan, con la fiesta más colorida del Ecuador. Sus emprendedores textiles son conocidos como los más trabajadores de los Andes, con ese carácter ambateño que es serio para el trabajo y generoso para la amistad.' },
      { name: 'Baños de Agua Santa', lat: -1.3953, lng: -78.4267, emoji: '🌋', fact: 'El pueblo que vive al pie del volcán activo y nunca lo abandonó. Sus habitantes son famosos por ser los más valientes y acogedores del país — conviven con el peligro con una fe tranquila y comparten sus aguas termales y su taffy con el mundo entero.' },
      { name: 'Quisapincha', lat: -1.3028, lng: -78.7311, emoji: '🧤', fact: 'Cuna del cuero artesanal del Ecuador, hogar de Urban ReSound. Sus talabarteros elaboran chompas, bolsos y calzado que viajan al mundo llevando consigo algo más que cuero: el orgullo de manos que aprendieron de sus padres y enseñan a sus hijos.' },
      { name: 'Pelileo', lat: -1.3333, lng: -78.5333, emoji: '👖', fact: 'La capital del jean ecuatoriano que viste a Latinoamérica. Sus confeccionistas, en su mayoría mujeres, trabajan con una habilidad y rapidez admirables y con ese carácter pelileño que no se rinde ante nada ni ante nadie.' },
    ],
  },
  {
    name: 'Zamora Chinchipe',
    cities: [
      { name: 'Zamora', lat: -4.0669, lng: -78.9539, emoji: '🦜', fact: 'La ciudad del cascabel, bañada por ríos que brillan como oro entre bosques nublados llenos de aves únicas. Sus habitantes tienen la delicadeza de quien vive rodeado de tanta belleza natural y la comparten con una generosidad que no necesita palabras.' },
      { name: 'Yantzaza', lat: -3.8219, lng: -78.7558, emoji: '⛏️', fact: 'En el corazón del Cóndor Mirador, donde los ríos arrastran pepitas de oro. Su comunidad shuar practica una solidaridad ancestral que el mundo moderno busca sin encontrar: cuando alguien necesita ayuda, toda la comunidad se mueve — sin preguntar, sin esperar.' },
    ],
  },
]
