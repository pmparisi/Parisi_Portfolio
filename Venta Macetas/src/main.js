const categorias = document.querySelector(".CatalogoCategorias");

function crearMaceta(nombre,modelo,precio){
    img = `<img class='MacetaImg' src='https://img.freepik.com/foto-gratis/planta-nido-pajaros-maceta-beige_53876-134284.jpg?w=740&t=st=1678307227~exp=1678307827~hmac=dfb9cb9374e1eec722cbe578e279df6aa8630020ab1df1ed32a33812756b413d'>`;
    nombre = `<p class="MacetaTexto">${nombre}</p>`;
    modelo = `<p class="MacetaTexto">${modelo}</p>`;
    precio = `<p class="MacetaTexto Precio">${precio}</p>`;
    return [img,nombre,modelo,precio];
}

let fragmento = document.createDocumentFragment();

for(var i = 1;i <= 12; i++){
    const modelorandom = Math.round(Math.random()*100);
    const preciorandom = Math.round(Math.random()*10 + 100);
    const maceta =crearMaceta(`Maceta ${i}`,`Modelo M-${modelorandom}`,`$${preciorandom}`);
    const item = document.createElement("DIV");
    item.classList.add(`Muestras`); //Agrego una clase al ítem
    item.innerHTML = maceta[0] + maceta[1] + maceta[2] + maceta[3];
    fragmento.appendChild(item);
}

categorias.appendChild(fragmento);