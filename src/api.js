import img from "./assets/img/articulos/img";

class articulo {
    constructor(id,name,description,catId,stock, largeDescript,img,precio,precioOferta=0) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.stock = stock;
      this.largeDescript= largeDescript;
      this.img=img;
      this.precio = precio;
      this.catId = catId;
      this.precioOferta=precioOferta;
    }
  
  }
  
export const getProductos2 = () => {
  return fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=481950707&q=filamento pla 1kg Makerparts &limit=10').then(response => response.json())
};



const articulos = [
  new articulo(70648,
              "xPLA850MKP-1.75Blanco",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              14, 
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70648],
              3550,
              4
      ),
  new articulo(70649,
              "xPLA850MKP-1.Cobre",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              120,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C", 
              img[70649],
              3550,
              2
      ),
  new articulo(70650,
              "xPLA850MKP-1.75Gris",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              101,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70650],
              3550
      ),
  new articulo(70651,
              "xPLA850MKP-1.75Rojo",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              103,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70651],
              3550
      ),
  new articulo(70652,
              "xPLA850MKP-1.75Azul",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              104,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70652],
              3550
      ),
  new articulo(70653,
              "xPLA850MKP-1.75Verde",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              150,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70653],
              3550
      ),
  new articulo(70654,
              "xPLA850MKP-1.75Amarillo",
              "Rollo 1KG xPLA 850 Makerparts NACIONAL",
              1,
              110,
              "Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C",
              img[70654],
              3550
      ),
  new articulo(70655,
              "xABS850MKP-1.75Naranja",
              "Rollo 1KG xABS 850 Makerparts NACIONAL",
              2,
              3,
              "Gran tenacidad, ideal para piezas de esfuerzos mecánicos, posible uso a temperaturas de hasta -40° C y en calor hasta 90° C. Las piezas impresas en ABS pueden ser lijadas, cortadas y pintadas. Es soluble en acetona para mejor acabado. Temperatura de Pico: 180° – 230° Temperatura de Cama: 50° – 110° Densidad g/cc 1.05 g/cm³ ASTM D792 Índice de fluidez 11,7 g/10 min ASTM D1238 230°C/3.8 kgf Mecánicas Resistencia a la tracción 35 Mpa ASTM 638 Type I, 5 mm/min Elongación a la rotura 18% ASTM 638 Type I, 5 mm/min Módulo elástico en tracción 2480 Mpa ASTM 638 Dureza, Rockwell R 113 ASTM D 785 Resistencia a la flexión 79 Mpa ASTM D 790 Resistencia al impacto 240 J/m ASTM D 256 izod con entalla, @23°C Térmicas Temperatura de deflexión bajo carga 82°C ASTM D 648 1.82 MPa, 3.2mm, unannealed makerparts.net - Made in Argentina",
              img[70655],
              4250
      ),
  new articulo(70656,
              "xABS850MKP-1.75Blanco",
              "Rollo 1KG xABS 850 Makerparts NACIONAL",
              2,
              0,
              "Gran tenacidad, ideal para piezas de esfuerzos mecánicos, posible uso a temperaturas de hasta -40° C y en calor hasta 90° C. Las piezas impresas en ABS pueden ser lijadas, cortadas y pintadas. Es soluble en acetona para mejor acabado. Temperatura de Pico: 180° – 230° Temperatura de Cama: 50° – 110° Densidad g/cc 1.05 g/cm³ ASTM D792 Índice de fluidez 11,7 g/10 min ASTM D1238 230°C/3.8 kgf Mecánicas Resistencia a la tracción 35 Mpa ASTM 638 Type I, 5 mm/min Elongación a la rotura 18% ASTM 638 Type I, 5 mm/min Módulo elástico en tracción 2480 Mpa ASTM 638 Dureza, Rockwell R 113 ASTM D 785 Resistencia a la flexión 79 Mpa ASTM D 790 Resistencia al impacto 240 J/m ASTM D 256 izod con entalla, @23°C Térmicas Temperatura de deflexión bajo carga 82°C ASTM D 648 1.82 MPa, 3.2mm, unannealed makerparts.net - Made in Argentina",
              img[70656],
              4250,
              10
      ),
  new articulo(70657,
              "3DPrinter-ImpMakerParts4KResina",
              "Resina 4K Makerparts NACIONAL",
              3,
              10,
              "Resina 4K Makerparts NACIONAL : Nueva Impresora de Resina MakerParts 4k + 500gr de Resina! La mejor resolución, lográ impresiones increibles con su pantalla monogromática de 4k y curado ultra rápido.",
              img[70657],
              54250
      ),  
  new articulo(70658,
              "3DPrinter-ImpresoraMakerparts2-30^3-V2021-ArmadaDU",
              "Impresora 3D Makerparts2 300x300x300 ¡100% metal! Versión SIMPLE - Armada lista ",
              3,
              30,
              "Características Principales\
              -Volumen útil: 300x300x300mm \
              -Hotend DUAL\
              -Motores Z con acople y varilla ACME\
              -Permite uso XY a correa o a Varilla tipo Acme(incluye correa, no incluye XY a acme, se vende como accesorio)\
              -Fuente alta potencia 24v\
              -Fan de Capa DOBLE Turbo alto caudal de aire\
              -Mesa de Vidrio\
              -Recuperación por corte de energía\
              -Último Firmware Marlin 2.0\
              -Estructura 100% Metálica\
              -Diseñada y fabricada en Argentina\
              \
              *Garantía 6 meses\
              *Repuestos de todos los componentes disponibles, planos del equipo descargables\
              \
              -Compatible con Accesorios (no Incluidos):\
              *Movimiento XY a tornillo acme\
              *Router/Spindle\
              *Laser\
              *Mesa para Laser/Spindle\
              *Extrusion Rapida con hotend Volcano\
              \
              Firmware:Marlin 2.0\
              Manual, archivos de impresión, firmware y más: drive.google.com/drive/folders/1v-MSlVdwSX1Gm5u2FskXcr0vjRJQEr5m?usp=sharing\
              \
              VIDEOS DE USO:\
              Iniciate rápido, perfecciona tus conocimientos y sacale el mayor provecho a la tecnología youtube.com/watch?v=sdm17L2WLts&t=24s",
              img[70658],
              64250
      ),
 ];


 export const getDetails = (artId) => {
  const task = new Promise((resolve, reject) => {
      setTimeout(() => {
            const arti = articulos.find((art) =>{if(parseInt(artId)==art.id){return art;}});	
            resolve(arti);
          }, 500);       
        });
  return task;
};

export const getProductos = (catId) => {
  
  const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        let resultado = [];
        if(catId == 0){ resultado = articulos;}
        else{
              resultado = articulos.filter((art) => {
                if(parseInt(catId)==art.catId){ return art;}}); 
            }	
        resolve(resultado);
        }, 500);
        });
  return task;
};