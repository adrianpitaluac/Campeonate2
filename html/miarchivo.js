let boton = document.getElementById("boton");

boton.addEventListener("click", interactuar);

function interactuar (){
    let producto;


    while (producto !== "SALIR"){

        let mercancia = prompt("¿Como deseas pagar?\n\n¿Tarjeta de Credito/Debito?Escribe Tarjeta\n\n¿Cash? Escribe Cash")
        
        if((mercancia === "Tarjeta") || (mercancia ==="Tarjeta de Credito/Debito")){

            let operacion = prompt("Tarjeta de Credito o Debito?");
            
            let numeroTarjeta = parseInt(prompt("Ingresa los 16 digitos de la tarjeta"));
            
            let expiracionCredito = parseInt(prompt("Ingresa la fecha de expiracion (dd/aa)"));

            let digitosCredito = parseInt(prompt("Ingresa los tres digitos de tu tarjeta"));

            
            alert ("Los datos de tu tarjeta son los siguientes:\n\n" +
                    "Numero de tarjeta: "+ numeroTarjeta + "\n\n"+
                    "Fecha de expiracion: "+ expiracionCredito + "\n\n"+
                    "Digitos secretos: "+ digitosCredito + "\n\n"
                
            )
            
            alert("Felicidades, tu orden esta aprobada.\n\nEn breve recibiras tu pedido")
            break
        }
    
        
        
        else if( (mercancia == "Cash") || (mercancia == "cash")){
            
            alert("Este es tu numero de pedido: "  + Math.round(Math.random()*100000)
            +"\n" + "Tu pago se vera reflejado apenas pagues en establecimientos certificados");
            break;
        }

        else{
            alert("Error en la orden de pago seleccionada");
        }

        mercancia;
        break;

    }
        
    }

boton.onmouseover = () => {
    console.log("HOLA");
    boton.className = "boton2";
}

boton.onmouseout = () => {
    boton.className = "boton";
}

let lista = document.getElementById("productos")
let lista2 = document.getElementById("productos2")

//------------------------------------------------------------------------------------------------------------------------

let carrito=[];
mostrarProducto();

function mostrarProducto(){for (const calceta of calcetas){
    document.getElementById("productos").innerHTML+=`
                <tr>
            <th scope="row">
                <p> ${calceta.producto} </p>
            </th>

            <th>
                <p> ${calceta.marca} </p>
            </th>
                
            <th>
                <p>$${calceta.precio}</p>
            </th>
            
            <th>
                <img src=${calceta.img} width="150" height="150"    >
            </th>

            <th>
                <button id="boton${calceta.id}">Agregar al carrito</button>
            </th>
    
        </tr>
        `
            };
        

        calcetas.forEach(calceta => {
            document.getElementById(`boton${calceta.id}`).addEventListener('click',function(){
                agregarAlCarrito(calceta)
            })
        })
}

function agregarAlCarrito(calcetaNueva){
    carrito.push(calcetaNueva);
    console.log(carrito);
    alert("Has agregado " + calcetaNueva.producto + " al carrito.");
    document.getElementById("tablabodyy").innerHTML+=`
    <tr>
        <th>${calcetaNueva.producto}</td>
        <th>${calcetaNueva.marca}</td>
        <th>$${calcetaNueva.precio}</td>
    </tr>`;
    localStorage.setItem("carrito",JSON.stringify(carrito))
}


