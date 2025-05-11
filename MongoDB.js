/* El siguiente codigo se uso en la consola de MongoDB Compass
en una instalación de windows, lo primero fue iniciar el servicio en windows
usando en shell la linea mongod, luego en Compass creamos la conexión e iniciamos
*/


//Crea la base o se mueve a esta si ya esta
use tienda_ropa;

//Creamos las diferentes colecciones que definimos en nuestra base
// createCollection fuerza al creación sin tener que ingresar el primer documento
db.createCollection("productos");
db.createCollection("categorias");
db.createCollection("usuarios");
db.createCollection("ordenes_ropa");

/* ====================================================================================== */
/* ============== Consultas de inserciones de los 100 elementos solicitados ============= */
/* ====================================================================================== */

//Insertar documentos en colleccion categorias
db.categorias.insertMany([
    { _id: 1, nombre: "Camisetas", descripcion: "Ropa casual superior para uso diario" },
    { _id: 2, nombre: "Pantalones", descripcion: "Pantalones de mezclilla, tela o deportivos" },
    { _id: 3, nombre: "Zapatos", descripcion: "Calzado deportivo y casual" },
    { _id: 4, nombre: "Accesorios", descripcion: "Gorras, cinturones, relojes, etc." }
    { _id: 5, nombre: "Chaquetas", descripcion: "Ropa de abrigo para clima frío o lluvioso" },
    { _id: 6, nombre: "Sudaderas", descripcion: "Ropa cómoda para uso casual o deportivo" },
    { _id: 7, nombre: "Ropa Deportiva", descripcion: "Conjuntos y prendas especializadas para ejercicio" },
    { _id: 8, nombre: "Ropa Interior", descripcion: "Prendas íntimas para hombres y mujeres" },
    { _id: 9, nombre: "Vestidos", descripcion: "Prendas completas, especialmente para mujeres" },
    { _id: 10, nombre: "Gafas de Sol", descripcion: "Accesorios para protección ocular y moda" }
]);

