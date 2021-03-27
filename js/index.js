let arrayCarrito = []
const arrayJson = []
if(localStorage.getItem('elCarrito')!== null){
  arrayCarrito = JSON.parse(localStorage.getItem('elCarrito'))
   // no supe mostrarlo en el btn del carrito
}

$(document).ready(function(){ 
  $.ajax({
    url: "./js/productos.json", 
    type: "GET",
    dataType: "json"
  })
  .done(function(res){
      printHtml(res)
      $('.productoAlCarrito').click (function(el){
        //el.preventDefault();
        const prod = d.getElementById(el.currentTarget.value)
        res.productosJson.forEach((obj)=>{
          if(obj.nombre == el.currentTarget.value){
            for(let i = 0;i<obj.presentacion.length;i++){
              if(obj.presentacion[i].tamanio == prod.value){
                    agregar(el.currentTarget.value,res.productosJson,prod.value,obj.presentacion[i].codigo,obj.presentacion[i].stock,obj.presentacion[i].precio)
              }
            }
          }
        })
      })
        res.productosJson.forEach((obj)=>{
          $(`#notas${obj.nombre}`).click(function(){
            $(`#mostrarNotas${obj.nombre}`).slideToggle(1500, function(){
            })
          })
        })
    })
    .fail(function (xhr, status, error){
      console.log(xhr), console.log(status), console.log(error), console.log(productosJson[0])
   })
})
$('.dark-mode-btn').click(function(e){
  darkMode(e,".dark-mode-btn", "dark-mode")
})
$("#carrito-toggle").click(function() {
    $("#exampleModal").slideToggle(1500,function(){
})
})
$("#comprar").click(function() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada con Exito!',
      showConfirmButton: false,
      timer: 2000,
      keydownListenerCapture: true
    })
    arrayCarrito.length = 0
    $('.agregarAlCarrito').text("No hay Productos seleccionados")
 })
 $("#eliminar").click(function() {
  eliminarCarrito()
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Carrito vacio',
    showConfirmButton: false,
    timer: 2000,
    keydownListenerCapture: true
  })
  arrayCarrito.length = 0
    $('.agregarAlCarrito').text("Seleccione sus Productos")
  })

  window.onscroll = function () { myFunction() };

  // Get the header
  var header = document.getElementById("myHeader");// devuelve una coleccion HTML

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

//--------- Lista de Tareas -----
// - Base de Datos de Clientes, Login
// - Agregar metodos de pago
// ver Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5
//https://www.youtube.com/watch?v=dHqK4Rc6Bbk&t=4745s  25.08 (funcion Expresada)
//https://www.youtube.com/watch?v=07rCZkwMkB0