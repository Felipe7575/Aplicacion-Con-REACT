
class articulo {
    constructor(id,name,description,stock, largeDescript) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.stock = stock;
      this.largeDescript= largeDescript;
    }
  
  }
  
export const getDetails = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          const articulos = [new articulo(1,"Filamento Gris","Filamento de color gris",5,"Descripcion: Nuevo XPLA 850 Mayor resistencia al impacto y mayor resistencia al calor Este nuevo biopolímero mantiene las propiedades de impresión de un PLA común, mejorando su calidad post impresión teniendo así mayor resistencia al impacto que un ABS y 7 veces más que un PLA común, resistiendo temperaturas de hasta 85°C Temperatura de impresión: Pico: 190-230°C Cama: 50-70°C Temperatura de recocción: 80-130°C?")];
          resolve(articulos);
          }, 2000);
          
          });
    return task;
};

export const getProductos2 = () => {
  return fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=481950707&q=filamento pla 1kg Makerparts &limit=10').then(response => response.json())
};

