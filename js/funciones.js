const d = document
function printHtml(Json){
  
  const cards = d.querySelector(".cards"),
        fragmento = d.createDocumentFragment(), //todo
        mujer = d.createTextNode("Mujer"),
        divTitulo = d.createElement("div"),
        h3DivTitulo = d.createElement("h3"),
        divPerfumes1 = d.createElement("div")
        
        //todo Select...https://stackoverflow.com/questions/16676679/javascript-html-object-htmlselectelement/16676714
        //https://stackoverflow.com/questions/11418384/how-to-get-current-htmlselectelements-id
        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions
        Json.productosJson.forEach((e)=>{
          const divPerfumes2 = d.createElement("div"), 
                selectTamanioPerfu = d.createElement("select"),
                img = d.createElement("img"),
                p = d.createElement("p"),
                p2 = d.createElement("p"),
                pMarcaPerfu = d.createTextNode(e.marca),
                pNombrePerfu = d.createTextNode(e.nombre)

          //de p al div2 (div Hijo)
          p.appendChild(pMarcaPerfu)
          p2.appendChild(pNombrePerfu)
          img.setAttribute("src",e.foto)
          img.setAttribute("alt",e.nombre)
          divPerfumes2.className ="col-12 col-md-3 col-lg-3 col-xl-3 card"
          divPerfumes2.appendChild(img)
          divPerfumes2.appendChild(p)
          divPerfumes2.appendChild(p2)
          divPerfumes1.classList.add("row")
          divPerfumes1.appendChild(divPerfumes2)
          
          //Selects
          selectTamanioPerfu.setAttribute("id", e.nombre)
          for(let k=0;k<e.presentacion.length;k++){
            const optionDeSelect = d.createElement("option")
            optionDeSelect.setAttribute("value",e.presentacion[k].tamanio)
            optionDeSelect.innerHTML =`${e.presentacion[k].tamanio}ml ---> $ ${e.presentacion[k].precio}`
            selectTamanioPerfu.appendChild(optionDeSelect)
          }
          divPerfumes2.appendChild(selectTamanioPerfu)
        //Btn Agregar
        const btnAgregar = d.createElement("button"),
              pBtn = d.createElement("p"),
              btnTexto = d.createTextNode("Agregar")
        btnAgregar.setAttribute("id",e.nombre)
        btnAgregar.setAttribute("value",e.nombre)
        btnAgregar.setAttribute("data-toggle","modal")
        btnAgregar.setAttribute("data-target","#exampleModal")
        btnAgregar.className = "productoAlCarrito hoverButton"
        btnAgregar.appendChild(btnTexto)
        pBtn.appendChild(btnAgregar)
        divPerfumes2.appendChild(pBtn)
        //Notas 
        const notas = d.createElement("p"),
              notaTexto = d.createTextNode(e.descripcion),
              pLabel = d.createElement("p"),
              label = d.createElement("label"),
              labNotas = d.createTextNode("Notas")
        notas.setAttribute("id","mostrarNotas"+ e.nombre)
        notas.setAttribute("style","display: none;")
        notas.appendChild(notaTexto)
        divPerfumes2.appendChild(notas)
        label.setAttribute("id","notas"+ e.nombre)
        label.setAttribute("class","close")
        label.setAttribute("data-dismiss","modal")
        label.setAttribute("data-toggle","modal")
        label.appendChild(labNotas)
        pLabel.appendChild(label)
        divPerfumes2.appendChild(pLabel)
        })
                     
        //div1 a divTitulo
        divTitulo.classList.add("row")
        h3DivTitulo.appendChild(mujer)
        divTitulo.appendChild(h3DivTitulo)
        divTitulo.setAttribute("id","fondoDegradeGris")
        cards.appendChild(divTitulo)
        cards.appendChild(divPerfumes1)
        cards.setAttribute("class", "container")
      
}


function agregar(nombre, productosJson, tamanio, codigo,stock,precio) {
  
  if(!existeEnCarrito(codigo,tamanio)){
    let productoItem = new Item(nombre,1,tamanio,productosJson,codigo,stock, precio)
    //console.log(productoItem)
    arrayCarrito.push(productoItem)
  }
  $('.agregarAlCarrito').text("")
  for(let k =0 ; k<arrayCarrito.length; k++){
    //console.log(arrayCarrito[k].codigo + " "+arrayCarrito[k].tamanio + " k:"+ k)
    let id = arrayCarrito[k].codigo + arrayCarrito[k].tamanio
    
    $(".agregarAlCarrito").append('<p style = "color:green;" id = ' + id + '></p>') 
    //console.log(arrayCarrito[k].precio)
    $("#" + id).text(arrayCarrito[k].cantidad + "  "+ arrayCarrito[k].nombre+"  "+ " x "+ arrayCarrito[k].tamanio+"ml "+" $"+ arrayCarrito[k].precio*arrayCarrito[k].cantidad)
  }
  localStorage.setItem('elCarrito', JSON.stringify(arrayCarrito))// quiero hacer una f(x) que recupere el carrito si se cerro el navegador/ para recuperarlo tengo que hacer JSON.parse(arrayCarrito)
}
function existeEnCarrito(productoCodigo, tamanio){
  //const existe = true
  if(arrayCarrito.length === 0){
    return existe = false
  }else{
    for(let i = 0; i<arrayCarrito.length;i++){
      //console.log("entro"+ "i:"+ i + " "+ arrayCarrito[i].tamanio + " el tamaño q mando :"+ tamanio + "codigo:"+arrayCarrito[i].codigo+"cod q entra:"+ productoCodigo)
      if((tamanio == arrayCarrito[i].tamanio) && (productoCodigo == arrayCarrito[i].codigo)){
        arrayCarrito[i].cantidad+=1
        existe = true
        return existe
      }else{
        existe = false
        return existe
      }
    }
  }
}

function total(){
  let total = 0
  for(let i = 0;i<arrayCarrito.length;i++){
    total+= arrayCarrito[i].precio
  }
  return total
}

function eliminarCarrito(){//no anda
  arrayCarrito = []
  console.log(arrayCarrito)
  let caja = $('#agregarAlCarrito');
    while (caja.firstChild){
          caja.removeChild(caja.firstChild);
      }
  localStorage.clear()
}
function darkMode(e, btn, classDark){
  const themeBtn = d.querySelector(btn),
      selectores = d.querySelectorAll("[data-dark]")
  let luna="🌙",
      sol="☀️"
  //d.addEventListener("click", (e)=>{
      if(e.target.matches(btn)){
          if(themeBtn.textContent === luna){
              selectores.forEach(el=> el.classList.add(classDark))
              themeBtn.textContent = sol
              localStorage.setItem('dark-mode', JSON.stringify(luna))
          }else{
              selectores.forEach(el=> el.classList.remove(classDark))
              themeBtn.textContent = luna
              localStorage.setItem('dark-mode', JSON.stringify(sol))
          }
      }
  //})

}

function mostrarCarrito(btn){
  const btnSelect = d.querySelector(btn)

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btnSelect.value)){
      Swal.fire({
        position: 'top-end',
        title: 'Su Carrito',
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: `Eliminar`,
        keydownListenerCapture: true,
        text: `Su saldo es ${total()}`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          //tengo q mandarlo a mercadopago
        } else if (result.isDenied) {
          Swal.fire('Carrito Vacio')
          arrayCarrito = []
        }
       })
    }
  })
}

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