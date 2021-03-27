const arrayCarrito = []
const arrayJson = []

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
            //console.log("entro "+obj.nombre)
            for(let i = 0;i<obj.presentacion.length;i++){
              if(obj.presentacion[i].tamanio == prod.value){
                  $("#exampleModal").slideToggle(1200,function(){
                    agregar(el.currentTarget.value,res.productosJson,prod.value,obj.presentacion[i].codigo,obj.presentacion[i].stock,obj.presentacion[i].precio)
                  })
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
    //scrollTopButton (".scroll-top-btn")
    
    

//https://es.stackoverflow.com/questions/365787/agregar-resultado-a-lista-con-append -------------------------------------------------------
//https://es.stackoverflow.com/questions/313093/datatable-en-sweetalert2
    //mostrarCarrito("#carrito-toggle")
    $("#carrito-toggle").click(function() {
      $("#exampleModal").slideToggle(1500,function(){
      })
      })
      //$("#exampleModal").slideToggle(2000)
      // const pr = "Soy Variable"
      // Swal.fire({
      //   position: 'top-end',
      //   title: 'Su Carrito',
      //   width: 500, //box-sizing: border-box
      //   showConfirmButton: true,
      //   showDenyButton: true,
      //   denyButtonText: `Eliminar`,
      //   keydownListenerCapture: true,
      //   text:`${imprimirElArray()}`,
      //   text: `Su saldo es ${total()}`,
      //   iconHtml:`<div id= "swal"></div>`,
      // },
      // function(){
      //   //Swal.getInput(imprimirElArray())
      // }
      // ).then((result) => {
      //   /* Read more about isConfirmed, isDenied below */
      //   if (result.isConfirmed) {
      //     //tengo q mandarlo a mercadopago
      //   } else if (result.isDenied) {
      //     Swal.fire('Carrito Vacio')
      //     arrayCarrito = []
      //   }
      // })
   
$("#swal").click(function(){
  imprimirElArray()
})

   //Swal.getInput (imprimirElArray())
$('#eliminar').click(eliminarCarrito)


// $("#carrito-toggle").click(function() {// todo: mirar en la docu swal como agrego un nodo
//     //$("#exampleModal").slideToggle(2000)
//     Swal.fire({
//       position: 'top-end',
//       title: 'Su Carrito',
//       showConfirmButton: true,
//       showDenyButton: true,
//       denyButtonText: `Eliminar`,
//       keydownListenerCapture: true,
//       text: `Su saldo es ${total()}`
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         //tengo q mandarlo a mercadopago
//       } else if (result.isDenied) {
//         Swal.fire('Carrito Vacio')
//         arrayCarrito = []
//       }
//     })
//  })
 function imprimirElArray(){
   arrayCarrito.forEach(function(i) {
    return `${i.cantidad} ${i.nombre} $ ${i.precio*i.cantidad}`
    // i.insertAdjacentHTML(
    //   "afterend",
    //   `${i.cantidad} ${i.nombre} $ ${i.precio*i.cantidad}`
    // );
  });
  // arrayCarrito.forEach(i=> console.log(i.cantidad + " "+ i.nombre + " $"+ i.precio*i.cantidad))
 }

$("#comprar").click(function() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compra realizada con Exito!',
      showConfirmButton: false,
      timer: 2000,
      keydownListenerCapture: true
    })
    arrayCarrito=[]
    // $.ajax({
    //   url: ""
    //   type: "GET",
    //   dataType: "json"
    // })
 })
 $("#eliminar").click(function() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Carrito vacio',
    showConfirmButton: false,
    timer: 2000,
    keydownListenerCapture: true
  })
  arrayCarrito = []
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
// - Agregar  nodo https://sweetalert2.github.io/
// - Base de Datos de Clientes, Login
// - Agregar metodos de pago
// ver Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5
//https://www.youtube.com/watch?v=dHqK4Rc6Bbk&t=4745s  25.08 (funcion Expresada)
//https://www.youtube.com/watch?v=07rCZkwMkB0