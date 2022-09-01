
class articulo {
    constructor(id,name,description,stock) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.stock = stock;
    }
  
  }
  
export const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          const articulos = [new articulo(1,"Filamento Gris","Filamento de color gris",5),new articulo(2,"Filamento Azul","Filamento de color azul",7), new articulo(5,"Filamento Rojo","Filamento de color rojo",0)];
          resolve(articulos);
          }, 2000);
          
          });
    return task;
};

