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

function Cliente (nombre,apellido,mail,contrasenia){ //todo
  this.nombre = nombre
  this.apellido = apellido
  this.mail= mail
  this.contrasenia = contrasenia
}