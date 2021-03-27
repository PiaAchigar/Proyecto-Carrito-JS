function Item(nombre, cant, tamanio,Json,codigo,stock,precio){
  Json.forEach(el=> {
    if(el.nombre==nombre){
      this.marca = el.marca
      this.nombre=el.nombre
      this.tamanio=tamanio
      this.precio=precio
      this.codigo=parseInt(codigo)
      this.stock=stock 
      this.cantidad = cant
      this.precioTotal = parseInt(precio) * parseInt(this.cantidad)
      }
    })
    
  }
  
  
  
  
  //console.log(Json)
 // for(var clave in Json){
      // if (Json.hasOwnProperty(clave)){
      //   Json[clave].forEach(element => {
      //     //console.log("obj:"+ element.tamanio + tamanio )
      //     if(element.codigo==codigoProd && element.tamanio == tamanio){
      //               this.marca = element.marca
      //               this.nombre=element.nombre
      //               this.tamanio=element.tamanio
      //               this.precio=element.precio
      //               this.codigo=parseInt(element.codigo)
      //               this.stock=element.stock 
      //               this.cantidad = cant
      //               this.precioTotal = parseInt(element.precio) * parseInt(this.cantidad)
      //         }
      //   })
      //   }
  //}
 


// function CreateArrayJson(Json){
//   for(var clave in Json){
//     if (Json.hasOwnProperty(clave)){
//       const long = Json[clave].length
//       Json[clave].forEach(e => {
//           const p = new ObjProducto(e.marca,e.nombre,e.tamanio,e.precio,e.codigo,e.stock,e.foto,e.descripcion)
//           arrayJson.push(p)
//       })
//       }
// }
// }
    
// function ObjProducto(m,n,t,p,c,s,f,d){
//   this.marca=m
//   this.nombre=n
//   this.tamanio=t
//   this.precio=p
//   this.codigo=parseInt(c)
//   this.stock=s
//   this.foto=f
//   this.descripcion = d
// }

function Cliente (nombre,apellido,mail,contrasenia){
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}