//Insertar documentos en collección Productos
db.productos.insertMany([
    // Camisetas (categoría 1)
    {
      _id: 1, nombre: "Camiseta Negra Básica", descripcion: "Camiseta unisex algodón", precio: 39.99, stock: 40,
      colores: ["negro"], tallas: ["S", "M", "L", "XL"], categoria_id: 1, valoracion_promedio: 4.2, fecha_creacion: new Date()
    },
    {
      _id: 2, nombre: "Camiseta Estampada", descripcion: "Diseño gráfico moderno", precio: 45.50, stock: 30,
      colores: ["blanco", "rojo"], tallas: ["M", "L"], categoria_id: 1, valoracion_promedio: 4.7, fecha_creacion: new Date()
    },
    {
      _id: 3, nombre: "Camiseta Sin Mangas", descripcion: "Ideal para entrenamiento", precio: 29.90, stock: 25,
      colores: ["gris"], tallas: ["S", "M", "L"], categoria_id: 1, valoracion_promedio: 4.3, fecha_creacion: new Date()
    },
    // Pantalones (categoría 2)
    {
      _id: 4, nombre: "Pantalón Chino Beige", descripcion: "Casual y cómodo", precio: 59.90, stock: 20,
      colores: ["beige"], tallas: ["30", "32", "34"], categoria_id: 2, valoracion_promedio: 4.5, fecha_creacion: new Date()
    },
    {
      _id: 5, nombre: "Jogger Deportivo", descripcion: "Con puños elásticos", precio: 49.99, stock: 35,
      colores: ["negro", "azul"], tallas: ["S", "M", "L", "XL"], categoria_id: 2, valoracion_promedio: 4.4, fecha_creacion: new Date()
    },
    {
      _id: 6, nombre: "Pantalón Cargo Verde", descripcion: "Bolsillos laterales", precio: 69.50, stock: 22,
      colores: ["verde militar"], tallas: ["32", "34", "36"], categoria_id: 2, valoracion_promedio: 4.1, fecha_creacion: new Date()
    },
    // Zapatos (categoría 3)
    {
      _id: 7, nombre: "Zapatos de Cuero", descripcion: "Para vestir formal", precio: 149.99, stock: 15,
      colores: ["negro", "marrón"], tallas: ["40", "42", "44"], categoria_id: 3, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    {
      _id: 8, nombre: "Zapatillas Running", descripcion: "Diseñadas para correr", precio: 129.90, stock: 18,
      colores: ["gris", "azul"], tallas: ["39", "41", "43"], categoria_id: 3, valoracion_promedio: 4.8, fecha_creacion: new Date()
    },
    {
      _id: 9, nombre: "Sandalias Verano", descripcion: "Ligeras y cómodas", precio: 39.90, stock: 25,
      colores: ["beige"], tallas: ["38", "40", "42"], categoria_id: 3, valoracion_promedio: 4.0, fecha_creacion: new Date()
    },
    // Accesorios (categoría 4)
    {
      _id: 10, nombre: "Reloj Deportivo", descripcion: "Resistente al agua", precio: 199.99, stock: 12,
      colores: ["negro", "azul"], tallas: [], categoria_id: 4, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    {
      _id: 11, nombre: "Cinturón Cuero", descripcion: "Clásico con hebilla", precio: 39.00, stock: 30,
      colores: ["negro", "café"], tallas: ["M", "L", "XL"], categoria_id: 4, valoracion_promedio: 4.2, fecha_creacion: new Date()
    },
    {
      _id: 12, nombre: "Gorra Trucker", descripcion: "Con malla trasera", precio: 25.90, stock: 40,
      colores: ["rojo", "gris"], tallas: [], categoria_id: 4, valoracion_promedio: 4.3, fecha_creacion: new Date()
    },
    // Chaquetas (categoría 5)
    {
      _id: 13, nombre: "Chaqueta Impermeable", descripcion: "Ideal para lluvia", precio: 89.90, stock: 20,
      colores: ["azul", "negro"], tallas: ["M", "L", "XL"], categoria_id: 5, valoracion_promedio: 4.5, fecha_creacion: new Date()
    },
    {
      _id: 14, nombre: "Chaqueta Cuero Sintético", descripcion: "Estilo motociclista", precio: 119.50, stock: 10,
      colores: ["negro"], tallas: ["L", "XL"], categoria_id: 5, valoracion_promedio: 4.4, fecha_creacion: new Date()
    },
    {
      _id: 15, nombre: "Chaqueta Jean", descripcion: "Casual y moderna", precio: 79.00, stock: 18,
      colores: ["azul claro"], tallas: ["S", "M", "L"], categoria_id: 5, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    // Sudaderas (categoría 6)
    {
      _id: 16, nombre: "Sudadera Clásica Gris", descripcion: "Interior afelpado", precio: 49.99, stock: 32,
      colores: ["gris"], tallas: ["M", "L", "XL"], categoria_id: 6, valoracion_promedio: 4.4, fecha_creacion: new Date()
    },
    {
      _id: 17, nombre: "Conjunto Deportivo", descripcion: "Chaqueta + pantalón", precio: 89.90, stock: 15,
      colores: ["negro", "verde"], tallas: ["S", "M", "L"], categoria_id: 6, valoracion_promedio: 4.7, fecha_creacion: new Date()
    },
    {
      _id: 18, nombre: "Hoodie Oversize", descripcion: "Sudadera de gran tamaño", precio: 59.90, stock: 28,
      colores: ["beige", "negro"], tallas: ["L", "XL", "XXL"], categoria_id: 6, valoracion_promedio: 4.3, fecha_creacion: new Date()
    },
    // Ropa Deportiva (categoría 7)
    {
      _id: 19, nombre: "Top Deportivo Mujer", descripcion: "Soporte medio", precio: 34.99, stock: 20,
      colores: ["rosado", "negro"], tallas: ["S", "M", "L"], categoria_id: 7, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    {
      _id: 20, nombre: "Short Running", descripcion: "Ligero y transpirable", precio: 29.90, stock: 35,
      colores: ["azul", "gris"], tallas: ["S", "M", "L"], categoria_id: 7, valoracion_promedio: 4.4, fecha_creacion: new Date()
    },
    {
      _id: 21, nombre: "Camiseta Dry Fit", descripcion: "Tecnología de secado rápido", precio: 39.00, stock: 25,
      colores: ["blanco", "azul"], tallas: ["S", "M", "L", "XL"], categoria_id: 7, valoracion_promedio: 4.5, fecha_creacion: new Date()
    },
    // Ropa Interior (categoría 8)
    {
      _id: 22, nombre: "Boxers Pack x3", descripcion: "Algodón elástico", precio: 49.90, stock: 30,
      colores: ["negro", "azul", "gris"], tallas: ["M", "L", "XL"], categoria_id: 8, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    {
      _id: 23, nombre: "Brasier Deportivo", descripcion: "Sin varillas", precio: 39.99, stock: 18,
      colores: ["rosado", "gris"], tallas: ["S", "M", "L"], categoria_id: 8, valoracion_promedio: 4.7, fecha_creacion: new Date()
    },
    {
      _id: 24, nombre: "Panties Pack x5", descripcion: "Suaves y cómodos", precio: 55.00, stock: 22,
      colores: ["multicolor"], tallas: ["S", "M", "L"], categoria_id: 8, valoracion_promedio: 4.4, fecha_creacion: new Date()
    },
    // Vestidos (categoría 9)
    {
      _id: 25, nombre: "Vestido Casual Flores", descripcion: "Ligero y fresco", precio: 79.90, stock: 15,
      colores: ["floral"], tallas: ["S", "M", "L"], categoria_id: 9, valoracion_promedio: 4.8, fecha_creacion: new Date()
    },
    {
      _id: 26, nombre: "Vestido Largo Negro", descripcion: "Elegante para eventos", precio: 120.00, stock: 10,
      colores: ["negro"], tallas: ["M", "L"], categoria_id: 9, valoracion_promedio: 4.7, fecha_creacion: new Date()
    },
    {
      _id: 27, nombre: "Vestido de Encaje", descripcion: "Romántico y delicado", precio: 89.50, stock: 12,
      colores: ["blanco", "rojo"], tallas: ["S", "M", "L"], categoria_id: 9, valoracion_promedio: 4.5, fecha_creacion: new Date()
    },
    // Gafas de Sol (categoría 10)
    {
      _id: 28, nombre: "Gafas Vintage", descripcion: "Diseño retro", precio: 45.00, stock: 25,
      colores: ["marrón", "dorado"], tallas: [], categoria_id: 10, valoracion_promedio: 4.6, fecha_creacion: new Date()
    },
    {
      _id: 29, nombre: "Gafas Deportivas UV", descripcion: "Protección y estilo", precio: 59.99, stock: 20,
      colores: ["negro", "naranja"], tallas: [], categoria_id: 10, valoracion_promedio: 4.5, fecha_creacion: new Date()
    },
    {
      _id: 30, nombre: "Gafas de Sol Polarizadas", descripcion: "Alta protección solar", precio: 69.90, stock: 18,
      colores: ["negro"], tallas: [], categoria_id: 10, valoracion_promedio: 4.8, fecha_creacion: new Date()
    }
]);

  //Insertar documentos en colección clientes
  db.usuarios.insertMany([
    {
      _id: 1, nombre: "Juan Pérez", correo: "juanp@gmail.com", telefono: "3111234567", ciudad: "Bogotá",
      fecha_registro: new Date("2024-03-01"), historial_compras: [1, 5, 7], puntos: 120
    },
    {
      _id: 2, nombre: "María Gómez", correo: "mariag@gmail.com", telefono: "3122345678", ciudad: "Medellín",
      fecha_registro: new Date("2024-02-10"), historial_compras: [3, 6], puntos: 95
    },
    {
      _id: 3, nombre: "Carlos Rodríguez", correo: "carlosr@yahoo.com", telefono: "3103456789", ciudad: "Cali",
      fecha_registro: new Date("2023-12-15"), historial_compras: [9, 12, 15, 18], puntos: 200
    },
    {
      _id: 4, nombre: "Ana Martínez", correo: "anam@hotmail.com", telefono: "3134567890", ciudad: "Bucaramanga",
      fecha_registro: new Date("2024-01-20"), historial_compras: [2, 8, 16], puntos: 150
    },
    {
      _id: 5, nombre: "Luis Torres", correo: "luistorres@gmail.com", telefono: "3155678901", ciudad: "Bogotá",
      fecha_registro: new Date("2024-04-01"), historial_compras: [1, 4], puntos: 80
    },
    {
      _id: 6, nombre: "Sofía Ramírez", correo: "sofiar@yahoo.com", telefono: "3116789012", ciudad: "Cali",
      fecha_registro: new Date("2024-03-10"), historial_compras: [10, 11, 14], puntos: 175
    },
    {
      _id: 7, nombre: "Diego Herrera", correo: "diegoh@gmail.com", telefono: "3167890123", ciudad: "Medellín",
      fecha_registro: new Date("2024-01-05"), historial_compras: [], puntos: 0
    },
    {
      _id: 8, nombre: "Laura Sánchez", correo: "lauras@gmail.com", telefono: "3128901234", ciudad: "Cartagena",
      fecha_registro: new Date("2024-04-10"), historial_compras: [5, 13], puntos: 110
    },
    {
      _id: 9, nombre: "Julián Castro", correo: "julian_c@gmail.com", telefono: "3179012345", ciudad: "Pereira",
      fecha_registro: new Date("2024-03-22"), historial_compras: [1, 2, 3], puntos: 140
    },
    {
      _id: 10, nombre: "Natalia Vargas", correo: "nataliav@hotmail.com", telefono: "3140123456", ciudad: "Bogotá",
      fecha_registro: new Date("2024-02-28"), historial_compras: [7, 10, 19], puntos: 160
    },
    {
      _id: 11, nombre: "Camilo Ruiz", correo: "camiloruiz@gmail.com", telefono: "3111234321", ciudad: "Manizales",
      fecha_registro: new Date("2024-01-15"), historial_compras: [6, 17], puntos: 100
    },
    {
      _id: 12, nombre: "Daniela López", correo: "dlopez@gmail.com", telefono: "3122343432", ciudad: "Cúcuta",
      fecha_registro: new Date("2024-03-05"), historial_compras: [4, 5, 6], puntos: 130
    },
    {
      _id: 13, nombre: "Felipe Gómez", correo: "felipeg@hotmail.com", telefono: "3133454543", ciudad: "Barranquilla",
      fecha_registro: new Date("2024-02-18"), historial_compras: [8, 9], puntos: 90
    },
    {
      _id: 14, nombre: "Andrea Silva", correo: "asilva@yahoo.com", telefono: "3154565654", ciudad: "Ibagué",
      fecha_registro: new Date("2024-04-15"), historial_compras: [1, 11], puntos: 115
    },
    {
      _id: 15, nombre: "Tomás Ríos", correo: "tomasr@gmail.com", telefono: "3105676765", ciudad: "Popayán",
      fecha_registro: new Date("2024-01-25"), historial_compras: [13, 14, 15], puntos: 185
    },
    {
      _id: 16, nombre: "Isabela Franco", correo: "ifranco@gmail.com", telefono: "3126787876", ciudad: "Armenia",
      fecha_registro: new Date("2024-03-18"), historial_compras: [], puntos: 0
    },
    {
      _id: 17, nombre: "Sebastián Moreno", correo: "sebamoreno@gmail.com", telefono: "3117898987", ciudad: "Neiva",
      fecha_registro: new Date("2024-03-30"), historial_compras: [16, 18, 19], puntos: 190
    },
    {
      _id: 18, nombre: "Valentina Quintero", correo: "valquintero@gmail.com", telefono: "3168909098", ciudad: "Santa Marta",
      fecha_registro: new Date("2024-02-22"), historial_compras: [2, 12], puntos: 105
    },
    {
      _id: 19, nombre: "Mateo Peña", correo: "mateop@hotmail.com", telefono: "3139010109", ciudad: "Tunja",
      fecha_registro: new Date("2024-01-12"), historial_compras: [20], puntos: 50
    },
    {
      _id: 20, nombre: "Lucía Vargas", correo: "lucia.v@gmail.com", telefono: "3170121210", ciudad: "Villavicencio",
      fecha_registro: new Date("2024-04-05"), historial_compras: [3, 5, 6, 9], puntos: 170
    }
]);

//Insertar documetos en la coleccion Ordenes
db.ordenes_compra.insertMany([
    {
      _id: 1,
      usuario_id: 17,
      fecha: "2024-04-17",
      items: [
        { producto_id: 23, cantidad: 2, precio_unitario: 40540 }
      ],
      total: 81080
    },
    {
      _id: 2,
      usuario_id: 16,
      fecha: "2024-04-03",
      items: [
        { producto_id: 23, cantidad: 3, precio_unitario: 10955 },
        { producto_id: 20, cantidad: 1, precio_unitario: 45441 },
        { producto_id: 14, cantidad: 1, precio_unitario: 12937 }
      ],
      total: 91243
    },
    {
      _id: 3,
      usuario_id: 6,
      fecha: "2024-03-19",
      items: [
        { producto_id: 30, cantidad: 3, precio_unitario: 18539 },
        { producto_id: 18, cantidad: 2, precio_unitario: 25149 },
        { producto_id: 17, cantidad: 3, precio_unitario: 30916 }
      ],
      total: 198663
    },
    {
      _id: 4,
      usuario_id: 3,
      fecha: "2024-04-18",
      items: [
        { producto_id: 7, cantidad: 3, precio_unitario: 45626 },
        { producto_id: 27, cantidad: 2, precio_unitario: 29796 }
      ],
      total: 196270
    },
    {
      _id: 5,
      usuario_id: 20,
      fecha: "2024-02-01",
      items: [
        { producto_id: 22, cantidad: 2, precio_unitario: 10990 },
        { producto_id: 30, cantidad: 3, precio_unitario: 26315 }
      ],
      total: 100925
    },
    {
      _id: 6,
      usuario_id: 11,
      fecha: "2024-04-19",
      items: [
        { producto_id: 7, cantidad: 3, precio_unitario: 40235 },
        { producto_id: 9, cantidad: 3, precio_unitario: 41674 },
        { producto_id: 28, cantidad: 3, precio_unitario: 10984 }
      ],
      total: 278743
    },
    {
      _id: 7,
      usuario_id: 3,
      fecha: "2024-04-13",
      items: [
        { producto_id: 7, cantidad: 3, precio_unitario: 34691 },
        { producto_id: 15, cantidad: 2, precio_unitario: 22373 }
      ],
      total: 168519
    },
    {
      _id: 8,
      usuario_id: 15,
      fecha: "2024-03-28",
      items: [
        { producto_id: 25, cantidad: 1, precio_unitario: 17873 },
        { producto_id: 12, cantidad: 1, precio_unitario: 47463 },
        { producto_id: 6, cantidad: 2, precio_unitario: 12063 }
      ],
      total: 89462
    },
    {
      _id: 9,
      usuario_id: 19,
      fecha: "2024-03-24",
      items: [
        { producto_id: 9, cantidad: 2, precio_unitario: 38141 },
        { producto_id: 30, cantidad: 2, precio_unitario: 30398 }
      ],
      total: 137078
    },
    {
      _id: 10,
      usuario_id: 4,
      fecha: "2024-03-26",
      items: [
        { producto_id: 13, cantidad: 2, precio_unitario: 17330 }
      ],
      total: 34660
    },
    {
    _id: 11,
    usuario_id: 1,
    fecha: "2024-04-14",
    items: [
      { producto_id: 21, cantidad: 3, precio_unitario: 48279 }
    ],
    total: 144837
  },
  {
    _id: 12,
    usuario_id: 1,
    fecha: "2024-03-14",
    items: [
      { producto_id: 30, cantidad: 1, precio_unitario: 35197 }
    ],
    total: 35197
  },
  {
    _id: 13,
    usuario_id: 10,
    fecha: "2024-04-08",
    items: [
      { producto_id: 18, cantidad: 3, precio_unitario: 29552 }
    ],
    total: 88656
  },
  {
    _id: 14,
    usuario_id: 17,
    fecha: "2024-02-29",
    items: [
      { producto_id: 3, cantidad: 3, precio_unitario: 27915 }
    ],
    total: 83745
  },
  {
    _id: 15,
    usuario_id: 2,
    fecha: "2024-02-24",
    items: [
      { producto_id: 21, cantidad: 3, precio_unitario: 49185 }
    ],
    total: 147555
  },
  {
    _id: 16,
    usuario_id: 17,
    fecha: "2024-02-17",
    items: [
      { producto_id: 7, cantidad: 3, precio_unitario: 19540 }
    ],
    total: 58620
  },
  {
    _id: 17,
    usuario_id: 9,
    fecha: "2024-04-08",
    items: [
      { producto_id: 4, cantidad: 1, precio_unitario: 24404 },
      { producto_id: 6, cantidad: 3, precio_unitario: 41018 }
    ],
    total: 147458
  },
  {
    _id: 18,
    usuario_id: 1,
    fecha: "2024-03-23",
    items: [
      { producto_id: 16, cantidad: 1, precio_unitario: 31787 }
    ],
    total: 31787
  },
  {
    _id: 19,
    usuario_id: 6,
    fecha: "2024-04-01",
    items: [
      { producto_id: 4, cantidad: 2, precio_unitario: 46458 }
    ],
    total: 92916
  },
  {
    _id: 20,
    usuario_id: 7,
    fecha: "2024-02-04",
    items: [
      { producto_id: 10, cantidad: 2, precio_unitario: 47082 }
    ],
    total: 94164
  },
  {
    _id: 11,
    usuario_id: 1,
    fecha: "2024-04-14",
    items: [
      { producto_id: 21, cantidad: 3, precio_unitario: 48279 }
    ],
    total: 144837
  },
  {
    _id: 12,
    usuario_id: 1,
    fecha: "2024-03-14",
    items: [
      { producto_id: 30, cantidad: 1, precio_unitario: 35197 }
    ],
    total: 35197
  },
  {
    _id: 13,
    usuario_id: 10,
    fecha: "2024-04-08",
    items: [
      { producto_id: 18, cantidad: 3, precio_unitario: 29552 }
    ],
    total: 88656
  },
  {
    _id: 14,
    usuario_id: 17,
    fecha: "2024-02-29",
    items: [
      { producto_id: 3, cantidad: 3, precio_unitario: 27915 }
    ],
    total: 83745
  },
  {
    _id: 15,
    usuario_id: 2,
    fecha: "2024-02-24",
    items: [
      { producto_id: 21, cantidad: 3, precio_unitario: 49185 }
    ],
    total: 147555
  },
  {
    _id: 16,
    usuario_id: 17,
    fecha: "2024-02-17",
    items: [
      { producto_id: 7, cantidad: 3, precio_unitario: 19540 }
    ],
    total: 58620
  },
  {
    _id: 17,
    usuario_id: 9,
    fecha: "2024-04-08",
    items: [
      { producto_id: 4, cantidad: 1, precio_unitario: 24404 },
      { producto_id: 6, cantidad: 3, precio_unitario: 41018 }
    ],
    total: 147458
  },
  {
    _id: 18,
    usuario_id: 1,
    fecha: "2024-03-23",
    items: [
      { producto_id: 16, cantidad: 1, precio_unitario: 31787 }
    ],
    total: 31787
  },
  {
    _id: 19,
    usuario_id: 6,
    fecha: "2024-04-01",
    items: [
      { producto_id: 4, cantidad: 2, precio_unitario: 46458 }
    ],
    total: 92916
  },
  {
    _id: 20,
    usuario_id: 7,
    fecha: "2024-02-04",
    items: [
      { producto_id: 10, cantidad: 2, precio_unitario: 47082 }
    ],
    total: 94164
  },
  {
    _id: 21,
    usuario_id: 18,
    fecha: "2024-04-10",
    items: [
      { producto_id: 9, cantidad: 1, precio_unitario: 31894 },
      { producto_id: 14, cantidad: 2, precio_unitario: 26731 }
    ],
    total: 85356
  },
  {
    _id: 22,
    usuario_id: 13,
    fecha: "2024-03-15",
    items: [
      { producto_id: 8, cantidad: 2, precio_unitario: 21512 },
      { producto_id: 11, cantidad: 1, precio_unitario: 34499 }
    ],
    total: 77523
  },
  {
    _id: 23,
    usuario_id: 5,
    fecha: "2024-03-25",
    items: [
      { producto_id: 15, cantidad: 1, precio_unitario: 41713 }
    ],
    total: 41713
  },
  {
    _id: 24,
    usuario_id: 3,
    fecha: "2024-02-20",
    items: [
      { producto_id: 12, cantidad: 2, precio_unitario: 36041 },
      { producto_id: 19, cantidad: 1, precio_unitario: 31840 }
    ],
    total: 103922
  },
  {
    _id: 25,
    usuario_id: 11,
    fecha: "2024-04-11",
    items: [
      { producto_id: 27, cantidad: 1, precio_unitario: 22106 },
      { producto_id: 29, cantidad: 3, precio_unitario: 31513 }
    ],
    total: 116645
  },
  {
    _id: 26,
    usuario_id: 12,
    fecha: "2024-03-28",
    items: [
      { producto_id: 1, cantidad: 1, precio_unitario: 23498 },
      { producto_id: 2, cantidad: 1, precio_unitario: 28793 },
      { producto_id: 3, cantidad: 2, precio_unitario: 27915 }
    ],
    total: 108121
  },
  {
    _id: 27,
    usuario_id: 19,
    fecha: "2024-04-02",
    items: [
      { producto_id: 6, cantidad: 3, precio_unitario: 41018 }
    ],
    total: 123054
  },
  {
    _id: 28,
    usuario_id: 8,
    fecha: "2024-02-10",
    items: [
      { producto_id: 13, cantidad: 2, precio_unitario: 37427 }
    ],
    total: 74854
  },
  {
    _id: 29,
    usuario_id: 15,
    fecha: "2024-03-08",
    items: [
      { producto_id: 20, cantidad: 1, precio_unitario: 49824 },
      { producto_id: 17, cantidad: 1, precio_unitario: 33381 }
    ],
    total: 83205
  },
  {
    _id: 30,
    usuario_id: 4,
    fecha: "2024-02-16",
    items: [
      { producto_id: 23, cantidad: 1, precio_unitario: 36918 },
      { producto_id: 25, cantidad: 2, precio_unitario: 24867 }
    ],
    total: 86652
  },
  {
    _id: 31,
    usuario_id: 10,
    fecha: "2024-04-03",
    items: [
      { producto_id: 7, cantidad: 2, precio_unitario: 42176 }
    ],
    total: 84352
  },
  {
    _id: 32,
    usuario_id: 1,
    fecha: "2024-03-14",
    items: [
      { producto_id: 5, cantidad: 1, precio_unitario: 39514 },
      { producto_id: 6, cantidad: 1, precio_unitario: 41018 }
    ],
    total: 80532
  },
  {
    _id: 33,
    usuario_id: 17,
    fecha: "2024-03-05",
    items: [
      { producto_id: 8, cantidad: 2, precio_unitario: 21512 }
    ],
    total: 43024
  },
  {
    _id: 34,
    usuario_id: 7,
    fecha: "2024-04-13",
    items: [
      { producto_id: 2, cantidad: 1, precio_unitario: 28793 },
      { producto_id: 4, cantidad: 2, precio_unitario: 29682 }
    ],
    total: 88157
  },
  {
    _id: 35,
    usuario_id: 20,
    fecha: "2024-02-28",
    items: [
      { producto_id: 9, cantidad: 1, precio_unitario: 31894 },
      { producto_id: 12, cantidad: 1, precio_unitario: 36041 }
    ],
    total: 67935
  },
  {
    _id: 36,
    usuario_id: 6,
    fecha: "2024-04-04",
    items: [
      { producto_id: 16, cantidad: 2, precio_unitario: 23044 }
    ],
    total: 46088
  },
  {
    _id: 37,
    usuario_id: 2,
    fecha: "2024-03-19",
    items: [
      { producto_id: 18, cantidad: 1, precio_unitario: 27842 },
      { producto_id: 27, cantidad: 2, precio_unitario: 22106 }
    ],
    total: 72054
  },
  {
    _id: 38,
    usuario_id: 14,
    fecha: "2024-02-22",
    items: [
      { producto_id: 30, cantidad: 3, precio_unitario: 34987 }
    ],
    total: 104961
  },
  {
    _id: 39,
    usuario_id: 9,
    fecha: "2024-03-26",
    items: [
      { producto_id: 13, cantidad: 1, precio_unitario: 37427 },
      { producto_id: 14, cantidad: 2, precio_unitario: 26731 },
      { producto_id: 15, cantidad: 1, precio_unitario: 41713 }
    ],
    total: 132602
  },
  {
    _id: 40,
    usuario_id: 16,
    fecha: "2024-04-09",
    items: [
      { producto_id: 21, cantidad: 1, precio_unitario: 25091 },
      { producto_id: 24, cantidad: 2, precio_unitario: 29825 }
    ],
    total: 84741
  }
]);


/* ====================================================================================== */
/* ================================ Consultas de selección ============================== */
/* ====================================================================================== */

// Seleccionar todas las ordenes de compra de un usuario
db.ordenes_compra.find({ usuario_id: 1 });

// Mostrar todos los productos de una categoria especifica
db.productos.find({ categoria_id: 2 })


/* ====================================================================================== */
/* ============================== Consultas de actualización ============================ */
/* ====================================================================================== */

// Actualiza el nombre del usuario con id:3
db.usuarios.updateOne(
    { _id: 3 }, //Búsqueda del registro que cumpla el criterio
    { $set: { nombre: "Carlos Ramírez" } } //$set da el nuevo valor al campo
);
 // Actualiza todas las órdenes de compra para ponerles el campo estado
db.ordenes_compra.updateMany(
    {}, //Selecciona todos los registro
    { $set: { estado: "pendiente" } }
);


/* ====================================================================================== */
/* ============================== Consultas de actualización ============================ */
/* ====================================================================================== */

// Eliminar la orden de compra número 32
db.ordenes_compra.deleteOne({ _id: 32 });


/* ====================================================================================== */
/* ======================== Consultas con filtros y operadores ========================== */
/* ====================================================================================== */

// Muestra todos los documentos de la colección ‘ordenes_compra’, 
// donde está incluido el producto con el id: 6 y se compraron 2
db.ordenes_compra.find({
    items: {
        $elemMatch: {
            producto_id: 6,
            cantidad: 2
        }
    }
});

// Uso del operador $and, $lt y $gt
db.ordenes_compra.updateMany(
    {
        $and: [ // Obliga a que el registro cumpla las dos condiciones
            { total: { $lt: 20000 } }, //Filtra valores menores
            { fecha: { $gt: "2024-04-15" } } // Filtra valores mayores
        ]
    },
    { $set: { estado: "cancelado" } } // Cambia el estado
);
  

// uso del operador $or y /expresiones/
db.usuarios.find({
    $or: [ // Si una de las dos se cumple trae el documento
      { correo: /yahoo/ }, //En correo debe tener yahoo
      { telefono: /313/ } //El telefono debe tener el numero 313
    ]
  });


/* ====================================================================================== */
/* ============================= Consultas de agregación ================================ */
/* ====================================================================================== */

// Suma la cantidad de unidades vendidas por producto
db.ordenes_compra.aggregate([
    { $unwind: "$items" }, // Me permite navegar dentro del arreglo 
    {
        $group: {
            _id: "$items.producto_id",
            unidades_vendidas: { $sum: "$items.cantidad" }
        }
    },
    { $sort: { unidades_vendidas: -1 } } // Ordena de mayor a menor
]);

// Calcula el maximo y minimo valor total de las ordenes y 
// muestra las desviaciones
db.ordenes_compra.aggregate([
    {
        $group: {
             _id: null,
            total_minimo: { $min: "$total" }, // El pedido más barato
            total_maximo: { $max: "$total" }, // El pedido más caro
            promedio_total: { $avg: "$total" }, // Promedio valor pedido
            desviacion_poblacional: { $stdDevPop: "$total" }, 
            desviacion_muestral: { $stdDevSamp: "$total" } // Desviaciones
        }
    }
]);

// Realiza conteo según condición del precio total
db.ordenes_compra.aggregate([
    {
        $match: { total: { $gt: 150000 } }//Condición que debe cumplir el documento
    },
    {
        $count: "ordenes_con_monto_alto" //Muestar el valor del conteo
    }
]);
  
  
  