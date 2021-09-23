
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
let tbCarrito = document.querySelector("#tbCarrito")
let btnVaciarCarrito = document.querySelector("#btnVaciarCarrito")

let totalNumero = 0;

//--------Logaritmo imprimir carrito
    for (let index = 0; index < listaCarrito.length; index++) {
        let trCarrito = document.createElement("tr");
        let thNumeroBebida = document.createElement("th");
        thNumeroBebida.textContent = index + 1;
        thNumeroBebida.setAttribute("scope", "row");
        let tdNombreBebida = document.createElement("td");
        tdNombreBebida.textContent = listaCarrito[index].nombreBebida;
        let tdPrecioBebida = document.createElement("td");
        tdPrecioBebida.textContent = listaCarrito[index].precio;
        let tdTotalBebida = document.createElement("td");
        tdTotalBebida.textContent = listaCarrito[index].precio;
        let tdBtnDelete = document.createElement("td")
        let btndelete = document.createElement("button");
        btndelete.setAttribute("class", "btn-close")
    
    
        tbCarrito.appendChild(trCarrito);
        trCarrito.appendChild(thNumeroBebida);
        trCarrito.appendChild(tdNombreBebida);
        trCarrito.appendChild(tdPrecioBebida);
        trCarrito.appendChild(tdTotalBebida);
        trCarrito.appendChild(tdBtnDelete);
        tdBtnDelete.appendChild(btndelete);
    
        //------Boton Eliminar un elemento del carrito
        btndelete.addEventListener("click",() =>{
            tbCarrito.removeChild(trCarrito)
            listaCarrito.splice(index,1)
            localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito))
            window.location.reload()
            thNumeroBebida.textContent = index + 1;
            })
    }


//-------Boton vaciar carrito 
btnVaciarCarrito.addEventListener("click", () => {
    localStorage.removeItem("listaCarrito");
    window.location.reload();
})

//------Mostrar total de la compra
for (let i = 0; i < listaCarrito.length; i++) {
    totalNumero = totalNumero + listaCarrito[i].precio;
}

//-----Logaritmo confirmar compra
if(listaCarrito != null){
    let main = document.querySelector("main")
    let seccionContinuarCompra = document.createElement("section")
    let divNumeroSeccion = document.createElement("div")
    divNumeroSeccion.setAttribute("class","seccionContinuarCompra")
    let divTotalSeccion = document.createElement("div")
    divTotalSeccion.setAttribute("id", "totalCarrito")
    let totalSeccion = document.createElement("p")
    totalSeccion.textContent = `Total`

    let divButtomSeccion = document.createElement("div")
    let buttomSeccion = document.createElement("button")
    buttomSeccion.setAttribute("class", "btn btn-dark")
    buttomSeccion.textContent = `Continuar Compra`

    main.appendChild(seccionContinuarCompra)
    seccionContinuarCompra.appendChild(divNumeroSeccion)
    divNumeroSeccion.appendChild(divTotalSeccion)
    divTotalSeccion.appendChild(totalSeccion)
    divNumeroSeccion.appendChild(divButtomSeccion)
    divButtomSeccion.appendChild(buttomSeccion)

    //----Agregar numero dinamicamente
    let totalCarrito = document.querySelector("#totalCarrito")
    let totalCarritoP = document.createElement("p");
    totalCarritoP.textContent = `$${totalNumero}`

    totalCarrito.appendChild(totalCarritoP);
}




