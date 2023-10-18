// https://nextjs.org/docs/app/api-reference
// https://stackoverflow.com/questions/76209343/next-13-4-where-is-the-api-folder
import { NextResponse } from "next/server";

export const miArreglo = [
  {
    foto: "https://comprarespecias.net/wp-content/uploads/2022/07/abedul-hoja.jpg",
    planta: "Abedul",
    cientifico: "Betula Pendula Roth.",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día.",
    dolencia: ["trastornos renales y de las vías urinarias","reumatismo","fiebre","cicatrizante y antiséptico","afecciones a la piel","pérdida de cabello"
    ],
  },
  {
    foto: "https://cdn0.ecologiaverde.com/es/posts/9/8/0/achicoria_que_es_propiedades_y_contraindicaciones_4089_orig.jpg",
    planta: "Achicoria Amarga",
    cientifico: "Cichorium intybus L.",
    informacion:"La infusión se prepara con 1 cucharada de hojas secas trituradas para 1 litro de agua recién hervida la raíz se usa mediante decocción, hirviendo la misma cantidad 5 a 10 minutos: beber 1 taza 3 veces al día.",
    dolencia: ["afecciones estomacales","afecciones hepáticas","trastornos renales y de las vías urinarias","retención de líquidos"],
  },
  {
    foto: "https://www.tiendamika.cl/cdn/shop/products/7ajenjo_1200x1200.jpg?v=1626178437",
    planta: "Ajenjo",
    cientifico: "Artemisia absinthium L.",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día.",
    dolencia: ["afecciones estomacales","afecciones hepáticas","problemas menstruales","gripe y resfriado"],
  },
  {
    foto: "https://i.blogs.es/aeca97/albahaca7/840_560.jpg",
    planta: "Albahaca",
    cientifico: "Ocimum basilicum L.",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día. Como laxante, usar en ayunas y antes del almuerzo",
    dolencia: ["problemas menstruales", "afecciones estomacales", "afecciones a la piel", "reumatismo", "cicatrizante y antiséptico"],
  },
  {
    foto: "https://lamesahabla.com/wp-content/uploads/2021/03/mesa-habla-alcachofas-planta-1-1000x799.jpg",
    planta: "Alcachofa",
    cientifico: "Cynara scolymus L.",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día",
    dolencia: ["afecciones hepáticas", "retención de líquidos", "colesterol alto"],
  },
  {
    foto: "https://www.elhuertoemporio.cl/wp-content/uploads/aloe-gastroactitud2.jpg",
    planta: "Aloe",
    cientifico: "Aloe vera L. Burm. f.",
    informacion:"a) Jugo espeso de las hojas (jugo parduzco y amargo, que escurre espontáneamente del corte de la hoja fresca): en estreñimiento beber 1 cucharada de jugo fresco. b) Gel de las hojas (líquido viscoso, incoloro y transparente obtenido del corte longitudinal completo de la hoja fresca): en úlceras digestivas se usa la vía oral. Beber el gel de un trozo de hoja de 10 cm más o menos, puro o mezclado con agua o jugo de fruta, 2 ó 3 veces al día (el resto de la hoja o paleta de aloe se guarda parada en el refrigerador, siendo conveniente hacer cada nuevo corte del trozo remanente debajo de un chorro de agua fresca). Como cicatrizante de heridas menores, quemaduras u otro tipo de laceraciones, se aplica directamente en la piel.",
    dolencia: ["afecciones estomacales", "ulceras", "cicatrizante y antiséptico"],
  },
  {
    foto: "https://mejorconsalud.as.com/wp-content/uploads/2023/02/planta-anis.jpg",
    planta: "Anis",
    cientifico: "Pimpinella anisum L.",
    informacion:"La infusión se prepara con 1 cucharada de vegetal para 1litro de agua recién hervida: beber 1 taza 2 a 3 veces al día.",
    dolencia: ["afecciones estomacales", "gripe y resfriado", "fiebre"],
  },
  {
    foto: "https://media.admagazine.com/photos/6238bfaaba179a59889b8304/1:1/w_3203,h_3203,c_limit/arnica.jpg",
    planta: "Arnica",
    cientifico: "Arnica montana L.",
    informacion:"La infusión se prepara con 1 cucharada de flores para 1 litro de agua hirviendo. Se usa en forma de lavado.",
    dolencia: ["antiinflamatorio"],
  },
  {
    foto: "https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/arrayan.jpg&w=550&f=jpg",
    planta: "Arrayán",
    cientifico: "Luma chequen (Mol.) A. Gray",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 taza de agua recién hervida: beber 1 taza 3 veces en el día.",
    dolencia: ["afecciones estomacales","reumatismo"],
  },
  {
    foto: "https://estaticos-cdn.elperiodico.com/clip/79d93e1b-ff23-41af-a6f4-abb2124fadae_source-aspect-ratio_default_0.jpg",
    planta: "Artemisa",
    cientifico: "Tanacetum parthenium (L) Sch. Bip",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 2 a 3 veces al día.",
    dolencia: ["afecciones estomacales", "problemas menstruales", "fiebre", "reumatismo", "dolor de cabeza"],
  },
  {
    foto: "https://www.tiendamika.cl/cdn/shop/products/12bailahuen1_1200x1200.jpg?v=1626183442",
    planta: "Bailahuén",
    cientifico: "varias especies del género Haplopappus",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua hirviendo: beber 1 taza 3 veces al día.",
    dolencia: ["afecciones hepáticas", "afecciones estomacales", "trastornos renales y de las vías urinarias", "gripe y resfriado", "cicatrizante y antiséptico"],
  },
  {
    foto: "https://www.mnhn.gob.cl/sites/www.mnhn.gob.cl/files/2021-04/hoja%20de%20boldo%20foto%20G.%20Rojas.jpg",
    planta: "Boldo",
    cientifico: "Peumus boldus Mol.",
    informacion:"La infusión se prepara con 1 cucharada para 1 litro de agua hirviendo: beber 1 taza 3 veces al día.",
    dolencia: ["afecciones estomacales", "afecciones hepáticas", "reumatismo"],
  },
  {
    foto: "https://www.ballchile.cl/wp-content/uploads/2023/03/borraja.jpg",
    planta: "Borraja",
    cientifico: "Borago officinalis L.",
    informacion:"La infusión se prepara con 1 cucharada de hojas y/o flores para 1 litro de agua recién hervida: beber 1 taza 3 veces al día.",
    dolencia: ["fiebre", "trastornos renales y de las vías urinarias", "gripe y resfriado", "problemas menstruales", "afecciones a la piel"],
  },
  {
    foto: "https://mejorconsalud.as.com/wp-content/uploads/2018/04/Bardana-silvestre.jpg",
    planta: "Bardana",
    cientifico: "Arctium lappa L.",
    informacion:"La infusión se prepara con 1 cucharada de hojas para 1 litro de agua recién hervida: beber 1 taza 2 a 3 veces al día. La decocción (cocimiento) se prepara con 1 cucharada de raíz y tallo picado o triturado en 1 litro de agua fría que se deja reposar algunas horas y luego se hierve no más de 5 minutos y al final se cuela: beber 1 taza 3 veces en el día.",
    dolencia: ["reumatismo", "afecciones estomacales", "retención de líquidos", "afecciones a la piel"],
  },
  {
    foto: "https://mejorconsalud.as.com/wp-content/uploads/2021/01/flor-bolsa-pastor.jpg",
    planta: "Bolsita del Pastor",
    cientifico: "Capsella bursa-pastoris (L.) MEDIK",
    informacion:"La infusión se prepara con 1 cucharada del vegetal fresco para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día. La decocción (cocimiento) se prepara hirviendo 1 cucharada de corteza en 1 litro de agua por 10 minutos: beber 1 taza 3 veces en el día.",
    dolencia: ["problemas menstruales", "afecciones estomacales", "cicatrizante y antiséptico", "ulceras"],
  },
  {
    foto: "https://oshadhi.co.uk/wp-content/uploads/2020/12/1215-buchu-essential-oil-agathosma-crenulata-2-optimized.jpg",
    planta: "Buchú",
    cientifico: "Agathosma betulina (Berg.) Pillans",
    informacion:"La infusión se prepara con 1 cucharada de hojas trituradas por 1 litro de agua recién hervida: beber 1 taza 3 veces al día.",
    dolencia: ["trastornos renales y de las vías urinarias", "reumatismo", "cicatrizante y antiséptico", "antiinflamatorio"],
  },
  {
    foto: "https://farm6.static.flickr.com/5057/5558484871_dcc64488b3.jpg",
    planta: "Cabello de Ángel",
    cientifico: "Cuscuta chilensis Ker-Gawl",
    informacion:"La infusión se prepara con una cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces al día.",
    dolencia: ["antiinflamatorio", "retención de líquidos"],
  },
  {
    foto: "https://www.cualestuhuella.cl/files/61a01238e5b16_890x533.jpg",
    planta: "Cachanlagua",
    cientifico: "Centaurium cachanlahuen B.L.Rob.",
    informacion:"La infusión se prepara con 1 cucharadita de la planta para 1 taza de agua recién hervida: beber 1 taza al día",
    dolencia: ["fiebre","reumatismo", "afecciones hepáticas", "afecciones estomacales"],
  },
  {
    foto: "https://www.tiendamika.cl/cdn/shop/products/15canelo1_1200x1200.jpg?v=1691162663",
    planta: "Canelo",
    cientifico: "Drimys winteri J.R. et G.Forster",
    informacion:"Usar la misma infusión en lavados, baños o cataplasmas. Para estos usos también puede prepararse una decocción de la corteza, hirviendo 1 cucharada por 5 minutos.",
    dolencia: ["afecciones estomacales", "reumatismo", "afecciones de la piel"],
  },
  {
    foto: "https://media.admagazine.com/photos/624f74bf1fc7637dbef3f431/16:9/w_2560%2Cc_limit/verbena.jpg",
    planta: "Cedrón",
    cientifico: "Aloysia citrodora Paláu",
    informacion:"La infusión se prepara con 1 cucharada de la planta para 1 litro de agua recién hervida, dejar reposar: beber 1 taza 3 a 4 veces al día.",
    dolencia: ["afecciones estomacales", "gripe y resfriado"],
  },
  {
    foto: "https://www.ecoregistros.org/site/images/dataimages/2021/08/22/458451/a4.JPG",
    planta: "Cepa caballo",
    cientifico: "Acaena splendens Hook et Arn",
    informacion:"La infusión se prepara con 2 cucharadas de hojas secas y trituradas para 1 litro de agua recién hervida, dejar reposar durante 10 minutos: beber 1 taza 3 veces al día.",
    dolencia: ["afecciones hepáticas", "trastornos renales y de las vías urinarias", "antiinflamatorio"],
  },
  {
    foto: "https://www.tiendamika.cl/cdn/shop/products/20chepicablanca_1200x1200.jpg?v=1626195145",
    planta: "Chépica",
    cientifico: "Paspalum vaginatum Sw.",
    informacion:"El cocimiento se prepara con 1 cucharada de rizoma y raíces trituradas para 1 taza de agua, que se hierve por unos minutos: beber 1 taza 3 veces en el día.",
    dolencia: ["trastornos renales y de las vías urinarias", "retención de líquidos"],
  },
  {
    foto: "https://inaturalist-open-data.s3.amazonaws.com/photos/267404738/large.jpg",
    planta: "Chilco",
    cientifico: "Fuchsia magellanica Lam.",
    informacion:"Se usa en decocción o cocimiento, la que se prepara con 1 cucharada de planta para 1 litro de agua, hervir 5 minutos y dejar reposar: beber 1 taza 2-3 veces al día.",
    dolencia: ["problemas menstruales", "fiebre", "retención de líquidos"],
  },
  {
    foto: "https://chileestuyo.cl/wp-content/uploads/2022/08/chinita-1.jpg",
    planta: "Chinita",
    cientifico: "Calendula officinalis L.",
    informacion:". La infusión se prepara con 1 cucharada de flores frescas o secas para 1 litro de agua recién hervida: beber 1 taza 3 veces al día.",
    dolencia: ["afecciones estomacales","ulceras", "problemas menstruales", "afecciones a la piel", "cicatrizante y antiséptico"],
  },
  {
    foto: "https://comidaschilenas.com/wp-content/uploads/2019/04/Cochayuyo.jpg",
    planta: "Cochayuyo",
    cientifico: "Durvillea Antarctica (Chamizo) Arito)",
    informacion:"La planta guisada (en ensalada u otro plato caliente) ayuda a combatir la obesidad por su alto aporte de fibra soluble e insoluble. ",
    dolencia: ["colesterol alto"],
  },
  {
    foto: "https://www.zimbabweflora.co.zw/speciesdata/images/16/160760-3.jpg",
    planta: "Contrayerba",
    cientifico: "Flaveria bidentis (L.) O. Kuntze",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día. La misma preparación sirve para lavar heridas.",
    dolencia: ["afecciones estomacales", "fiebre", "problemas menstruales", "ulceras"],
  },
  {
    foto: "https://www.tiendamika.cl/cdn/shop/products/23CULEN_1200x1200.png?v=1629915813",
    planta: "Culén",
    cientifico: "Otholobium glandulosum (L.) Grimes",
    informacion:"La infusión se prepara con 1 cucharada de la planta para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día. ",
    dolencia: ["afecciones estomacales", "cicatrizante y antiséptico"],
  },
  {
    foto: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/03/diente-de-leon.jpg",
    planta: "Diente de León",
    cientifico: "Taraxacum officinale agg. Weber",
    informacion:"La infusión se prepara con 1 cucharada de hojas para 1 litro de agua recién hervida: beber 1 taza 3 veces al día. Para las raíces hacer una decocción, hirviendo 1 cucharada por 10 minutos.",
    dolencia: ["afecciones hepáticas", "afecciones estomacales", "reumatismo", "retención de líquidos"],
  },
  {
    foto: "https://www.gastronomiavasca.net/uploads/image/file/3346/bayas_de_enebro.jpg",
    planta: "Enebro",
    cientifico: "Juniperus comunis L",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida; beber 1 taza 3 veces en el día. La decocción (cocimiento) se prepara hirviendo 1 cucharada del vegetal en 1 litro de agua durante 10 minutos: usar mediante lavados y compresas.",
    dolencia: ["trastornos renales y de las vías urinarias", "gripe y resfriado", "reumatismo"],
  },
  {
    foto: "https://live.staticflickr.com/7039/26805902746_2696b9978e_b.jpg",
    planta: "Espuela de Galán",
    cientifico: "Tropaelum majus L.",
    informacion:"La infusión se prepara con 1 cucharada del vegetal para 1 litro de agua recién hervida: beber 1 taza 3 veces en el día. La misma preparación se emplea para lavados. La hoja fresca machacada se usa como cataplasma en hematomas y moretones.",
    dolencia: ["gripe y resfriado", "trastornos renales y de las vías urinarias", "cicatrizante y antiséptico", "perdida de cabello", "antiinflamatorio"],
  },
];

// Y la manejamos con el método GET, por ruta sería en (local): http://localhost:3000/api/ejemplo-1
// Al ser relativo, se hace un fetch a /api/ejemplo-1
// Donde '/api/ejemplo' es la ruta en la que se encuentra este archivo

export async function GET() {
  return new NextResponse.json(miArreglo);
}